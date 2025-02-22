"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import NextImage from "../next-image";

const CustomerSwiper = () => {
  return (
    <div className="pt-5 pb-8">
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={{
          0: { slidesPerView: 2 },
          760: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="customerSwiper"
      >
        <SwiperSlide>
          <div className="relative w-full aspect-square rounded-sm overflow-hidden">
            <NextImage
              src={`/images/home/customers/giao-xe-vinfast-toi-khach-hang-1.webp`}
              alt={`Giao xe Vinfast tới khách hàng 1`}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full aspect-square rounded-sm overflow-hidden">
            <NextImage
              src={`/images/home/customers/giao-xe-vinfast-toi-khach-hang-2.webp`}
              alt={`Giao xe Vinfast tới khách hàng 2`}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full aspect-square rounded-sm overflow-hidden">
            <NextImage
              src={`/images/home/customers/giao-xe-vinfast-toi-khach-hang-3.webp`}
              alt={`Giao xe Vinfast tới khách hàng 3`}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full aspect-square rounded-sm overflow-hidden">
            <NextImage
              src={`/images/home/customers/giao-xe-vinfast-toi-khach-hang-4.webp`}
              alt={`Giao xe Vinfast tới khách hàng 4`}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full aspect-square rounded-sm overflow-hidden">
            <NextImage
              src={`/images/home/customers/giao-xe-vinfast-toi-khach-hang-5.webp`}
              alt={`Giao xe Vinfast tới khách hàng 5`}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CustomerSwiper;
