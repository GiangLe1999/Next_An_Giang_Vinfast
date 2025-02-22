import CarsTable from "@/components/admin-cars-page/cars-table";
import AdminCardTitle from "@/components/admin-card-title";
import { MdEditSquare } from "react-icons/md";
import { getAllCarsForAdmin } from "@/queries/car.query";

const Page = async () => {
  const cars = await getAllCarsForAdmin();

  return (
    <div className="admin-page-container">
      <div className="admin-card">
        <AdminCardTitle
          cardTitle="Danh Sách Xe"
          cardIconClasses="admin-main-gradient"
          icon={MdEditSquare}
          iconSize={22}
        />

        <CarsTable cars={cars} />
      </div>
    </div>
  );
};

export default Page;
