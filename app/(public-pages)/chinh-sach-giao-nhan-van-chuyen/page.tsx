import FirstBanner from "@/components/first-banner";
import StyledAccordion from "@/components/styled-accordion";
import { deliveryData } from "@/data/delivery";

export const generateMetadata = () => {
  return {
    title: "Chính sách giao nhận & vận chuyển",
    description:
      "Thông tin mới nhất về chính sách giao nhận & vận chuyển đối với sản phẩm xe Mazda tại website chính thức của Vinfast Suối Tiên.",
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/chinh-sach-giao-nhan-van-chuyen`,
  };
};

const Page = () => {
  return (
    <div>
      <FirstBanner
        heading="CHÍNH SÁCH GIAO NHẬN - VẬN CHUYỂN"
        subHeading="Thông tin chi tiết về chính sách Giao nhận - Vận chuyển tại Vinfast Suối Tiên."
        bgImg="/images/first-banners/bang-gia-xe-vinfast.webp"
        bgClasses="!bg-cover"
      />

      <div className="container my-12">
        <h2 className="text-center font-bold text-primary text-3xl pb-8">
          CHI TIẾT CHÍNH SÁCH GIAO NHẬN - VẬN CHUYỂN
        </h2>
        <StyledAccordion data={deliveryData} initialOpened={0} />
      </div>
    </div>
  );
};

export default Page;
