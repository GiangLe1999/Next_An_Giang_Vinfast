import FirstBanner from "@/components/first-banner";
import StyledAccordion from "@/components/styled-accordion";
import { linkConstants } from "@/data/constants";
import { warrantyData } from "@/data/warranty";

export const generateMetadata = () => {
  return {
    title: "Chính Sách Bảo Hành Xe VinFast 2025 - Cập Nhật Mới Nhất",
    description:
      "Tìm hiểu chi tiết chính sách bảo hành xe VinFast 2025: VinFast VF e34, VF 5, VF 6, VF 7, VF 8, VF 9,... tại VinFast An Giang. Thông tin đầy đủ, chính xác và mới nhất.",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}${linkConstants.warranty}`,
    },
  };
};

const Page = () => {
  return (
    <div>
      <FirstBanner
        heading="CHÍNH SÁCH BẢO HÀNH"
        subHeading="Tất cả các xe VinFast mua mới đều sẽ có chế độ bảo hành trong khoản thời gian nhất định bên cạnh các dịch vụ sửa chửa xe khi cần thiết. Thông tin chi tiết về chế độ bảo hành được hiển thị bên dưới."
        bgImg="/images/first-banners/bang-gia-xe-vinfast.webp"
        bgClasses="!bg-cover"
      />

      <div className="container my-12">
        <h2 className="text-center font-bold text-primary text-3xl pb-8">
          CHI TIẾT CHÍNH SÁCH BẢO HÀNH XE MỚI
        </h2>
        <StyledAccordion data={warrantyData} initialOpened={1} />
      </div>
    </div>
  );
};

export default Page;
