import React from "react";
import Image from "next/image";
import { Images } from "@/public/exports";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Upload Your Music",
      desc: "You submit your original songs, beats, or catalog to the Amozart platform. Our team reviews your content to ensure it qualifies for YouTube Content ID.",
    },
    {
      step: "02",
      title: "Register Your Tracks",
      desc: "Once approved, Amozart sends your audio fingerprints and metadata to YouTube's official Content ID database, enabling automated tracking across the platform.",
    },
    {
      step: "03",
      title: "YouTube Detection",
      desc: "YouTube's system constantly scans billions of videos. Whenever your music is detected whether in user-generated content or large channels; Content ID automatically identifies it.",
    },
    {
      step: "04",
      title: "Claim & Earn Royalties",
      desc: "Amozart claims eligible videos on your behalf. Ads are monetized, revenue is collected, and you receive your royalties directly through your Amozart dashboard.",
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 xl:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10">
          <div className="flex flex-col md:w-1/2 w-full text-center md:text-left">
            <h2 className="text-black font-extrabold text-[36px] md:text-[48px] xl:text-[56px] leading-[1.1] tracking-tight">
              How YouTube <br className="hidden md:block" /> Content ID Works
            </h2>
            <p className="mt-6 text-black/70 text-sm md:text-base xl:text-lg max-w-lg leading-relaxed mx-auto md:mx-0">
              Amozart makes it simple to protect your music and earn royalties from every YouTube use. Here's how the entire Content ID process works from start to finish.
            </p>
          </div>

          <div className="md:w-1/2 w-full flex justify-center md:justify-end items-center">
            {/* Recreating the YouTube Content ID Logo using HTML/CSS */}
            <div className="flex items-center gap-4">
              <div className="bg-[#FF0000] rounded-2xl w-[90px] h-[64px] flex items-center justify-center shadow-md">
                {/* Play Button Triangle */}
                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[22px] border-l-white border-b-[12px] border-b-transparent ml-2"></div>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[#212121] font-extrabold text-[42px] tracking-tighter">YouTube</span>
                <span className="text-[#606060] font-medium text-[26px] tracking-tight -mt-1 text-right">Content ID</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 flex flex-col items-start text-left shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="relative mb-6">
                <span className="text-[64px] font-bold text-gray-100 leading-none pointer-events-none select-none">
                  {item.step}
                </span>
                <span className="absolute top-2 left-2 text-sm font-semibold text-gray-500 tracking-wider">
                  Step
                </span>
              </div>
              
              <h3 className="text-[#1a1a1a] font-bold text-[19px] mb-4">
                {item.title}
              </h3>
              
              <p className="text-gray-500 text-[14px] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
