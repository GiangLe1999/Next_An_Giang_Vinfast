"use client";

import { Dispatch, FC, SetStateAction, useState } from "react";
import toast from "react-hot-toast";
import AdminBtnWithLoading from "../admin-btn-with-loading";
import { deleteCar } from "@/actions/car.actions";

interface Props {
  setShowDeleteForm: Dispatch<SetStateAction<boolean>>;
  deletedCar: any;
}

const DeleteCarForm: FC<Props> = ({ setShowDeleteForm, deletedCar }) => {
  const [isLoading, setIsLoading] = useState(false);

  const deleteCarHandler = async () => {
    try {
      setIsLoading(true);

      // Gọi API để xóa xe
      await deleteCar(deletedCar._id);

      toast.success(`Xóa ${deletedCar.name} thành công`);
      setShowDeleteForm(false);
    } catch (error: any) {
      toast.error(error.message || "Lỗi khi xóa xe");
    } finally {
      setIsLoading(false);
      window.location.reload();
    }
  };

  return (
    <div className="admin-card-body">
      <p className="font-bold text-xl text-center mt-2 mb-3">
        Bạn chắc chắn muốn xóa {deletedCar.name}?
      </p>

      <div className="text-center mt-4">
        <AdminBtnWithLoading
          content="Xác nhận xóa"
          isLoading={isLoading}
          type="submit"
          onClick={deleteCarHandler}
        />
      </div>
    </div>
  );
};

export default DeleteCarForm;
