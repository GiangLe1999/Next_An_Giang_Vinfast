"use client";

import { FC, useState } from "react";
import CustomModal from "../custom-modal";
import BtnWithLoading from "../admin-btn-with-loading";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTestDriveStatus } from "@/actions/test-drive.actions";

interface Props {
  initialStatus: string;
  testDriveId: string;
  keyword: string;
  startDate: Date;
  endDate: Date;
  filter: any;
  limit: number;
  currentPage: number;
}

const statuses = ["Chờ xử lý", "Thất bại", "Thành công"];

const TestDriveStatus: FC<Props> = ({
  initialStatus,
  testDriveId,
  keyword,
  startDate,
  endDate,
  filter,
  limit,
  currentPage,
}) => {
  const [currentStatus, setCurrentStatus] = useState(initialStatus);
  const [showModal, setShowModal] = useState(false);

  const confirmHandler = async () => {
    if (currentStatus === initialStatus) {
      return toast.error("Vui lòng thay đổi trạng thái trước khi xác nhận");
    }

    try {
      const response = await updateTestDriveStatus({
        id: testDriveId,
        newStatus: currentStatus,
      });

      if (!response.success) {
        throw new Error(response.message);
      }

      toast.success("Cập nhật trạng thái mới thành công");
    } catch (error: any) {
      toast.error(error.message || "Có lỗi xảy ra");
    }

    setShowModal(false);
  };

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: confirmHandler,
    onMutate: async () => {
      const queryKeysArr = [
        "admin-test-drives",
        keyword,
        startDate,
        endDate,
        filter,
        limit,
        currentPage,
      ];

      await queryClient.cancelQueries({
        queryKey: queryKeysArr,
      });
      const previousTestDrives = await queryClient.getQueryData(queryKeysArr);
      queryClient.setQueryData(queryKeysArr, (old: any) => {
        const newTestDrives = [...old.data];

        const updatedContactIndex = newTestDrives.findIndex(
          (testDrive: any) => testDrive._id === testDriveId
        );

        newTestDrives[updatedContactIndex] = {
          ...newTestDrives[updatedContactIndex],
          status: currentStatus,
        };

        return { ...old, data: newTestDrives };
      });

      return { previousTestDrives };
    },
    onError: (error, data, context: any) => {
      toast.error(error.message);
      queryClient.setQueryData(["admin-test-drives"], context.previousContacts);
    },
  });

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className={`px-2 py-1 rounded-md text-xs font-semibold ${
          initialStatus === "Thành công"
            ? "text-green-500 bg-emerald-100"
            : initialStatus === "Thất bại"
            ? "text-red-500 bg-[#efd9e6]"
            : "text-yellow-600 bg-[#f0eae4]"
        }`}
      >
        {initialStatus}
      </button>

      <CustomModal
        heading="Cập nhật trạng thái"
        onClose={() => setShowModal(false)}
        open={showModal}
      >
        <div className="admin-card-body">
          <div className="grid md:grid-cols-3 grid-cols-2 gap-3 mt-3">
            {statuses.map((status) => (
              <div key={status} className="flex items-center">
                <input
                  type="radio"
                  name="change-status"
                  id={status}
                  className="accent-red-700 cursor-pointer"
                  checked={currentStatus === status}
                  value={status}
                  onChange={(e) => setCurrentStatus(e.target.value)}
                />
                <label
                  htmlFor={status}
                  className="pl-2 mt-[3px] cursor-pointer"
                >
                  {status}
                </label>
              </div>
            ))}
          </div>

          <div className="border-t mt-7 pt-6 flex items-center justify-between">
            <button
              onClick={() => setShowModal(false)}
              className="text-read-700 border font-bold text-red-700 border-red-700 rounded-md px-4 py-3"
            >
              Hủy bỏ
            </button>
            <BtnWithLoading
              onClick={mutate}
              content="Xác nhận"
              isLoading={isPending}
            />
          </div>
        </div>
      </CustomModal>
    </>
  );
};

export default TestDriveStatus;
