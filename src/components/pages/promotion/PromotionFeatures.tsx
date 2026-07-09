import { GIF, Images } from "@/public/exports";
import Image from "next/image";
import React from "react";

const KeyFeatures = () => {
  return (
    <>
      <section className="bg-white xl:-mt-8 md:-mt-5 -mt-3">
        <span className="w-full xl:text-[200px] xl:leading-51.5 md:text-[120px] md:leading-32.5 text-[60px] leading-19 text-black/70 font-bold opacity-10 xl:-mt-7 md:-mt-5 -mt-3 xl:-ml-4 md:-ml-1 -ml-1">
          Key Features
        </span>

        <h3 className="text-4xl text-black font-bold text-center lg:py-10 md:pt-7 pt-5">
          Everything in Our Music Marketing for Artists
        </h3>

        <div className="xl:px-25 xl:pt-0  md:pb-25 md:px-13 px-6 py-16 flex flex-col xl:space-y-13 md:space-y-6 space-y-8 ">
          <div className="bg-[#D3FFE8] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between gap-7 lg:p-15 md:p-6.25 p-6">
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
              <h2 className="text-black font-bold xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                Spotify & YouTube Growth
              </h2>
              <p className="text-black xl:text-base text-sm">
                We know how to promote music on Spotify and YouTube the right way — playlist pitching, video promotion, and targeted outreach that drives real, lasting streams.
              </p>
            </div>
            <div className="xl:w-126.75 xl:h-115 md:w-75 md:h-67.5 w-75.75 h-69 md:mt-0 mt-8 relative">
              <Image src={Images.Vegan2} alt="fast distribution " />
            </div>
          </div>

          <div className="bg-[#E3D7F3] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between gap-7 lg:p-15 md:p-6.25 p-6">
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
              <h2 className="text-black font-bold xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                Organic Promotion
              </h2>
              <p className="text-black xl:text-base text-sm">
                Our organic music promotion for independent artists builds a genuine fanbase through consistent content and algorithm growth strategy for music artists — growth that compounds over time.
              </p>
            </div>
            <div className="flex flex-col space-y-4 xl:w-150 xl:mr-13 md:w-90 md:mr-7.5 w-full">
              <Image src={Images.SmartAudience} alt="analytics" />
            </div>
          </div>

          <div className="bg-[#FBFFDB] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between gap-7 lg:p-15 md:p-6.25 p-6">
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
              <h2 className="text-black font-medium xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                Data-Driven Campaigns
              </h2>
              <p className="text-black xl:text-base text-sm">
                Every campaign is backed by real stream analytics and audience data — so your budget always goes where it actually works.
              </p>
            </div>
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:mr-13 md:w-90 md:mr-7.5 w-full">
              <Image src={Images.Algorithm} alt="playlist pitching" />
            </div>
          </div>

          <div className="bg-[#FFD3DE] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between gap-7 lg:p-15 md:p-6.25 p-6">
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
              <h2 className="text-black font-medium xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                Algorithm Growth Strategy
              </h2>
              <p className="text-black xl:text-base text-sm">
                Our algorithm growth strategy for music artists keeps your music in front of new listeners consistently — through saves, playlist adds, and engagement signals that tell platforms your music is worth recommending.
              </p>
            </div>
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:mr-13 md:w-90 md:mr-7.5 w-full">
              <Image src={Images.Influencer} alt="Influencer Music Promotion" />
            </div>
          </div>

          <div className="bg-[#C5FFF8] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between gap-7 lg:p-15 md:p-6.25 p-6">
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
              <h2 className="text-black font-medium xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                Full Release Campaigns
              </h2>
              <p className="text-black xl:text-base text-sm">
                Our music promotion campaign for new artists covers pre-release buzz, launch day push, and post-release growth — so your music keeps building momentum long after it goes live.
              </p>
            </div>
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:mr-13 md:w-90 md:mr-7.5 w-full">
              <Image src={Images.Organic} alt="Global Reach" />
            </div>
          </div>
          <div className="bg-[#C3E5FF] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between gap-7 lg:p-15 md:p-6.25 p-6">
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
              <h2 className="text-black font-medium xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                India & Punjabi Promotion
              </h2>
              <p className="text-black xl:text-base text-sm">
                As a dedicated music promotion India service, we promote music across JioSaavn, Wynk, and Indian social media — and our music promotion service for Punjabi artists reaches Punjabi audiences from India to the UK, Canada, and beyond.
              </p>
            </div>
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:mr-13 md:w-90 md:mr-7.5 w-full">
              <Image src={Images.Royalties} alt="Keep 100% Royalties" />
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default KeyFeatures;
