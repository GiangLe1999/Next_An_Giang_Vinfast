"use client";

import { useEffect, useRef, useState } from "react";
import Pusher from "pusher-js";
import { BsBellFill } from "react-icons/bs";
import { useQuery } from "@tanstack/react-query";

import { useRouter } from "next/navigation";
import { linkConstants } from "@/data/constants";
import AdminNotification from "./admin-notification";
import { getRecentlyNotifications } from "@/queries/notification.query";
import { updateNotificationsStatus } from "@/actions/notification.actions";
import toast from "react-hot-toast";

const AdminNotifications = () => {
  const [showNoti, setShowNoti] = useState(false);
  const notiDivRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleClickOutside = (event: MouseEvent) => {
    if (
      notiDivRef.current &&
      !notiDivRef.current.contains(event.target as Node)
    ) {
      setShowNoti(false);
    }
  };

  const { data, refetch } = useQuery({
    queryKey: ["get-recently-notifications"],
    queryFn: getRecentlyNotifications,
  });

  const unreadNotis = data?.length
    ? data
        .filter((notification: any) => !notification.read)
        .map((noti) => noti._id)
    : [];

  const markReadAllHandler = async () => {
    if (!unreadNotis || unreadNotis.length === 0) {
      return; // Không cần làm gì nếu không có thông báo chưa đọc
    }

    try {
      const result = await updateNotificationsStatus(unreadNotis as any);

      if (result) {
        await refetch(); // Tải lại danh sách thông báo
      }
    } catch (error) {
      console.error("Lỗi khi đánh dấu tất cả là đã đọc:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Không thể đánh dấu tất cả thông báo là đã đọc"
      );
    }
  };

  useEffect(() => {
    const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY as string, {
      cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER as string,
    });

    const channel = pusher.subscribe("admin-notifications");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    channel.bind("new-customer", (data: any) => {
      refetch();
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="flex items-center gap-2 text-sm font-bold relative cursor-pointer"
      onClick={() => setShowNoti(!showNoti)}
      ref={notiDivRef}
    >
      <span>
        <span className="relative">
          <BsBellFill size={16} />
          {unreadNotis?.length > 0 && (
            <span className="absolute left-[-0.125rem] top-[-12px] border text-[9px] bg-[#f44336] text-white min-w-[20px] h-5 text-center leading-[19px] align-middle block px-[5px] py-0 rounded-[10px] border-solid border-white">
              {unreadNotis?.length || 0}
            </span>
          )}
        </span>
      </span>
      Thông báo
      {showNoti && (
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="md:w-[465px] w-[400px] absolute bg-white rounded-md shadow-md border z-10 top-7 md:right-0 left-0 right-auto md:left-auto overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700 pt-4"
        >
          <div className="flex items-center justify-between px-4">
            <span>Liên hệ mới ({unreadNotis?.length || 0}) </span>
            <button
              className="text-xs text-[#939dae]"
              onClick={markReadAllHandler}
            >
              Đánh dấu đã đọc tất cả
            </button>
          </div>

          <div className="max-h-[50vh] overflow-y-auto mb-3 no-scrollbar">
            {data &&
              data.length > 0 &&
              data.map(({ _id, read, ...rest }: any) => (
                <AdminNotification
                  key={_id}
                  read={read}
                  notiId={_id}
                  detail={rest}
                />
              ))}
          </div>

          <div
            onClick={(e) => {
              e.stopPropagation();
              router.push(linkConstants.dashboard);
              setShowNoti(false);
            }}
            className="admin-main-gradient p-3 text-xs text-center cursor-pointer text-white normal-case hover:underline"
          >
            Xem tất cả
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminNotifications;
