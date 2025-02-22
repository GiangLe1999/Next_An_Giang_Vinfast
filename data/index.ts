import {
  FaEnvelopeOpenText,
  FaCalculator,
  FaCarAlt,
  FaChartPie,
  FaUsersCog,
  FaFlag,
  FaThumbsUp,
  FaShieldAlt,
  FaHeartbeat,
  FaHome,
  FaInfoCircle,
  FaBlog,
  FaCar,
} from "react-icons/fa";

import { BiSolidContact } from "react-icons/bi";

import { HiReceiptTax } from "react-icons/hi";
import { BsChatHeartFill, BsTagsFill, BsFillGiftFill } from "react-icons/bs";
import { SiAdguard } from "react-icons/si";
import { MdPhone } from "react-icons/md";

import { IconType } from "react-icons";
import { linkConstants } from "./constants";

export const navItems: {
  title: string;
  link: string;
  isParent?: boolean;
  icon?: IconType;
}[] = [
  {
    title: "trang chủ",
    link: linkConstants.home,
    icon: FaHome,
  },
  {
    title: "giới thiệu",
    link: linkConstants.introduce,
    icon: FaInfoCircle,
  },
  {
    title: "giá xe mazda",
    link: linkConstants.quote,
    isParent: true,
  },
  {
    title: "mua xe",
    link: "/#",
    isParent: true,
  },
  {
    title: "dịch vụ",
    link: "/#",
    isParent: true,
  },
  {
    title: "tin tức",
    link: linkConstants.news,
    icon: FaBlog,
  },
  {
    title: "liên hệ",
    link: linkConstants.contact,
    icon: BiSolidContact,
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
    title: "Bài viết",
    link: linkConstants.admin_articles,
    icon: FaBlog,
  },
];

type navCarItemType = {
  img: string;
  name: string;
  price: string;
  link: string;
};

export const navCarMenu: navCarItemType[] = [
  {
    img: "https://res.cloudinary.com/dfhheac8o/image/upload/v1693194430/Mazda/mazda2-do_ekcwdn.jpg",
    name: "New Mazda 2",
    price: "418",
    link: "mazda-2",
  },
  {
    img: "https://res.cloudinary.com/dfhheac8o/image/upload/v1693194430/Mazda/mazda2-sport-trang_qwmme7.jpg",
    name: "New Mazda 2 Sport",
    price: "537",
    link: "mazda-2-sport",
  },
  {
    img: "https://res.cloudinary.com/dfhheac8o/image/upload/v1693194429/Mazda/mazda-cx3-xanh_g7kbvr.jpg",
    name: "New Mazda CX3",
    price: "522",
    link: "mazda-cx-3",
  },
  {
    img: "https://res.cloudinary.com/dfhheac8o/image/upload/v1693194429/Mazda/mazda3-den_lhjkli.jpg",
    name: "New Mazda 3",
    price: "579",
    link: "mazda-3",
  },
  {
    img: "https://res.cloudinary.com/dfhheac8o/image/upload/v1693194427/Mazda/mazdasport-xam_aaj30s.jpg",
    name: "New Mazda 3 Sport",
    price: "639",
    link: "mazda-3-sport",
  },
  {
    img: "https://res.cloudinary.com/dfhheac8o/image/upload/v1693194427/Mazda/mazdacx30-trang_xvfhyd.jpg",
    name: "Mazda CX30",
    price: "679",
    link: "mazda-cx-30",
  },
  {
    img: "https://res.cloudinary.com/dfhheac8o/image/upload/v1693194426/Mazda/mazda6-xanhden_n05nvx.jpg",
    name: "New Mazda 6",
    price: "744",
    link: "mazda-6",
  },
  {
    img: "https://res.cloudinary.com/dfhheac8o/image/upload/v1693194426/Mazda/mazdacx5-do_eaoitz.jpg",
    name: "New Mazda CX5",
    price: "729",
    link: "mazda-cx-5",
  },
  {
    img: "https://res.cloudinary.com/dfhheac8o/image/upload/v1693194425/Mazda/mazdacx8-den_znommi.jpg",
    name: "New Mazda CX8",
    price: "969",
    link: "mazda-cx-8",
  },
  {
    img: "https://res.cloudinary.com/dfhheac8o/image/upload/v1693194425/Mazda/bt50-xam_d9htf5.jpg",
    name: "New Mazda BT-50",
    price: "524",
    link: "mazda-bt-50",
  },
];

type homeOptionType = {
  title: string;
  link: string;
  icon: IconType;
  des: string;
};

export const homeOptions: homeOptionType[] = [
  {
    title: "yêu cầu báo giá",
    link: linkConstants.requireQuotation,
    icon: FaEnvelopeOpenText,
    des: "Đăng ký để nhận báo giá mới nhất cho các <strong>dòng xe Mazda</strong>",
  },
  {
    title: "tính phí lăn bánh",
    link: linkConstants.finalPrice,
    icon: FaCalculator,
    des: "Giá các phiên bản xe Mazda cùng các khoản phí chi tiết tại <strong>Mazda Thủ Đức</strong>",
  },
  {
    title: "mua xe trả góp",
    link: linkConstants.installment,
    icon: FaChartPie,
    des: "Trả góp đến <strong>85% giá trị xe</strong>, lãi suất chỉ <strong>0,6%/tháng</strong>",
  },
  {
    title: "đăng ký lái thử",
    link: linkConstants.testDrive,
    icon: FaCarAlt,
    des: "Đến với <strong>Mazda Thủ Đức</strong> để được lái thử những mẫu xe Mazda mới nhất",
  },
];

type promotionItemType = {
  icon: IconType;
  title: string;
  subtitle: string;
  desc: string;
};

export const promotionItems: promotionItemType[] = [
  {
    icon: HiReceiptTax,
    title: "ƯU ĐÃI QUÀ TẶNG GIÁ TRỊ",
    subtitle: "",
    desc: "<ul><li><b>New Mazda 2 All New</b>: Phim cách nhiệt Lumar của Mỹ BH 5 năm, thảm lót sàn, dù Mazda, túi cứu hộ, ví da Mazda. Giá chỉ từ <b class='text-primary'>418 Triệu</b>.</li><li><b>Mazda CX3</b>: Quà tặng phim cách nhiệt Lumar của Mỹ BH 5 năm, thảm lót sàn, dù Mazda, túi cứu hộ, ví da Mazda. Giá chỉ từ <b class='text-primary'>522 Triệu</b>.</li><li><b>New Mazda 3 Sedan & Sport</b>: BHVC 1 năm, phim cách nhiệt Llumar của Mỹ BH 5 năm, thảm lót sàn, dù Mazda, túi cứu hộ, ví da Mazda. Giá chỉ từ <b class='text-primary'>591 Triệu</b>.</li><li><b>New Mazda 6</b>: BHVC 1 năm, phim cách nhiệt Lumar của Mỹ BH 5 năm, thảm lót sàn, dù Mazda, túi cứu hộ, ví da Mazda, thẻ GPS. Giá chỉ từ <b class='text-primary'>758 Triệu</b>.</li><li><b>Mazda CX30</b>: Giảm 10 triệu tiền mặt kèm gói quà tặng baga mui, ốp cản sau, phim cách nhiệt Lumar của Mỹ BH 5 năm, thảm lót sàn, dù Mazda, túi cứu hộ, ví da Mazda. Giá chỉ <b class='text-primary'>689 Triệu</b>.</li><li><b>New Mazda CX5</b>: Ưu đãi lên 20 triệu đồng ++ phim cách nhiệt Lumar của Mỹ BH 5 năm, thảm lót sàn, dù Mazda, túi cứu hộ, ví da Mazda. Giá chỉ <b class='text-primary'>729 Triệu</b>.</li><li><b>Mazda CX8 NEW</b>: Ưu đãi 01 năm bảo hiểm thân xe, bộ nâng cấp bệ bước chân + cốp rãnh tay + ty thuỷ lực + baga mui, phim cách nhiệt Lumar của Mỹ BH 5 năm, thảm lót sàn, dù Mazda, túi cứu hộ, ví da Mazda. Giá chỉ từ <b class='text-primary'>955 Triệu</b>.</li></ul>",
  },
  {
    icon: FaUsersCog,
    title: "TƯ VẤN TRỰC TUYẾN – LÁI THỬ TẠI NHÀ",
    subtitle:
      "Quý khách hàng sẽ được tư vấn đầy đủ các thông tin về giá bán, phiên bản và tính năng của từng sản phẩm Mazda thế hệ mới phù hợp với nhu cầu sử dụng thực tế.",
    desc: "Song song với các chương trình ưu đãi hấp dẫn, Mazda vẫn đảm bảo thực hiện nhiều biện pháp phòng, chống dịch và đặt sự an toàn của khách hàng lên hàng đầu với chương trình <b class='text-primary'>“Tư vấn trực tuyến – Lái thử tại nhà”</b>. Thông qua các ứng dụng trực tuyến trên <b>Facebook, Zalo</b> … Quý khách hàng sẽ được tư vấn đầy đủ các thông tin về giá bán, phiên bản và tính năng của từng sản phẩm Mazda thế hệ mới phù hợp với nhu cầu sử dụng thực tế.",
  },
];

type itemType = { icon: IconType; title: string; desc: string };

export const reasonsToBuy: itemType[] = [
  {
    icon: BsTagsFill,
    title: "GIÁ CẢ ƯU ĐÃI - GIAO XE SỚM",
    desc: "Mazda Thủ Đức luôn cam kết mang lại mức giá ưu đãi nhất cho quý khách với thời gian giao xe nhanh nhất trong 1 ngày.",
  },
  {
    icon: SiAdguard,
    title: "BẢO HÀNH THEO TIÊU CHUẨN TOÀN QUỐC",
    desc: "Anh chị sẽ yên tâm khi mua xe tại Mazda Thủ Đức, vì chúng tôi luôn bảo hành, bảo dưỡng và sửa chữa theo tiêu chuẩn chất lượng của Mazda trên toàn quốc. BẢO HÀNH ĐẾN 5 NĂM.",
  },
  {
    icon: BsFillGiftFill,
    title: "KHUYẾN MÃI NHIỀU NHẤT",
    desc: "Với hoạt động bán hàng sôi nổi, chúng tôi luôn cập nhật sớm nhất các chương trình khuyến mãi của hãng và đại lý",
  },
  {
    icon: BsChatHeartFill,
    title: "TƯ VẤN TẬN TÌNH",
    desc: "Đội ngũ tư vấn luôn sẵn lòng giúp Anh chị tìm được chiếc xe ưng ý.",
  },
];

export const aboutItems: itemType[] = [
  {
    icon: FaFlag,
    title: "THIẾT KẾ",
    desc: "Chúng tôi mang đến niềm vui lái xe thuần túy bằng cách tạo nên những mẫu xe chứa đựng tính cách và tâm hồn. Trong đó, ngôn ngữ thiết kế chính là nét độc đáo mà Mazda sử dụng để tác động và kết nối các giác quan của người nhìn.",
  },
  {
    icon: FaThumbsUp,
    title: "SÁNG TẠO",
    desc: "Tại Mazda, tất cả chúng ta đều nói về việc lái xe và cảm giác hứng khởi mà điều đó mang lại. Lái xe không đơn thuần chỉ là vận hành một cỗ máy mà còn liên hệ đến những va chạm và cảm xúc. Một chiếc xe không những phải phản ứng hoàn hảo với các thao tác của người lái mà còn phải sở hữu các hệ thống trực quan.",
  },
  {
    icon: FaShieldAlt,
    title: "AN TOÀN",
    desc: "Mazda nhắm đến mục tiêu mang đến cho tất cả khách hàng niềm vui lái xe và hiệu suất an toàn trong một môi trường vượt trội. Dựa trên triết lý này, Mazda đang thúc đẩy nghiên cứu và phát triển các tính năng an toàn để hoàn thành mục tiêu quan trọng: xe lưu thông an toàn và không xảy ra tai nạn.",
  },
  {
    icon: FaHeartbeat,
    title: "CẢM XÚC",
    desc: "Tại Mazda, Chúng tôi không chỉ sản xuất xe, mà còn mang lại niềm vui và hạnh phúc cho khách hàng bởi Mazda tin rằng chiếc xe sẽ lay động cảm xúc và thức tỉnh các giác quan, tạo sự phấn khích cho người sở hữu.",
  },
];

export const footerCol1: string[] = [
  "Chuyên cung cấp dòng xe Mazda các loại",
  "Xe 4 chỗ Mazda 2, 5 chỗ Mazda 3 và Mazda 6, 5 chỗ gầm cao CX-5, 7 chỗ CX-8, bán tải BT-50",
  "Địa chỉ : 127 Quốc Lộ 13, Khu phố 1, Thủ Đức, Ho Chi Minh City, Vietnam",
];

type footerItemType = { title: string; link: string };

export const footerCol2: footerItemType[] = [
  { title: "New Mazda CX-5", link: "/mazda-cx-5" },
  { title: "Mazda2", link: "/mazda-2" },
  { title: "Mazda2 Sport", link: "/mazda-2-sport" },
  { title: "Mazda3", link: "/mazda-3" },
  { title: "Mazda3 Sport", link: "/mazda-3-sport" },
  { title: "Mazda6", link: "/mazda-6" },
  { title: "Mazda CX-8", link: "/mazda-cx-8" },
  { title: "Mazda BT-50", link: "/mazda-bt-50" },
];

export const footerCol3: footerItemType[] = [
  { title: "Bảng giá chi tiết", link: linkConstants.quote },
  { title: "Tính phí lăn bánh", link: linkConstants.finalPrice },
  { title: "Thủ tục trả góp", link: linkConstants.installment },
  { title: "Đăng ký lái thử", link: linkConstants.testDrive },
];

export const footerCol32: footerItemType[] = [
  { title: "Chính sách Thanh toán", link: linkConstants.paymentPolicy },
  { title: "Chính sách Bảo mật", link: linkConstants.privacyPolicy },
  {
    title: "Chính sách Giao nhận - Vận chuyển",
    link: linkConstants.deliveryPolicy,
  },
];

export const footerCol4: { title: string; link: string; icon: IconType }[] = [
  { title: "Hotline: 0333122512", link: "tel:0333122512", icon: MdPhone },
  // {
  //   title: "hualong02072000@gmail.com",
  //   link: "mailto:hualong02072000@gmail.com",
  //   icon: MdMail,
  // },
];

export const carFees = {
  phiDkyBienso: 20000000,
  phiDuongbo: 1560000,
  phiDkiem: 90000,
  bhTNDS: 530700,
};

export const carNames: string[] = [
  "new mazda 2",
  "new mazda 2 sport",
  "new mazda cx-3",
  "new mazda 3",
  "new mazda3 sport",
  "new mazda cx-30",
  "new mazda 6",
  "new mazda cx-5 ipm",
  "new mazda cx-8",
  "new mazda bt-50",
];
