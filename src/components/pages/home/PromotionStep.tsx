"use client";
import React, { useState } from "react";

const PromotionStep = () => {
  const [step, setStep] = useState(0);

  const stepsData = [
    {
      step: "01",
      title: "Targeted YouTube Ads",
      desc: "We run smart, audience-focused YouTube ad campaigns to put your music in front of the right listeners at the right time.",
    },
    {
      step: "02",
      title: "Real Views & Engagement",
      desc: "Get 100K+ real views with genuine likes, comments, and watch time no bots, only organic growth.",
    },
    {
      step: "03",
      title: "Global Reach for Artists",
      desc: "We help Punjabi artists and creators expand worldwide, turning local tracks into global releases.",
    },
  ];

  const ANGLE = 45; // Spacing between steps in degrees

  return (
    <div className="w-300 h-300 rounded-full bg-[#EEECEA] border-8 border-secondary flex justify-center relative shadow-sm">
      <div className="w-full h-full relative pointer-events-none">
        
        {/* Rotating Ring for Nodes (Numbers) */}
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
                {/* 'STEP' Label - fades in for active item */}
                <span
                  className={`absolute bottom-[110%] mb-1 text-[#69686F] text-base font-bold uppercase transition-opacity duration-500 whitespace-nowrap ${
                    step === i ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Step
                </span>

                <div
                  onClick={() => setStep(i)}
                  className={`w-11 h-11 flex justify-center items-center rounded-lg font-medium text-xl transition-colors duration-500 cursor-pointer shadow-sm ${
                    step === i
                      ? "bg-primary text-background"
                      : "bg-background text-[#69686F]"
                  }`}
                >
                  {s.step}
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
                className={`absolute inset-0 flex flex-col items-center transition-all duration-700 ease-in-out ${
                  step === i
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
        <div className="flex justify-center items-center gap-x-0.5 p-1.5 rounded-full absolute z-20 top-60.5 left-1/2 -translate-x-1/2 pointer-events-auto border border-primary20">
          {stepsData.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setStep(idx)}
              className={`rounded-full cursor-pointer transition-all duration-300 ${
                step === idx
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

export default PromotionStep;
