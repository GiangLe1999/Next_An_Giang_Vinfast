import Link from "next/link";
import { FC } from "react";
import { formatPrice } from "@/lib/formatData";
import NextImage from "../next-image";

interface Props {
  car: any;
}

const CarCard: FC<Props> = ({ car }) => {
  return (
    <div className="shadow-md bg-white rounded-sm overflow-hidden border">
      <Link
        href={"/" + car.slug}
        className="relative w-full main-image-ratio block overflow-hidden"
      >
        <NextImage
          src={car.avatar.url}
          alt={car.name}
          className="hover:scale-105"
        />
      </Link>

      <div>
        <div className="grid grid-cols-2 gap-6 pl-4 items-center">
          <h4>
            <Link
              className="text-[15px] text-textColor font-bold hover:text-primary transition"
              href={"/" + car.slug}
            >
              {car.name.toUpperCase()}
            </Link>
          </h4>

          <div>
            <span className="-ml-2 max-[355px]:text-sm">
              {formatPrice(car?.priceFrom)}
              <u>đ</u>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
