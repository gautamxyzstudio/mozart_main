import { GIF, Images } from "@/public/exports";
import Image from "next/image";
import React from "react";

const ServicesCenterSection = () => {
  const services = [
    {
      id: "01",
      title: "Music Distribution",
      desc: "We get your music on every major digital platform—Spotify, Apple Music, Amazon Music, and many more—making it accessible to a global audience.",
      imgType: "disk",
    },
    {
      id: "02",
      title: "YouTube Channel Management",
      desc: "From strategy to execution, we manage your YouTube channel end-to-end. This includes content optimization, copyright management, SEO, and monetization.",
      imgType: "youtube",
    },
    {
      id: "03",
      title: "Artist Management",
      desc: "We help artists build their careers with complete support—brand development, release planning, bookings, and digital placement.",
      imgType: "player",
    },
    {
      id: "04",
      title: "Label Distribution",
      desc: "Professional distribution for labels, delivering content efficiently across multiple platforms under one roof.",
      imgType: "label",
    },
    {
      id: "05",
      title: "Promotion",
      desc: "We track, collect, and deposit your earnings from all platforms royalties, ad revenue, and streaming payouts directly into your account.",
      imgType: "promotion",
    },
    {
      id: "06",
      title: "Multi-Label Management",
      desc: "Our custom-built software enables easy management of multiple labels from a single dashboard—perfect for music businesses with diverse catalogs.",
      imgType: "software",
    },
    {
      id: "07",
      title: "Monetization",
      desc: "From strategy to execution, we manage your YouTube channel end-to-end. This includes content optimization, copyright management, SEO, and monetization..",
      imgType: "earnings",
    },
    {
      id: "08",
      title: "Auto Playlist & Promotion",
      desc: "AI-powered system automatically promotes your content and places it in curated playlists for maximum exposure..",
      imgType: "playlist",
    },
    {
      id: "09",
      title: "Takedown of illegal content",
      desc: "We protect your rights by helping you claim ownership and take down unauthorized or pirated versions of your content across the web.",
      imgType: "takedown",
    },
  ];

  return (
    <section className="flex flex-col w-full h-full">
      {services.map((service, index) => {
        const isEven = index % 2 !== 0;

        return (
          <div
            key={service.id}
            className={`w-full h-auto sticky -top-20 md:-top-10 flex flex-col ${
              isEven ? "md:flex-row-reverse" : "md:flex-row"
            } items-center justify-between py-9 md:py-19 xl:py-27 bg-background overflow-hidden`}
          >
            {/* --- Text Content Side --- */}
            <div
              className={`flex flex-col lg:w-[45%] md:w-[50%] w-full z-20 
              ${isEven ? "md:pr-10 XL:pr-20" : "md:pl-10 xl:pl-20"} px-4`}
            >
              <div className="flex flex-col items-start">
                <span className="text-[60px] md:text-[80px] lg:text-[100px] font-bold text-black/10 leading-none">
                  {service.id}
                </span>
                <div className="w-px h-16 md:h-24 bg-primary rounded-full mt-2 ml-4" />
              </div>

              <div className="flex flex-col space-y-4">
                <h2 className="font-bold xl:text-[64px] md:text-[32px] text-[32px]   text-black">
                  {service.title}
                </h2>
                <p className="text-gray-500 lg:text-base md:text-sm text-sm leading-relaxed max-w-md">
                  {service.desc}
                </p>
              </div>
            </div>

            {/* --- Image Section Side --- */}
            <div
              className={`md:w-[50%] w-full mt-12 md:mt-0 flex items-center relative h-full ${isEven ? "justify-start" : "justify-end"} `}
            >
              <Image
                src={isEven ? Images.BgVector : Images.BgVector2}
                alt="bg-vector"
                className={` relative xl:w-170 xl:h-148.5 md:w-105 md:h-91.75 w-64.25 h-56 ${
                  isEven ? " scale-x-[-1]" : ""
                }`}
              />

              {/* Main Images Logic */}
              {service.imgType === "disk" && (
                <div className="absolute z-10 flex justify-center items-center xl:right-29.5 md:right-15.5 right-19 xl:w-150 xl:h-150 md:w-98 md:h-98 w-70 h-70 ">
                  <Image
                    src={Images.Disk}
                    alt="Disk"
                    className="w-full h-full relative animate-rotate360 "
                  />
                  <Image
                    src={Images.JioSaavn}
                    alt="S"
                    className="rounded-xl absolute xl:top-15 xl:right-12 md:top-10 md:right-0 top-2 right-7 w-10 h-10 md:w-14 md:h-14 xl:w-21 xl:h-21  "
                  />
                  <Image
                    src={Images.AppleMusic}
                    alt="W"
                    className="rounded-xl absolute xl:-top-4 xl:left-39 md:-top-2 md:left-21 top-1 left-12 w-10 h-10 md:w-14 md:h-14 xl:w-21 xl:h-21"
                  />
                  <Image
                    src={Images.YoutubeMusic}
                    alt="A"
                    className="rounded-xl absolute xl:top-66 xl:-left-3 md:top-45 md:-left-3 top-31 -left-2 w-10 h-10 md:w-14 md:h-14 xl:w-21 xl:h-21"
                  />
                  <Image
                    src={Images.Spotify}
                    alt="Y"
                    className="rounded-xl absolute xl:top-107 xl:left-130 md:bottom-8 bottom-12 right-2 w-10 h-10 md:w-14 md:h-14 xl:w-21 xl:h-21"
                  />
                  <Image
                    src={Images.Wynk}
                    alt="J"
                    className="rounded-xl absolute xl:top-135 xl:left-69 md:-bottom-4 md:left-40 -bottom-2 w-10 h-10 md:w-14 md:h-14 xl:w-21 xl:h-21"
                  />
                </div>
              )}

              {service.imgType === "youtube" && (
                <Image
                  src={Images.YouTubeVideo}
                  alt="YT"
                  className="xl:w-121.75 xl:h-121.75 md:w-80.25 md:h-80.25 w-51 h-51 absolute xl:left-27 xl:top-11.75 z-10 md:left-13 md:top-5.25 left-27.5 rounded-xl"
                />
              )}

              {service.imgType === "player" && (
                <Image
                  src={Images.ArtistManagement}
                  alt="Player"
                  className="xl:w-147.25 xl:h-112.5 md:w-95.25 md:h-73 w-66.75 h-51 absolute xl:right-25 xl:top-18 z-10 md:right-13 md:top-9.25 right-9.5  "
                />
              )}

              {service.imgType === "label" && (
                <Image
                  src={GIF.LabelDistribution}
                  unoptimized
                  alt="Service"
                  className="xl:w-145 xl:h-112.5 md:w-92 md:h-78.5 w-59.5 h-51 absolute xl:left-25 xl:top-14.75 z-10 md:left-13 left-16 md:rounded-3xl rounded-xl  "
                />
              )}
              {service.imgType === "promotion" && (
                <Image
                  src={Images.Promotion}
                  alt="Service"
                  className="xl:w-145 xl:h-112.5 md:w-99.75 md:h-77.25 w-62.75 h-48.75 absolute xl:right-26 xl:top-18 z-10 md:right-13 right-24  "
                />
              )}

              {service.imgType === "software" && (
                <Image
                  src={Images.MultiLabel}
                  alt="Software"
                  className="xl:w-141 xl:h-141 rounded-full animate-rotate360 md:w-75.5 md:h-75.5 w-67.25 h-67.25 absolute xl:left-27.5 xl:top-3.5 z-10 md:left-14.25 left-16 "
                />
              )}

              {/* 07: Earnings / Monetization */}
              {service.imgType === "earnings" && (
                <Image
                  src={Images.Monetization}
                  alt="Earnings"
                  className="xl:w-157.75 xl:h-112.5 md:w-96 md:h-71 w-68 h-50.25 absolute xl:right-25 xl:top-18 z-10 md:right-8.75 right-17"
                />
              )}

              {/* 08: Playlist */}
              {service.imgType === "playlist" && (
                <Image
                  src={Images.AutoPlay}
                  alt="Playlist"
                  className="rounded-2xl xl:w-145 xl:h-110.75 md:w-86.75 md:h-66.25 w-65.75 h-50.25 absolute xl:left-25 xl:top-19 z-10 md:left-13 left-19.5"
                />
              )}

              {/* 09: Takedown */}
              {service.imgType === "takedown" && (
                <Image
                  src={Images.TakeDown}
                  alt="Takedown"
                  className="xl:w-147.25 xl:h-112.5 md:w-92 md:h-70.25 w-65.75 h-50.25 absolute xl:right-30 xl:top-18 z-10 md:right-13 right-19.5"
                />
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ServicesCenterSection;
