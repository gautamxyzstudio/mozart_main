import React from "react";

const WhyChooseRoyalty = () => {
  return (
    <div className="w-full relative pt-20 md:pt-2 lg:pt-0 bg-[#06030b] flex flex-col items-center  z-20 border-t border-white/5  overflow-hidden xl:overflow-visible">
      {/* Background glow behind columns */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-150 h-75 bg-primary/10 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Heading Section with Watermark */}
      <div className="w-full flex flex-col xl:px-0 relative z-10 mx-auto mb-16 md:mb-10">
        <h2 className="text-white font-extrabold text-center text-3xl md:text-5xl lg:text-[56px] leading-tight tracking-tight -mt-6 md:mt-7 xl:mt-10 relative z-10 max-w-4xl mx-auto">
          Why Artists Trust Amozart for Royalty Rights Management
        </h2>
      </div>

      {/* Features Columns Grid */}
      <div className="w-full max-w-7xl px-6 md:px-12 xl:px-20 grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-12 md:gap-y-0 relative ">
        {[
          {
            num: "01",
            title: "Complete Collection",
            desc: "Every type of royalty — streaming, performance, mechanical, and sync — collected from every territory. Nothing missed.",
            offsetClass: "md:translate-y-0",
          },
          {
            num: "02",
            title: "Full Copyright Protection",
            desc: "Your music is registered, documented, and protected everywhere it is played — always.",
            offsetClass: "md:translate-y-[40px] lg:translate-y-[55px]",
          },
          {
            num: "03",
            title: "Real Time Tracking",
            desc: "Live, platform-by-platform earnings breakdown — no delays, no guesswork, complete transparency.",
            offsetClass: "md:translate-y-[40px] lg:translate-y-[55px]",
          },
          {
            num: "04",
            title: "Built for India & Punjabi Artists",
            desc: "Deep understanding of the Indian and Punjabi royalty landscape — regional and international platforms covered equally.",
            offsetClass: "md:translate-y-0",
          },

        ].map((feat, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-start text-left ${feat.offsetClass} transition-transform duration-500`}
          >
            {/* Massive stylized number */}
            <span className="text-5xl md:text-[64px] xl:text-8xl font-black tracking-tighter leading-none mb-3 md:mb-5 select-none text-white/8">
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
        {/* Curved Dotted/Dashed SVG ribbon paths */}
        <svg
          viewBox="0 0 1000 700"
          preserveAspectRatio="none"
          className="absolute left-0 right-0 lg:-top-[62%] md:-top-[71%] w-full xl:h-[700px] md:h-[650px] pointer-events-none hidden md:block"
        >
          {/* Top Curve - Bending deep down to 260 */}
          <path
            d="M -100 100 Q 500 260 1100 100"
            fill="none"
            stroke="rgba(255,255,255,0.45)"
            strokeWidth="1.5"
            strokeDasharray="8 6"
            strokeLinecap="round"
          />

          {/* Bottom Curve - Bending deep down to 600 */}
          <path
            d="M -100 440 Q 500 600 1100 440"
            fill="none"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="1.5"
            strokeDasharray="8 6"
            strokeLinecap="round"
          />
        </svg>



      </div>
      <span className="w-full flex justify-end mt-16 xl:text-[200px] xl:leading-40 md:text-[124px] md:leading-30 text-[70px] leading-17.5 text-white/10 font-bold">
        Benefits
      </span>
    </div>
  );
};

export default WhyChooseRoyalty;
