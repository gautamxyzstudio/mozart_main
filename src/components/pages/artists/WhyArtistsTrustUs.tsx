import React from "react";
import Image from "next/image";
import { Images } from "@/public/exports";

const WhyArtistsTrustUs = () => {
  const points = [
    {
      num: "01",
      title: " Industry-Focused Expertise",
      desc: "Understands the music industry deeply, helping you make the right moves at the right time. ",
    },
    {
      num: "02",
      title: "Personalized Artist Support",
      desc: "Every artist gets a custom plan tailored to their style, goals, and long-term growth. ",
    },
    {
      num: "03",
      title: "Transparent & Honest Management",
      desc: "Keep every process clear - no hidden terms, no confusion, just clean communication.",
    },
    {
      num: "04",
      title: "Growth-Driven Strategy",
      desc: "From branding to releases, every decision we make is aimed at expanding your reach and results. ",
    },
    {
      num: "05",
      title: " End-to-End Career Support",
      desc: "Handle management, marketing, distribution, and more, so you stay focused on creating great music. ",
    },
  ];

  return (
    <section className="w-full bg-[#111111] py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20 flex flex-col-reverse md:flex-row items-center md:items-start gap-16 md:gap-14">
        {/* Left Side: Mockup Image */}
        {/* User can swap Images.Dummy with their own phone/app mockup image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start relative mt-10 md:mt-0">
          {/* Decorative shapes matching the mockup */}
          <div className="absolute -top-7 -left-5 md:-left-10 xl:-left-6  w-40 h-40 bg-[#5939b4] rounded-full z-0"></div>
          <div className="absolute -bottom-4 -right-4 md:-right-10 xl:right-20 xl:-bottom-7 w-32 h-32 bg-[#5939b4] z-0"></div>

          <div className="relative z-10 w-full max-w-[420px]">
            <Image
              src={Images.Four}
              alt="App Mockup"
              width={500}
              height={700}
              className="w-full h-auto object-contain drop-shadow-2xl rounded-xl"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 flex flex-col z-10">
          <h2 className="text-3xl md:text-[28px] lg:text-[50px] font-bold text-white mb-14 tracking-wide">
            Why Artists Trust Us
          </h2>

          <div className="flex flex-col gap-10">
            {points.map((point, idx) => (
              <div key={idx} className="flex items-start gap-6 md:gap-8">
                {/* Number with angled background */}
                <div className="relative flex-shrink-0 w-16 h-16 flex items-center justify-center mt-1">
                  <div className="absolute inset-0 bg-[#281545] rounded-tl-[50px] -z-10"></div>
                  <span className="text-3xl md:text-[34px] font-bold text-white tracking-tighter">
                    {point.num}
                  </span>
                </div>

                {/* Text Content */}
                <div className="flex flex-col">
                  <h3 className="text-white font-bold text-[17px] md:text-base xl:text-[24px] mb-2.5">
                    {point.title}
                  </h3>
                  <p className="text-[#a8a8a8] text-sm md:text-[12px] xl:text-[15px] leading-[1.7] max-w-[420px]">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyArtistsTrustUs;
