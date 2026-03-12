"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

const testimonialPairs = [
  {
    top: {
      id: 1,
      name: "Jane Cooper",
      role: "CEO of AI",
      text: "Ipsum integer faucibus eu morbi integer. Tempus in volutpat libero mauris neque dolor.",
    },
    bottom: {
      id: 2,
      name: "Georges Embolo",
      role: "Director",
      text: "Ipsum integer faucibus eu morbi integer. Tempus in volutpat libero mauris neque dolor. Pellentesque sagittis.",
    },
  },
  {
    top: {
      id: 3,
      name: "Brooklyn Simmons",
      role: "Manager",
      text: "Ipsum integer faucibus eu morbi integer. Tempus in volutpat libero mauris neque dolor. Pellentesque sagittis.",
    },
    bottom: {
      id: 4,
      name: "Jane Cooper",
      role: "Designer",
      text: "Ipsum integer faucibus eu morbi integer. Tempus in volutpat libero mauris neque dolor.",
    },
  },
  {
    top: {
      id: 5,
      name: "Leslie Alexander",
      role: "Founder",
      text: "Fantastic service! The team was very helpful and the results exceeded my expectations.",
    },
    bottom: {
      id: 6,
      name: "Guy Hawkins",
      role: "Developer",
      text: "The automation tools are a lifesaver. Highly recommend this to any creative professional.",
    },
  },
  {
    top: {
      id: 7,
      name: "Robert Fox",
      role: "Artist",
      text: "A game changer for music distribution. My tracks are now reaching a global audience easily.",
    },
    bottom: {
      id: 8,
      name: "Kristin Watson",
      role: "Creator",
      text: "Best platform for Punjabi creators. The support is top-notch and very fast.",
    },
  },
  {
    top: {
      id: 9,
      name: "Wade Warren",
      role: "Producer",
      text: "Smooth interface and very intuitive. I was able to manage my channel with zero hassle.",
    },
    bottom: {
      id: 10,
      name: "Jenny Wilson",
      role: "Marketing",
      text: "The paid promotions actually work! Saw a significant jump in my views and engagement.",
    },
  },
];
interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
}

const loopTestimonials = [...testimonialPairs, ...testimonialPairs];
const TestimonialCard = ({ item }: { item: Testimonial }) => (
  <div className="bg-[#F8F8F8] p-6 rounded-2xl w-full mb-6 last:mb-0  transition-all duration-300 ">
    <div className="flex items-center gap-3 mb-4">
      <div className="relative w-11 h-11 rounded-full overflow-hidden bg-gray-200 shrink-0">
        <img
          src={`https://i.pravatar.cc/150?u=${item.id}`}
          alt={item.name}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="text-left">
        <h4 className="font-bold text-gray-900 text-[15px] leading-tight">
          {item.name}
        </h4>
        <p className="text-[11px] text-gray-400 font-medium tracking-wide uppercase mt-1">
          {item.role}
        </p>
      </div>
    </div>
    <p className="text-gray-600 text-[13px] leading-[1.6] text-left">
      {item.text}
    </p>
  </div>
);

const Testimonials = () => {
  return (
    <div className="bg-white py-24 overflow-hidden  min-h-screen flex flex-col justify-center">
      {/* 1. Large Background Title (Watermark) */}
      <div className="flex  w-full text-center select-none pointer-events-none z-0">
        <h1 className="xl:text-[200px] md:text-[124px] text-[60px] font-bold text-black/10 leading-none tracking-tight mb-3">
          Testimonials
        </h1>
      </div>

      {/* 2. Header Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center mb-16">
        <h2 className="text-5xl xl:text-[64px] md:text-[48px] text-[32px] font-black text-gray-900 mb-6 tracking-tight">
          What Our Client&apos;s Say
        </h2>
        <p className="text-gray-500 xl:text-base md:text-sm text-sm  leading-relaxed max-w-2xl  font-normal px-4">
          Sub text: We help Punjabi artists and creators go global — with music
          distribution, YouTube channel management, paid promotions, and more!
        </p>
      </div>

      {/* 3. The Auto-Scroll Swiper */}
      <div className="relative z-10 w-full ">
        <Swiper
          modules={[Autoplay, FreeMode]}
          loop={true}
          loopAdditionalSlides={5}
          speed={8000}
          freeMode={{
            enabled: true,
            momentum: false,
          }}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          slidesPerView={1.2}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2.2, spaceBetween: 24 },
            1024: { slidesPerView: 3.2, spaceBetween: 30 },
            1280: { slidesPerView: 4.5, spaceBetween: 30 },
          }}
          className="testimonial-swiper `!ease-linear"
        >
          {loopTestimonials.map((pair, index) => (
            <SwiperSlide key={index} className="flex flex-col `!h-auto`">
              <TestimonialCard item={pair.top} />
              <TestimonialCard item={pair.bottom} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Global CSS for Smooth Transition */}
      <style jsx global>{`
        .testimonial-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
