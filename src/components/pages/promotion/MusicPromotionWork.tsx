"use client";
import { Images } from "@/public/exports";
import Image from "next/image";
import React from "react";

const MusicPromotionWork = () => {
    return (
        <section className="w-full bg-[#111111] min-h-[600px] flex items-center justify-center overflow-hidden relative pt-20 pb-[47px]  px-6 md:px-8 font-sans">

            {/* 1. Background Big Text "Promotion" */}
            <div className="absolute top-0 lg:top-[-4%] md:top-[-2%] left-0 w-full overflow-hidden select-none pointer-events-none z-0">
                <span className="block w-full xl:text-[200px] xl:leading-51.5 md:text-[120px] md:leading-32.5 text-[60px] leading-19 text-white font-bold opacity-10 xl:-mt-1 md:-mt-0 -mt-4 xl:-ml-1 md:-ml-1 -ml-1">
                    Promotion
                </span>
            </div>

            {/* Main Content Wrapper */}
            <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-10 items-center relative z-10 lg:mt-12">

                {/* LEFT COLUMN: Vinyl Disc Image Container */}
                <div className="flex justify-center items-center relative w-full aspect-square max-w-[450px] md:max-w-[550px] mx-auto md:mx-0 order-2 md:order-1">

                    {/* Staff Lines (Horizontal lines behind the vinyl) */}


                    {/* Layered Disc UI */}
                    <div className="relative z-10 w-[90%] aspect-square rounded-full bg-[#1d162f] flex items-center justify-center shadow-2xl">

                        <div className="absolute left-[-5%] right-[-5%] flex flex-col gap-6 md:gap-8 pointer-events-none z-0">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="w-full h-[1px] bg-white" />
                            ))}
                        </div>
                        {/* Inner Purple Ring */}
                        <div className="w-[82%] aspect-square rounded-full bg-[#6d36c2] flex items-center justify-center z-1">
                            {/* Vinyl Center */}
                            <div className="relative w-[75%] aspect-square rounded-full overflow-hidden  flex items-center justify-center">
                                <Image
                                    src={Images.Disk}
                                    alt="Music Promotion Vinyl"
                                    className="w-full h-full object-cover animate-[spin_10s_linear_infinite]"
                                />
                                {/* Center Hole / Dot */}
                                <div className="absolute w-[16%] aspect-square bg-[#6d36c2] rounded-full shadow-inner border-[2px] border-black/20" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: Text Content & CTA Button */}
                <div className="text-left max-w-xl md:pl-8 lg:pl-12 flex flex-col justify-center order-1 md:order-2">
                    <h2 className="text-white text-[32px] md:text-[40px] lg:text-[64px] font-extrabold tracking-tight mb-6 leading-[1.1]">
                        Music Promotion
                        That Works
                    </h2>

                    <p className="text-white/70 text-sm md:text-base mb-10 leading-relaxed font-normal max-w-[480px]">
                        We help artists grow with smart promotion strategies, including playlist pitching,
                        social media campaigns, and targeted marketing designed to increase your
                        streams, reach, and visibility.
                    </p>

                    <div className="w-full md:w-auto">
                        <a
                            href={`${process.env.NEXT_PUBLIC_ADMIN_BASE_MAIN_URL}/signup`}
                            className="inline-block w-full md:w-auto text-center bg-[#6d36c2] hover:bg-[#592ba1] text-white font-semibold text-sm md:text-base py-3.5 px-8 md:px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
                        >
                            Promote Now
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MusicPromotionWork;