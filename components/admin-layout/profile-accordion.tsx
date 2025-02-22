"use client";

import { FC } from "react";
import { Accordion } from "@szhsin/react-accordion";
import { signOut, useSession } from "next-auth/react";
import { AccordionItem } from "../accordion-item";
import UserAvatar from "../user-avatar";
import { IoLogOut } from "react-icons/io5";

/**
 * @type {React.ExoticComponent<import('@szhsin/react-accordion').AccordionItemProps>}
 */

interface Props {
  isExpand: boolean;
}

const ProfileAccordion: FC<Props> = ({ isExpand }) => {
  const { data: session } = useSession();

  return (
    <div className="my-4 transition text-[#999999] border-y border-[#b4b4b44d] m-4 pt-4 pb-2">
      <Accordion transition transitionTimeout={500}>
        <AccordionItem
          header={
            <div className="flex items-center gap-3 w-full">
              <UserAvatar
                wrapperClasses={`${
                  isExpand ? "w-[34px] h-[34px] ml-[7px]" : "w-11 h-11"
                }`}
              />
              <div
                className={`${
                  isExpand ? "flex items-center justify-between" : "hidden"
                }`}
              >
                <span className="text-sm">{session?.user?.name}</span>
              </div>
            </div>
          }
        >
          <button
            className={"w-full admin-sidebar-item gap-[14px]"}
            onClick={() => signOut()}
          >
            <IoLogOut size={23} />{" "}
            <span className={isExpand ? "block" : "hidden"}>Đăng Xuất</span>
          </button>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ProfileAccordion;
