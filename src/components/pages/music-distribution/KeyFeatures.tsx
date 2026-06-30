import { GIF, Images } from "@/public/exports";
import Image from "next/image";
import React from "react";

const KeyFeatures = () => {
  return (
    <>
      <section className="bg-white xl:-mt-8 md:-mt-5">
        <span className="w-full xl:text-[200px] xl:leading-51.5 md:text-[120px] md:leading-32.5 text-[60px] leading-19 text-black/70 font-bold opacity-10   -mt-3 xl:-ml-3 md:-ml-1 -ml-1">
          Key Features
        </span>

        <div className="w-full flex flex-col items-center text-center px-6 max-w-4xl mx-auto lg:py-10 md:pt-7 pt-5">
          <h3 className="text-black font-extrabold text-3xl md:text-5xl lg:text-[56px] leading-tight tracking-tight mb-4">
            Everything You Need From One Music Distribution Service
          </h3>
          <p className="text-black/60 text-sm md:text-base lg:text-lg font-light tracking-wide max-w-2xl leading-relaxed">
            From upload to payout - every feature is built around helping independent artists release smarter and earn more.
          </p>
        </div>

        <div className="xl:px-25 xl:pt-0  md:pb-25 md:px-13 px-6 py-16 flex flex-col xl:space-y-13 md:space-y-6 space-y-8 ">
          <div className="bg-[#E3D7F3] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between items-end lg:p-15 md:p-6.25 p-6">
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
              <h2 className="text-black font-bold xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                Fast Global Distribution
              </h2>
              <p className="text-black xl:text-base text-sm">
                Upload once and your music goes live across 150+ platforms in 24 to 72 hours. No lengthy review queues, no back-and-forth emails. Your release date is the date you choose, and we make sure it actually happens on time.
              </p>
            </div>
            <div className="xl:w-126.75 xl:h-115 md:w-75 md:h-67.5 w-75.75 h-69 md:mt-0 mt-8 relative">
              <Image src={Images.Distribution} alt="fast distribution " />
            </div>
          </div>

          <div className="bg-[#FFD3DE] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between items-end lg:p-15 md:p-6.25 p-6">
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
              <h2 className="text-black font-bold xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                Real-Time Stream Analytics
              </h2>
              <p className="text-black xl:text-base text-sm">
                Know exactly how your music is performing the moment it starts getting played. Track daily stream counts, listener locations, platform breakdowns, and revenue data from a single dashboard - updated in real time so you always have a clear picture of what's working.
              </p>
            </div>
            <div className="flex flex-col space-y-4 xl:w-150 xl:mr-13 md:w-90 md:mr-7.5 w-full">
              <Image src={Images.RealTime} alt="analytics" />
            </div>
          </div>

          <div className="bg-[#E3D7F3] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between items-end lg:p-15 md:p-6.25 p-6">
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
              <h2 className="text-black font-medium xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                Playlist Pitching
              </h2>
              <p className="text-black xl:text-base text-sm">
                Getting placed on the right playlist can multiply your streams overnight. Our team pitches your tracks directly to editorial and independent playlist curators across Spotify and Apple Music before your release goes live, giving your music the best possible chance of being discovered in its first week.
              </p>
            </div>
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:mr-13 md:w-90 md:mr-7.5 w-full">
              <Image src={Images.playlist2} alt="playlist pitching" />
            </div>
          </div>

          <div className="bg-[#C3E5FF] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between items-end lg:p-15 md:p-6.25 p-6">
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
              <h2 className="text-black font-medium xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                100% Rights Ownership
              </h2>
              <p className="text-black xl:text-base text-sm">
                Every release you submit through Amozart stays yours, completely. We never take a share of your master recording rights or your songwriting credits. You can pull your music from any platform, update your metadata, or switch distributors at any time - no lock-in, no conditions.
              </p>
            </div>
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:mr-13 md:w-90 md:mr-7.5 w-full">
              <Image src={Images.Vegan} alt=" Full Rights Control" />
            </div>
          </div>

          <div className="bg-[#FBFFDB] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between items-end lg:p-15 md:p-6.25 p-6">
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
              <h2 className="text-black font-medium xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                Worldwide Platform Coverage
              </h2>
              <p className="text-black xl:text-base text-sm">
                Your music reaches every corner of the globe- from Spotify and Apple Music to Amazon Music, Tidal, Deezer, Beatport, Pandora, Vevo, Shazam, JioSaavn, and Wynk. Whether your audience is in Punjab, the UK, or Canada, they can find your music on the platform they already use.
              </p>
            </div>
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:mr-13 md:w-90 md:mr-7.5 w-full">
              <Image src={Images.GlobalReach} alt="Global Reach" />
            </div>
          </div>
          <div className="bg-[#D3FFE8] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between items-end lg:p-15 md:p-6.25 p-6">
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
              <h2 className="text-black font-medium xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                100% Royalty Retention
              </h2>
              <p className="text-black xl:text-base text-sm">
                Every stream, every download, every sync - the full amount comes directly to you. Our music distribution with 100% royalty retention means there are no percentage splits with the platform and no surprise deductions when your monthly statement arrives.
              </p>
            </div>
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:mr-13 md:w-90 md:mr-7.5 w-full">
              <Image src={Images.Royalties} alt="Keep 100% Royalties" />
            </div>
          </div>
          <div className="bg-[#C5FFF8] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between items-end lg:p-15 md:p-6.25 p-6">
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
              <h2 className="text-black font-medium xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                Multi-Source Monetization
              </h2>
              <p className="text-black xl:text-base text-sm">
                Earning from Spotify alone leaves money on the table. Amozart helps you collect revenue from streaming royalties, YouTube Content ID, Instagram Reels, TikTok, and Facebook simultaneously - so every upload works across every platform that can pay you.
              </p>
            </div>
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:mr-13 md:w-90 md:mr-7.5 w-full">
              <Image src={Images.Menztion} alt="Keep 100% Royalties" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KeyFeatures;
