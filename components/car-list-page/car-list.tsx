"use client";

import { FC } from "react";
import { formatPrice } from "@/lib/formatData";
import Link from "next/link";
import { linkConstants } from "@/data/constants";
import NextImage from "../next-image";
import { GiSteeringWheel } from "react-icons/gi";
import BtnWithIcon from "../btn-with-icon";
import ContainNextImage from "../contain-next-image";

interface Props {
  cars: any[];
}

const CarList: FC<Props> = ({ cars }) => {
  return (
    <div className="mt-2 flex-1">
      {Array.isArray(cars) ? (
        cars.map((car) => (
          <div key={car._id.toString()} className="mb-16">
            <h2 className="font-bold text-xl border-b py-1 mb-5 hover:text-primary transition">
              <Link href={`/${car.slug}`}>VinFast {car.name}</Link>
            </h2>
            <div className="flex items-center gap-4 max-[779px]:flex-col">
              <Link
                href={`/${car.slug}`}
                className="relative w-[30%] main-image-ratio max-[779px]:w-[80%] max-[545px]:w-full"
              >
                <ContainNextImage
                  src={car.avatar?.url}
                  alt={car.name}
                  className="hover:scale-110 transition-transform duration-500 mt-4"
                />
              </Link>

              <div className="flex-1 space-y-8 max-[779px]:w-full">
                {car?.carLines?.map((line: any, index: number) => (
                  <div
                    className="flex items-center gap-x-8 gap-y-3 max-[1000px]:text-base max-[615px]:text-sm text-xs max-[545px]:flex-col max-[545px]:text-base"
                    key={index}
                  >
                    <h3 className="w-[40%] truncate font-bold max-[545px]:w-full">
                      VinFast {line.name}
                    </h3>
                    <div className="w-[35%] max-[545px]:w-full">
                      Giá: {formatPrice(line.price)} VNĐ
                    </div>
                    <BtnWithIcon
                      icon={GiSteeringWheel}
                      iconSize={14}
                      to={linkConstants.testDrive}
                      customClasses="w-1/4 bg-primary text-white !p-2 max-[545px]:w-full"
                      content="Đăng ký lái thử"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))
      ) : (
        <>
          <div className="relative w-[80%] aspect-[798/243] mx-auto">
            <NextImage
              src="/images/bao-gia/found-no-car.jpg"
              alt="Không tìm thấy xe phù hợp"
            />
          </div>
          <p className="text-center font-bold text-primary text-xl">
            Không tìm thấy xe phù hợp!
          </p>
        </>
      )}
    </div>
  );
};

export default CarList;
