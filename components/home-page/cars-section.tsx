import { FC } from "react";
import SectionTitle from "./section-title";
import CarCard from "./car-card";

interface Props {
  cars: any[];
}

const CarsSection: FC<Props> = ({ cars }) => {
  return (
    <section>
      <div className="container py-10">
        <p className="text-textColor text-center font-bold text-sm mb-2">
          DÒNG XE KINH DOANH TẠI
        </p>
        <SectionTitle title="VINFAST SUỐI TIÊN" />

        <div className="mt-10 grid grid-cols-3 gap-x-16 gap-y-12 py-8 max-[982px]:grid-cols-2 max-[680px]:grid-cols-1">
          {cars?.map((car) => (
            <CarCard car={car} key={car._id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarsSection;
