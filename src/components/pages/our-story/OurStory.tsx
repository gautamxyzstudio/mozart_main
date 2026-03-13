import React from "react";
import Image from "next/image";
import { Icons, Images } from "@/public/exports";

const OurStory = () => {
  return (
    <section className="bg-foreground w-full flex flex-col overflow-hidden pb-16 md:pb-24 xl:pb-32 relative">
      {/* 1. Large Background Title (Watermark) */}
      <span className="xl:text-[200px] xl:leading-51.5 md:text-[124px] md:leading-32.5 text-[70px] leading-19 text-background/5 font-bold xl:-mt-7.25 md:-mt-4.25 -mt-2.25 pointer-events-none select-none">
        Our Story
      </span>

      {/* Main Wrapper */}
      <div className="flex flex-col md:flex-row items-center w-full px-6 md:px-13 xl:px-25 -mt-8 md:-mt-16 xl:-mt-24 relative z-10 ">
        {/* Left Side: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left   mt-12 md:mt-20">
          <h2 className="text-white xl:text-[64px] md:text-[48px] text-[32px] font-bold mb-6">
            Who We Are
          </h2>
          <div className="space-y-6 max-w-lg mx-auto md:mx-0">
            <p className="text-background/70 xl:text-base md:text-sm text-sm leading-relaxed">
              Mozart is a modern music distribution and promotion platform built
              for independent artists, creators, and labels. Our mission is
              simple: help your music reach the world without limits. From
              global distribution to artist growth, we give you the tools you
              need to succeed in today&apos;s digital music industry.
            </p>
            <p className="text-background/70 xl:text-base md:text-sm text-sm leading-relaxed">
              We distribute your music to all major streaming platforms
              including Spotify, Apple Music, YouTube Music, Instagram, and
              more. Along with distribution, Mozart supports artists with
              promotion, brand building, and digital rights.
            </p>
          </div>
        </div>
        <div className="relative w-full md:w-1/2 flex justify-center items-center h-87.5 md:h-125 xl:h-141.75 mt-10 ">
          {/* Background Waves */}
          <div className="absolute inset-0 flex justify-center items-center z-0 opacity-70 ">
            <Image
              src={Icons.BackImg2}
              alt="Music Waves"
              width={620}
              height={620}
              className="object-contain xl:w-155 xl:h-155 md:w-120 md:h-120 w-85 h-85"
            />
          </div>

          {/* Rotating Disk */}
          <div className="relative z-10 flex justify-center items-center">
            <Image
              src={Images.Disk}
              alt="Vinyl Disk"
              width={420}
              height={420}
              className="animate-rotate360 xl:w-62 xl:h-87.5 md:w-37.5 md:h-50 w-35 h-35 object-contain  "
            />

            {/* Center Logo */}
            <div className="absolute flex justify-center items-center">
              <div className="bg-white/10 rounded-full p-3 md:p-4 border border-white/20 shadow-xl">
                <Image
                  src={Icons.MozartIcon}
                  alt="Mozart Logo"
                  width={70}
                  height={70}
                  className="xl:w-14 xl:h-14 md:w-12 md:h-12 w-10 h-10 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
