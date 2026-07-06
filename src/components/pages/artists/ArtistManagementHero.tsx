"use client";
import { Images } from "@/public/exports";
import Link from "next/link";
import React from "react";

const ArtistManagementHero = () => {
  const stats = [
    { num: "150+", label: "Platforms Worldwide" },
    { num: "1M+", label: "Tracks Distributed" },
    { num: "200K+", label: "Independent Artists" },
    { num: "99.9%", label: "Platform Uptime" },
    { num: "100+", label: "Countries Reached" },
    { num: "100%", label: "Royalty Retention" },
  ];

  return (
    <section className="relative min-h-[90vh] lg:min-h-200 w-full bg-[#06030b] flex flex-col justify-between overflow-hidden text-white font-sans pt-28 md:pt-36 pb-0 z-10">
      
    
      
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-100 pointer-events-none"
        style={{
          backgroundImage: "url(" + Images.ArtistImg.src + ")",
        }}
      />

      {/* Main Hero Content */}
      <div className="grow flex flex-col items-center justify-center text-center z-10 py-10 md:py-24 px-6 md:px-12 xl:px-20">
        <span className="text-white text-2xl md:text-2xl xl:text-[48px] font-medium mb-1 block">
          Music Artist Management Service
        </span>
        
        <h1 className="text-white font-bold text-5xl md:text-6xl xl:text-[76px] xl:leading-22 md:leading-14 leading-13 max-w-4xl mx-auto">
          Artist Management for Independent Musicians
        </h1>
        
        <p className="mt-3 text-white text-[20px] md:text-base xl:text-lg max-w-2xl leading-relaxed mx-auto font-light">
          Your music career, fully managed. From branding and promotion to distribution and royalties — we handle everything so you can focus on your music.
        </p>

        <div className="mt-10 flex justify-center w-full">
          <Link
            href="/apply"
            className=" xl:px-10 xl:py-3 px-17 py-2 rounded-full bg-white text-[#5d36b8] font-bold text-base hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
          >
            Start Your Journey
          </Link>
        </div>
      </div>

      {/* Bottom Stats Section - Auto Scrolling Marquee */}
      <div className="w-full bg-linear-to-b from-transparent via-black/80 to-black pt-20 pb-8 z-10 overflow-hidden relative">
        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              display: flex;
              width: max-content;
              animation: marquee 25s linear infinite;
            }
          
          `}
        </style>
        
        <div className="animate-marquee">
          {[...stats, ...stats].map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center text-center w-45 md:w-55 xl:w-70 shrink-0"
            >
              <span className="text-3xl md:text-4xl xl:text-[50px] font-black text-zinc-500 leading-none mb-3 tracking-tighter select-none">
                {stat.num}
              </span>
              <span className="text-white text-[11px] md:text-xs font-medium tracking-wide leading-tight max-w-30 md:max-w-none">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default ArtistManagementHero;
