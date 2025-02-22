"use client";

import { FC, useState } from "react";
import { MdEditSquare } from "react-icons/md";
import { BiPlusCircle } from "react-icons/bi";
import CustomModal from "../custom-modal";
import { AiFillDelete } from "react-icons/ai";
import { linkConstants } from "@/data/constants";
import { useRouter } from "next/navigation";
import AdminBtnWithIcon from "../admin-btn-with-icon";
import { formatShortDate } from "@/lib/formatData";
import DeleteArticleForm from "./delete-article-form";

interface Props {
  articles: any[];
}

const ArticlesTable: FC<Props> = ({ articles }) => {
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [deletedArticle, setDeletedArticle] = useState<any>();
  const router = useRouter();

  return (
    <>
      <div className="admin-card-body">
        <div className="text-right">
          <AdminBtnWithIcon
            content="Thêm bài viết"
            icon={BiPlusCircle}
            iconSize={18}
            to={linkConstants.create_article}
            customClasses="block ml-auto md:w-fit w-full"
          />
        </div>

        <div className="overflow-x-scroll no-scrollbar">
          <table className="w-full admin-table mt-4">
            <thead>
              <tr>
                <th className="min-w-[200px] md:min-w-auto">Tiêu đề</th>
                <th className="min-w-[200px] md:min-w-auto">Đường dẫn</th>
                <th className="min-w-[200px] md:min-w-auto">Lượt xem</th>
                <th className="min-w-[200px] md:min-w-auto">Ngày sửa</th>
                <th className="min-w-[200px] md:min-w-auto">Sửa / Xóa</th>
                <th className="min-w-[200px] md:min-w-auto">Demo</th>
              </tr>
            </thead>

            <tbody>
              {articles?.map((article) => (
                <tr key={article?.name}>
                  <td className="max-w-[300px]">
                    <span className="line-clamp-1">{article?.name}</span>
                  </td>
                  <td className="max-w-[300px]">
                    <span className="line-clamp-1">{article?.slug}</span>
                  </td>
                  <td className="text-center">{article?.views}</td>
                  <td className="text-center">
                    {formatShortDate(article?.updatedAt)}
                  </td>
                  <td className="flex items-center justify-center gap-4">
                    <MdEditSquare
                      className="mt-1 cursor-pointer text-blue-900"
                      size={18}
                      onClick={() => {
                        const url = `${linkConstants.edit_article}/${article.slug}`;
                        router.push(url);
                        router.refresh();
                      }}
                    />
                    <AiFillDelete
                      className="mt-1 cursor-pointer text-red-700"
                      size={18}
                      onClick={() => {
                        setShowDeleteForm(true);
                        setDeletedArticle(article);
                      }}
                    />
                  </td>
                  <td className="text-center">
                    <a
                      href={`/tin-tuc/${article.slug}`}
                      target="_blank"
                      className="underline text-sm font-bold text-blue-600"
                    >
                      Xem
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <CustomModal
        heading="Cảnh báo"
        onClose={() => setShowDeleteForm(false)}
        open={showDeleteForm}
      >
        <DeleteArticleForm
          setShowDeleteForm={setShowDeleteForm}
          deletedArticle={deletedArticle as any}
        />
      </CustomModal>
    </>
  );
};

export default ArticlesTable;
