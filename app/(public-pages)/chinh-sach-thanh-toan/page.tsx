import FirstBanner from "@/components/first-banner";
import StyledAccordion from "@/components/styled-accordion";
import { paymentData } from "@/data/payment";

export const generateMetadata = () => {
  return {
    title: "Chính sách thanh toán",
    description:
      "Thông tin mới nhất về chính sách thanh toán sản phẩm xe Mazda tại website chính thức của Mazda Thủ Đức.",
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/chinh-sach-thanh-toan`,
  };
};

const Page = () => {
  return (
    <div>
      <FirstBanner
        heading="CHÍNH SÁCH THANH TOÁN"
        subHeading="Thông tin chi tiết về quy trình thanh toán tại Vinfast."
        bgImg="/images/first-banners/bang-gia-xe-vinfast.webp"
        bgClasses="!bg-cover"
      />

      <div className="container my-12">
        <h2 className="text-center font-bold text-primary text-3xl pb-8">
          CHI TIẾT CHÍNH SÁCH THANH TOÁN
        </h2>
        <StyledAccordion data={paymentData} initialOpened={0} />
      </div>
    </div>
  );
};

export default Page;
