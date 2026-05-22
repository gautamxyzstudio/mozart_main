"use client";

import React, { useState } from "react";

const WhyAreDifferentRoyalty = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const features = [
    {
      num: "01",
      title: "Accurate Global Rankings",
      desc: "Get your tracks placed on high-traffic editorial and algorithmic playlists across Spotify, Apple Music, and more.",
    },
    {
      num: "02",
      title: "Worldwide Music Coverage",
      desc: "We secure features on top music blogs and online publications to build your credibility and online presence.",
    },
    {
      num: "03",
      title: "Easy-to-Use Dashboard",
      desc: "Targeted social campaigns across Instagram, TikTok, and Twitter to grow your fanbase organically.",
    },
    {
      num: "04",
      title: "Built for Artists & Labels",
      desc: "Precision-targeted ads on Meta, YouTube, and TikTok to drive streams and engagement.",
    },
  ];

  return (
    <section className="w-full bg-primary overflow-hidden xl:py-20 md:py-16 py-12 relative">
      <div className="max-w-350 mx-auto px-6 md:px-12 lg:px-16">
        {/* Main Section Heading */}
        <h2 className="text-white text-3xl md:text-4xl lg:text-[44px] font-bold   flex  xl:mt-20 md:mt-5">
          Types of Royalties We Manage
        </h2>

        <p className="text-white/80 text-sm  mt-6 mb-10 md:mb-16">
          We help artists collect different types of royalties that come from
          multiple uses of their music. Each royalty type is important, and we
          make sure you don’t miss any earnings from anywhere. 
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-x-8">
          {features.map((feat, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => setOpenIndex(idx)}
                onMouseLeave={() => setOpenIndex(null)}
                className="relative pt-8 pb-2 md:pt-10 md:pb-4 cursor-pointer group transition-all duration-300 flex flex-col justify-start"
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
                    className={`w-4 h-4 text-white transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>

                {/* Description Area */}
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen
                      ? "max-h-[160px] opacity-100 pb-4"
                      : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <p className="text-white/80 text-sm leading-relaxed">
                    {feat.desc}
                  </p>
                </div>

                {/* Bottom Border Line */}
                <div className="absolute bottom-0 left-0 right-0 border-b border-white/20" />

                {/* Hover Glow Background */}
                <div
                  className={`absolute inset-0 bg-white/[0.03] transition-opacity duration-300 -z-20 ${
                    isOpen ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyAreDifferentRoyalty;
