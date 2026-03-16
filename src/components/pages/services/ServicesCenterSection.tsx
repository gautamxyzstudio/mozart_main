import { Images } from "@/public/exports";
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
    <section className="flex flex-col space-y-8 md:space-y-12 w-full h-full">
      {services.map((service, index) => {
        const isEven = index % 2 !== 0;

        return (
          <div
            key={service.id}
            className={`w-full h-auto sticky -top-10 flex flex-col ${
              isEven ? "md:flex-row-reverse" : "md:flex-row"
            } items-center justify-between py-12 md:py-0 xl:py-27 bg-background overflow-hidden`}
          >
            {/* --- Text Content Side --- */}
            <div
              className={`flex flex-col space-y-6 md:space-y-8 lg:w-[45%] md:w-[50%] w-full z-20 
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
                className={` relative object-contain xl:w-170 xl:h-148.5 md:w-170 md:h-148.5 w-64.25 h-56 ${
                  isEven ? " scale-x-[-1]" : ""
                }`}
              />

              {/* Main Images Logic */}
              {service.imgType === "disk" && (
                <div className="absolute z-10 flex justify-center items-center xl:-left-10 xl:-top-5 md:-left-10 md:top-30 left-10 top-0 ">
                  <Image
                    src={Images.Disk}
                    alt="Disk"
                    className="xl:w-150 xl:h-150 md:w-87.5 md:h-87.5 w-60 h-60 relative animate-rotate360 "
                  />
                  <Image
                    src={Images.Spotify}
                    alt="S"
                    className="rounded-xl shadow-lg absolute xl:top-15 xl:left-[84%]  md:top-0  md:left-60 -top-3 left-20  w-10 h-10 md:w-14 md:h-14 xl:w-21 xl:h-21  "
                  />
                  <Image
                    src={Images.Wynk}
                    alt="W"
                    className="rounded-xl shadow-lg absolute xl:top-15 xl:left-8 md:top-5  md:left-8 top-47 left-45  w-10 h-10 md:w-14 md:h-14 xl:w-21 xl:h-21"
                  />
                  <Image
                    src={Images.AppleMusic}
                    alt="A"
                    className="rounded-xl shadow-lg absolute xl:top-90 xl:-left-6  md:top-60  md:left-2 top-51 left-10  w-10 h-10 md:w-14 md:h-14 xl:w-21 xl:h-21"
                  />
                  <Image
                    src={Images.JioSaavn}
                    alt="J"
                    className="rounded-xl shadow-lg absolute xl:top-131 xl:left-90  md:top-78  md:left-50 top-22 -left-4  w-10 h-10 md:w-14 md:h-14 xl:w-21 xl:h-21"
                  />
                  <Image
                    src={Images.YoutubeMusic}
                    alt="Y"
                    className="rounded-xl shadow-lg absolute xl:top-90 xl:left-130  md:top-40  md:left-80 top-10 left-49  w-10 h-10 md:w-14 md:h-14 xl:w-21 xl:h-21"
                  />
                </div>
              )}

              {service.imgType === "youtube" && (
                <Image
                  src={Images.YouTubeVideo}
                  alt="YT"
                  className="xl:w-109.25 xl:h-109.25 md:w-80.25 md:h-80.25 w-51 h-51 absolute xl:left-40 xl:top-10 z-10 md:left-10 md:top-40 left-20  "
                />
              )}

              {service.imgType === "player" && (
                <Image
                  src={Images.Plays}
                  alt="Player"
                  className="xl:w-130.25 xl:h-109.25 md:w-80.25 md:h-70.25 w-51 h-51 absolute xl:left-30 xl:top-10 z-10 md:left-0 md:top-40 left-30  "
                />
              )}

              {(service.imgType === "label" ||
                service.imgType === "promotion") && (
                <Image
                  src={
                    service.imgType === "label" ? Images.Sraph : Images.Speaker
                  }
                  alt="Service"
                  className="xl:w-130.25 xl:h-109.25 md:w-80.25 md:h-70.25 w-51 h-51 absolute xl:left-30 xl:top-10 z-10 md:left-10 md:top-40 left-30  "
                />
              )}

              {service.imgType === "software" && (
                <Image
                  src={Images.SoftwareImg}
                  alt="Software"
                  className="xl:w-109.25 xl:h-109.25 md:w-80.25 md:h-80.25 w-51 h-51 absolute xl:left-60 xl:top-10 z-10 md:left-10 md:top-34 left-20  "
                />
              )}

              {/* 07: Earnings / Monetization */}
              {service.imgType === "earnings" && (
                <Image
                  src={Images.EarningsImg}
                  alt="Earnings"
                  className="xl:w-130.25 xl:h-109.25 md:w-80.25 md:h-70.25 w-70 h-51 absolute xl:left-20 xl:top-10 z-10 md:left-0 md:top-40 left-20  "
                />
              )}

              {/* 08: Playlist */}
              {service.imgType === "playlist" && (
                <Image
                  src={Images.PlaylistImg}
                  alt="Playlist"
                  className="xl:w-130.25 xl:h-109.25 md:w-85.25 md:h-70.25 w-70 h-51 absolute xl:left-40 xl:top-10 z-10 md:left-10 md:top-40 left-10  "
                />
              )}

              {/* 09: Takedown */}
              {service.imgType === "takedown" && (
                <Image
                  src={Images.TakedownImg}
                  alt="Takedown"
                  className="xl:w-130.25 xl:h-109.25 md:w-80.25 md:h-70.25 w-70 h-51 absolute xl:left-20 xl:top-10 z-10 md:left-10 md:top-40 left-20  "
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
