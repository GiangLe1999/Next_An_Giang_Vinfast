"use server";

import dbConnect from "@/lib/db";
import { formatDateForSendingMail } from "@/lib/formatData";
import Notification from "@/model/Notification";
import TestDrive from "@/model/TestDrive";
import pusherInstance from "@/utils/pusher.config";
import sendEmail from "@/utils/sendMail";

export const createTestDrive = async (data: any) => {
  try {
    // Kết nối database
    await dbConnect();

    // Kiểm tra dữ liệu đầu vào
    if (!data.name || !data.phone || !data.carName || !data.carLine) {
      throw new Error("Thiếu thông tin bắt buộc: Họ tên, SĐT hoặc Tên xe.");
    }

    // Tạo mới thông tin lái thử trong database
    await TestDrive.create(data);

    // Gửi thông báo và email song song để tối ưu thời gian xử lý
    await Promise.all([
      Notification.create({ ...data, service: "Lái thử" }),
      pusherInstance.trigger("admin-notifications", "new-customer", {}),
      sendEmail(
        process.env.SMTP_MAIL_TO as string,
        "KH VinFast mới đăng ký lái thử",
        `<h1>Khách hàng gửi form đăng ký lái thử tại website ${
          process.env.NEXT_PUBLIC_BASE_URL
        }:</h1>
        <ul>
          <li>Họ tên: <b>${data.name}</b></li>
          <li>SĐT: <b>${data.phone}</b></li>
          <li>Email: <b>${data.email}</b></li>
          <li>Tên xe: <b>${data.carName}</b></li>
          <li>Dòng xe: <b>${data.carLine}</b></li>
          <li>Nội dung: <b>${data.content}</b></li>
          <li>Về vấn đề: <b>Lái thử</b></li>
          <li>Thời gian gửi form: <b>${formatDateForSendingMail(
            Date.now() as any
          )}</b></li>
        </ul>`
      ),
    ]);

    return { success: true, message: "Đăng ký lái thử thành công!" };
  } catch (error: any) {
    console.error("Lỗi khi tạo thông tin đăng ký lái thử:", error);

    // Xử lý lỗi chi tiết
    if (error.name === "ValidationError") {
      throw new Error("Dữ liệu không hợp lệ, vui lòng kiểm tra lại thông tin.");
    }

    throw new Error("Đã xảy ra lỗi, vui lòng thử lại sau!");
  }
};

export const updateTestDriveStatus = async ({ id, newStatus }: any) => {
  try {
    await dbConnect();

    if (!newStatus || typeof newStatus !== "string") {
      return { success: false, message: "Trạng thái mới không hợp lệ" };
    }

    // Cập nhật và trả về dữ liệu mới
    const updatedConsult = await TestDrive.findByIdAndUpdate(
      id,
      { status: newStatus },
      { new: true } // Trả về dữ liệu đã cập nhật
    );

    // Kiểm tra nếu không tìm thấy tài liệu
    if (!updatedConsult) {
      return JSON.parse(
        JSON.stringify({
          success: false,
          message: "Không tìm thấy form đăng ký lái thử cần cập nhật",
        })
      );
    }

    return JSON.parse(
      JSON.stringify({
        success: true,
        message: "Cập nhật tình trạng form đăng ký lái thử thành công",
      })
    );
  } catch (error) {
    console.error("Lỗi khi cập nhật tình trạng form đăng ký lái thử:", error);
    return JSON.parse(
      JSON.stringify({
        success: false,
        message: error instanceof Error ? error.message : "Lỗi không xác định",
      })
    );
  }
};
