import { IconType } from "react-icons";
import {
  MdAccountCircle,
  MdDashboard,
  MdEditSquare,
  MdHome,
  MdImage,
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
  FaInfoCircle,
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
  { link: linkConstants.profile, title: "Profile", icon: MdAccountCircle },
  {
    link: linkConstants.admin_articles,
    title: "Bài Viết",
    icon: MdEditSquare,
  },
  {
    link: linkConstants.admin_banners,
    title: "Banners",
    icon: MdImage,
  },
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
    title: "Profile",
    link: linkConstants.profile,
    icon: FaInfoCircle,
  },
  {
    title: "Bài viết",
    link: linkConstants.admin_articles,
    icon: FaBlog,
  },
];

export const carCategories = [
  { label: "Hatchback", value: "Hatchback" },
  { label: "Sedan & Hatchback", value: "Sedan & Hatchback" },
  { label: "Coupe (xe thể thao)", value: "Coupe (xe thể thao)" },
  { label: "Sedan", value: "Sedan" },
  { label: "SUV (xe thể thao đa dụng)", value: "SUV (xe thể thao đa dụng)" },
  { label: "Pickup (xe bán tải)", value: "Pickup (xe bán tải)" },
];
export const carTiers = [
  { label: "Hạng A", value: "Hạng A" },
  { label: "Hạng B", value: "Hạng B" },
  { label: "Hạng C", value: "Hạng C" },
  { label: "Hạng D", value: "Hạng D" },
  { label: "Hạng E", value: "Hạng E" },
];
