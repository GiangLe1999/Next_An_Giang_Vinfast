"use client";

import { publicMobileNavItems } from "@/data/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileBottomNav = () => {
  const path = usePathname();

  return (
    <div className="md:hidden block fixed bottom-0 left-0 right-0 z-50">
      <nav>
        <div className="grid grid-cols-4 gap-1 bg-white border-t text-secondary font-bold">
          {publicMobileNavItems.map((item: any, index: number) => (
            <Link
              href={item.link}
              key={index}
              className={`capitalize flex flex-col items-center justify-center py-2 text-sm max-[350px]:text-xs ${
                path === item.link && "bg-[#B91C1C] text-white"
              }`}
            >
              {item.icon && item.icon({ size: 18 })} {item.title}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default MobileBottomNav;
