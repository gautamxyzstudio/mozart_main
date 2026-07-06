import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Images } from "@/public/exports";

const   WhatIsYouTubeContentId = () => {
  return (
    <section className="w-full bg-[#F8F8F8] py-10 px-6 md:px-12 xl:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-20">
        
        {/* Left Side: Illustration */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative">
          <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
             {/* Using a placeholder image for the floating UI elements, 
                 to be swapped when exact image is known in exports */}
            <Image
              src={Images.YouTubeContentID} 
              alt="What is YouTube Content ID"
              className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] animate-float-bob"
              priority
            />
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <h2 className="text-[#111] font-extrabold text-[40px] md:text-[48px] xl:text-[56px] leading-[1.1] tracking-tight">
            What Is YouTube <br className="hidden lg:block" /> Content ID?
          </h2>
          
          <p className="text-[#4a4a4a] text-base md:text-lg max-w-lg leading-relaxed">
            YouTube Content ID is a system that automatically detects when your music is used in any video on YouTube. Once your track is registered, YouTube scans every video on the platform and flags any match it finds. As the rights holder, you decide what happens — earn from it, track it, or block it. It is the simplest way for independent artists to protect their music and collect royalties from every use on YouTube.
          </p>
          
          <div className="pt-2 w-full flex justify-center md:justify-start">
            <Link
              href="/apply"
              className="inline-flex w-[85%] md:w-auto items-center justify-center px-20 py-3.5 rounded-full bg-[#6840d0] text-white font-bold text-base hover:bg-[#5b36b8] transition-colors shadow-lg"
            >
              Get Started Free
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhatIsYouTubeContentId;
