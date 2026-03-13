import React from "react";

const PromotionStep = () => {
  return (
    <div className="w-300 h-300 rounded-full bg-[#EEECEA] border-8 border-secondary flex justify-center">
      <div className="xl:w-121 h-auto flex flex-col items-center">
        <div className="flex flex-col gap-y-1.25 -mt-10.5">
          <span className="text-[#69686F] text-base font-bold uppercase">
            Step
          </span>
          <span className="text-[20px] leading-6 font-medium text-background bg-primary rounded-lg w-11 h-11 flex justify-center items-center">
            01
          </span>
        </div>
        <div className="flex flex-col items-center gap-y-3">
          <h3>Targeted YouTube Ads</h3>
          <p>
            We run smart, audience-focused YouTube ad campaigns to put your
            music in front of the right listeners at the right time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromotionStep;
