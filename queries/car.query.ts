"use server";

import dbConnect from "@/lib/db";
import Car from "@/model/Car";

export const getCarBySlug = async (slug: string) => {
  if (!slug) {
    console.error("Slug không hợp lệ.");
  }

  try {
    await dbConnect();
    const car = await Car.findOne({ slug }).lean();

    if (!car) {
      console.error(`Không tìm thấy xe với slug: ${slug}`);
    }

    return JSON.parse(JSON.stringify(car));
  } catch (error) {
    console.error("Lỗi khi fetch xe theo slug:", error);
  }
};

export const getAllCarsForAdmin = async () => {
  try {
    await dbConnect();
    const cars: any[] = await Car.find().select("name priceFrom slug").lean();

    // Chuyển đổi _id thành chuỗi
    const serializedCars = cars.map((car) => ({
      ...car,
      _id: car._id.toString(),
    }));

    return serializedCars;
  } catch (error) {
    console.error("Lỗi khi fetch xe cho admin:", error);
  }
};

export const getAllCarsForHomepage = async () => {
  try {
    await dbConnect();
    const cars: any[] = await Car.find()
      .select("name priceFrom slug avatar")
      .lean();

    // Chuyển đổi _id thành chuỗi
    const serializedCars = cars.map((car) => ({
      ...car,
      _id: car._id.toString(),
    }));

    return serializedCars;
  } catch (error) {
    console.error("Lỗi khi fetch xe cho homepage:", error);
  }
};

export const getCarRegistrationData = async (carName: string) => {
  try {
    await dbConnect();

    const car = await Car.findOne({ name: carName })
      .select("registration")
      .lean();

    return car;
  } catch (error) {
    console.error("Lỗi khi fetch xe:", error);
  }
};

export const getAllCarLines = async () => {
  try {
    await dbConnect();

    const carsWithCarLines = await Car.find().select("name carLines").lean();

    return JSON.parse(JSON.stringify(carsWithCarLines));
  } catch (error) {
    console.error("Lỗi khi fetch toàn bộ dòng xe:", error);
  }
};

export const getAllCarsNameVsSlug = async () => {
  try {
    await dbConnect();
    const carsWithNameAndSlug = await Car.find().select("name slug").lean();

    return JSON.parse(JSON.stringify(carsWithNameAndSlug));
  } catch (error) {
    console.error("Lỗi khi fetch toàn bộ xe gồm tên và slug:", error);
  }
};
