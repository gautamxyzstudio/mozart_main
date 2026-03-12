import React from "react";

const HomeServiceSection = () => {
  return (
    <section className="xl:px-25 xl:pt-0  md:pb-25 md:px-13 px-6 py-16 flex flex-col xl:space-y-13 md:space-y-6 space-y-8 ">
      <div className="bg-primary xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky top-10 flex md:flex-row flex-col md:items-center md:justify-between md:p-0 p-6">
        <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full">
          <h2 className="text-background font-bold xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
            Distribute Yours Song Worldwide
          </h2>
          <p className="text-background/70 xl:text-base text-sm">
            Get your music on Spotify, Apple Music, YouTube Music, and more—all
            with one easy upload. Fast, hassle-free distribution with full
            control and no hidden fees.
          </p>
        </div>
        <div className="xl:w-126.75 xl:h-115 md:w-75 md:h-67.5 w-75.75 h-69"></div>
      </div>

      <div className="bg-[#FCB84A] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky top-10 flex md:flex-row flex-col-reverse md:items-center md:justify-between md:p-0 p-6">
        <div className="xl:w-126.75 xl:h-115 md:w-75 md:h-67.5 w-75.75 h-69"></div>
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

      <div className="bg-[#08C2DE] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky top-10 flex md:flex-row flex-col md:items-center md:justify-between md:p-0 p-6">
        <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full">
          <h2 className="text-background font-medium xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
            Build Your Artist Brand
          </h2>
          <p className="text-background/70 xl:text-base text-sm">
            We help Punjabi artists and creators go global — with music
            distribution, YouTube channel management, paid promotions, and more
          </p>
        </div>
        <div className="xl:w-126.75 xl:h-115 md:w-75 md:h-67.5 w-75.75 h-69"></div>
      </div>
    </section>
  );
};

export default HomeServiceSection;
