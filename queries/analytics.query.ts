"use server";

import dbConnect from "@/lib/db";
import Article from "@/model/Article";
import QuickConsult from "@/model/QuickConsult";
import TestDrive from "@/model/TestDrive";
import { BetaAnalyticsDataClient } from "@google-analytics/data";

const serviceAccountKey: any = JSON.parse(
  Buffer.from(
    process.env.GOOGLE_SERVICE_ACCOUNT_KEY_BASE64 as string,
    "base64"
  ).toString()
);

export const getAnalyticsStatistics = async () => {
  try {
    await dbConnect();

    // Lấy tổng views của bài viết
    const articles = await Article.find().select("views").lean();
    const articleTotalViews = articles.reduce((acc, cur) => acc + cur.views, 0);

    // Lấy ngày hiện tại theo giờ VN
    const vnDate = new Date(
      new Date().toLocaleString("en-US", {
        timeZone: "Asia/Ho_Chi_Minh",
      })
    );

    // Tạo ngày bắt đầu và ngày kết thúc của hôm nay (UTC)
    const realStartDate = new Date(vnDate);
    realStartDate.setHours(0, 0, 0, 0);

    const realEndDate = new Date(vnDate);
    realEndDate.setHours(23, 59, 59, 999);

    // Đếm số lượng forms trong ngày (chạy song song với Google Analytics API)
    const formsCountPromise = Promise.all([
      QuickConsult.countDocuments({
        createdAt: { $gte: realStartDate, $lte: realEndDate },
      }),
      TestDrive.countDocuments({
        createdAt: { $gte: realStartDate, $lte: realEndDate },
      }),
    ]);

    // Google Analytics Data API
    const analyticsDataClient = new BetaAnalyticsDataClient({
      credentials: serviceAccountKey,
    });
    const propertyId = "479312545";

    // Lấy ngày hôm qua theo giờ VN
    const yesterday = new Date(vnDate);
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayDate = yesterday.toISOString().split("T")[0];

    // Gọi Google Analytics song song
    const analyticsReportsPromise = Promise.all([
      analyticsDataClient.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate: "2020-01-01", endDate: "today" }],
        metrics: [{ name: "screenPageViews" }],
      }),
      analyticsDataClient.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate: yesterdayDate, endDate: yesterdayDate }],
        metrics: [{ name: "screenPageViews" }],
      }),
    ]);

    // Chờ cả hai nhóm request hoàn thành
    const [
      [numsOfQuickConsults, numsOfTestDrives],
      [responseForTotalViews, responseForTotalViewsYesterday],
    ] = await Promise.all([formsCountPromise, analyticsReportsPromise]);

    // Tính toán kết quả
    const numsOfForms = numsOfQuickConsults + numsOfTestDrives;
    const totalViews =
      (responseForTotalViews as any)?.rows?.[0]?.metricValues?.[0]?.value || 0;
    const totalViewsYesterday = (
      responseForTotalViewsYesterday as any
    )?.rows?.reduce(
      (acc: number, row: any) => acc + Number(row.metricValues[0]?.value || 0),
      0
    );

    return JSON.parse(
      JSON.stringify({
        articleTotalViews,
        numsOfForms,
        totalViewsYesterday,
        totalViews,
      })
    );
  } catch (error) {
    console.error("Lỗi khi fetch statistics cho admin:", error);
    return { error: "Không thể lấy dữ liệu thống kê." };
  }
};
