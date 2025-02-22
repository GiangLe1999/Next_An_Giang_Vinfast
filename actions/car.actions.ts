"use server";

import { editCloudinaryImage } from "@/lib/cloudinary";
import dbConnect from "@/lib/db";
import Car from "@/model/Car";
import cloudinary from "cloudinary";

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

export const updateCar = async (data: any) => {
  try {
    if (!data?.id) {
      throw new Error("Thiếu ID xe để cập nhật.");
    }

    await dbConnect();

    const car = await Car.findById(data.id);
    if (!car) {
      throw new Error("Không tìm thấy xe.");
    }

    const { avatar, colors, ...updateData } = data;

    // Cập nhật avatar nếu có
    if (avatar) {
      const processedImage = await editCloudinaryImage(avatar, car.avatar);
      if (processedImage) {
        car.avatar = {
          public_id: processedImage.public_id,
          url: processedImage.secure_url,
        };
      }
    }

    // Cập nhật colors nếu có
    if (Array.isArray(colors) && colors.length > 0) {
      car.colors = await Promise.all(
        colors.map(async (colorItem, index) => {
          const existingColor = car.colors[index];

          if (existingColor) {
            const processedImage = await editCloudinaryImage(
              colorItem.colorImg,
              existingColor.colorImg
            );

            return {
              color: colorItem.color,
              colorImg: processedImage
                ? {
                    public_id: processedImage.public_id,
                    url: processedImage.secure_url,
                  }
                : existingColor.colorImg,
            };
          } else {
            const processedImage = await editCloudinaryImage(
              colorItem.colorImg
            );
            return {
              color: colorItem.color,
              colorImg: processedImage
                ? {
                    public_id: processedImage.public_id,
                    url: processedImage.secure_url,
                  }
                : null,
            };
          }
        })
      );
    }

    // Cập nhật các trường khác
    Object.assign(car, updateData);

    // Lưu xe đã cập nhật
    const updatedCar = await car.save();

    return JSON.parse(JSON.stringify(updatedCar));
  } catch (error) {
    console.error("Lỗi khi cập nhật xe:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Lỗi không xác định khi cập nhật xe"
    );
  }
};

export const deleteCar = async (id: string) => {
  try {
    if (!id) {
      throw new Error("Thiếu ID xe để xóa.");
    }

    await dbConnect();

    const car: any = await Car.findById(id).lean();

    if (!car) {
      throw new Error("Không tìm thấy xe.");
    }

    // Gom các thao tác xóa Cloudinary vào một mảng
    const deletePromises: Promise<any>[] = [];

    // Xóa ảnh avatar nếu có
    if (car.avatar?.public_id) {
      deletePromises.push(cloudinary.v2.uploader.destroy(car.avatar.public_id));
    }

    // Xóa ảnh màu sắc nếu có
    if (car.colors?.length) {
      car.colors.forEach((color: any) => {
        if (color.colorImg?.public_id) {
          deletePromises.push(
            cloudinary.v2.uploader.destroy(color.colorImg.public_id)
          );
        }
      });
    }

    // Chạy song song tất cả các yêu cầu xóa ảnh trên Cloudinary
    await Promise.all(deletePromises);

    // Xóa xe khỏi database
    await Car.findByIdAndDelete(id);

    return true;
  } catch (error) {
    console.error("Lỗi khi xóa xe:", error);
    throw new Error(
      error instanceof Error ? error.message : "Lỗi không xác định khi xóa xe"
    );
  }
};
