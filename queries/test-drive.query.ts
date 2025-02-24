"use server";

import dbConnect from "@/lib/db";
import QuickConsult from "@/model/QuickConsult";

export const getAllTestDrives = async (data: any) => {
  try {
    await dbConnect();

    const {
      keyword,
      startDate,
      endDate,
      carNames,
      carLines,
      statuses,
      limit,
      currentPage,
    } = data;

    // Xử lý keyword tìm kiếm
    const findByKeyword = keyword
      ? [
          { name: { $regex: keyword, $options: "i" } },
          { email: { $regex: keyword, $options: "i" } },
          { phone: { $regex: keyword, $options: "i" } },
        ]
      : [];

    // Xử lý ngày tháng (tránh lỗi `setDate(getDate() + 1)`)
    const filters: any = {};
    if (startDate)
      filters.createdAt = { $gte: new Date(startDate).setHours(0, 0, 0, 0) };
    if (endDate) {
      filters.createdAt = {
        ...filters.createdAt,
        $lte: new Date(endDate).setHours(23, 59, 59, 999),
      };
    }

    // Xây dựng truy vấn MongoDB
    const queryObj = {
      ...(findByKeyword.length > 0 && { $or: findByKeyword }),
      ...filters,
      ...(carNames?.length && { carName: { $in: carNames } }),
      ...(carLines && { carLine: { $in: carLines } }),
      ...(statuses?.length && { status: { $in: statuses } }),
    };

    // Xử lý phân trang
    const page = Number(currentPage) > 0 ? Number(currentPage) : 1;
    const perPage = Number(limit) > 0 ? Number(limit) : 10; // Mặc định 10 kết quả mỗi trang

    // Thực hiện truy vấn
    const [quickConsults, totalDocuments] = await Promise.all([
      QuickConsult.find(queryObj)
        .sort({ createdAt: -1 })
        .skip(perPage * (page - 1))
        .limit(perPage)
        .lean(),
      QuickConsult.countDocuments(queryObj),
    ]);

    const totalPages = Math.ceil(totalDocuments / perPage);

    return JSON.parse(
      JSON.stringify({ data: quickConsults, totalDocuments, totalPages })
    );
  } catch (error) {
    console.error("Lỗi khi fetch danh sách danh sách lái thử:", error);
    return JSON.parse(
      JSON.stringify({ error: "Không thể lấy dữ liệu danh sách lái thử." })
    );
  }
};
