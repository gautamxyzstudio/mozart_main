import { Images } from "@/public/exports";
import Image from "next/image";
import React from "react";

const RoyaltyService = () => {
  return (
    <>
      <section className="bg-white xl:-mt-8 md:-mt-5 -mt-3">
        <span className="w-full xl:text-[200px] xl:leading-51.5 md:text-[120px] md:leading-32.5 text-[60px] leading-19 text-black/70 font-bold opacity-10 xl:-ml-1 md:-ml-1 -ml-1">
          Core Services
        </span>

        <h3 className="text-4xl text-black font-bold text-center lg:py-10 md:pt-7 pt-5">
          Everything in Our Music Rights Management Service
        </h3>

        <div className="xl:px-25 xl:pt-0  md:pb-25 md:px-13 px-6 py-16 flex flex-col xl:space-y-13 md:space-y-6 space-y-8 ">
          <div className="bg-[#FFD5D2] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between gap-7 lg:p-15 md:p-6.25 p-6">
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
              <h2 className="text-black font-bold xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                Music Royalty Collection
              </h2>
              <p className="text-black xl:text-base text-sm">
                We collect every type of royalty your music generates — streaming, performance, mechanical, and sync — from every platform and territory worldwide. Nothing goes uncollected.
              </p>
            </div>
            <div className="xl:w-126.75 xl:h-115 md:w-75 md:h-67.5 w-75.75 h-69 md:mt-0 mt-8 relative">
              <Image src={Images.ROyalty1} alt="fast distribution " />
            </div>
          </div>

          <div className="bg-[#E3D7F3] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between gap-7 lg:p-15 md:p-6.25 p-6">
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
              <h2 className="text-black font-bold xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                Global Rights Protection
              </h2>
              <p className="text-black xl:text-base text-sm">
                We register your works, monitor unauthorised uses, and take action when your rights are infringed — across every market your music reaches.
              </p>
            </div>
            <div className="flex flex-col space-y-4 xl:w-150 xl:mr-13 md:w-90 md:mr-7.5 w-full">
              <Image src={Images.ROyalty2} alt="analytics" />
            </div>
          </div>

          <div className="bg-[#FBFFDB] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between gap-7 lg:p-15 md:p-6.25 p-6">
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
              <h2 className="text-black font-medium xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                Music Copyright Management
              </h2>
              <p className="text-black xl:text-base text-sm">
                We register your compositions and sound recordings with the right organisations so your copyright is properly documented, protected, and enforceable everywhere.
              </p>
            </div>
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:mr-13 md:w-90 md:mr-7.5 w-full">
              <Image src={Images.ROyalty3} alt="playlist pitching" />
            </div>
          </div>

          <div className="bg-[#FFD3DE] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between gap-7 lg:p-15 md:p-6.25 p-6">
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
              <h2 className="text-black font-medium xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                Streaming Royalty Tracking
              </h2>
              <p className="text-black xl:text-base text-sm">
                Our streaming royalty tracking monitors your earnings across Spotify, Apple Music, YouTube, JioSaavn, Wynk, and every other platform — real time, platform by platform, all in one dashboard.
              </p>
            </div>
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:mr-13 md:w-90 md:mr-7.5 w-full">
              <Image src={Images.ROyalty4} alt="Influencer Music Promotion" />
            </div>
          </div>

          <div className="bg-[#C5FFF8] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between gap-7 lg:p-15 md:p-6.25 p-6">
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
              <h2 className="text-black font-medium xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                Metadata Management
              </h2>
              <p className="text-black xl:text-base text-sm">
                Accurate metadata connects your music to your royalty payments. We manage your track titles, writer credits, ISRC codes, and ownership splits so every royalty is attributed and paid correctly.
              </p>
            </div>
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:mr-13 md:w-90 md:mr-7.5 w-full">
              <Image src={Images.ROyalty5} alt="Global Reach" />
            </div>
          </div>
          <div className="bg-[#C3E5FF] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between gap-7 lg:p-15 md:p-6.25 p-6">
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
              <h2 className="text-black font-medium xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                Royalty Reporting
              </h2>
              <p className="text-black xl:text-base text-sm">
                Clear, regular reports show exactly what your music earned, which platform paid it, and when — full transparency every single time.
              </p>
            </div>
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:mr-13 md:w-90 md:mr-7.5 w-full">
              <Image src={Images.ROyalty5} alt="Keep 100% Royalties" />
            </div>
          </div>
         
        </div>
      </section>
    </>
  );
};

export default RoyaltyService;
