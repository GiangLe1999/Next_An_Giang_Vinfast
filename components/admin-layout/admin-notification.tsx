"use client";

import { FC, useState } from "react";
import TimeAgo from "react-timeago";
import vietnameseStrings from "react-timeago/lib/language-strings/vi";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import CustomModal from "../custom-modal";
import { formatShortDate } from "@/lib/formatData";
import { updateNotificationStatus } from "@/actions/notification.actions";
import Image from "next/image";

const formatter = buildFormatter(vietnameseStrings);

interface Props {
  detail: any;
  read: boolean;
  notiId: string;
}

const AdminNotification: FC<Props> = ({ detail, read, notiId }) => {
  const [showDetailModal, setShowDetailModal] = useState(false);

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: () => updateNotificationStatus(notiId),
    onMutate: async () => {
      const queryKeysArr = ["get-recently-notifications"];

      // Hủy bất kỳ query nào đang chạy với key get-recently-notifications để tránh conflict khi dữ liệu thay đổi.
      await queryClient.cancelQueries({
        queryKey: queryKeysArr,
      });

      // Lưu lại dữ liệu trước khi mutation chạy, để có thể khôi phục nếu mutation thất bại (rollback).
      const previousNotifications = await queryClient.getQueryData(
        queryKeysArr
      );

      // Cập nhật Optimistic UI
      queryClient.setQueryData(queryKeysArr, (old: any) => {
        if (!old || !old.data) return old; // Kiểm tra nếu không có dữ liệu trước đó
        const newNotifications = [...old.data];

        const updatedNotificationIndex = newNotifications?.findIndex(
          (notification: any) => notification._id === notiId
        );

        if (updatedNotificationIndex !== -1) {
          newNotifications[updatedNotificationIndex] = {
            ...newNotifications[updatedNotificationIndex],
            read: true,
          };
        }

        return { ...old, data: newNotifications };
      });

      // Trả về dữ liệu cũ để rollback nếu cần
      return { previousNotifications };
    },
    onError: (error, data, context: any) => {
      // Kiểm tra error trước khi truy xuất message
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Đã xảy ra lỗi khi cập nhật thông báo";
      toast.error(errorMessage);

      // Kiểm tra nếu context tồn tại trước khi rollback
      if (context?.previousNotifications) {
        queryClient.setQueryData(
          ["get-recently-notifications"],
          context.previousNotifications // Đúng key
        );
      }
    },
  });

  const showDetailModalHandler = (e: any, read: boolean) => {
    e.stopPropagation();
    setShowDetailModal(true);
    if (!read) {
      mutate();
    }
  };

  const closeDetailModalHandler = () => {
    setShowDetailModal(false);
  };

  return (
    <>
      <div
        key={detail._id}
        className={`relative mx-2 text-left mt-3 rounded-md flex gap-2 p-3 text-xs cursor-pointer ${
          !read && "bg-[#f5faff]"
        }`}
        onClick={(e) => showDetailModalHandler(e, read)}
      >
        {!read && (
          <>
            <span className="absolute right-2 top-1 rounded-full mt-[3px] ml-2 p-1 bg-[#f65351]"></span>
            <span className="absolute right-2 top-[7px] animate-ping rounded-full ml-2 p-1 bg-[#f65351]"></span>
          </>
        )}

        <Image
          src="/images/admin/default-user-avt.png"
          alt="User Avatar in Notification"
          className="rounded-full shrink-0 h-fit"
          width={36}
          height={36}
        />
        <div className="ml-2 normal-case font-normal flex-1">
          <span className="font-bold hover:text-blue">{detail?.name}</span>{" "}
          <span>
            đã gửi form liên hệ về dịch vụ <b>{detail?.service}</b>
          </span>
          <p className="text-gb mt-1 first-letter:uppercase text-[#939dae]">
            <TimeAgo date={detail.createdAt} formatter={formatter} />
          </p>
          <div className="border rounded-md mt-3 cursor-pointer px-4 py-3">
            <div className="line-clamp-2 text-gray-500 text-[11px]">
              {detail.content || "Không có nội dung"}
            </div>
          </div>
        </div>
      </div>
      <CustomModal
        heading="Thông tin chi tiết"
        onClose={closeDetailModalHandler}
        open={showDetailModal}
      >
        <div className="admin-card-body">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-3">
            <div className="flex gap-2">
              <span className="font-bold">Tên khách hàng:</span>
              <span>{detail?.name || "Không yêu cầu trường này"}</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold">Email:</span>
              <span>{detail?.email || "Không yêu cầu trường này"}</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold">SĐT:</span>
              <span>{detail?.phone || "Không yêu cầu trường này"}</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold">Loại dịch vụ:</span>
              <span>{detail?.service || "Không yêu cầu trường này"}</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold">Dòng xe:</span>
              <span>{detail?.carName || "Không yêu cầu trường này"}</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold line-clamp-1">Phiên bản:</span>
              <span>{detail?.carLine || "Không yêu cầu trường này"}</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold line-clamp-1">Tỉnh / thành:</span>
              <span>{detail?.province || "Không yêu cầu trường này"}</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold line-clamp-1">Thời gian:</span>
              <span>{formatShortDate(detail?.createdAt)}</span>
            </div>
          </div>

          <div className="mt-3">
            <span className="font-bold">Nội dung:</span>{" "}
            <span>{detail?.content || "Không có nội dung"}</span>
          </div>
        </div>
      </CustomModal>
    </>
  );
};

export default AdminNotification;
