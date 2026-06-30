import React from "react";

const WhyChooseDistribution = () => {
  return (
    <>
      <div className="w-full relative pt-20 md:pt-28 lg:pt-36 bg-[#06030b] flex flex-col items-center overflow-hidden z-20 border-t border-white/5">
        {/* Background glow behind columns */}
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none z-0" />

        {/* Heading Section */}
        <div className="w-full flex flex-col items-center text-center px-6 relative z-10 max-w-5xl mx-auto mb-16 md:mb-24">
          <h2 className="text-white font-extrabold text-3xl md:text-5xl lg:text-[56px] leading-tight tracking-tight mb-4">
            Why Choose Our Distribution
          </h2>
          <p className="text-white/60 text-sm md:text-base lg:text-lg font-light tracking-wide max-w-5xl leading-relaxed">
            Amozart is built for artists who want their music heard everywhere - without giving up ownership or paying hidden fees. Whether you're releasing your first single or managing an active catalog, our music distribution service gets your tracks live on every major streaming platform within 24 to 72 hours. We are one of the few platforms offering dedicated music distribution for Punjabi artists going global, with full support for regional platforms like JioSaavn and Wynk alongside Spotify, Apple Music, and Amazon Music. And because we believe your earnings belong entirely to you, every plan comes with music distribution with 100% royalty retention - no cuts, no commissions, no surprises.
          </p>
        </div>

        {/* Curved Dotted/Dashed SVG ribbon paths */}
        <svg
          viewBox="0 0 1000 520"
          className="absolute left-0 right-0 lg:top-[37%] md:top-[37%] w-full   h-130 pointer-events-none  z-0 overflow-visible hidden md:block"
        >
          {/* Top curve */}
          <path
            d="M -50,40 Q 500,200 1050,40"
            fill="none"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="1"
            strokeDasharray="5,5"
          />

          {/* Bottom curve - more gap */}
          <path
            d="M -50,420 Q 500,600 1050,420"
            fill="none"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="1"
            strokeDasharray="5,5"
          />
        </svg>

        {/* Features Columns Grid */}
        <div className="w-full max-w-7xl px-6 md:px-12 xl:px-20 grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-12 md:gap-y-0 relative z-10">
          {[
            {
              num: "01",
              title: "Real-Time Analytics",
              desc: "Get detailed stream counts, listener locations, platform breakdowns, and revenue data updated in real time - so you always know exactly how your music is performing.",
              offsetClass: "md:translate-y-0"
            },
            {
              num: "02",
              title: "Full Rights Control",
              desc: "You own 100% of your master rights, always. Remove, update, or move your music at any time - no lock-in periods, no label interference, no conditions attached.",
              offsetClass: "md:translate-y-[40px] lg:translate-y-[55px]"
            },
            {
              num: "03",
              title: "Global Reach",
              desc: "Distribute your music to 150+ platforms worldwide - from Spotify and Apple Music to regional platforms like JioSaavn, Wynk, and Beatport. Reach listeners across every continent and grow your fanbase without borders.",
              offsetClass: "md:translate-y-[40px] lg:translate-y-[55px]"
            },
            {
              num: "04",
              title: "Keep 100% Royalties",
              desc: "Every rupee, dollar, and euro your music earns comes directly to you. Our music distribution with 100% royalty retention means zero commission is taken from your streams, downloads, or sync earnings.",
              offsetClass: "md:translate-y-0"
            }
          ].map((feat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-start text-left ${feat.offsetClass} transition-transform duration-500`}
            >
              {/* Massive stylized number */}
              <span className="text-5xl md:text-5xl lg:text-7xl xl:text-6xl font-black tracking-tighter leading-none mb-3 md:mb-5 select-none text-white/[0.08]">
                {feat.num}
              </span>

              {/* Feature Title */}
              <h3 className="text-white font-extrabold text-base md:text-[15px] lg:text-lg xl:text-2xl mb-2 md:mb-3 tracking-wide">
                {feat.title}
              </h3>

              {/* Feature Description */}
              <p className="text-white/45 text-xs md:text-[11.5px] lg:text-sm xl:text-[15px] font-light leading-relaxed max-w-[250px] md:max-w-[170px] lg:max-w-[220px] xl:max-w-[250px]">
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
