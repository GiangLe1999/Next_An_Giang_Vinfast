import EditArticleForm from "@/components/admin-articles-page/edit-article-form";
import AdminCardTitle from "@/components/admin-card-title";
import { getArticleBySlug } from "@/queries/article.query";
import { MdEditSquare } from "react-icons/md";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const article = await getArticleBySlug(slug);

  if (!article) {
    return <p className="text-center text-red-500">Bài viết không tồn tại.</p>;
  }
  return (
    <div className="admin-page-container">
      <div className="admin-card">
        <AdminCardTitle
          cardTitle="Cập nhật bài viết"
          cardIconClasses="admin-main-gradient"
          icon={MdEditSquare}
          iconSize={22}
        />

        <EditArticleForm article={article} />
      </div>
    </div>
  );
}
