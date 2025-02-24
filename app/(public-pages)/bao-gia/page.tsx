import FirstBanner from "@/components/first-banner";
import QuickConsultForm from "@/components/public-layout/quick-consult-form";
import { linkConstants } from "@/data/constants";

export const generateMetadata = () => {
  return {
    title: "Đăng Ký Báo Giá Xe Vinfast 2025 - Vinfast Suối Tiên",
    description:
      "Đăng ký ngay để nhận báo giá xe VinFast 2025 mới nhất tại Vinfast Suối Tiên. Nhận thông tin chi tiết về giá bán, ưu đãi và chương trình khuyến mãi độc quyền.",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}${linkConstants.requireQuotation}`,
    },
  };
};

const RequireQuotationPage = () => {
  return (
    <div>
      <FirstBanner
        heading="ĐĂNG KÝ NHẬN BÁO GIÁ"
        subHeading="Đăng ký và đặt lịch lái thử dòng xe bạn mong muốn tại đại lý gần nhất."
        bgImg="/images/first-banners/bang-gia-xe-vinfast.webp"
        bgClasses="!bg-cover"
      />

      <div className="container my-12">
        <QuickConsultForm />
      </div>
    </div>
  );
};

export default RequireQuotationPage;
