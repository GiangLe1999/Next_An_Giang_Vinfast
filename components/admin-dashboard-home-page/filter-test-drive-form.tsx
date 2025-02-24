"use client";

import { Dispatch, FC, SetStateAction } from "react";

interface Props {
  carNames: any;
  carLines: any;
  statuses: any;
  filter: any;
  setFilter: Dispatch<SetStateAction<any>>;
}

const FilterTestDriveForm: FC<Props> = ({
  carNames,
  carLines,
  statuses,
  filter,
  setFilter,
}) => {
  console.log(carNames);

  return (
    <div className="admin-card-body">
      <div className="grid grid-cols-4 gap-3">
        <div>
          <span className="text-sm font-bold">Trạng thái</span>
          <ul className="mt-1">
            {statuses?.map((status: string) => {
              if (status)
                return (
                  <label
                    key={status}
                    className="flex items-center gap-2 py-2 text-xs cursor-pointer truncate leading-none"
                    htmlFor={status}
                  >
                    <input
                      type="checkbox"
                      name="status"
                      checked={filter.statuses.includes(status)}
                      id={status}
                      className="cursor-pointer accent-red-700 leading-none"
                      onChange={() => {
                        if (filter.statuses.includes(status)) {
                          return setFilter((prev: any) => ({
                            ...prev,
                            statuses: prev.statuses.filter(
                              (item: any) => item !== status
                            ),
                          }));
                        }

                        setFilter((prev: any) => ({
                          ...prev,
                          statuses: [...prev.statuses, status],
                        }));
                      }}
                      // disabled
                    />
                    {status}
                  </label>
                );
            })}
          </ul>
        </div>

        <div>
          <span className="text-sm font-bold">Dòng xe</span>
          <ul className="mt-1">
            {carNames?.map((carName: string) => {
              if (carName)
                return (
                  <label
                    key={carName}
                    className="flex items-center gap-2 py-2 text-xs cursor-pointer truncate leading-none"
                    htmlFor={carName}
                  >
                    <input
                      type="checkbox"
                      name="carName"
                      checked={filter.carNames.includes(carName)}
                      id={carName}
                      className="cursor-pointer accent-red-700 leading-none"
                      onChange={() => {
                        if (filter.carNames.includes(carName)) {
                          return setFilter((prev: any) => ({
                            ...prev,
                            carNames: prev.carNames.filter(
                              (item: any) => item !== carName
                            ),
                          }));
                        }

                        setFilter((prev: any) => ({
                          ...prev,
                          carNames: [...prev.carNames, carName],
                        }));
                      }}
                      // disabled
                    />
                    {carName}
                  </label>
                );
            })}
          </ul>
        </div>

        <div>
          <span className="text-sm font-bold">Phiên bản</span>
          <ul className="mt-1">
            {carLines?.map((carLine: string) => {
              if (carLine)
                return (
                  <label
                    key={carLine}
                    className="flex items-center gap-2 py-2 text-xs cursor-pointer truncate leading-none"
                    htmlFor={carLine}
                  >
                    <input
                      type="checkbox"
                      name="carLine"
                      checked={filter.carLines.includes(carLine)}
                      id={carLine}
                      className="cursor-pointer accent-red-700 leading-none"
                      onChange={() => {
                        if (filter.carLines.includes(carLine)) {
                          return setFilter((prev: any) => ({
                            ...prev,
                            carLines: prev.carLines.filter(
                              (item: any) => item !== carLine
                            ),
                          }));
                        }

                        setFilter((prev: any) => ({
                          ...prev,
                          carLines: [...prev.carLines, carLine],
                        }));
                      }}
                      // disabled
                    />
                    {carLine}
                  </label>
                );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterTestDriveForm;
