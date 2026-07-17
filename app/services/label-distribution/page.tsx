import React from "react";
import { Metadata } from "next";
import MusicLabelHero from "@/src/components/pages/music-label/MusicLabelHero";
import MusicFeatures from "@/src/components/pages/music-label/MusicFeatures";
import MusicCareer from "@/src/components/pages/music-label/MusicCareer";
import MusicProcess from "@/src/components/pages/music-label/MusicProcess";
import MusicBanner from "@/src/components/pages/music-label/MusicBanner";
import MusicFaqs from "@/src/components/pages/music-label/MusicFaqs";

export const metadata: Metadata = {
  title: "Label Distribution for Independent Artists | Amozart ",
  description:
    "Label distribution for independent artists — global reach, royalty splits & full rights ownership. Best record label distribution service in India.",
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
