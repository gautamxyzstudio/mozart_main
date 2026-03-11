import React from "react";

export const ServicesTopSection = () => {
  return (
    <>
      <section className="w-full xl:h-156 md:h-119 h-81 relative flex flex-col justify-center items-center overflow-clip">
        <div className="absolute md:w-37 md:h-188.75 w-17.5 h-87.5 bg-[linear-gradient(180deg,rgba(103,57,183,0)_0%,rgba(103,57,183,0.45)_33.78%,rgba(103,57,183,0)_66.97%)] opacity-20 rotate-24 xl:mt-15.25 xl:ml-0 md:-mt-3 md:-ml-9 mt-11.25 left-0" />
        <div className="absolute md:w-37 md:h-188.75 w-17.5 h-87.5 bg-[linear-gradient(180deg,rgba(103,57,183,0)_0%,rgba(103,57,183,0.45)_33.78%,rgba(103,57,183,0)_66.97%)] opacity-20 xl:rotate-204 rotate-24 xl:-mt-44.5 xl:mr-10 md:-mt-3 md:mr-3.5 mt-12.5 mr-17 right-0" />
        <div>
          <h1 className="text-[#111] font-bold text-center capitalize text-[36px] leading-[1.1] md:text-[64px] xl:text-[100px]">
           Services
          </h1>

          {/* Description Section */}
          <p className="text-black80 font-normal text-center md:mt-5 mt-3 xl:w-132.5 md:w-119 w-95 text-[14px] px-3  leading-relaxed">
          We help Punjabi artists grow globally with music distribution, YouTube management, branding, promotions, and video production — all in one place.
          </p>
        </div>
      </section>
    </>
  );
};
