import React from "react";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CampaignIcon from "@mui/icons-material/Campaign";

const WhatIsPromotion = () => {
  return (
    <section className="relative w-full overflow-hidden bg-foreground xl:py-24 md:py-20 py-16 px-6 md:px-13 xl:px-25">
      {/* Decorative gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-primary-70/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(103,57,183,0.15)] hover:bg-white/10 transition-colors">
          <AutoAwesomeIcon className="w-5 h-5 text-primary" fontSize="small" />
          <span className="text-sm font-semibold text-white/90 tracking-widest uppercase">Music Promotion</span>
        </div>

        {/* Title */}
        <h2 className="xl:text-6xl md:text-5xl text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-white/70 mb-8 tracking-tight leading-tight">
          What Is a Music Promotion Service?
        </h2>
        
        {/* Description */}
        <p className="text-white/75 xl:text-xl md:text-lg text-base md:w-[85%] max-w-4xl mx-auto leading-relaxed font-light">
          A music promotion service gets your music heard by the right people — on the right platforms, at the right time. It covers <strong className="text-white font-medium">playlist pitching, social media, paid ads, blog features, and influencer outreach</strong>. For independent artists without a label&apos;s marketing team, it levels the playing field completely.
        </p>

        {/* Feature Tags */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
           {['Spotify Pitching', 'Influencer Outreach', 'Social Media'].map((tag) => (
             <span 
               key={tag} 
               className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-white/90 text-sm font-medium backdrop-blur-sm hover:bg-white/10 hover:border-primary/50 transition-all duration-300 cursor-default hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(103,57,183,0.2)]"
             >
               <CampaignIcon className="text-primary" fontSize="small" />
               {tag}
             </span>
           ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsPromotion;
