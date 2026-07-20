"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Images } from "@/public/exports";

const artists = [
  {
    id: 1,
    name: "Shakira",
    img: Images.shakira,
  },
  {
    id: 2,
    name: "Rosalía",
    img: Images.Rosalía,
  },
  {
    id: 3,
    name: "Ricky Martin",
    img: Images.RickyMartin,
  },
  {
    id: 4,
    name: "Bebe Rexha",
    img: Images.BebeRexha,
  },
  {
    id: 5,
    name: "Manu Chao",
    img: Images.ElgrandeManuChao,
  },
  {
    id: 6,
    name: "Alejandro Sanz",
    img: Images.AlejandroSanz,
  },
  {
    id: 7,
    name: "Mecano",
    img:  Images.Mecano,
  },
  {
    id: 8,
    name: "Vera GRV ",
    img: Images.VeraGRV,
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

      <div className="relative z-10 mt-2 md:mt-7 xl:mt-13">
        <h2 className="text-3xl md:text-5xl font-bold mb-10">Our Artists</h2>

        <div className="flex flex-row  h-92.75 gap-3 w-full overflow-x-auto no-scrollbar pb-10 xl:-mr-10 md:-mr-1">
          {artists.map((artist) => (
            <div
              key={artist.id}
              onClick={() =>
                setActiveId(activeId === artist.id ? null : artist.id)
              }
              className={`relative h-full transition-all duration-400 ease-in-out cursor-pointer group rounded-2xl overflow-hidden shadow-xl shrink-0
                ${activeId === artist.id ? "w-75 md:w-112.5" : "w-30 md:w-37.5"}
                md:hover:w-112.5
              `}
            >
              <Image
                src={artist.img}
                alt={artist.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={`absolute inset-0 object-cover transition-all duration-1000 ease-in-out object-[center_20%] 
     ${activeId === artist.id ? "grayscale-0 scale-100 object-center" : "grayscale scale-105"}
     md:group-hover:grayscale-0 md:group-hover:scale-100 md:group-hover:object-top
  `}
                priority={artist.id <= 4}
              />

              <div
                className={`absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent transition-opacity duration-500 flex flex-col justify-end p-6
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
          <div className="min-w-10 h-full" />
        </div>
      </div>
    </section>
  );
};

export default ArtistsSection;
