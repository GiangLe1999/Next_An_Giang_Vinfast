"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsHeadset } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { navItems } from "@/data";
import BuyCarMenu from "./buy-car-menu";
import NavCarMenu from "./nav-car-menu";
import ServiceMenu from "./service-menu";
import ContainNextImage from "../contain-next-image";

const buyCarTitle = "mua xe";
const carMenuTitle = "giá xe vinfast";
const serviceTitle = "dịch vụ";
const commonClasses =
  "relative uppercase text-sm text-white px-4 py-2 max-[414px]:px-2 hover:bg-secondary rounded-sm transition";

const Header = () => {
  const pathname = usePathname();
  const [showCarMenu, setShowCarMenu] = useState(false);
  const [showBuyMenu, setShowBuyMenu] = useState(false);
  const [showServiceMenu, setShowServiceMenu] = useState(false);

  const parentHoverHandler = (title: string) => {
    if (title === carMenuTitle) {
      setShowCarMenu(true);
    } else if (title === buyCarTitle) {
      setShowBuyMenu(true);
    } else if (title === serviceTitle) {
      setShowServiceMenu(true);
    }

    if (showCarMenu === true && title !== carMenuTitle) {
      setShowCarMenu(false);
    } else if (showBuyMenu === true && title !== buyCarTitle) {
      setShowBuyMenu(false);
    } else if (showServiceMenu === true && title !== serviceTitle) {
      setShowServiceMenu(false);
    }
  };

  const parentUnHoverHandler = (): void => {
    setShowCarMenu(false);
    setShowBuyMenu(false);
    setShowServiceMenu(false);
  };

  useEffect(() => {
    setShowServiceMenu(false);
  }, [pathname]);

  return (
    <>
      {/* Top Header */}
      <div className="bg-secondary text-white py-3">
        <div className="container flex items-center justify-between">
          <Link href="/" className="relative w-36 h-8 block">
            <ContainNextImage
              src="/images/logo-vinfast.png"
              alt="VinFast logo"
              priority
            />
          </Link>

          <h2 className="text-lg font-bold max-[500px]:hidden">
            <Link href="/">VINFAST AN GIANG</Link>
          </h2>

          <a
            href="tel:0822220088"
            className="flex items-center gap-2 font-medium hover:scale-[1.1] transition"
          >
            <div className="bg-primary rounded-full w-8 h-8 grid place-items-center">
              <BsHeadset />
            </div>

            <div className="text-xs">
              <p>HOTLINE</p>
              <p>0822 220 088</p>
            </div>
          </a>
        </div>
      </div>

      {/* Sticky Header */}
      <div className="bg-primary text-center sticky top-0 z-50">
        <nav
          className="container flex gap-2 items-center justify-center h-10 relative transition max-[500px]:justify-between max-[500px]:gap-0"
          onMouseLeave={parentUnHoverHandler}
        >
          {navItems.map((item, index) => {
            if (item.title === buyCarTitle) {
              return (
                <div
                  key={index}
                  className={`${commonClasses} ${
                    pathname === item.link && "bg-secondary"
                  }`}
                  onMouseEnter={() => parentHoverHandler(item.title)}
                >
                  <span className="font-bold flex gap-2 items-center max-[500px]:text-sm">
                    {item.title}
                    <BiChevronDown
                      size={20}
                      className="-mr-2 max-[413px]:hidden"
                    />
                  </span>
                  {item.title === buyCarTitle && (
                    <BuyCarMenu showBuyMenu={showBuyMenu} />
                  )}
                </div>
              );
            }

            return (
              <Link
                key={index}
                href={item.link}
                className={`${commonClasses} ${
                  !item.isParent && "max-[844px]:hidden"
                } ${pathname === item.link && "bg-secondary"} ${
                  showCarMenu && item.title === carMenuTitle && "bg-secondary"
                } ${
                  showServiceMenu &&
                  item.title === serviceTitle &&
                  "bg-secondary"
                }`}
                onMouseEnter={() => parentHoverHandler(item.title)}
              >
                {item.isParent ? (
                  <span className="flex gap-2 items-center max-[500px]:text-xs">
                    {item.title}
                    <BiChevronDown
                      size={20}
                      className="-mr-2 max-[413px]:hidden"
                    />
                  </span>
                ) : (
                  item.title
                )}
              </Link>
            );
          })}

          <NavCarMenu
            showCarMenu={showCarMenu}
            setShowCarMenu={setShowCarMenu}
            parentUnHoverHandler={parentUnHoverHandler}
          />
          <ServiceMenu showServiceMenu={showServiceMenu} />
        </nav>
      </div>
    </>
  );
};

export default Header;
