"use client";

import { Dispatch, FC, SetStateAction } from "react";
import FilterAccordion from "./filter-accordion";

interface Props {
  initialCars: any;
  setCars: Dispatch<SetStateAction<any[]>>;
  setFilterLoading: Dispatch<SetStateAction<boolean>>;
  filterLoading: boolean;
}

const Filter: FC<Props> = ({
  initialCars,
  setCars,
  setFilterLoading,
  filterLoading,
}) => {
  const accordionData = [
    {
      header: "line",
      items: initialCars?.map((car: any) => car.name),
    },
    {
      header: "price",
      items: [
        "Dưới 500 triệu",
        "500 triệu - 700 triệu",
        "700 triệu - 1 tỷ",
        "1 tỷ - 2 tỷ",
      ],
    },
  ];

  return (
    <div className="w-[28%] bg-[#F3F3F3] rounded-md p-4 h-fit max-[1000px]:w-full border shadow-md">
      <h3 className="text-xl font-bold text-center">BỘ LỌC</h3>
      <FilterAccordion
        data={accordionData}
        setCars={setCars}
        setFilterLoading={setFilterLoading}
        filterLoading={filterLoading}
      />
    </div>
  );
};

export default Filter;
