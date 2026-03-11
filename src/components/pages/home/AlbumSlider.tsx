"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import Image from "next/image";
import { Icons, Images } from "@/public/exports";

const slides = [
  Images.SlideOne,
  Images.SlideTwo,
  Images.AlbumThree,
  Images.SlideTwo,
  Images.SlideOne,
  Images.SlideTwo,
  Images.AlbumThree,
];

export default function AlbumSlider() {
  return (
    <>
      <div className="relative w-full xl:py-20 md:py-10 md:flex hidden">
        <Swiper
          modules={[Navigation, Autoplay]}
          effect={"fade"}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          slidesPerView={3}
          spaceBetween={24}
          loop
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            750: {
              spaceBetween: 13,
            },
            1280: {
              spaceBetween: 24,
            },
          }}
          className="customSwiper xl:h-113 md:h-65.5"
        >
          {slides.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="slideCard">
                <Image
                  src={img}
                  alt={`${img}`}
                  className="w-full xl:rounded-2xl rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute xl:bottom-20 bottom-7 right-0 w-3/5 flex justify-between items-center xl:gap-x-15 md:gap-x-10">
          {/* Gradient Left Arrow */}
          <div className="swiper-button-prev relative! w-full!">
            <Image src={Icons.LeftArrow} alt="left" className="w-full" />
          </div>
          {/* Gradient Right Arrow */}
          <div className="swiper-button-next relative! w-full!">
            <Image src={Icons.RightArrow} alt="left" className="w-full" />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex flex-row h-full">
        <Swiper
          effect={"coverflow"}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          centeredSlides
          slidesPerView={1.3}
          spaceBetween={10}
          loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          grabCursor
          updateOnWindowResize
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay, EffectCoverflow]}
          className="mySwiper"
        >
          {slides.map((img, i) => (
            <SwiperSlide key={i}>
              <Image
                src={img}
                className="w-full h-81.75 object-cover rounded-lg"
                alt="poster"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
