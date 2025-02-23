import { IconType } from "react-icons";
import {
  MdDashboard,
  MdEditSquare,
  MdEmail,
  MdHome,
  // MdImage
} from "react-icons/md";
import {
  // FaEnvelopeOpenText,
  // FaCalculator,
  // FaCarAlt,
  // FaChartPie,
  // FaUsersCog,
  // FaFlag,
  // FaThumbsUp,
  // FaShieldAlt,
  // FaHeartbeat,
  FaHome,
  FaBlog,
  FaCar,
} from "react-icons/fa";
import { linkConstants } from "./constants";
import { IoCarSportSharp } from "react-icons/io5";

export const articleCategories = [
  { label: "Ưu đãi", value: "Ưu đãi" },
  { label: "Sự kiện", value: "Sự kiện" },
  { label: "Thông tin xe", value: "Thông tin xe" },
];

export const adminSidebarItems: {
  link: string;
  title: string;
  icon: IconType;
}[] = [
  { link: "/", title: "Đến Trang Chủ", icon: MdHome },
  { link: linkConstants.dashboard, title: "Dashboard", icon: MdDashboard },
  {
    link: linkConstants.admin_cars,
    title: "Danh Sách Xe",
    icon: IoCarSportSharp,
  },
  {
    link: linkConstants.admin_articles,
    title: "Bài Viết",
    icon: MdEditSquare,
  },
  // {
  //   link: linkConstants.admin_banners,
  //   title: "Banners",
  //   icon: MdImage,
  // },
];

export const adminNavItems: {
  title: string;
  link: string;
  icon?: IconType;
}[] = [
  {
    title: "Dashboard",
    link: linkConstants.dashboard,
    icon: FaHome,
  },
  {
    title: "List xe",
    link: linkConstants.admin_cars,
    icon: FaCar,
  },
  {
    title: "Bài viết",
    link: linkConstants.admin_articles,
    icon: FaBlog,
  },
];

export const publicMobileNavItems: {
  title: string;
  link: string;
  icon?: IconType;
}[] = [
  {
    title: "Trang chủ",
    link: linkConstants.home,
    icon: FaHome,
  },
  {
    title: "Mua xe",
    link: linkConstants.requireQuotation,
    icon: FaCar,
  },
  {
    title: "Tin tức",
    link: linkConstants.news,
    icon: FaBlog,
  },
  {
    title: "Liên hệ",
    link: linkConstants.contact,
    icon: MdEmail,
  },
];
