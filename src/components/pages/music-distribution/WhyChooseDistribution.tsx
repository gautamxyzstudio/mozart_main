import React from "react";

const WhyChooseDistribution = () => {
  return (
    <>
      <div className="w-full relative pt-20 md:pt-28 lg:pt-36 bg-[#06030b] flex flex-col items-center overflow-hidden z-20 border-t border-white/5">
        {/* Background glow behind columns */}
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none z-0" />

        {/* Heading Section */}
        <div className="w-full flex flex-col items-center text-center px-6 relative z-10 max-w-4xl mx-auto mb-16 md:mb-24">
          <h2 className="text-white font-extrabold text-3xl md:text-5xl lg:text-[56px] leading-tight tracking-tight mb-4">
            Why Choose Our Distribution
          </h2>
          <p className="text-white/60 text-sm md:text-base lg:text-lg font-light tracking-wide max-w-2xl leading-relaxed">
            Independent artists get simple distribution, fast uploads, smart tools, and transparent pricing with us.
          </p>
        </div>

        {/* Curved Dotted/Dashed SVG ribbon paths */}
        <svg
          viewBox="0 0 1000 520"
          className="absolute left-0 right-0 lg:top-[33%] md:top-[27%] w-full   h-[520px] pointer-events-none  z-0 overflow-visible hidden md:block"
        >
          {/* Top curve */}
          <path
            d="M -50,40 Q 500,200 1050,40"
            fill="none"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="1"
            strokeDasharray="5,5"
          />

          {/* Bottom curve - more gap */}
          <path
            d="M -50,320 Q 500,480 1050,320"
            fill="none"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="1"
            strokeDasharray="5,5"
          />
        </svg>

        {/* Features Columns Grid */}
        <div className="w-full max-w-7xl px-6 md:px-12 xl:px-20 grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-12 md:gap-y-0 relative z-10">
          {[
            {
              num: "01",
              title: "Smart Analytics",
              desc: "Easily track your streams, audience, and performance",
              offsetClass: "md:translate-y-0"
            },
            {
              num: "02",
              title: "Full Ownership",
              desc: "Keep 100% rights and full control over your music.",
              offsetClass: "md:translate-y-[40px] lg:translate-y-[55px]"
            },
            {
              num: "03",
              title: "Global Reach",
              desc: "Distribute your music on all top streaming platforms",
              offsetClass: "md:translate-y-[40px] lg:translate-y-[55px]"
            },
            {
              num: "04",
              title: "Transparent Earnings",
              desc: "Track your earnings clearly with no hidden fees.",
              offsetClass: "md:translate-y-0"
            }
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


        <span className="w-full xl:text-[200px] xl:leading-51.5 md:text-[124px] md:leading-32.5 text-[60px] leading-19 text-background/10 font-bold xl:mt-20 md:mt-18 mt-2.25 text-end  ">
          Key Benefits
        </span>
      </div>
    </>
  );
};

export default WhyChooseDistribution;
