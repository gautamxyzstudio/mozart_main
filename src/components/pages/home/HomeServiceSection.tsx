import { GIF, Images } from "@/public/exports";
import Image from "next/image";
import React from "react";

const HomeServiceSection = () => {
  return (
    <section className="xl:px-25 xl:pt-0  md:pb-25 md:px-13 px-6 py-16 flex flex-col xl:space-y-13 md:space-y-6 space-y-8 ">
      <div className="bg-primary xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between items-end md:p-0 p-6 pr-0">
        <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
          <h2 className="text-background font-bold xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
            Distribute Yours Song Worldwide
          </h2>
          <p className="text-background/70 xl:text-base text-sm">
            Get your music on Spotify, Apple Music, YouTube Music, and more—all
            with one easy upload. Fast, hassle-free distribution with full
            control and no hidden fees.
          </p>
        </div>
        <div className="xl:w-126.75 xl:h-115 md:w-75 md:h-67.5 w-75.75 h-69 md:mt-0 mt-8 relative">
          <Image
            src={Images.ServiceLyri}
            alt="Distribute Yours Song Worldwide"
            className="w-full h-full"
          />
          <Image
            src={Images.Disk}
            alt=" Distribute Yours Song Worldwide"
            className="xl:w-100 xl:h-100 md:w-59 md:h-59 w-61.5 h-61.5 absolute xl:top-8 xl:left-6 md:top-5 md:left-3 top-4 left-3 object-cover rounded-full animate-rotate360"
          />
          <Image
            src={Images.Spotify}
            alt="Spotify"
            className="absolute xl:w-16 xl:h-16 rounded-lg w-9.5 h-9.5 object-cover xl:top-1 xl:left-47.5 md:-top-px md:left-28 -top-1 left-26"
          />
          <Image
            src={Images.Wynk}
            alt="Wynk"
            className="absolute xl:w-16 xl:h-16 rounded-lg w-9.5 h-9.5 object-cover xl:top-31.5 xl:left-3 md:top-18.75 md:left-2 top-17 left-3.5"
          />
          <Image
            src={Images.JioSaavn}
            alt="JioSaavn"
            className="absolute xl:w-16 xl:h-16 rounded-lg w-9.5 h-9.5 object-cover xl:top-44.25 xl:right-14 md:top-26.25 md:right-9 top-21.25 right-9.25"
          />
          <Image
            src={Images.AppleMusic}
            alt="Apple Music"
            className="absolute xl:w-16 xl:h-16 rounded-lg w-9.5 h-9.5 object-cover xl:bottom-16 xl:left-6.75 md:bottom-8 md:left-4.25 left-3.75 bottom-6"
          />
          <Image
            src={Images.YoutubeMusic}
            alt="Youtube Music"
            className="absolute xl:w-16 xl:h-16 rounded-lg w-9.5 h-9.5 object-cover xl:bottom-4.5 xl:right-39.25 bottom-2.25 md:right-23 right-24.25"
          />
        </div>
      </div>

      <div className="bg-[#FCB84A] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col-reverse md:items-center md:justify-between md:p-0 p-6">
        <div className="xl:w-126.75 xl:h-115 md:w-75 md:h-67.5 w-75.75 h-69 relative md:ml-0 -ml-6 md:mt-0 mt-18">
          <Image
            src={Images.ServiceLyri}
            alt="Distribute Yours Song Worldwide"
            className="w-full h-full scale-x-[-1] "
          />
          <Image
            src={GIF.Youtube}
            unoptimized
            alt="Grow on Youtube"
            className="xl:w-100 xl:h-100 md:w-59 md:h-59 w-58.75 h-58.75 absolute xl:top-8 xl:right-6 md:top-4 md:right-4 top-5 right-4 object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col space-y-4 xl:w-153.5 xl:mr-13 md:w-90 md:mr-7.5 w-full">
          <h2 className="text-background font-medium xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
            Grow on Youtube
          </h2>
          <p className="text-background/70 xl:text-base text-sm">
            Get your music on Spotify, Apple Music, YouTube Music, and more—all
            with one easy upload. Fast, hassle-free distribution with full
            control and no hidden fees.
          </p>
        </div>
      </div>

      <div className="bg-[#08C2DE] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between items-end md:p-0 p-6 pr-0">
        <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
          <h2 className="text-background font-medium xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
            Build Your Artist Brand
          </h2>
          <p className="text-background/70 xl:text-base text-sm">
            We help Punjabi artists and creators go global — with music
            distribution, YouTube channel management, paid promotions, and more
          </p>
        </div>
        <div className="xl:w-160.75 xl:h-92.5 md:w-95 md:h-55 w-75.75 h-63.5 relative md:mt-0 mt-8">
          <Image
            src={Images.LyricsBox}
            alt="Distribute Yours Song Worldwide"
            className="w-full h-full"
          />
          <Image
            src={GIF.Player}
            unoptimized
            alt="Distribute Yours Song Worldwide"
            className="xl:w-118 xl:h-46.25 md:w-69.5 md:h-27.25 w-57.75 h-22.5 absolute xl:top-23 xl:right-5 md:top-13.75 md:right-3 top-24 right-0 object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeServiceSection;
