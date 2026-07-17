"use client";

import { Images, Icons } from "@/public/exports";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PromotionHero = () => {
  return (
    <section className="bg-black text-white w-full min-h-[600px] md:min-h-[900px] flex flex-col justify-between overflow-hidden relative pt-24 xl:pt-30 md:pt-15 pb-0">
      {/* Decorative background loops to the right (desktop) */}
      <div className="absolute right-0 top-[12%] opacity-20 pointer-events-none z-10 hidden md:block scale-125 origin-right">
        <svg xmlns="http://www.w3.org/2000/svg" width="229" height="447" viewBox="0 0 309 447" fill="none">
          <path opacity="0.6" d="M416.198 0.0151672C413.702 1.76193 411.197 3.5163 408.686 5.27823C386.126 21.1205 362.792 37.4944 338.017 47.0257L337.941 47.056C297.086 63.0274 249.318 59.6099 203.44 37.4185L203.152 37.2818C200.557 36.0894 197.954 34.8819 195.359 33.6744C178.194 25.6925 160.438 17.4371 140.837 13.0475C120.782 8.51349 98.609 7.73886 78.4396 10.8678C54.3395 14.6119 33.9727 23.771 19.54 37.3577L19.3199 37.5704C2.6562 53.8987 -3.39158 75.2092 1.81392 99.2004C5.69908 117.086 15.8976 135.753 30.5504 151.778C50.7958 174.356 76.9978 192.492 106.334 204.226C135.366 215.838 166.835 220.942 197.332 218.997C215.058 218.033 232.01 214.98 244.803 212.428C248.597 211.684 252.521 210.879 256.315 210.097C279.413 205.35 303.301 200.436 324.578 204.651L324.912 204.712C336.833 206.808 348.322 213.871 353.497 222.293C356.57 227.298 357.268 232.432 355.621 237.969C353.102 245.525 345.453 250.583 341.105 252.922L340.741 253.12C330.057 259.249 314.911 261.998 298.869 264.914C283.64 267.679 267.894 270.534 253.826 276.731C236.009 284.577 224.148 296.341 217.569 312.707L217.304 313.421C209.685 335.415 215.786 360.864 234.499 385.076C257.476 415.067 290.067 432.367 321.854 446.592L334.549 418.165C306.495 405.611 277.949 390.612 259.145 366.074C253.522 358.791 241.184 340.29 246.571 323.97C254.069 305.902 273.464 301.171 304.409 295.551C322.271 292.308 340.733 288.959 356.031 280.233C370.578 272.342 380.943 260.699 385.246 247.439L385.329 247.166C389.647 232.956 387.803 218.716 379.987 205.988C370.16 189.978 351.182 177.751 330.444 174.068C303.066 168.683 276.105 174.227 250.039 179.589C246.146 180.387 242.466 181.146 238.763 181.875C226.918 184.245 211.355 187.055 195.571 187.905H195.412C142.507 191.323 88.1904 169.481 53.6489 130.923L53.5351 130.802C42.6764 118.939 34.8985 105.01 32.2047 92.5932C29.3136 79.2875 32.1819 68.6019 40.9691 59.9289C63.1645 39.1501 104.725 36.8033 134.008 43.4258C150.368 47.094 165.856 54.2937 182.254 61.911C184.857 63.1186 187.452 64.3261 190.054 65.5185C243.749 91.4464 300.273 95.1981 349.225 76.0674C377.551 65.1615 402.463 47.6712 426.556 30.758C429.045 29.0113 431.519 27.2721 434 25.5406L416.206 0L416.198 0.0151672Z" fill="#7426faff"/>
        </svg>
      </div>

      {/* Decorative background loops to the right (mobile) */}
      <div className="absolute top-[8%] right-[-20px] opacity-40 md:hidden z-10 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="150" height="217" viewBox="0 0 309 447" fill="none">
          <path opacity="0.6" d="M416.198 0.0151672C413.702 1.76193 411.197 3.5163 408.686 5.27823C386.126 21.1205 362.792 37.4944 338.017 47.0257L337.941 47.056C297.086 63.0274 249.318 59.6099 203.44 37.4185L203.152 37.2818C200.557 36.0894 197.954 34.8819 195.359 33.6744C178.194 25.6925 160.438 17.4371 140.837 13.0475C120.782 8.51349 98.609 7.73886 78.4396 10.8678C54.3395 14.6119 33.9727 23.771 19.54 37.3577L19.3199 37.5704C2.6562 53.8987 -3.39158 75.2092 1.81392 99.2004C5.69908 117.086 15.8976 135.753 30.5504 151.778C50.7958 174.356 76.9978 192.492 106.334 204.226C135.366 215.838 166.835 220.942 197.332 218.997C215.058 218.033 232.01 214.98 244.803 212.428C248.597 211.684 252.521 210.879 256.315 210.097C279.413 205.35 303.301 200.436 324.578 204.651L324.912 204.712C336.833 206.808 348.322 213.871 353.497 222.293C356.57 227.298 357.268 232.432 355.621 237.969C353.102 245.525 345.453 250.583 341.105 252.922L340.741 253.12C330.057 259.249 314.911 261.998 298.869 264.914C283.64 267.679 267.894 270.534 253.826 276.731C236.009 284.577 224.148 296.341 217.569 312.707L217.304 313.421C209.685 335.415 215.786 360.864 234.499 385.076C257.476 415.067 290.067 432.367 321.854 446.592L334.549 418.165C306.495 405.611 277.949 390.612 259.145 366.074C253.522 358.791 241.184 340.29 246.571 323.97C254.069 305.902 273.464 301.171 304.409 295.551C322.271 292.308 340.733 288.959 356.031 280.233C370.578 272.342 380.943 260.699 385.246 247.439L385.329 247.166C389.647 232.956 387.803 218.716 379.987 205.988C370.16 189.978 351.182 177.751 330.444 174.068C303.066 168.683 276.105 174.227 250.039 179.589C246.146 180.387 242.466 181.146 238.763 181.875C226.918 184.245 211.355 187.055 195.571 187.905H195.412C142.507 191.323 88.1904 169.481 53.6489 130.923L53.5351 130.802C42.6764 118.939 34.8985 105.01 32.2047 92.5932C29.3136 79.2875 32.1819 68.6019 40.9691 59.9289C63.1645 39.1501 104.725 36.8033 134.008 43.4258C150.368 47.094 165.856 54.2937 182.254 61.911C184.857 63.1186 187.452 64.3261 190.054 65.5185C243.749 91.4464 300.273 95.1981 349.225 76.0674C377.551 65.1615 402.463 47.6712 426.556 30.758C429.045 29.0113 431.519 27.2721 434 25.5406L416.206 0L416.198 0.0151672Z" fill="#511cabff"/>
        </svg>
      </div>

      {/* Ambient background glow - Center */}
      <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[350px] h-[350px] md:w-[700px] md:h-[700px] bg-primary/20 rounded-full blur-[120px] pointer-events-none z-0" />
      
      {/* Ambient background glow - Left Side */}
      <div className="absolute top-[20%] left-[-15%] w-[250px] h-[500px] md:w-[400px] md:h-[700px] bg-[#6739B7]/30 rounded-full blur-[100px] md:blur-[140px] pointer-events-none z-0" />
      
      {/* Ambient background glow - Right Side */}
      <div className="absolute top-[10%] right-[-15%] w-[250px] h-[500px] md:w-[400px] md:h-[700px] bg-[#6739B7]/30 rounded-full blur-[100px] md:blur-[140px] pointer-events-none z-0" />

      {/* Main Content Area */}
      <div className="w-full flex-grow flex flex-col items-center justify-center relative z-10 px-6 pb-12 sm:pb-20 md:pb-32">
        {/* Center Typography & CTA */}
        <div className="w-full flex flex-col items-center text-center max-w-4xl mx-auto z-20">
          <span className="text-white/80 font-semibold text-[30px] md:text-[42px] xl:text-[60px]  tracking-wide">
            Music Promotion that Works
          </span>

          <h1 className="text-white font-bold text-[36px] md:text-[52px] xl:text-[110px] leading-none tracking-tight mb-2 select-none">
            for Independent Artists
          </h1>

          <p className="text-white/70 text-[15px] md:text-[14px] xl:text-base font-light tracking-wide max-w-xl mx-auto mb-8 md:mb-10 leading-relaxed">
            More streams. More fans. More reach — across every platform your audience listens on.
          </p>

          <Link
            href={`${process.env.NEXT_PUBLIC_ADMIN_BASE_MAIN_URL}/signup`}
            className="bg-[#6236b0] hover:bg-[#512da8] text-white font-bold py-3.5 px-10 rounded-full shadow-[0_0_25px_rgba(98,54,176,0.6)] transition-all duration-300 transform hover:scale-105 active:scale-95 inline-block text-center whitespace-nowrap"
          >
            Start Promoting Music
          </Link>
        </div>

        {/* Left Side: Horizontal Purple Bar and Vinyl Disk */}
        <div className="hidden sm:flex absolute left-0 bottom-[120px] translate-y-[20px] items-center z-15 select-none pointer-events-none sm:scale-[0.75] md:scale-100 origin-left">
          {/* Solid purple bar */}
          <div className="w-[120px] md:w-[200px] xl:w-[260px] h-[50px] md:h-[90px] xl:h-[110px] bg-[#6236b0] rounded-r-[30px]" />
          {/* Rotating vinyl record with a purple center */}
          <div
            className="relative -ml-[60px] md:-ml-[90px] xl:-ml-[110px] w-[120px] h-[120px] md:w-[180px] md:h-[180px] xl:w-[220px] xl:h-[220px] rounded-full shadow-[0_0_60px_rgba(108,54,876,0.3)] bg-[#030105] flex items-center justify-center"
          >
            <Image
              src={Images.Disk}
              alt="Rotating Vinyl Record"
              className="w-full h-full object-contain animate-rotate360"
              style={{ animationDuration: "25s" }}
            />
            {/* Center purple overlay to match layout */}
            <div className="absolute w-[20%] h-[20%] rounded-full bg-[#6236b0] border border-[#8c52ff]/30 shadow-[0_0_10px_rgba(98,54,176,0.8)] z-10 flex items-center justify-center">
              <Image
                src={Icons.MozartIcon}
                alt="Mozart Brand Logo"
                className="w-[50%] h-[50%] brightness-0 invert"
              />
            </div>
          </div>
        </div>

        {/* 1. MOBILE/TABLET ONLY: Centerpiece rendered in standard block flow to prevent overlap and achieve perfect centering */}
        <div className="sm:hidden w-[300px] h-[300px] relative flex items-center justify-center mt-12 mb-6 z-10 overflow-visible select-none">
          {/* Concentric Circles SVG */}
          <svg viewBox="0 0 300 300" className="absolute inset-0 w-full h-full opacity-35 pointer-events-none z-0 overflow-visible">
            <circle cx="150" cy="150" r="120" fill="none" stroke="#787575ff" strokeWidth="1.5" />
            <circle cx="150" cy="150" r="150" fill="none" stroke="#787575ff" strokeWidth="1.5" />
          </svg>

          {/* Rotating Vinyl Record Centerpiece */}
          <div className="absolute w-[192px] h-[192px] rounded-full bg-[#030105] flex items-center justify-center overflow-hidden shadow-[0_0_30px_rgba(98,54,176,0.3)] border border-primary">
            <Image
              src={Images.Disk}
              alt="Vinyl Disk Dome"
              className="w-full h-full object-contain animate-rotate360"
              style={{ animationDuration: "35s" }}
            />
            {/* Center purple overlay */}
            <div className="absolute w-[20%] h-[20%] rounded-full bg-[#6236b0] border border-[#8c52ff]/30 shadow-[0_0_10px_rgba(98,54,176,0.8)] z-10 flex items-center justify-center">
              <Image
                src={Icons.MozartIcon}
                alt="Mozart Brand Logo"
                className="w-[50%] h-[50%] brightness-0 invert"
              />
            </div>
          </div>

          {/* Floating white circular badges - Full circle distribution */}
          {[
            {
              icon: (
                <svg viewBox="0 0 24 24" className="w-[50%] h-[50%] fill-[#6236b0]">
                  <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
                </svg>
              ),
              radius: 150,
              angle: 220
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" className="w-[50%] h-[50%] fill-[#6236b0]">
                  <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
                </svg>
              ),
              radius: 150,
              angle: 320
            },
            {
              icon: <span className="text-[#6236b0] font-black text-[16px] leading-none">$</span>,
              radius: 150,
              angle: 40
            },
            {
              icon: <span className="text-[#6236b0] font-black text-sm leading-none">%</span>,
              radius: 150,
              angle: 140
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" className="w-[50%] h-[50%] fill-[#6236b0]">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              ),
              radius: 120,
              angle: 90
            }
          ].map((item, idx) => {
            const rad = (item.angle * Math.PI) / 180;
            const leftVal = 150 + item.radius * Math.cos(rad);
            const topVal = 150 + item.radius * Math.sin(rad);

            return (
              <div
                key={idx}
                className="absolute z-20 animate-float-bob -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${leftVal}px`,
                  top: `${topVal}px`,
                  animationDelay: `${idx * 0.4}s`,
                  animationDuration: `${5.5 + idx * 0.8}s`
                }}
              >
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-[0_4px_15px_rgba(98,54,176,0.3)] border border-white hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
              </div>
            );
          })}
        </div>

        {/* 2. DESKTOP/TABLET ONLY (sm and up): Absolute-positioned rising dome layout */}
        <div className="hidden sm:block absolute sm:-right-[50px] sm:-bottom-[310px] lg:right-[100px] lg:-bottom-[320px] md:right-[13px] md:-bottom-[340px] w-[500px] h-[500px] pointer-events-none select-none z-10 overflow-visible sm:scale-[0.75] md:scale-100 sm:origin-bottom-right">
          
          {/* Concentric Arcs */}
          <svg viewBox="0 0 500 500" className="absolute inset-0 w-full h-full opacity-35 pointer-events-none z-0 overflow-visible">
            <circle cx="250" cy="250" r="210" fill="none" stroke="#787575ff" strokeWidth="1.5" />
            <circle cx="250" cy="250" r="260" fill="none" stroke="#787575ff" strokeWidth="1.5" />
          </svg>

          {/* Rising Vinyl Disk Dome Centerpiece */}
          <div className="absolute left-[90px] top-[90px] w-[320px] h-[320px] rounded-full bg-[#030105] flex items-center justify-center overflow-hidden shadow-[0_-10px_30px_rgba(98,54,176,0.3)] border border-primary">
            <Image
              src={Images.Disk}
              alt="Vinyl Disk Dome"
              className="w-full h-full object-contain animate-rotate360"
              style={{ animationDuration: "35s" }}
            />
            {/* Center purple overlay */}
            <div className="absolute w-[20%] h-[20%] rounded-full bg-[#6236b0] border border-[#8c52ff]/30 shadow-[0_0_10px_rgba(98,54,176,0.8)] z-10 flex items-center justify-center">
              <Image
                src={Icons.MozartIcon}
                alt="Mozart Brand Logo"
                className="w-[50%] h-[50%] brightness-0 invert"
              />
            </div>
          </div>

          {/* Floating white circular badges - Concentric top half spacing */}
          {[
            {
              icon: (
                <svg viewBox="0 0 24 24" className="w-[50%] h-[50%] fill-[#6236b0]">
                  <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
                </svg>
              ),
              radius: 260,
              angle: 205
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" className="w-[50%] h-[50%] fill-[#6236b0]">
                  <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
                </svg>
              ),
              radius: 210,
              angle: 235
            },
            {
              icon: <span className="text-[#6236b0] font-black text-[22px] leading-none">$</span>,
              radius: 260,
              angle: 270
            },
            {
              icon: <span className="text-[#6236b0] font-black text-lg leading-none">%</span>,
              radius: 210,
              angle: 305
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" className="w-[50%] h-[50%] fill-[#6236b0]">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              ),
              radius: 260,
              angle: 333
            }
          ].map((item, idx) => {
            const rad = (item.angle * Math.PI) / 180;
            // Place badges at correct intervals along track arcs
            const leftVal = 250 + item.radius * Math.cos(rad);
            const topVal = 250 + item.radius * Math.sin(rad);

            return (
              <div
                key={idx}
                className="absolute z-20 animate-float-bob -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${leftVal}px`,
                  top: `${topVal}px`,
                  animationDelay: `${idx * 0.4}s`,
                  animationDuration: `${5.5 + idx * 0.8}s`
                }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shadow-[0_4px_20px_rgba(98,54,176,0.3)] border-2 border-white hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Stats Bar */}
      <div className="w-full bg-black py-10 md:py-12 relative z-20 overflow-hidden mt-0 border-t border-white/10">
        <div className="flex w-full overflow-hidden relative z-20">

            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#17032f]/30 via-[#15032d]/10 to-transparent pointer-events-none z-10" />

        {/* Left Fade */}
        <div className="absolute left-0 top-0 h-full w-20 md:w-32 bg-gradient-to-r from-[#030105] to-transparent z-30 pointer-events-none" />

        {/* Right Fade */}
        <div className="absolute right-0 top-0 h-full w-20 md:w-32 bg-gradient-to-l from-[#030105] to-transparent z-30 pointer-events-none" />
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
                <div key={idx} className="flex flex-col items-start text-left space-y-2 shrink-0">
                  <span className="text-3xl md:text-[38px] opacity-70 xl:text-[46px] font-black text-white leading-none tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs md:text-[13px] xl:text-sm  font-medium text-white/40 tracking-normal leading-tight whitespace-nowrap">
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

export default PromotionHero;
