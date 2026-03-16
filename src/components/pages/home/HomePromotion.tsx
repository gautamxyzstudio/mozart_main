import React from "react";
import PromotionStep from "./PromotionStep";

const HomePromotion = () => {
  return (
    <section className="w-full flex flex-col space-y-6">
      <span className="xl:text-[200px] xl:leading-51.5 md:text-[124px] md:leading-32.5 text-[70px] leading-19 text-foreground/10 font-bold xl:-mt-7.75 md:-mt-5 mt-11 xl:-ml-3">
        Promotion
      </span>
      <div className="w-full flex flex-col items-center xl:space-y-22 md:space-y-8 space-y-6">
        <div className="flex flex-col space-y-4 md:items-center md:text-center md:px-0 px-6">
          <h2 className="xl:text-[64px] xl:leading-18 md:text-[48px] md:leading-13.5 text-[32px] leading-9.5 font-bold text-foreground">
            Promotion That Work
          </h2>
          <p className="text-black80 xl:text-base text-sm md:w-[70%]">
            Sub text We help Punjabi artists and creators go global with music
            distribution, YouTube channel management, paid promotions, and
            more.....
          </p>
        </div>
        <div className="w-full h-full flex justify-center overflow-clip">
          <div className="xl:w-full xl: md:w-310 md:h-114.5 w-300 h-102 flex justify-center xl:pt-13 pt-11.5 relative">
            <PromotionStep />
            <div className=" absolute bottom-0 w-full xl:h-44.5 md:h-25 h-20 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_100%)]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePromotion;
