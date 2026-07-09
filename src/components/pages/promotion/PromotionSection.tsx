"use client";
import React, { useState, useEffect } from "react";
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import CampaignIcon from '@mui/icons-material/Campaign';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

const PromotionSection = () => {
    const [step, setStep] = useState(0);

    const stepsData = [
        {
            step: "01",
            icon: <TrackChangesIcon fontSize="medium" />,
            title: "Every Channel Covered",
            desc: "Playlist pitching, social media, paid ads, blogs, and influencer campaigns — all handled by one team under one online music promotion service.",
        },
        {
            step: "02",
            icon: <CampaignIcon fontSize="medium" />,
            title: "Built for Indian & Punjabi Artists",
            desc: "We understand the Indian and Punjabi music market — which platforms work, which communities matter, and how to reach both local and global audiences.",
        },
        {
            step: "03",
            icon: <TrendingUpIcon fontSize="medium" />,
            title: "Real Data, Real Results",
            desc: "Every promotion decision is backed by stream analytics and audience insights — not guesswork.",
        },
        {
            step: "04",
            icon: <AnalyticsIcon fontSize="medium" />,
            title: "Full Transparency",
            desc: "Clear reports at every stage — streams, placements, ad performance, and audience growth — always.",
        },
        {
            step: "05",
            icon: <AutoGraphIcon fontSize="medium" />,
            title: "Growth That Lasts",
            desc: "Our campaigns build momentum that keeps growing long after your release window closes.",
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setStep((prevStep) => (prevStep + 1) % stepsData.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [stepsData.length]);

    const ANGLE = 45; // Spacing between steps in degrees

    return (
        <div className="w-300 h-300 rounded-full bg-[#EEECEA] border-8 border-secondary flex justify-center relative shadow-sm">
            <div className="w-full h-full relative pointer-events-none">

                {/* Rotating Ring for Nodes (Numbers/Icons) */}
                <div
                    className="w-full h-full absolute inset-0 transition-transform duration-1000 ease-in-out"
                    style={{ transform: `rotate(-${step * ANGLE}deg)` }}
                >
                    {stepsData.map((s, i) => (
                        <div
                            key={i}
                            className="absolute top-0 left-1/2 w-16 h-1/2 origin-bottom -translate-x-1/2"
                            style={{ transform: `rotate(${i * ANGLE}deg)` }}
                        >
                            {/* Node Item */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-7 md:-translate-y-1/2 flex flex-col items-center pointer-events-auto">
                                <div
                                    className="flex flex-col items-center transition-transform duration-1000 ease-in-out"
                                    style={{ transform: `rotate(${step * ANGLE - i * ANGLE}deg)` }}
                                >
                                    <div
                                        onClick={() => setStep(i)}
                                        className={`w-12 h-12 md:w-14 md:h-14 flex justify-center items-center rounded-2xl transition-all duration-500 cursor-pointer shadow-md ${step === i
                                                ? "bg-primary text-white scale-110"
                                                : "bg-white text-primary hover:bg-gray-50 scale-100"
                                            }`}
                                    >
                                        {s.icon}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Center Static Text Content */}
                <div className="absolute xl:top-21 top-18 left-1/2 -translate-x-1/2 md:w-[90%] md:max-w-121 w-full max-w-93.75 flex justify-center text-center">
                    <div className="relative w-full h-full">
                        {stepsData.map((s, i) => (
                            <div
                                key={i}
                                className={`absolute inset-0 flex flex-col items-center transition-all duration-700 ease-in-out ${step === i
                                        ? "opacity-100 pointer-events-auto z-10 translate-y-0"
                                        : "opacity-0 pointer-events-none z-0 translate-y-4"
                                    }`}
                            >
                                <h3 className="md:text-[32px] md:leading-10 text-2xl uppercase font-bold text-foreground md:max-w-[80%]">
                                    {s.title}
                                </h3>
                                <p className="text-black80 md:text-base text-sm mt-3 px-6">
                                    {s.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Floating Navigation Dots */}
                <div className="flex justify-center mt-6 items-center gap-x-0.5 p-1.5 rounded-full absolute z-20 top-60.5 left-1/2 -translate-x-1/2 pointer-events-auto border border-primary20">
                    {stepsData.map((_, idx) => (
                        <div
                            key={idx}
                            onClick={() => setStep(idx)}
                            className={`rounded-full cursor-pointer transition-all duration-300 ${step === idx
                                    ? "w-4 h-4 bg-primary"
                                    : "w-4 h-4 bg-primary20 hover:bg-primary50"
                                }`}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default PromotionSection;
