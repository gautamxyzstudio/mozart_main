import React from "react";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CopyrightIcon from "@mui/icons-material/Copyright";
import RadioIcon from "@mui/icons-material/Radio";
import MovieIcon from "@mui/icons-material/Movie";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

const WhatIsRoyalty = () => {
  const royaltyTypes = [
    {
      title: "Master Royalties",
      description: "Earned every time your track is streamed, downloaded, or licensed. As an Amozart artist, you keep 100% of your master royalties — always.",
      icon: <AccountBalanceWalletIcon className="w-8 h-8 text-primary mb-4" fontSize="large" />,
    },
    {
      title: "Publishing Royalties",
      description: "Earned from your song's melody and lyrics — collected separately from master royalties. Understanding the master royalties vs publishing royalties difference ensures you never miss either stream.",
      icon: <CopyrightIcon className="w-8 h-8 text-primary mb-4" fontSize="large" />,
    },
    {
      title: "Performance Royalties",
      description: "Earned when your music plays publicly — on radio, TV, or streaming platforms. Performance royalties vs mechanical royalties is a key difference every independent artist should know — performance comes from playback, mechanical comes from reproduction.",
      icon: <RadioIcon className="w-8 h-8 text-primary mb-4" fontSize="large" />,
    },
    {
      title: "Sync Royalties",
      description: "Earned when your music is licensed for films, ads, TV shows, or video games. Amozart actively pitches your catalog for sync opportunities so you earn from every possible use.",
      icon: <MovieIcon className="w-8 h-8 text-primary mb-4" fontSize="large" />,
    }
  ];

  return (
    <section className="relative w-full overflow-hidden bg-foreground xl:py-24 md:py-20 py-16 px-6 md:px-13 xl:px-25">
      {/* Decorative gradients */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary-70/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(103,57,183,0.15)] hover:bg-white/10 transition-colors">
          <VerifiedUserIcon className="w-5 h-5 text-primary" fontSize="small" />
          <span className="text-sm font-semibold text-white/90 tracking-widest uppercase">Rights Management</span>
        </div>

        {/* Title & Description */}
        <h2 className="xl:text-6xl md:text-5xl text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-white/70 mb-8 tracking-tight leading-tight">
          What Is Royalty Rights Management in Music?
        </h2>

        <p className="text-white/75 xl:text-xl md:text-lg text-base md:w-[85%] max-w-4xl mx-auto leading-relaxed font-light mb-20">
          Royalty rights management is the process of collecting, tracking, and protecting every payment your music generates — from streaming platforms, radio, sync placements, and live performances. Without it, independent artists miss payments they never knew existed. <strong className="text-white font-medium">Amozart manages your full rights portfolio</strong> so every use of your music gets tracked and every royalty gets paid directly to you.
        </p>

        {/* Types of Royalties Section */}
        <h3 className="xl:text-4xl md:text-3xl text-3xl font-bold text-white mb-12 tracking-tight">
          Types of Music Royalties Explained
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {royaltyTypes.map((type, index) => (
            <div
              key={index}
              className="flex flex-col text-left p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-primary/50 hover:-translate-y-2 transition-all duration-300 group shadow-lg hover:shadow-[0_10px_30px_rgba(103,57,183,0.2)]"
            >
              <div className="group-hover:scale-110 transition-transform duration-300 origin-left">
                {type.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-4">
                {type.title}
              </h4>
              <p className="text-white/70 text-sm leading-relaxed font-light">
                {type.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsRoyalty;
