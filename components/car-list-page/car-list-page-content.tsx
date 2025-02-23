"use client";

import { FC, useState } from "react";
import FirstBanner from "../first-banner";
import Filter from "./filter";
import LoadingSpinner from "../loading-spinner";
import CarList from "./car-list";

interface Props {
  initialCars: any;
}

const CarListPageContent: FC<Props> = ({ initialCars }) => {
  const [cars, setCars] = useState<any[]>(initialCars);
  const [filterLoading, setFilterLoading] = useState(false);

  return (
    <>
      <div>
        <FirstBanner
          heading="BẢNG GIÁ"
          subHeading="Bảng giá chi tiết tất cả các dòng xe của Vinfast"
          bgImg="/images/bang-gia-xe/first-banner.webp"
          bgClasses="!bg-cover"
        />

        <div className="container">
          <div className="flex mt-8 mb-16 gap-7 max-[1000px]:flex-col">
            <Filter
              initialCars={initialCars}
              setCars={setCars}
              filterLoading={filterLoading}
              setFilterLoading={setFilterLoading}
            />
            {filterLoading ? (
              <div className="flex-1">
                <LoadingSpinner />
              </div>
            ) : (
              <CarList cars={cars} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CarListPageContent;
