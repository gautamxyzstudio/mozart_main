import React from "react";
import Image from "next/image";
import { Icons, Images } from "@/public/exports";

const OurVisionSection = () => {
  return (
    <section className="overflow-clip flex flex-col w-full xl:py-4  md:pb-10 relative bg-white">
      <span className="flex md:justify-end justify-items-start xl:text-[200px] xl:leading-51.5 md:text-[124px] md:leading-32.5 text-[70px] leading-19 text-foreground/10 font-bold xl:-mt-11.75 md:-mt-4.25 -mt-2.75 wrap-break-word md:mr-0 mr-6 select-none pointer-events-none xl:mb-24 md:mb-12.5 mb-17">
        Vision
      </span>

      <div className="flex flex-col md:flex-row items-center w-full px-6 md:px-13 xl:px-25 xl:pb-25  -mt-10 md:-mt-20 xl:-mt-32 relative z-10">
        <div className="relative w-full md:w-1/2  flex justify-center items-center h-87.5 md:h-125 order-2 md:order-1  p-20">
          <div className="absolute inset-0 flex justify-center items-center z-0 scale-125 opacity-60 ">
            <Image
              src={Icons.BackImg}
              alt="Music Notes Blast"
              fill
              className="object-contain w-157.7 h-155.5 text-[]"
            />
          </div>
          <div className="relative flex justify-center items-center w-64 h-64 md:w-95 md:h-95">
            {/* Disk Image */}
            <Image
              src={Images.Disk}
              alt="Lyrics"
              width={390}
              height={390}
              className="animate-rotate360 xl:w-120 xl:h-70 md:w-65 md:h-43 w-36.75 h-36.75 object-contain"
            />
            <div className="absolute z-20 flex justify-center items-center">
              <div className="rounded-full xl:p-8 md:p-5  p-9  shadow-lg">
                <Image
                  src={Icons.MozartIcon}
                  alt="AMozart Logo"
                  width={390}
                  height={390}
                  className=" xl:h-8 xl:w-18  md:h-4.5 md:w-10.25 w-9.25 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full md:w-1/2 md:pl-16 flex flex-col justify-center  text-center md:text-left order-1 md:order-2 mb-20">
          <h2 className="xl:text-[64px] md:text-[48px] text-[32px]  font-bold text-black xl:mb-8 md:mb-4 mb-3">
            Our Vision
          </h2>
          <p className="text-black/70 xl:text-base md:text-[14px] text-[14px] leading-relaxed max-w-lg mx-auto md:mx-0">
            Our vision is to empower artists globally by removing barriers in
            music distribution and promotion. We believe talent deserves
            visibility, ownership, and fair opportunities and AMozart is here to
            make that happen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurVisionSection;
