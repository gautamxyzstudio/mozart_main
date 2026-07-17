"use client";

import React from "react";
import { Icons } from "@/public/exports";

export default function RegionalAndMonitoring() {
  return (
    <section className="w-full bg-black py-20 md:py-28 xl:py-36 text-white font-sans relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-[#6739b7]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-[#9b4dff]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 xl:px-20 space-y-24 md:space-y-36">

        {/* Section 1: India & Punjabi Artists */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left Column: Content */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-6">
            <span className="text-[#7b42f6] uppercase tracking-widest text-sm font-bold">
              India & Punjabi Artists
            </span>
            <h2 className="text-3xl md:text-4xl xl:text-[48px] font-bold leading-tight text-white">
              Chart Tracking for Indian & Punjabi Artists
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
              Amozart's music chart tracking service India gives Indian and Punjabi artists real time visibility across both local platforms like JioSaavn and Wynk and global charts on Spotify and Apple Music. Our global music charts for Punjabi artists covers every platform where Punjabi music is growing — from Punjab to the UK, Canada, and beyond.
            </p>

            {/* Badges of platforms */}
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs font-semibold hover:border-[#7b42f6]/50 transition-colors duration-300">Spotify</span>
              <span className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs font-semibold hover:border-[#7b42f6]/50 transition-colors duration-300">Apple Music</span>
              <span className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs font-semibold hover:border-[#7b42f6]/50 transition-colors duration-300">JioSaavn</span>
              <span className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs font-semibold hover:border-[#7b42f6]/50 transition-colors duration-300">Wynk Music</span>
              <span className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs font-semibold hover:border-[#7b42f6]/50 transition-colors duration-300">YouTube Music</span>
            </div>
          </div>

          {/* Right Column: Visual Dashboard Mockup Card */}
          <div className="w-full lg:w-[45%] flex justify-center relative">
            <div className="relative w-full max-w-[460px] aspect-[4/3] rounded-3xl bg-gradient-to-br from-white/10 to-white/5 p-6 border border-white/10 backdrop-blur-md shadow-2xl hover:scale-[1.02] transition-transform duration-500">
              {/* Inner content mockup */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs text-white/50 tracking-wider">REGIONAL PLACEMENT</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              </div>
              <div className="space-y-4">
                {/* Simulated Chart Rows */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-3">
                    <span className="font-extrabold text-[#7b42f6]">01</span>
                    <div>
                      <h4 className="text-xs md:text-sm font-bold">Punjab Top 50</h4>
                      <p className="text-[10px] text-white/40">Spotify India</p>
                    </div>
                  </div>
                  <span className="text-xs md:text-sm font-semibold text-emerald-400">#1 Trending</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-3">
                    <span className="font-extrabold text-[#7b42f6]">02</span>
                    <div>
                      <h4 className="text-xs md:text-sm font-bold">New Punjabi Hits</h4>
                      <p className="text-[10px] text-white/40">JioSaavn Weekly</p>
                    </div>
                  </div>
                  <span className="text-xs md:text-sm font-semibold text-emerald-400">#1 Top Track</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-3">
                    <span className="font-extrabold text-[#7b42f6]">03</span>
                    <div>
                      <h4 className="text-xs md:text-sm font-bold">UK Punjabi Chart</h4>
                      <p className="text-[10px] text-white/40">Official Charts UK</p>
                    </div>
                  </div>
                  <span className="text-xs md:text-sm font-semibold text-emerald-400">#12 Entry</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: How to Monitor Music Streams */}
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12 lg:gap-20">
          {/* Left Column: Content */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-6">
            <span className="text-[#7b42f6] uppercase tracking-widest text-sm font-bold">
              Stream Analytics
            </span>
            <h2 className="text-3xl md:text-4xl xl:text-[48px] font-bold leading-tight text-white">
              How to Monitor Music Streams Across Platforms
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
              Amozart pulls all your streaming data into one centralised music performance tracking dashboard. Instead of logging into multiple platforms separately, you see every stream, chart position, and listener data point in one simple, real time report.
            </p>
          </div>

          {/* Right Column: Visual Stream Tracker Card */}
          <div className="w-full lg:w-[45%] flex justify-center relative">
            <div className="relative w-full max-w-[460px] aspect-[4/3] rounded-3xl bg-gradient-to-br from-white/10 to-white/5 p-6 border border-white/10 backdrop-blur-md shadow-2xl hover:scale-[1.02] transition-transform duration-500">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-xs text-white/50 tracking-wider">TOTAL STREAMS</h4>
                  <span className="text-2xl font-black tracking-tight">849,203</span>
                </div>
                <span className="bg-[#7b42f6]/20 text-[#7b42f6] px-3 py-1 rounded-full text-xs font-semibold">+18.4% this week</span>
              </div>

              {/* Fake visual bar chart */}
              <div className="mt-8 flex items-end gap-3 h-28">
                <div className="w-full bg-[#7b42f6]/20 h-[30%] rounded-md hover:bg-[#7b42f6]/50 transition-all duration-300"></div>
                <div className="w-full bg-[#7b42f6]/20 h-[45%] rounded-md hover:bg-[#7b42f6]/50 transition-all duration-300"></div>
                <div className="w-full bg-[#7b42f6]/20 h-[38%] rounded-md hover:bg-[#7b42f6]/50 transition-all duration-300"></div>
                <div className="w-full bg-[#7b42f6]/20 h-[60%] rounded-md hover:bg-[#7b42f6]/50 transition-all duration-300"></div>
                <div className="w-full bg-[#7b42f6]/20 h-[75%] rounded-md hover:bg-[#7b42f6]/50 transition-all duration-300"></div>
                <div className="w-full bg-[#7b42f6] h-[95%] rounded-md shadow-[0_0_15px_rgba(123,66,246,0.5)]"></div>
              </div>
              <div className="flex justify-between mt-2 text-[10px] text-white/40">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Today</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
