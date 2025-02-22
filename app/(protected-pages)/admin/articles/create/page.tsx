import CreateArticleForm from "@/components/admin-articles-page/create-article-form";
import AdminCardTitle from "@/components/admin-card-title";
import { MdCreateNewFolder } from "react-icons/md";

const Page = async () => {
  return (
    <div className="admin-page-container">
      <div className="admin-card">
        <AdminCardTitle
          cardTitle="Tạo bài viết"
          cardIconClasses="admin-main-gradient"
          icon={MdCreateNewFolder}
          iconSize={22}
        />

        <CreateArticleForm />
      </div>
    </div>
  );
};

export default Page;
