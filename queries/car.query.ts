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
    return JSON.parse(JSON.stringify(cars));
  } catch (error) {
    console.error("Lỗi khi fetch xe cho admin:", error);
  }
};

export const getAllCarsForHomepage = async () => {
  try {
    await dbConnect();
    const cars: any[] = await Car.find()
      .select("name priceFrom installmentPrice slug avatar")
      .lean();

    return JSON.parse(JSON.stringify(cars));
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

    return JSON.parse(JSON.stringify(car));
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

export const getAllCarsName = async () => {
  try {
    await dbConnect();
    const carsWithName = await Car.find().select("name").lean();

    return JSON.parse(JSON.stringify(carsWithName));
  } catch (error) {
    console.error("Lỗi khi fetch toàn bộ xe gồm tên:", error);
  }
};

export const getAllCarsForSitemap = async () => {
  try {
    await dbConnect();
    const carsWithNameAndUpdatedAt = await Car.find()
      .select("name updatedAt")
      .lean();

    return JSON.parse(JSON.stringify(carsWithNameAndUpdatedAt));
  } catch (error) {
    console.error("Lỗi khi fetch toàn bộ xe cho sitemap:", error);
  }
};

export const getFilteredCars = async (query: any) => {
  try {
    await dbConnect();
    const { line, price } = query;

    const carQuery: any = {};

    if (line?.length) {
      carQuery.name = line;
    }

    if (price?.length) {
      const priceRanges: any = {
        "Dưới 500 triệu": { priceFrom: { $lte: 500000000 } },
        "500 triệu - 700 triệu": {
          priceFrom: { $gte: 500000000, $lte: 700000000 },
        },
        "700 triệu - 1 tỷ": {
          priceFrom: { $gte: 700000000, $lte: 1000000000 },
        },
        "1 tỷ - 2 tỷ": { priceFrom: { $gte: 1000000000, $lte: 2000000000 } },
      };

      carQuery.$or = price
        .map((item: any) => priceRanges[item])
        .filter(Boolean);
    }

    const cars = await Car.find(carQuery).lean();
    return JSON.parse(JSON.stringify(cars));
  } catch (error) {
    console.error("Lỗi khi fetch toàn bộ xe gồm tên và slug:", error);
    return [];
  }
};
