import React from "react";
import Image from "next/image";
import { Images } from "@/public/exports";
import Link from "next/link";

const WhatWeDoArtistManagement = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
        
        {/* Left Side: Illustration */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={Images.ArtistImg2}
            alt="What We Do in Artist Management"
            className="w-full max-w-[500px] h-auto object-contain"
            priority
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-[#111111] leading-[1.1] mb-6">
            What We Do in <br className="hidden md:block" /> Artist Management
          </h2>
          
          <h3 className="text-[#111111] font-bold text-base md:text-lg mb-4">
            We don&lsquo;t just manage your music we manage your entire career
          </h3>
          
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-10 max-w-lg">
            Amozart help artists grow their music careers with clear strategy, smart planning, and complete management support. From branding to release guidance, promotions, and industry connections. We handle the work behind the scenes so you can focus on making great music.
          </p>
          
          <Link
            href="/apply"
            className="inline-flex items-center justify-center px-10 py-3.5 rounded-full bg-[#6c48d3] text-white font-bold text-sm md:text-base hover:bg-[#5939b4] hover:shadow-lg transition-all duration-300"
          >
            Apply Now
          </Link>
        </div>

      </div>
    </section>
  );
};

export default WhatWeDoArtistManagement;
