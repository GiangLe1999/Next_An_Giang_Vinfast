"use server";

import dbConnect from "@/lib/db";
import Article from "@/model/Article";

export const getAllArticlesForAdmin = async () => {
  try {
    await dbConnect();
    const articles = await Article.find()
      .select("name slug views updatedAt")
      .lean();

    return JSON.parse(JSON.stringify(articles));
  } catch (error) {
    console.error("Lỗi khi fetch toàn bộ bài viết cho admin:", error);
  }
};

export const getArticleBySlug = async (slug: string) => {
  if (!slug) {
    console.error("Slug không hợp lệ.");
  }

  try {
    await dbConnect();
    const car = await Article.findOne({ slug }).lean();

    if (!car) {
      console.error(`Không tìm thấy bài viết với slug: ${slug}`);
    }

    return JSON.parse(JSON.stringify(car));
  } catch (error) {
    console.error("Lỗi khi fetch bài viết theo slug:", error);
  }
};
