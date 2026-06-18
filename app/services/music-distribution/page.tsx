import React from "react";
import { Metadata } from "next";
import MusicDistribution from "@/src/components/pages/music-distribution/MusicDistribution";
import Faqs from "@/src/components/modules/faqs/Faqs";
import Testimonials from "@/src/components/modules/testimonials/Testimonials";
import WhyChooseDistribution from "@/src/components/pages/music-distribution/WhyChooseDistribution";
import DigitalStreamingPlatforms from "@/src/components/pages/music-distribution/DigitalStreamingSection";
import KeyFeatures from "@/src/components/pages/music-distribution/KeyFeatures";
import WorksSection from "@/src/components/pages/music-distribution/WorksSection";

export const metadata: Metadata = {
  title: "Global Music Distribution Platform | Amozart",
  description:
    "Deliver your songs to Spotify, Apple Music, TikTok, JioSaavn, Wynk, and 150+ other digital stores. Keep 100% of your royalties and rights with Amozart.",
};

const page = () => {
  return (
    <>
      <MusicDistribution />
      <WhyChooseDistribution />
      <DigitalStreamingPlatforms />
      <KeyFeatures />
      <WorksSection />
      <Testimonials />
      <Faqs />
    </>
  );
};

export default page;
