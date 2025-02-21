"use server";

import { editCloudinaryImage } from "@/lib/cloudinary";
import dbConnect from "@/lib/db";
import Car from "@/model/Car";

export const createCar = async (data: any) => {
  try {
    await dbConnect();

    const { avatar, colors } = data;

    const savedAvatar = avatar
      ? await editCloudinaryImage(avatar).then((img) => ({
          public_id: img?.public_id || "",
          url: img?.secure_url || "",
        }))
      : { public_id: "", url: "" };

    // Xử lý ảnh trong colors (dùng Promise.all để chạy song song)
    const processedColors = colors
      ? await Promise.all(
          colors.map(async (color: any) => {
            if (!color.colorImg) return color;
            const processedImage = await editCloudinaryImage(color.colorImg);
            return {
              ...color,
              colorImg: processedImage
                ? {
                    public_id: processedImage.public_id,
                    url: processedImage.secure_url,
                  }
                : color.colorImg, // Giữ nguyên nếu có lỗi
            };
          })
        )
      : [];

    await Car.create({
      ...data,
      avatar: savedAvatar,
      colors: processedColors,
    });

    return true;
  } catch (error) {
    console.error("Lỗi khi tạo xe:", error);

    throw new Error(
      error instanceof Error ? error.message : "Lỗi không xác định khi tạo xe"
    );
  }
};
