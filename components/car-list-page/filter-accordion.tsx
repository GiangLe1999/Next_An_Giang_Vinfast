"use client";

import { FC, useEffect, useState, Dispatch, SetStateAction } from "react";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { FiChevronDown } from "react-icons/fi";

/**
 * @type {React.ExoticComponent<import('@szhsin/react-accordion').AccordionItemProps>}
 */

interface ItemsProps {
  header: any;
  children: any;
  initialEntered?: boolean;
}

const AccordionItem: FC<ItemsProps> = ({ header, ...rest }) => {
  let headerLabel = "";
  switch (header) {
    case "line":
      headerLabel = "dòng xe";
      break;
    case "price":
      headerLabel = "khoảng giá";
      break;
    default:
      headerLabel = "";
  }

  return (
    <Item
      {...rest}
      header={({ state: { isEnter } }) => (
        <div className="flex justify-between items-center w-full">
          <span className="block font-bold uppercase">{headerLabel}</span>
          <FiChevronDown
            className={`ml-auto transition-transform duration-200 ease-out w-3 h-3 ${
              isEnter && "rotate-180"
            }`}
          />
        </div>
      )}
      className="border-b"
      buttonProps={{
        className: ({ isEnter }) =>
          `flex w-full p-4 text-left ${isEnter && "bg-[#E8E8E8]"}`,
      }}
      contentProps={{
        className: "transition-height duration-300 ease-out",
      }}
      panelProps={{ className: "p-4" }}
    />
  );
};

interface Props {
  data: { header: string; items: string[] }[];
  setCars: Dispatch<SetStateAction<any[]>>;
  setFilterLoading: Dispatch<SetStateAction<boolean>>;
  filterLoading: boolean;
}

const initialQuery = {
  price: [],
};

import { useQuery } from "@tanstack/react-query";
import { getFilteredCars } from "@/queries/car.query";

const FilterAccordion: FC<Props> = ({
  data,
  setCars,
  setFilterLoading,
  filterLoading,
}) => {
  const [query, setQuery] = useState<any>(initialQuery);

  const inputChangeHandler = (name: string, value: string) => {
    setQuery((prevQuery: any) => {
      const newQuery = { ...prevQuery };
      if (newQuery[name]?.includes(value)) {
        newQuery[name] = newQuery[name].filter((item: any) => item !== value);
      } else {
        if (!newQuery[name]) {
          newQuery[name] = [];
        }
        newQuery[name].push(value);
      }
      return newQuery;
    });
  };

  const { data: cars, isFetching } = useQuery({
    queryKey: ["filteredCars", query],
    queryFn: () => getFilteredCars(query),
    // Add these options for better control
    refetchOnWindowFocus: false, // Prevent refetch on window focus
    enabled: true, // Query will run automatically when query changes
  });

  useEffect(() => {
    setFilterLoading(isFetching);
    if (cars) setCars(cars);
  }, [cars, isFetching, setCars, setFilterLoading]);
  return (
    <div className="my-4 border-t">
      {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
      <Accordion transition allowMultiple transitionTimeout={300}>
        {data.map((group, index) => (
          <AccordionItem header={group.header} key={index} initialEntered>
            <ul className={index === 0 ? "uppercase" : "capitalize"}>
              {group.items?.map((item, i) => (
                <label
                  key={i}
                  className="flex items-center gap-2 py-2 text-sm cursor-pointer truncate"
                  htmlFor={item}
                >
                  <input
                    type="checkbox"
                    name={group.header}
                    checked={(query as any)?.[group.header as any]?.includes(
                      item
                    )}
                    id={item}
                    className="cursor-pointer"
                    onChange={() => inputChangeHandler(group.header, item)}
                    disabled={filterLoading}
                  />
                  {item}
                </label>
              ))}
            </ul>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FilterAccordion;
