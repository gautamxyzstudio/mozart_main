import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Images } from "@/public/exports";

const YouTubeHero = () => {
  return (
    <section className="bg-black text-white w-full flex flex-col overflow-hidden relative pt-24 md:pt-40">
      {/* Decorative dark purple/indigo background glows */}
      <div className="absolute top-[10%] left-[-10%] w-75 h-75 md:w-150 md:h-150 bg-primary/20 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute top-[20%] right-[-10%] w-75 h-75 md:w-150 md:h-150 bg-primary/15 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-87.5 h-87.5 md:w-175 md:h-175 bg-primary/25 rounded-full blur-[130px] pointer-events-none z-0" />

      {/* Main Content Grid */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 xl:px-20 flex flex-col md:flex-row items-center justify-between relative z-10 pb-16 md:pb-24">
        {/* Left Column: Typography Content */}
        <div className="flex flex-col xl:items-start items-center md:w-[55%] w-full space-y-6 md:pr-8 text-center xl:text-left">


          <div className="flex flex-col leading-tight items-center md:items-start xl:items-start select-none">
            <h1 className="text-white font-extrabold text-[34px] md:text-[40px] xl:text-[70px] leading-tight">
              YouTube Channel
            </h1>
            <h1 className="text-primary bg-linear-to-r from-[#8c52ff] to-[#a273ff] bg-clip-text font-extrabold text-[34px] md:text-[48px] xl:text-[76px] ">
              Management
            </h1>
            <h1 className="text-white font-extrabold text-[30px] md:text-[42px] xl:text-[68px]  ">
              for Musicians
            </h1>
          </div>



          {/* Intro Paragraph Section */}
          <div className="w-full  py-1 relative z-20">
            <div className="max-w-4xl   ">
              <p className="text-white/80 text-base md:text-[14px] lg:text-[15px] font-light leading-relaxed ">
                Growing a music career on YouTube takes more than just uploading songs. Amozart offers complete YouTube channel management for artists who want real, sustainable growth - covering everything from channel setup and video SEO to thumbnail design and audience strategy. We also provide dedicated YouTube channel management for Punjabi artists, helping regional musicians build a global audience without losing their local fanbase. Whether you're starting from zero or already have a channel that needs a clear growth plan, our team manages every detail so your channel keeps moving forward.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Premium Illustration */}
        <div className="md:w-[45%] w-full mt-12 md:mt-0 flex items-center justify-center relative">
          {/* Semicircle glowing background vector to replicate original vectors */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            {/* <Image
              src={Images.BgVector2}
              alt="bg-vector"
              className="w-[120%] h-[120%] opacity-20 object-contain scale-110"
            /> */}
          </div>

          <div className="relative z-10 w-full max-w-120 xl:max-w-137.5 aspect-square flex items-center justify-center">
            <Image
              src={Images.YouTubeMUsic2}
              alt="YouTube Channel Management"
              className="w-full h-auto rounded-2xl object-contain drop-shadow-[0_15px_50px_rgba(103,57,183,0.35)] animate-float-bob"
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

export default YouTubeHero;
