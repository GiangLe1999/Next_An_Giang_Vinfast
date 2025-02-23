import { FC } from "react";
import SectionTitle from "./section-title";
import { formatPrice } from "@/lib/formatData";
import ContainNextImage from "../contain-next-image";
import Link from "next/link";

interface Props {
  cars: any[];
}

const PriceTableSection: FC<Props> = ({ cars }) => {
  return (
    <section>
      <p className="text-textColor text-center font-bold text-sm mb-2">
        BẢNG GIÁ XE
      </p>
      <SectionTitle title="VINFAST 2025" />

      <div className="overflow-x-auto mt-14">
        <div
          style={{ scrollbarWidth: "thin" }}
          className="overflow-x-scroll rounded-md border"
        >
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-secondary text-white">
                <th className="p-3 text-center">Xe Vinfast</th>
                <th className="p-3 text-center">Giá thấp nhất</th>
                <th className="p-3 text-center">Trả góp</th>
              </tr>
            </thead>
            <tbody>
              {cars.map((car, index) => (
                <tr key={index} className="border-t">
                  <td className="p-3">
                    <Link
                      href={`/${car.slug}`}
                      className="flex flex-col justify-center items-center group"
                    >
                      <div className="block relative w-20 aspect-video p-10 group-hover:scale-110 transition-transform duration-500">
                        <ContainNextImage src={car.avatar.url} alt={car.name} />
                      </div>
                      <p className="font-semibold text-sm">
                        Vinfast {car.name}
                      </p>
                    </Link>
                  </td>
                  <td className="p-3 text-center">
                    {formatPrice(car?.priceFrom)}đ
                  </td>
                  <td className="p-3 text-center text-primary font-semibold">
                    {formatPrice(car?.installmentPrice)}
                    <u>đ</u>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PriceTableSection;
