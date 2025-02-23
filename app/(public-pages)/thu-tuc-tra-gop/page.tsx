import InstallmentPageContent from "@/components/installment-page/installment-page-content";
import { getAllCarsName } from "@/queries/car.query";

export const generateMetadata = () => {
  return {
    title: "Thủ tục trả góp",
    description:
      "Tìm hiểu thông tin về thủ tục trả góp đối với sản phẩm xe Mazda một cách chính xác nhất tại Mazda Thủ Đức.",
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/thu-tuc-tra-gop`,
  };
};

const Page = async () => {
  const carNameArr = await getAllCarsName();

  return (
    <InstallmentPageContent
      carNameArr={carNameArr.map((car: any) => car.name)}
    />
  );
};

export default Page;
