import AdminCardTitle from "@/components/admin-card-title";
import { getAllCarsForAdmin, getCarBySlug } from "@/queries/car.query";
import { MdEditSquare } from "react-icons/md";
import EditCarForm from "@/components/admin-cars-page/edit-car-form";

export async function generateStaticParams() {
  const cars = await getAllCarsForAdmin();

  const carsSlugs = cars?.map((car: any) => ({
    slug: car.slug,
  }));

  return carsSlugs;
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const car = await getCarBySlug(slug);

  if (!car) {
    return <p className="text-center text-red-500">Xe không tồn tại.</p>;
  }

  return (
    <div className="admin-page-container">
      <div className="admin-card">
        <AdminCardTitle
          cardTitle="Cập nhật thông tin xe"
          cardIconClasses="admin-main-gradient"
          icon={MdEditSquare}
          iconSize={22}
        />

        <EditCarForm car={car} />
      </div>
    </div>
  );
}
