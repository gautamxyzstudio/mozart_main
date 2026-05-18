"use client";
import { Icons } from "@/public/exports";
import Image from "next/image";
import React from "react";

const DigitalStreamingPlatforms = () => {
    const platforms = [
        { logo: Icons.Spotify2 },
        { logo: Icons.AppleMusic2 },
        { logo: Icons.TikTok },
        { logo: Icons.Amazon },
        { logo: Icons.Tidal },
        { logo: Icons.instagram2 },
        { logo: Icons.Deerzer },
        { logo: Icons.Beatport },
        { logo: Icons.Music },
        { logo: Icons.Pandora },
        { logo: Icons.Vevo },
        { logo: Icons.Shazam },
    ];

    return (
        <div className="w-full relative pb-20 lg:pb-28 bg-[#f8f9fa] flex flex-col items-center overflow-hidden z-10 select-none">

            {/* Massive Background Faded Text ("Platform") */}
            {/* <div className="absolute top-[-20px] md:top-[-40px] lg:top-[-60px] left-6 md:left-12 pointer-events-none z-0 whitespace-nowrap opacity-[0.04]"> */}

            <span className="w-full xl:text-[200px] xl:leading-51.5 md:text-[124px] md:leading-32.5 text-[60px] leading-19 text-black/70 font-bold opacity-10 xl:-mt-7 md:-mt-5 -mt-3 xl:-ml-15 md:-ml-8 -ml-5">
                Platform
            </span>
            {/* </div> */}

            {/* Heading Section */}
            <div className="w-full flex flex-col items-center text-center px-6 relative z-10 max-w-4xl mx-auto mb-12 md:mb-16">
                <h2 className="text-[#111111] font-black text-3xl md:text-4xl lg:text-[46px] tracking-tight">
                    Digital Streaming Platform
                </h2>
            </div>

            {/* Auto Scrolling Layout for Logos - 3 Rows (CSS Marquee) */}
            <div className="w-full relative z-10 hidden md:flex flex-col gap-4 lg:px-25 md:px-13  md:gap-6 overflow-hidden">


                {/* Row 1 */}
                <div className="flex w-full overflow-hidden">
                    <div className="flex w-max md:animate-marquee" >
                        {Array(10).fill(platforms.slice(0, 4)).flat().map((platform, idx) => (
                            <div
                                key={`r1-${idx}`}
                                className="shrink-0 w-[160px] sm:w-[200px] md:w-[240px] h-[85px] md:h-[100px] bg-white rounded-xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-center justify-center p-4 md:p-6 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 mx-2 md:mx-3 cursor-pointer"
                            >
                                <div className="w-full h-full flex items-center justify-center opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                                    <Image
                                        src={platform.logo}
                                        alt="platform-logo"
                                        width={180}
                                        height={180}
                                        className="max-h-10 object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2 */}
                <div className="flex w-full overflow-hidden">
                    <div className="flex w-max md:animate-marquee " style={{ animationDuration: '45s' }}>
                        {Array(10).fill(platforms.slice(4, 8)).flat().map((platform, idx) => (
                            <div
                                key={`r2-${idx}`}
                                className="shrink-0 w-[160px] sm:w-[200px] md:w-[240px] h-[85px] md:h-[100px] bg-white rounded-xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-center justify-center p-4 md:p-6 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 mx-2 md:mx-3 cursor-pointer"
                            >
                                <div className="w-full h-full flex items-center justify-center opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                                    <Image
                                        src={platform.logo}
                                        alt="platform-logo"
                                        width={180}
                                        height={180}
                                        className="max-h-10 object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 3 */}
                <div className="flex w-full overflow-hidden">
                    <div className="flex w-max md:animate-marquee" style={{ animationDuration: '35s' }}>
                        {Array(10).fill(platforms.slice(8, 12)).flat().map((platform, idx) => (
                            <div
                                key={`r3-${idx}`}
                                className="shrink-0 w-[160px] sm:w-[200px] md:w-[240px] h-[85px] md:h-[100px] bg-white rounded-xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-center justify-center p-4 md:p-6 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 mx-2 md:mx-3 cursor-pointer"
                            >
                                <div className="w-full h-full flex items-center justify-center opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                                    <Image
                                        src={platform.logo}
                                        alt="platform-logo"
                                        width={180}
                                        height={180}
                                        className="max-h-10 object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full relative z-10 flex flex-wrap justify-between gap-y-5 overflow-hidden md:hidden px-6">

                {platforms.map((platform, idx) => (
                    <div
                        key={`r1-${idx}`}
                        className="w-[48%] h-[85px] bg-white rounded-xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-center justify-center p-5 cursor-pointer"
                    >
                        <div className="w-full h-full flex items-center justify-center opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                            <Image
                                src={platform.logo}
                                alt="platform-logo"
                                width={180}
                                height={180}
                                className="max-h-10 object-contain"
                            />
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default DigitalStreamingPlatforms;