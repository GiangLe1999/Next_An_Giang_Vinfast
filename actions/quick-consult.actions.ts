"use server";

import dbConnect from "@/lib/db";
import { formatDateForSendingMail } from "@/lib/formatData";
import Notification from "@/model/Notification";
import QuickConsult from "@/model/QuickConsult";
import pusherInstance from "@/utils/pusher.config";
import sendEmail from "@/utils/sendMail";

export const createQuickConsult = async (data: any) => {
  try {
    await dbConnect();

    const { name, phone, choseCar } = data;

    // Kiểm tra dữ liệu đầu vào
    if (!name?.trim() || !phone?.trim() || !choseCar?.trim()) {
      throw new Error("Thiếu thông tin bắt buộc");
    }

    // Tạo dữ liệu cho QuickConsult & Notification
    const quickConsult = new QuickConsult({ name, phone, carName: choseCar });
    const notification = new Notification({
      name,
      phone,
      carName: choseCar,
      service: "Báo giá",
    });

    // Nội dung email
    const emailContent = `
      <h1>Khách hàng gửi form yêu cầu báo giá tại website ${
        process.env.NEXT_PUBLIC_BASE_URL
      }:</h1>
      <ul>
        <li>Họ tên: <b>${name}</b></li>
        <li>SĐT: <b>${phone}</b></li>
        <li>Tên xe: <b>${choseCar}</b></li>
        <li>Về vấn đề: <b>Báo giá</b></li>
        <li>Thời gian gửi form: <b>${formatDateForSendingMail(
          new Date() as any
        )}</b></li>
      </ul>
    `;

    // Chạy song song để tối ưu hiệu suất
    await Promise.all([
      quickConsult.save(),
      notification.save(),
      pusherInstance.trigger("admin-notifications", "new-customer", {}),
      sendEmail(
        process.env.SMTP_MAIL_TO as string,
        "KH Vinfast mới cần báo giá",
        emailContent
      ),
    ]);

    return { success: true, message: "Tạo yêu cầu báo giá thành công" };
  } catch (error) {
    console.error("Lỗi khi tạo yêu cầu báo giá:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Lỗi không xác định",
    };
  }
};
