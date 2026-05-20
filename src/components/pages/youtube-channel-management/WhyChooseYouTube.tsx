import React from "react";

const WhyChooseYouTube = () => {
  return (
    <>
      <div className="w-full relative pt-20 md:pt-2 lg:pt-0 bg-[#06030b] flex flex-col items-center overflow-hidden z-20 border-t border-white/5 pb-20 md:pb-28">
        {/* Background glow behind columns */}
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-150 h-75 bg-primary/10 rounded-full blur-[100px] pointer-events-none z-0" />

        {/* Heading Section with Watermark */}
        <div className="w-full flex flex-col xl:px-0 relative z-10 mx-auto mb-16 md:mb-10">
          <span className="w-full flex justify-center md:justify-start xl:text-[200px] xl:leading-40 md:text-[124px] md:leading-30 text-[70px] leading-17.5 text-white/10 font-bold">
            Benefits
          </span>

          <h2 className="text-white font-extrabold text-center text-3xl md:text-5xl lg:text-[56px] leading-tight tracking-tight -mt-6 md:-mt-1 xl:-mt-1 relative z-10">
            Benefits
          </h2>
        </div>

        {/* Curved Dotted/Dashed SVG ribbon paths */}

        <svg
          viewBox="0 0 1000 520"
          className="absolute left-0 right-0 lg:top-[28%] md:top-[17%] w-full h-[540px] pointer-events-none z-0 overflow-visible hidden md:block"
        >
          {/* Top curve */}
          <path
            d="M -50,40 Q 500,200 1050,40"
            fill="none"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
            strokeDasharray="9,5"
          />

          {/* Bottom curve - more gap */}
          <path
            d="M -50,320 Q 500,480 1050,320"
            fill="none"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
            strokeDasharray="5,5"
          />
        </svg>

        {/* Features Columns Grid */}
        <div className="w-full max-w-7xl px-6 md:px-12 xl:px-20 grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-12 md:gap-y-0 relative z-10">
          {[
            {
              num: "01",
              title: "Higher Reach",
              desc: "Your songs get more visibility, helping every release perform better.",
              offsetClass: "md:translate-y-0",
            },
            {
              num: "02",
              title: "Faster Growth",
              desc: "Consistent uploads and smart strategies grow your audience naturally.",
              offsetClass: "md:translate-y-[40px] lg:translate-y-[55px]",
            },
            {
              num: "03",
              title: "Better Engagement",
              desc: "Viewers interact more with your music through optimized content.",
              offsetClass: "md:translate-y-[40px] lg:translate-y-[55px]",
            },
            {
              num: "04",
              title: "Zero Effort",
              desc: "You focus on creating music while we manage everything on your channel.",
              offsetClass: "md:translate-y-0",
            },
          ].map((feat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-start text-left ${feat.offsetClass} transition-transform duration-500`}
            >
              {/* Massive stylized number */}
              <span className="text-5xl md:text-[64px] xl:text-8xl font-black tracking-tighter leading-none mb-3 md:mb-5 select-none text-white/[0.08]">
                {feat.num}
              </span>

              {/* Feature Title */}
              <h3 className="text-white font-extrabold text-base md:text-base lg:text-xl xl:text-2xl mb-2 md:mb-3 tracking-wide">
                {feat.title}
              </h3>

              {/* Feature Description */}
              <p className="text-white/45 text-xs md:text-[14px] lg:text-[15px] font-light leading-relaxed max-w-[250px]">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WhyChooseYouTube;
