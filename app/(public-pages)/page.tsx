import MainSwiper from "@/components/home-page/main-swiper";
import MainOptions from "@/components/home-page/main-options";
import { pageConstants } from "@/data/constants";
import { getAllCarsForHomepage } from "@/queries/car.query";

import dynamicImport from "next/dynamic";
import PromotionSection from "@/components/home-page/promotion-section";
const HomeQuickConsultModal = dynamicImport(
  () => import("@/components/public-layout/home-quick-consult-modal")
);

const CarsSection = dynamicImport(
  () => import("@/components/home-page/cars-section")
);

const SupportBuyersSection = dynamicImport(
  () => import("@/components/home-page/support-buyers-section")
);

const PriceTableSection = dynamicImport(
  () => import("@/components/home-page/price-table-section")
);

const ReasonsSection = dynamicImport(
  () => import("@/components/home-page/reasons-section")
);

// const PostsSection = dynamicImport(
//   () => import("@/components/home/PostsSection")
// );

const QuoteSection = dynamicImport(
  () => import("@/components/home-page/quote-section")
);

const GoogleMaps = dynamicImport(
  () => import("@/components/home-page/google-maps")
);

export const generateMetadata = () => {
  return {
    title: "Xe Mazda chính hãng",
    description: pageConstants.siteDescription,
    alternates: {
      canonical: process.env.NEXT_PUBLIC_BASE_URL,
    },
  };
};

export default async function Home() {
  const cars = (await getAllCarsForHomepage()) as any[];

  return (
    <>
      <main>
        <MainSwiper />

        <div className="mt-4">
          <MainOptions />
          <PromotionSection />
          <CarsSection cars={cars} />
          <SupportBuyersSection />
          <PriceTableSection cars={cars} />
          <ReasonsSection />
          {/* 
          <PostsSection />
          */}
          <QuoteSection />
          <GoogleMaps />
        </div>
      </main>

      <HomeQuickConsultModal />
    </>
  );
}
