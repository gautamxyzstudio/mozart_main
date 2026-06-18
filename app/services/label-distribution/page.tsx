import React from "react";
import { Metadata } from "next";
import MusicLabelHero from "@/src/components/pages/music-label/MusicLabelHero";
import MusicProcess from "@/src/components/pages/music-label/MusicProcess";
import MusicFeatures from "@/src/components/pages/music-label/MusicFeatures";
import MusicCareer from "@/src/components/pages/music-label/MusicCareer";
import MusicBanner from "@/src/components/pages/music-label/MusicBanner";
import MusicFaqs from "@/src/components/pages/music-label/MusicFaqs";

export const metadata: Metadata = {
  title: "Professional Music Label Services | Amozart",
  description:
    "Empowering independent artists to become global recording stars. Get expert distribution, planning, marketing, and global reach for your music label.",
};

const Page = () => {
  return (
    <>
    <main className="bg-[#030008] min-h-screen">
      <MusicLabelHero />
      <MusicProcess />
      <MusicFeatures />
      <MusicCareer />
    </main>
      <MusicBanner />
      <MusicFaqs />
    </>
  );
};

export default Page;
