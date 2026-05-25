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
          Our Core Services
        </h3>

        <div className="xl:px-25 xl:pt-0  md:pb-25 md:px-13 px-6 py-16 flex flex-col xl:space-y-13 md:space-y-6 space-y-8 ">
          <div className="bg-[#FFD5D2] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between gap-7 lg:p-15 md:p-6.25 p-6">
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
              <h2 className="text-black font-bold xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                Royalty Collection & Payments 
              </h2>
              <p className="text-black xl:text-base text-sm">
                We track and collect all earnings generated from your music
                across streaming platforms, social media, radio, and
                international usage. Our system ensures you
                receive accurate and timely payments without missing any
                revenue source. 
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
                We protect your music ownership worldwide by registering
                and monitoring your rights. This ensures your work stays
                legally secured and no one can use or monetize it without proper
                authorization.  
              </p>
            </div>
            <div className="flex flex-col space-y-4 xl:w-150 xl:mr-13 md:w-90 md:mr-7.5 w-full">
              <Image src={Images.ROyalty2} alt="analytics" />
            </div>
          </div>

          <div className="bg-[#FBFFDB] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between gap-7 lg:p-15 md:p-6.25 p-6">
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
              <h2 className="text-black font-medium xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                Copyright & Ownership Management 
              </h2>
              <p className="text-black xl:text-base text-sm">
                We help establish official copyright for your music, giving you
                legal proof of ownership. This strengthens your rights and
                protects your content from misuse, copying, or unauthorized
                distribution. 
              </p>
            </div>
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:mr-13 md:w-90 md:mr-7.5 w-full">
              <Image src={Images.ROyalty3} alt="playlist pitching" />
            </div>
          </div>

          <div className="bg-[#FFD3DE] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between gap-7 lg:p-15 md:p-6.25 p-6">
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
              <h2 className="text-black font-medium xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                Streaming & Usage Tracking 
              </h2>
              <p className="text-black xl:text-base text-sm">
                We continuously monitor how and where your music is being used
                across platforms like Spotify, YouTube, Apple Music, Instagram,
                and more. This ensures every stream, play, and usage is properly
                recorded and monetized. 
              </p>
            </div>
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:mr-13 md:w-90 md:mr-7.5 w-full">
              <Image src={Images.ROyalty4} alt="Influencer Music Promotion" />
            </div>
          </div>

          <div className="bg-[#C5FFF8] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between gap-7 lg:p-15 md:p-6.25 p-6">
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
              <h2 className="text-black font-medium xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                Metadata & Catalog Management 
              </h2>
              <p className="text-black xl:text-base text-sm">
                We organize and manage your music data such as credits, ISRC
                codes, artist details, and publishing information. Proper
                metadata ensures your music is correctly identified and paid
                across all systems. 
              </p>
            </div>
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:mr-13 md:w-90 md:mr-7.5 w-full">
              <Image src={Images.ROyalty5} alt="Global Reach" />
            </div>
          </div>
          <div className="bg-[#C3E5FF] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between gap-7 lg:p-15 md:p-6.25 p-6">
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
              <h2 className="text-black font-medium xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                Royalty Reporting & Insights 
              </h2>
              <p className="text-black xl:text-base text-sm">
                We provide a clear dashboard with detailed reports of your
                earnings, performance, and revenue sources. This helps you
                understand your growth and make smarter decisions for your music
                career. 
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
