"use server";

import dbConnect from "@/lib/db";
import Article from "@/model/Article";

export const getAllArticles = async (limit: number = 0) => {
  try {
    await dbConnect();
    const articles = await Article.find()
      .select("name slug description createdAt thumbnail category")
      .sort({ createdAt: -1 })
      .limit(limit)
      .lean();

    return JSON.parse(JSON.stringify(articles));
  } catch (error) {
    console.error("Lỗi khi fetch toàn bộ bài viết cho admin:", error);
  }
};

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

export const getRelatedArticles = async ({
  currentId,
  currentCate,
}: {
  currentId: string;
  currentCate: string;
}) => {
  if (!currentId || !currentCate) {
    console.error("Thiếu currentId hoặc currentCate");
    return [];
  }

  try {
    await dbConnect();

    const relatedArticles = await Article.find({
      category: currentCate,
      _id: { $ne: currentId },
    })
      .select("name slug description thumbnail createdAt category")
      .sort({ createdAt: -1 })
      .limit(3)
      .lean();

    return JSON.parse(JSON.stringify(relatedArticles));
  } catch (error) {
    console.error("Lỗi khi fetch toàn bộ các bài viết liên quan:", error);
    return [];
  }
};
