import React from "react";
import Image from "next/image";
import { Images } from "@/public/exports";

const WhoIsEligible = () => {
  const criteria = [
    {
      num: "01",
      title: "Global Music Protection",
      desc: "Your tracks are fully registered in YouTube's Content ID system with accurate metadata and audio fingerprints, ensuring every use of your music is detected.",
    },
    {
      num: "02",
      title: "No unauthorized samples",
      desc: "Songs containing unlicensed samples, loops, beats, or copyrighted elements cannot be registered.",
    },
    {
      num: "03",
      title: "Clear metadata is required",
      desc: "Accurate titles, artist names, composer details, and ownership info must be provided for proper Content ID matching.",
    },
    {
      num: "04",
      title: "High-quality audio files",
      desc: "Your track should be professionally mixed and mastered for optimal recognition by YouTube's system.",
    },
    {
      num: "05",
      title: "No public domain or royalty-free content",
      desc: "Your tracks are fully registered in YouTube's Content ID system with accurate metadata and audio fingerprints, ensuring every use of your music is detected.",
    },
  ];

  return (
    <section className="w-full bg-[#111111] py-20 px-6 md:px-12 xl:px-20 font-sans text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="relative w-full max-w-[500px] rounded-xl overflow-hidden shadow-2xl">
            {/* Using a placeholder image for the eligibility graphic */}
            <Image
              src={Images.Eligible} 
              alt="Who is Eligible for Content ID"
              className="w-full h-auto object-cover rounded-xl border border-white/10"
              priority
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-10">
          <h2 className="font-extrabold text-[36px] md:text-[48px] xl:text-[52px] leading-[1.1] tracking-tight">
            Who is Eligible for <br className="hidden md:block" /> Content ID
          </h2>

          <div className="flex flex-col space-y-8">
            {criteria.map((item, idx) => (
              <div key={idx} className="flex flex-row items-start gap-6">
                {/* Number styling with the offset background */}
                <div className="relative flex-shrink-0 w-12 h-12">
                  <div className="absolute inset-0 bg-[#1e1245] rounded-tl-[5px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-md"></div>
                  <span className="absolute -top-1.5 -right-2 text-[#7c3aed] font-medium text-[40px] leading-none tracking-tight">
                    {item.num}
                  </span>
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col pt-1 space-y-1">
                  <h3 className="font-bold text-[18px] md:text-[20px]">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-[14px] md:text-[15px] leading-relaxed max-w-md">
                    {item.desc}
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

export default WhoIsEligible;
