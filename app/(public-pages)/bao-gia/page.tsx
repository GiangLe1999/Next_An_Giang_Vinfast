import FirstBanner from "@/components/first-banner";
import QuickConsultForm from "@/components/public-layout/quick-consult-form";

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
