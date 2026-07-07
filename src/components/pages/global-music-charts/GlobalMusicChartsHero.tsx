import React from "react";
import Image from "next/image";
import { Images } from "@/public/exports";
import Link from "next/link";

const GlobalMusicChartsHero = () => {
  return (
    <section className="w-full bg-black xl:pt-37.5 md:pt-20 overflow-hidden relative min-h-[90vh] flex flex-col justify-center">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-[100px] h-[200px] xl:w-[255px] xl:h-[255px] pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="618"
          height="803"
          viewBox="0 0 618 803"
          fill="none"
        >
          <g filter="url(#filter0_f_2445_81327)">
            <circle
              cx="170.5"
              cy="355.5"
              r="127.5"
              fill="#6739B7"
              style={{ fill: "#6739B7", fillOpacity: 1 }}
            />
          </g>
          <defs>
            <filter
              id="filter0_f_2445_81327"
              x="-277"
              y="-92"
              width="895"
              height="895"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="160"
                result="effect1_foregroundBlur_2445_81327"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="absolute -bottom-20 -left-20 w-125 h-125 bg-[#6739b7]/10 rounded-full blur-[1000px] pointer-events-none" />

      <div className="max-w-360 mx-auto px-6 md:px-12 xl:px-20 w-full relative z-10 grow flex items-center mt-[116px] md:mt-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 w-full">
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col md:items-start items-center md:text-start text-center space-y-3">
            <span className="text-[#7b42f6] uppercase tracking-widest text-sm xl:text-[22px] md:text-[15px] font-bold mb-1 block">
              Global Music Chart Tracking Service
            </span>
            <h1 className="text-3xl md:text-5xl xl:text-[54px] font-extrabold text-white xl:leading-tight leading-tight">
              Global Music Charts for Independent Artists
            </h1>
            <p className="text-gray-300 text-sm md:text-base xl:text-lg max-w-lg mb-8 font-light leading-relaxed">
              Monitor your music performance across worldwide music charts in real time — and take every decision that grows your career with actual data behind it.
            </p>
            <Link
              href="/services"
              className="bg-[#7b42f6] hover:bg-[#6833d6] text-white px-10 py-4.5 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(123,66,246,0.4)]"
            >
              Track My Music Now
            </Link>
          </div>

          {/* Right Image Content */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[600px] aspect-square animate-float-bob">
              <div className="absolute inset-0 bg-[#7b42f6]/20 rounded-full blur-[100px] -z-10" />
              <Image
                src={Images.GlobalChartsGlobe}
                alt="Global Music Charts Globe"
                layout="fill"
                objectFit="contain"
                className="drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="w-full bg-transparent py-10 md:py-12 mt-20 relative z-20 overflow-hidden">
        {/* Bottom Black Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-28 bg-linear-to-t from-[#000000] via-[#000000]/95 to-transparent pointer-events-none z-10" />

        {/* Left Fade */}
        <div className="absolute left-0 top-0 h-full w-24 md:w-40 bg-linear-to-r from-[#000000] via-[#000000]/90 to-transparent z-30 pointer-events-none" />

        {/* Right Fade */}
        <div className="absolute right-0 top-0 h-full w-24 md:w-40 bg-linear-to-l from-[#000000] via-[#000000]/90 to-transparent z-30 pointer-events-none" />

        <div className="flex w-full overflow-hidden relative z-20">
          <div className="flex w-max animate-marquee space-x-16 md:space-x-24 px-8 md:px-12">
            {Array(10)
              .fill([
                { value: "150+", label: "Platforms Worldwide" },
                { value: "1M+", label: "Tracks Distributed" },
                { value: "200K+", label: "Independent Artists" },
                { value: "99.9%", label: "Platform Uptime" },
                { value: "100+", label: "Countries Reached" },
                { value: "100%", label: "Royalty Retention" },
              ])
              .flat()
              .map((stat, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center space-y-2 shrink-0"
                >
                  <span className="text-3xl md:text-[38px] xl:text-[46px] font-black text-[#555] leading-none tracking-tight hover:text-[#7b42f6] transition-colors duration-300">
                    {stat.value}
                  </span>

                  <span className="text-xs md:text-[13px] xl:text-sm font-medium text-[#888] tracking-widest uppercase leading-tight whitespace-nowrap">
                    {stat.label}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalMusicChartsHero;
