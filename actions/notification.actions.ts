"use server";

import dbConnect from "@/lib/db";
import Notification from "@/model/Notification";

export const updateNotificationStatus = async (notiId: string) => {
  try {
    await dbConnect();

    const result = await Notification.updateOne(
      { _id: notiId },
      { $set: { read: true } }
    );

    if (result.matchedCount === 0) {
      throw new Error("Không tìm thấy thông báo để cập nhật");
    }

    return true;
  } catch (error) {
    console.error("Lỗi khi cập nhật thông báo:", error);

    // Kiểm tra nếu error là instance của Error, tránh truy xuất `.message` khi không cần thiết
    throw new Error(
      error instanceof Error
        ? error.message
        : "Lỗi không xác định khi cập nhật thông báo"
    );
  }
};

export const updateNotificationsStatus = async (notisId: string[]) => {
  try {
    await dbConnect();

    const result = await Notification.updateMany(
      { _id: { $in: notisId } },
      { $set: { read: true } }
    );

    // Kiểm tra xem có thông báo nào được cập nhật không
    if (result.matchedCount === 0) {
      throw new Error("Không tìm thấy thông báo để cập nhật");
    }

    return true;
  } catch (error) {
    console.error("Lỗi khi cập nhật thông báo:", error);

    // Kiểm tra nếu error là instance của Error, tránh truy xuất `.message` khi không cần thiết
    throw new Error(
      error instanceof Error
        ? error.message
        : "Lỗi không xác định khi cập nhật thông báo"
    );
  }
};
