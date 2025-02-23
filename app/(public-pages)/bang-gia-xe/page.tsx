import CarListPageContent from "@/components/car-list-page/car-list-page-content";
import { getAllCarsForHomepage } from "@/queries/car.query";

const Page = async () => {
  const initialCars = await getAllCarsForHomepage();

  return <CarListPageContent initialCars={initialCars} />;
};

export default Page;
