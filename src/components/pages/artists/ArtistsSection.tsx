"use client";
import React, { useState } from "react";

const artists = [
  {
    id: 1,
    name: "Artist 1",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500",
  },
  {
    id: 2,
    name: "Artist 2",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500",
  },
  {
    id: 3,
    name: "Artist 3",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500",
  },
  {
    id: 4,
    name: "Artist 4",
    img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=500",
  },
  {
    id: 5,
    name: "Artist 5",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500",
  },
  {
    id: 6,
    name: "Artist 6",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500",
  },
  {
    id: 7,
    name: "Artist 7",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500",
  },
];

const ArtistsSection = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  return (
    <section className="flex flex-col xl:pl-25 md:pl-13 pl-6 xl:pt-25 pt-13 w-full overflow-hidden">
      {/* Background Text */}
      <span className="xl:text-[200px] xl:leading-51.5 md:text-[124px] md:leading-32.5 text-[70px] leading-19 text-foreground/10 font-bold xl:-mt-11.75 md:-mt-4.25 xl:-ml-25 md:-ml-13 -ml-6 pointer-events-none select-none">
        Artists
      </span>

      <div className="relative z-10 -mt-10 md:-mt-16 xl:mt-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-10">Our Artists</h2>

        {/* Scrollable Container - Negative margin used to touch the right edge */}
        <div className="flex flex-row h-[450px] md:h-125 gap-3 w-full overflow-x-auto no-scrollbar pb-10 xl:-mr-20 md:-mr-13 -mr-6">
          {artists.map((artist) => (
            <div
              key={artist.id}
              onClick={() =>
                setActiveId(activeId === artist.id ? null : artist.id)
              }
              className={`relative h-full transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer group rounded-2xl overflow-hidden shadow-xl shrink-0
                ${activeId === artist.id ? "w-[300px] md:w-[450px]" : "w-[120px] md:w-[150px]"}
                md:hover:w-[450px]
              `}
            >
              <img
                src={artist.img}
                alt={artist.name}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 scale-110 group-hover:scale-100
                  ${activeId === artist.id ? "grayscale-0" : "grayscale"}
                  md:group-hover:grayscale-0
                `}
              />

              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent transition-opacity duration-500 flex flex-col justify-end p-6
                ${activeId === artist.id ? "opacity-100" : "opacity-0"}
                md:group-hover:opacity-100
              `}
              >
                <p
                  className={`text-white text-xl md:text-2xl font-bold transform transition-all duration-700
                  ${activeId === artist.id ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
                  md:group-hover:translate-y-0 md:group-hover:opacity-100
                `}
                >
                  {artist.name}
                </p>
                <span
                  className={`text-white/60 text-sm transform transition-all duration-700 delay-100
    ${activeId === artist.id ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
    md:group-hover:translate-y-0 md:group-hover:opacity-100
  `}
                >
                  Singer
                </span>
              </div>
            </div>
          ))}
           <div className="min-w-[40px] h-full" />
        </div>
      </div>
    </section>
  );
};

export default ArtistsSection;
