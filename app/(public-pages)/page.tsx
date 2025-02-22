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
const ReasonsSection = dynamicImport(
  () => import("@/components/home-page/reasons-section")
);
// const AboutSection = dynamicImport(
//   () => import("@/components/home-page/about-section")
// );
// const PostsSection = dynamicImport(
//   () => import("@/components/home/PostsSection")
// );
// const QuoteSection = dynamicImport(
//   () => import("@/components/home/QuoteSection")
// );

// const SupportBuyersSection = dynamicImport(
//   () => import("@/components/home/SupportBuyersSection")
// );

// const GoogleMaps = dynamicImport(() => import("@/components/home/GoogleMaps"), {
//   ssr: false,
// });

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
          <ReasonsSection />
          {/* <AboutSection /> */}
          {/* <SupportBuyersSection />
          <QuoteSection />
          <PostsSection />
          <GoogleMaps />  */}
        </div>
      </main>

      <HomeQuickConsultModal />
    </>
  );
}
