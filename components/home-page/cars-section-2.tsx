import { FC } from "react";
import SectionTitle from "./section-title";
import CarCard from "./car-card";

interface Props {
  cars: any[];
}

const CarsSection2: FC<Props> = ({ cars }) => {
  return (
    <section>
      <div className="container pt-10 pb-20">
        <p className="text-textColor text-center font-bold text-sm mb-2">
          TỐI ƯU CHO DỊCH VỤ VẬN TẢI
        </p>
        <SectionTitle title="VINFAST GREEN" />

        <div className="mt-6 grid grid-cols-3 gap-4 py-8 max-[982px]:grid-cols-2 max-[680px]:grid-cols-1">
          {cars?.slice(0, 4).map((car) => (
            <CarCard car={car} key={car._id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarsSection2;
