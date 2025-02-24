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
    const article = await Article.findOne({ slug }).lean();

    if (!article) {
      console.error(`Không tìm thấy bài viết với slug: ${slug}`);
    }

    return JSON.parse(JSON.stringify(article));
  } catch (error) {
    console.error("Lỗi khi fetch bài viết theo slug:", error);
  }
};

export const getArticleBySlugAndIncreaseViews = async (slug: string) => {
  if (!slug) {
    console.error("Slug không hợp lệ.");
    return null;
  }

  try {
    await dbConnect();

    const article = await Article.findOneAndUpdate(
      { slug },
      { $inc: { views: 1 } },
      { new: true, lean: true } // Trả về dữ liệu sau khi cập nhật
    );

    if (!article) {
      console.error(`Không tìm thấy bài viết với slug: ${slug}`);
      return null;
    }

    return JSON.parse(JSON.stringify(article));
  } catch (error) {
    console.error("Lỗi khi fetch bài viết theo slug:", error);
    return null;
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

export const getArticlesByKeyword = async (keyword: string) => {
  try {
    await dbConnect();

    const filterObject: any = {};

    if (keyword) {
      const queries = keyword.trim().split(/\s+/); // Loại bỏ khoảng trắng thừa
      filterObject.$or = queries.flatMap((kw) => [
        { title: { $regex: new RegExp(kw, "i") } },
        { description: { $regex: new RegExp(kw, "i") } },
      ]);
    }

    const results = await Article.find(filterObject)
      .select("name slug description")
      .sort({ createdAt: -1 })
      .lean();

    return JSON.parse(JSON.stringify(results));
  } catch (error) {
    console.error("Lỗi khi fetch toàn bộ các bài viết liên quan:", error);
    return [];
  }
};

const LIMIT = 13;
const CATEGORIES = {
  uu_dai: "Ưu đãi",
  su_kien: "Sự kiện",
  thong_tin_xe: "Thông tin xe",
};

export const getAllArticlesForUsers = async ({
  category,
  page,
}: {
  category: any;
  page: number;
}) => {
  try {
    await dbConnect();

    const skip = (page - 1) * LIMIT;

    const filterObject = Object.values(CATEGORIES).includes(category)
      ? { category }
      : {};

    const [articles, countArticles] = await Promise.all([
      Article.find(filterObject)
        .skip(skip)
        .limit(LIMIT)
        .select("name slug description createdAt thumbnail category author")
        .sort({ createdAt: -1 })
        .lean(),
      Article.countDocuments(filterObject),
    ]);

    return JSON.parse(
      JSON.stringify({
        result: articles,
        pageMaxSize: Math.ceil(countArticles / LIMIT),
      })
    );
  } catch (error) {
    console.error("Lỗi khi fetch toàn bộ các bài viết cho user:", error);
    return { result: [], pageMaxSize: 0 };
  }
};

export const getAllArticlesForSitemap = async () => {
  try {
    await dbConnect();
    const articlesWithNameAndUpdatedAt = await Article.find()
      .select("name updatedAt")
      .lean();

    return JSON.parse(JSON.stringify(articlesWithNameAndUpdatedAt));
  } catch (error) {
    console.error("Lỗi khi fetch toàn bộ xe cho sitemap:", error);
  }
};
