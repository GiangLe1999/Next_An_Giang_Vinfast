"use client";

import { Dispatch, FC, SetStateAction, useState } from "react";
import toast from "react-hot-toast";
import AdminBtnWithLoading from "../admin-btn-with-loading";
import { deleteArticle } from "@/actions/article.actions";

interface Props {
  setShowDeleteForm: Dispatch<SetStateAction<boolean>>;
  deletedArticle: any;
}

const DeleteArticleForm: FC<Props> = ({
  setShowDeleteForm,
  deletedArticle,
}) => {
  const [isDeleting, setIsDeleting] = useState(false); // Thay thế isPending từ useMutation

  const confirmDelete = async () => {
    setIsDeleting(true);
    try {
      const success = await deleteArticle(deletedArticle._id); // Gọi API xóa bài viết

      if (success) {
        toast.success(`Xóa bài viết "${deletedArticle.name}" thành công`);
        setShowDeleteForm(false);
        window.location.reload();
      } else {
        toast.error("Không thể xóa bài viết");
      }
    } catch (error: any) {
      toast.error(error.message || "Lỗi khi xóa bài viết");
    }
    setIsDeleting(false);
  };

  return (
    <div className="admin-card-body">
      <p className="text-center mt-2 mb-3">
        Bạn chắc chắn muốn xóa bài viết{" "}
        <span className="font-bold text-primary underline">
          {deletedArticle.name}
        </span>
        ?
      </p>

      <div className="text-center mt-4">
        <AdminBtnWithLoading
          content="Xác nhận xóa"
          isLoading={isDeleting} // Thay vì dùng isPending của useMutation
          type="submit"
          onClick={confirmDelete}
        />
      </div>
    </div>
  );
};

export default DeleteArticleForm;
