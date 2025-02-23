import FirstBanner from "@/components/first-banner";
import NextImage from "@/components/next-image";
import TestDriveForm from "@/components/test-drive-page/test-drive-form";
import { getAllCarLines } from "@/queries/car.query";

export type CarLinesType = {
  name: string;
  carLines: any[];
};

const Page = async () => {
  const carLines = await getAllCarLines();

  return (
    <div>
      <FirstBanner
        heading="ĐĂNG KÝ LÁI THỬ"
        subHeading="Đăng ký và nhận bảng báo giá mới nhất cho dòng xe mà bạn quan tâm."
        bgImg="/images/first-banners/bang-gia-xe-vinfast.webp"
        bgClasses="!bg-[50%_50%] !bg-cover"
      />

      <div className="container my-12">
        <div className="customer-form-wrapper">
          <div className="relative w-full h-full">
            <NextImage
              src="/images/test-drive/lai-thu-vinfast-vf8-tai-vinfast-suoi-tien.webp"
              alt="Lái thử Mazda"
            />
          </div>

          <TestDriveForm carLines={carLines} />
        </div>
      </div>
    </div>
  );
};

export default Page;
