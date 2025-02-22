import ArticlesTable from "@/components/admin-articles-page/articles-table";
import AdminCardTitle from "@/components/admin-card-title";
import { getAllArticlesForAdmin } from "@/queries/article.query";
import { MdEditSquare } from "react-icons/md";

const Page = async () => {
  const articles = await getAllArticlesForAdmin();

  return (
    <div className="admin-page-container">
      <div className="admin-card">
        <AdminCardTitle
          cardTitle="Bài Viết"
          cardIconClasses="admin-main-gradient"
          icon={MdEditSquare}
          iconSize={22}
        />
        <ArticlesTable articles={articles} />
      </div>
    </div>
  );
};

export default Page;
