"use server";

import * as bcrypt from "bcrypt";

import dbConnect from "@/lib/db";
import User from "@/model/User";

export const registerNewAccount = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    const { email, password, name } = data;

    await dbConnect();
    const existedUser = await User.findOne({ email });

    if (existedUser) {
      throw new Error("Tài khoản đã tồn tại");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ name, email, password: hashedPassword });

    return true;
  } catch (error) {
    console.error("Lỗi khi đăng ký tài khoản:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Lỗi không xác định khi tạo tài khoản"
    );
  }
};
