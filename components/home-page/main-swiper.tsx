"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
import NextImage from "../next-image";
import { homeBanners } from "@/data";

export default function MainSwiper() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        className="homeSwiper"
      >
        {homeBanners?.map((banner: any, index: number) => (
          <SwiperSlide key={index}>
            <Link href={banner.link} className="relative w-full h-full block">
              <NextImage
                src={banner.image}
                alt={banner.title}
                priority={index === 0}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
