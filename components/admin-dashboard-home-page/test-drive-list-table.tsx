"use client";

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { formatShortDate } from "@/lib/formatData";
import { initialDateRange, initialFilter } from "./filter-initial-data";
import { getAllTestDrives } from "@/queries/test-drive.query";
import RowSkeleton from "./row-skeleton";
import TestDriveListTableFooter from "./test-drive-list-table-footer";
import TestDriveStatus from "./test-drive-status";
import TestDriveListTableHeader from "./test-drive-list-table-header";

const TestDriveListTable = () => {
  const [isClient, setIsClient] = useState(false);

  const [keyword, setKeyword] = useState("");

  const [dateRange, setDateRange] = useState<any>(initialDateRange);

  const startDate = dateRange[0].startDate;
  const endDate = dateRange[0].endDate;

  const [filter, setFilter] = useState(initialFilter);

  const [limit, setLimit] = useState(15);

  const [currentPage, setCurrentPage] = useState(1);

  const { data, isPending } = useQuery({
    queryKey: [
      `admin-test-drives`,
      keyword,
      startDate,
      endDate,
      filter,
      limit,
      currentPage,
    ],
    queryFn: () =>
      getAllTestDrives({
        keyword,
        startDate,
        endDate,
        ...(filter.carLines.length > 0 && { carLines: filter.carLines }),
        ...(filter.carNames.length > 0 && { carNames: filter.carNames }),
        ...(filter.statuses.length > 0 && { statuses: filter.statuses }),
        limit,
        currentPage,
      }),
  });

  console.log(data?.data);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="admin-card pt-6">
      <h2 className="font-bold text-xl mx-6">Khách hàng muốn lái thử</h2>

      <TestDriveListTableHeader
        keyword={keyword}
        setKeyword={setKeyword}
        dateRange={dateRange}
        setDateRange={setDateRange}
        data={data?.data || []}
        filter={filter}
        setFilter={setFilter}
      />
      <div className="overflow-x-scroll no-scrollbar">
        {isClient && (
          <table className="admin-table w-full text-sm">
            <thead>
              <tr>
                <th className="text-center border border-l-0">STT</th>
                <th className="border text-left pl-3 min-w-[200px] md:min-w-auto">
                  Họ & Tên
                </th>
                <th className="border text-left pl-3 min-w-[200px] md:min-w-auto">
                  Email
                </th>
                <th className="border text-left pl-3 min-w-[200px] md:min-w-auto">
                  SĐT
                </th>
                <th className="border text-left pl-3 min-w-[200px] md:min-w-auto">
                  Dòng xe
                </th>
                <th className="border text-left pl-3 min-w-[200px] md:min-w-auto">
                  Phiên bản
                </th>
                <th className="border text-left pl-3 min-w-[200px] md:min-w-auto">
                  Tin nhắn
                </th>
                <th className="border text-left pl-3 min-w-[200px] md:min-w-auto">
                  Ngày
                </th>
                <th className="border text-left pl-3 min-w-[200px] md:min-w-auto">
                  Trạng thái
                </th>
              </tr>
            </thead>
            {isPending ? (
              <tbody>
                {[...Array(8).keys()].map((item) => (
                  <tr key={item}>
                    <td colSpan={11}>
                      <RowSkeleton />
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <tbody>
                {data?.data?.map((testDrive: any, index: number) => (
                  <tr key={index}>
                    <td className="text-center border border-l-0 !pl-0">
                      {index + 1 + limit * (currentPage - 1)}
                    </td>
                    <td className="border">{testDrive.name}</td>
                    <td className="border">{testDrive.email}</td>
                    <td className="border">{testDrive.phone}</td>
                    <td className="border">{testDrive.carName}</td>
                    <td className="border max-w-[250px] pr-2">
                      {testDrive?.carLine}
                    </td>
                    <td
                      className="border max-w-[300px] pr-2"
                      style={{ wordWrap: "anywhere" as any }}
                    >
                      {testDrive?.content}
                    </td>
                    <td className="border">
                      {formatShortDate(testDrive?.createdAt)}
                    </td>
                    <td className="border border-r-0">
                      <TestDriveStatus
                        initialStatus={testDrive?.status}
                        testDriveId={testDrive._id}
                        keyword={keyword}
                        startDate={startDate}
                        endDate={endDate}
                        filter={filter}
                        limit={limit}
                        currentPage={currentPage}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        )}
      </div>
      <TestDriveListTableFooter
        limit={limit}
        setLimit={setLimit}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalDocuments={data?.totalDocuments}
        totalPages={data?.totalPages}
      />
    </div>
  );
};

export default TestDriveListTable;
