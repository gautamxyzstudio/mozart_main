"use client";

import React, { useState } from "react";

const WhyAreDifferent = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const features = [
    {
      num: "01",
      title: "Point 01 — Real Time Data",
      desc: "Our real time music chart tracking updates your chart position as it happens — so you can act on trends immediately, not days later.",
    },
    {
      num: "02",
      title: "Point 02 — Multi-Platform Coverage",
      desc: "We track your music across Spotify, Apple Music, YouTube music charts global, JioSaavn, Wynk, and more — one complete picture across every platform.",
    },
    {
      num: "03",
      title: "Point 03 — Actionable Insights",
      desc: "Our global music chart data insights for artists go beyond raw numbers — showing which regions are growing, which playlists are driving streams, and what to do next.",
    },
    {
      num: "04",
      title: "Point 04 — Built for Independent Artists",
      desc: "Unlike tools made for major labels, our music chart tracking for independent artists is simple, affordable, and built around how independent artists actually work.",
    },
  ];

  return (
    <section className="w-full bg-primary overflow-hidden xl:py-20 md:py-16 py-12 relative">
      <div className="absolute xl:right-0 xl:-top-10 md:right-0 md:-top-5 select-none pointer-events-none hidden md:block opacity-[0.08] xl:text-[220px] md:text-[130px] font-black text-white leading-none">
        Amozart
      </div>

      <div className="max-w-350 mx-auto px-6 md:px-12 lg:px-16">
        {/* Main Section Heading */}
        <h2 className="text-white text-3xl md:text-4xl lg:text-[44px] font-bold mb-10 md:mb-16  flex  xl:mt-20 md:mt-5">
          Why Artists Choose Amozart for Music Chart Tracking
        </h2>

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
                    className={`w-4 h-4 text-white transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                      }`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>

                {/* Description Area */}
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

                {/* Bottom Border Line */}
                <div className="absolute bottom-0 left-0 right-0 border-b border-white/20" />

                {/* Hover Glow Background */}
                <div
                  className={`absolute inset-0 bg-white/3 transition-opacity duration-300 -z-20 ${isOpen ? "opacity-100" : "opacity-0"
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

export default WhyAreDifferent;
