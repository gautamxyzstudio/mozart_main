import React from 'react';
import Image from 'next/image';
import { Images } from '@/public/exports';
import Link from 'next/link';

const WhatIsGlobalChart = () => {
  return (
    <section className="w-full bg-[#0a0a0a] py-20 xl:py-32 md:py-10 overflow-hidden  flex flex-col justify-center relative">

        <div className="absolute top-1/4 left-0 -translate-x-1/2 w-150 h-150 bg-[#6739b7]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-100 h-100 bg-[#9b4dff]/8 rounded-full blur-[120px] pointer-events-none" />
      {/* Massive Background Text */}
      <div className="absolute top-0 left-0 w-full overflow-hidden flex pointer-events-none select-none opacity-20">
        <h2 className="xl:text-[200px] md:text-[100px] font-black text-[#FFF] opacity-0.1 whitespace-nowrap leading-none md:block hidden">
          Global Chart
        </h2>
      </div>

      <div className="max-w-360 mx-auto px-6 md:px-12 xl:px-20 w-full relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-[18px] xl:gap-24 w-full mt-10 md:mt-16">
          
          {/* Left Image Content */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start relative">
            <div className="relative w-full max-w-125 aspect-square">
              {/* Optional glow behind image */}
              <div className="absolute inset-0 bg-[#7b42f6]/30 rounded-full blur-[80px] -z-10" />
              
              <Image 
                src={Images.GlobalChart2} 
                alt="Globe with headphones placeholder" 
                layout="fill"
                objectFit="contain"
                className="drop-shadow-2xl rounded-2xl"
              />
            </div>
          </div>

          {/* Right Text Content */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-4xl md:text-[40px] xl:text-[56px] font-bold text-white leading-[1.15] mb-6">
              What Is Music <br className="hidden md:block" />
              Global Chart
            </h2>
            
            <p className="text-[#a1a1aa] text-sm md:text-base xl:text-lg mb-10 font-light leading-[1.8] max-w-[540px]">
              Music Global Chart is a worldwide ranking system that shows how songs and
              artists perform across countries and major music platforms. It provides clear,
              accurate data to help you understand your global reach and real chart position.
            </p>
            
            <Link 
              href="/services" 
              className="bg-[#7b42f6] hover:bg-[#6833d6] text-white px-10 py-3.5 rounded-full font-medium text-[15px] transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(123,66,246,0.3)] w-[240px] md:w-auto text-center"
            >
              Buy Now
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatIsGlobalChart;
