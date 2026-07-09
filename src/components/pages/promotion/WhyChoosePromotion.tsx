"use client";

import React, { useState } from "react";

const WhyChoosePromotion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const features = [
    {
      num: "01",
      title: "Playlist Pitching",
      desc: "We pitch your tracks to Spotify editorial and independent curators before your release date — our playlist pitching service for independent artists gets your music in front of listeners who are actively looking for new songs.",
    },
    {
      num: "02",
      title: "Social Media Promotion",
      desc: "Our social media music promotion for independent artists covers Instagram, TikTok, Facebook, and YouTube — consistent content and audience targeting that builds your presence on every platform your fans use.",
    },
    {
      num: "03",
      title: "Music Blog Promotion",
      desc: "Music blog promotion for independent artists gets your music featured on blogs and online magazines — building credibility and reaching audiences who actively discover new music.",
    },
    {
      num: "04",
      title: "Paid Ads",
      desc: "Our paid music promotion service India runs targeted ad campaigns on Meta, YouTube, and Google — reaching the exact listeners most likely to stream and follow your music.",
    },
    {
      num: "05",
      title: "Influencer Promotion",
      desc: "Influencer music promotion for artists connects your music with content creators who share it with their audience — driving organic discovery that feels natural, not forced.",
    },
    {
      num: "06",
      title: "Promo Videos & Graphics",
      desc: "Professional lyric videos, visualisers, and social graphics that make every release look polished across every platform.",
    },
  ];

  return (
    <section className="w-full bg-primary overflow-hidden xl:py-[53px] md:py-10 py-6 ">
      <div className="max-w-[1400px] mx-auto px-8 md:px-10 mb-8 md:mb-12">
        <h2 className="text-white xl:text-[64px] md:text-[48px] text-[32px] font-bold leading-tight">
          Six Ways We Promote Your Music
        </h2>
      </div>
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start">
        {features.map((feat, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              onMouseEnter={() => setOpenIndex(idx)}
              onMouseLeave={() => setOpenIndex(null)}
              className="relative px-8 md:px-10 pt-8 pb-2 md:pt-10 md:pb-4 cursor-pointer group transition-all duration-300 flex flex-col justify-start"
            >
              {/* Big Number */}
              <h1 className="text-[70px] md:text-[82px] font-black leading-none text-white/10 select-none">
                {feat.num}
              </h1>

              {/* Title Content Area */}
              <div className="mt-2 flex items-center justify-between pb-3">
                <h3 className="text-white xl:text-[24px] md:text-base text-base font-semibold tracking-wide uppercase">
                  {feat.title}
                </h3>

                {/* Chevron Arrow */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`w-4 h-4 text-white transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                    }`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>

               <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen
                    ? "max-h-[160px] opacity-100 pb-4"
                    : "max-h-0 opacity-0 pointer-events-none"
                  }`}
              >
                <p className="text-white/80 text-sm leading-relaxed">
                  {feat.desc}
                </p>
              </div>

              <div className="absolute bottom-0 left-8 right-8 md:left-10 md:right-10 border-b border-white" />

              {/* Hover Glow Background */}
              <div
                className={`absolute inset-0 bg-white/[0.03] transition-opacity duration-300 -z-20 ${isOpen ? "opacity-100" : "opacity-0"
                  }`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyChoosePromotion;