"use client";

import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ProfileAccordion from "./profile-accordion";
import { adminSidebarItems } from "@/data/menu";

interface Props {
  isExpand: boolean;
}

const AdminSidebar: FC<Props> = ({ isExpand }) => {
  const pathName = usePathname();

  return (
    <aside
      className={`bg-[#191919] h-full max-h-full fixed top-0 bottom-0 left-0 z-[2] admin-sidebar-shadow text-white overflow-y-scroll transition-width ${
        isExpand ? "w-[260px]" : "w-[80px]"
      }`}
    >
      <div
        className={`fixed top-0 bottom-0 left-0 w-[254px] admin-sidebar-background z-[1] ${
          isExpand ? "w-[260px]" : "w-[80px]"
        }`}
      ></div>
      <div
        className={`fixed top-0 bottom-0 left-0 w-[254px] bg-black opacity-80 z-[3] ${
          isExpand ? "w-[260px]" : "w-[80px]"
        }`}
      ></div>
      <div className="relative z-[4]">
        <Image
          src="/images/logo-vinfast.png"
          alt="VinFast logo"
          priority
          className="mx-auto my-6"
          width={isExpand ? 200 : 60}
          height={60}
        />

        <ProfileAccordion isExpand={isExpand} />

        <div className="">
          {adminSidebarItems.map((item: any) => (
            <Link
              href={item.link}
              key={item.title}
              className={`admin-sidebar-item gap-4 my-2 ${
                pathName.includes(item.link) &&
                item.link.length > 1 &&
                "admin-main-gradient !text-white"
              } ${isExpand ? "mx-4 my-2" : "ml-2 mr-[10px]"}`}
            >
              {item.icon({ size: 23 })}{" "}
              <span className={`${!isExpand && "hidden"}`}>{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;
