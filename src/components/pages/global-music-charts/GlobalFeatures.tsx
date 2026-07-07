import { Images } from "@/public/exports";
import Image from "next/image";
import React from "react";

const KeyFeatures = () => {
  return (
    <>
      <section className="bg-white  xl:-mt-8 md:-mt-5.5 -mt-4">
        <span className="w-full xl:text-[200px] xl:leading-51.5 md:text-[120px] md:leading-32.5 text-[60px] leading-19 text-black/70 font-bold opacity-10 xl:-ml-3 md:-ml-2 -ml-1">
          Features
        </span>

        <h3 className="text-4xl text-black font-bold text-center lg:py-10 md:pt-7 pt-5">
          Everything in Our Global Music Chart Analytics Service
        </h3>

        <div className="xl:px-25 xl:pt-0  md:pb-25 md:px-13 px-6 py-16 flex flex-col xl:space-y-13 md:space-y-6 space-y-8 ">
          {/* Card 1 */}
          <div className="bg-[#FFD5D2] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between gap-7 lg:p-15 md:p-6.25 p-6">
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
              <h2 className="text-black font-medium xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                Feature 01 — Real Time Chart Tracking
              </h2>
              <p className="text-black xl:text-base text-sm">
                Monitor your global music ranking across worldwide music charts as it updates live — Spotify, Apple Music, YouTube global music chart, and regional platforms all in one dashboard.
              </p>
            </div>
            <div className="flex flex-col space-y-4 xl:w-150 xl:mr-13 md:w-90 md:mr-7.5 w-full">
              <Image src={Images.GlobalImg1} alt="Real Time Chart Tracking" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#E3D7F3] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between  gap-7 lg:p-15 md:p-6.25 p-6">
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
              <h2 className="text-black font-medium xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                Feature 02 — Music Performance Tracking
              </h2>
              <p className="text-black xl:text-base text-sm">
                Our music performance tracking pulls stream counts, listener locations, and download data from every platform into one simple report — no more checking ten dashboards separately.
              </p>
            </div>
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:mr-13 md:w-90 md:mr-7.5 w-full">
              <Image src={Images.GlobalImg2} alt="Music Performance Tracking" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#FBFFDB] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between  gap-7 lg:p-15 md:p-6.25 p-6">
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
              <h2 className="text-black font-medium xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                Feature 03 — YouTube Music Charts Global
              </h2>
              <p className="text-black xl:text-base text-sm">
                Track your real time performance on YouTube music charts global — including regional chart positions across India, UK, Canada, and beyond.
              </p>
            </div>
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:mr-13 md:w-90 md:mr-7.5 w-full">
              <Image src={Images.GlobalImg3} alt="YouTube Music Charts Global" />
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#C5FFF8] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between  gap-7 lg:p-15 md:p-6.25 p-6">
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
              <h2 className="text-black font-medium xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                Feature 04 — Chart Data Insights
              </h2>
              <p className="text-black xl:text-base text-sm">
                Global music chart data insights for artists break down exactly what is driving your chart position — playlists, regions, release timing — so your next release is always better planned.
              </p>
            </div>
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:mr-13 md:w-90 md:mr-7.5 w-full">
              <Image src={Images.GlobalImg4} alt="Chart Data Insights" />
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-[#C9E4FF] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between  gap-7 lg:p-15 md:p-6.25 p-6">
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
              <h2 className="text-black font-medium xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                Feature 05 — Chart Submission Service
              </h2>
              <p className="text-black xl:text-base text-sm">
                Our global music chart submission service registers your releases across chart tracking systems from day one — so your music is eligible for chart placement the moment it goes live.
              </p>
            </div>
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:mr-13 md:w-90 md:mr-7.5 w-full">
              <Image src={Images.GlobalImg5} alt="Chart Submission Service" />
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-[#FFD1DC] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between  gap-7 lg:p-15 md:p-6.25 p-6">
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
              <h2 className="text-black font-medium xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                Feature 06 — Growth & Trend Analysis
              </h2>
              <p className="text-black xl:text-base text-sm">
                See how your worldwide music chart ranking trends over weeks and months — not just snapshots — so you always have a clear picture of your long-term career growth.
              </p>
            </div>
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:mr-13 md:w-90 md:mr-7.5 w-full">
              <Image src={Images.AnalystReporting} alt="Growth & Trend Analysis" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KeyFeatures;
