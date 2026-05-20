import React from "react";

const WhatYouGet = () => {
  const features = [
    {
      title: "Automated Content ID Registration",
      desc: "Your tracks are fully registered in YouTube's Content ID system with accurate metadata and audio fingerprints, ensuring every use of your music is detected.",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Global Music Protection",
      desc: "Your tracks are fully registered in YouTube's Content ID system with accurate metadata and audio fingerprints, ensuring every use of your music is detected.",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Real-Time Claims & Monetization",
      desc: "Your tracks are fully registered in YouTube's Content ID system with accurate metadata and audio fingerprints, ensuring every use of your music is detected.",
      iconBg: "bg-red-100",
      iconColor: "text-red-500",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Transparent Royalty Reports",
      desc: "Your tracks are fully registered in YouTube's Content ID system with accurate metadata and audio fingerprints, ensuring every use of your music is detected.",
      iconBg: "bg-cyan-100",
      iconColor: "text-cyan-600",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Dedicated Support for Artists & Labels",
      desc: "Your tracks are fully registered in YouTube's Content ID system with accurate metadata and audio fingerprints, ensuring every use of your music is detected.",
      iconBg: "bg-fuchsia-100",
      iconColor: "text-fuchsia-600",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 xl:px-20 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-[#111] font-extrabold text-[36px] md:text-[48px] xl:text-[56px] tracking-tight">
            What You Get with Amozart
          </h2>
          <p className="mt-4 text-[#4a4a4a] text-sm md:text-base xl:text-lg max-w-2xl leading-relaxed">
            Amozart gives artists and labels the complete toolkit to protect their music, track usage, and maximize earnings across YouTube.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="w-full flex flex-wrap justify-center gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl p-8 flex flex-col items-start text-left shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 hover:-translate-y-1 transition-transform duration-300 w-full md:w-[calc(50%-12px)]`}
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.iconBg} ${feature.iconColor} flex items-center justify-center mb-6`}>
                {feature.icon}
              </div>
              
              <h3 className="text-[#1a1a1a] font-bold text-[19px] mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-500 text-[14px] leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatYouGet;
