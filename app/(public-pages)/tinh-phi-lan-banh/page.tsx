import CarPriceSection from "@/components/car-page/CarPriceSection";
import FirstBanner from "@/components/first-banner";
import { getAllCarsName } from "@/queries/car.query";

export const generateMetadata = () => {
  return {
    title: "Tính phí lăn bánh Ô tô Mazda 2023",
    description:
      "Cách tính và bảng tính phí lăn bánh Ô tô Mazda chính xác nhất 2023.Tham khảo tại Website Mazda Thủ Đức.",
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/tinh-phi-lan-banh`,
  };
};

const Page = async () => {
  const carNameArr = await getAllCarsName();

  return (
    <div>
      <FirstBanner
        heading="TÍNH PHÍ LĂN BÁNH MAZDA 2023"
        subHeading="Cập nhật chính xác nhất giá lăn bánh các dòng xe của Vinfast"
        bgImg="/images/first-banners/bang-gia-xe-vinfast.webp"
        bgClasses="!bg-cover"
      />

      <div className="container py-12">
        <CarPriceSection
          carNameArr={carNameArr.map((car: any) => car.name)}
          isInstallmentPage
        />
      </div>
    </div>
  );
};

export default Page;
