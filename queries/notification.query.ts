"use server";

import dbConnect from "@/lib/db";
import Contact from "@/model/Contact";
import Notification from "@/model/Notification";

export const getRecentlyNotifications = async () => {
  try {
    await dbConnect();
    const notifications = await Notification.find()
      .sort({
        read: 1,
        createdAt: -1,
      })
      .limit(8)
      .populate({
        path: "detail",
        model: Contact,
        select: "-__v -status -updatedAt",
      })
      .lean();

    return JSON.parse(JSON.stringify(notifications));
  } catch (error) {
    console.error("Lỗi khi fetch thông báo:", error);

    // Kiểm tra nếu error là instance của Error, tránh truy xuất `.message` khi không cần thiết
    throw new Error(
      error instanceof Error
        ? error.message
        : "Lỗi không xác định khi fetch thông báo"
    );
  }
};
