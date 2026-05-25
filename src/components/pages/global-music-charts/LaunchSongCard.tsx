"use client";

import React from "react";
import Image from "next/image";
import { Images } from "@/public/exports";

const LaunchSongCard = () => {
  return (
    <div className="w-full  bg-slate-100 flex items-center justify-center xl:py-34 xl:px-23.25 md:py-20 md:px-10 py-10 px-6">
      {/* Main Card Container */}
      <div className="relative w-full  bg-primary rounded-4xl p-8 md:p-14 flex flex-col md:flex-row md:items-center md:justify-between overflow-hidden shadow-xl">
        
        {/* Background "Pricing" Text (Mobile me hide, Desktop me top-left) */}
        <div className="absolute xl:-left-5 xl:-top-5 md:-left-1 md:-top-2  select-none pointer-events-none hidden md:block opacity-[0.08] xl:text-[200px] md:text-[100px] font-black text-white leading-none  ">
          Pricing
        </div>

        {/* Left/Top Content Area */}
        <div className="w-full md:w-[55%] flex flex-col items-center md:items-start text-center md:text-left z-10">
          <h2 className="text-white text-[28px] xl:text-[60px]  md:text-[30px] font-bold  xl:leading-18 md:leading-10 mb-6 md:mb-8 xl:mt-26 md:mt-10">
            Launch Your <br className="hidden md:block" /> Song to Global Charts
          </h2>
{/* 
          <p className="text-white/80 text-sm md:text-base font-medium tracking-wide mb-8 md:mb-10">
            For All Music Label Artist For Only{" "}
            <span className="text-white font-bold text-lg md:text-xl ml-1">
              Rs 8999
            </span>
          </p> */}

          <button className="bg-white text-[#6c3cc1] font-bold text-sm md:text-base px-10 md:px-12 py-3.5 rounded-full shadow-md hover:bg-opacity-95 active:scale-95 transition-all duration-200">
            Buy Now
          </button>
        </div>

        {/* Right/Bottom Image Area */}
        <div className="w-full md:w-[60%] flex justify-center items-center mt-10 md:mt-0 z-10">
          <div className="relative w-65 h-65 xl:w-131 xl:h-131 md:w-90 md:h-90 transition-transform duration-300 hover:scale-105">
            <Image
              src={Images.Price}
              alt="3D Launch Icon"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchSongCard;