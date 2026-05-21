import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Images } from "@/public/exports";

const YouTubeContentIdHero = () => {
  return (
    <section className="bg-[#06030b] text-white w-full flex flex-col overflow-hidden relative pt-24 md:pt-40">
      {/* Decorative dark purple/indigo background glows */}
      <div className="absolute top-[10%] left-[-10%] w-75 h-75 md:w-150 md:h-150 bg-primary/20 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute top-[20%] right-[-10%] w-75 h-75 md:w-150 md:h-150 bg-primary/15 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-87.5 h-87.5 md:w-175 md:h-175 bg-primary/25 rounded-full blur-[130px] pointer-events-none z-0" />

      {/* Main Content Grid */}
      <div className="w-full max-w-78rem mx-auto px-6 md:px-12 xl:px-26 flex flex-col md:flex-row items-center justify-between relative z-10 pb-16 md:pb-24">
        {/* Left Column: Typography Content */}
        <div className="flex flex-col items-center md:items-start md:w-[50%] w-full   md:pr-1 text-center md:text-left">
          <span className="text-white font-medium text-[24px] md:text-[24px] xl:text-[48px]">
            Global Music
          </span>

          <div className="flex flex-col leading-[1.15] items-center md:items-start w-full">
            {/* Desktop Heading */}
            <div className="hidden md:flex flex-col space-y-2">
              <h1 className="text-white font-bold text-[40px] xl:text-[71px] md:text-[40px] tracking-tight">
                Protection and Monetization on
              </h1>

              <h1 className="text-[#7e4bc8] font-bold text-[52px] xl:text-[75px] tracking-tight">
                YouTube
              </h1>
            </div>

            {/* Mobile Heading */}
            <div className="flex md:hidden flex-col items-center text-center">
              <h1 className="text-white font-medium text-[38px] tracking-tight leading-[1.25]">
                Protection &<br />
                Monetization
                <br />
                on <span className="text-[#7e4bc8] font-medium">YouTube</span>
              </h1>
            </div>
          </div>

          <p className="text-white/70 text-[15px] md:text-[14px] xl:text-[14px] font-light leading-relaxed max-w-lg px-2 md:px-0">
            Manage, protect, and monetize your music. Use Amoozart Content ID to
            register your songs and capture all YouTube royalties
          </p>

          <div className="mt-8 w-full flex justify-center md:justify-start">
            <Link
              href="/apply"
              className="inline-flex w-[85%] md:w-auto items-center justify-center px-8 md:px-15 py-3.5 rounded-full bg-white text-[#7e4bc8] font-bold text-base hover:bg-gray-100 transition-colors shadow-lg"
            >
              Apply Now
            </Link>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-[59%] w-full mt-12 md:mt-0 flex items-center justify-center relative">
          <div className="relative z-10 w-full max-w-120 xl:max-w-137.5 aspect-square flex items-center justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-red-600/30 rounded-full blur-[100px] pointer-events-none -z-10" />

            <Image
              src={Images.YouTubeContent}
              alt="YouTube Content ID"
              className="w-full h-auto rounded-2xl object-contain drop-shadow-[0_15px_50px_rgba(220,38,38,0.4)] animate-float-bob"
              priority
            />
          </div>
        </div>
      </div>

      {/* Stats Bar Marquee */}
      <div className="w-full bg-[#030105] py-10 md:py-12 relative z-20 overflow-hidden border-t border-white/5">
        {/* Top Gradient */}
        <div className="absolute top-0 left-0 w-full h-24 bg-linear-to-b from-[#17032f]/30 via-[#15032d]/10 to-transparent pointer-events-none z-10" />

        {/* Left Fade */}
        <div className="absolute left-0 top-0 h-full w-20 md:w-32 bg-linear-to-r from-[#030105] to-transparent z-30 pointer-events-none" />

        {/* Right Fade */}
        <div className="absolute right-0 top-0 h-full w-20 md:w-32 bg-linear-to-l from-[#030105] to-transparent z-30 pointer-events-none" />

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
                  className="flex flex-col items-start text-left space-y-2 shrink-0"
                >
                  <span className="text-3xl md:text-[38px] xl:text-[46px] font-black text-white leading-none tracking-tight">
                    {stat.value}
                  </span>

                  <span className="text-xs md:text-[13px] xl:text-sm font-medium text-white/45 tracking-normal leading-tight whitespace-nowrap">
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

export default YouTubeContentIdHero;
