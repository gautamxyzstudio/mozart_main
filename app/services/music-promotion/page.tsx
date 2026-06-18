import React from "react";
import { Metadata } from "next";
import PromotionHero from "@/src/components/pages/promotion/PromotionHero";
import Faqs from "@/src/components/modules/faqs/Faqs";
import Testimonials from "@/src/components/modules/testimonials/Testimonials";
import WhyChoosePromotion from "@/src/components/pages/promotion/WhyChoosePromotion";
import PromotionFeatures from "@/src/components/pages/promotion/PromotionFeatures";
import WorkSection from "@/src/components/pages/promotion/workSection";
import MusicPromotionWork from "@/src/components/pages/promotion/MusicPromotionWork";
import MusicsPromotion from "@/src/components/pages/promotion/MusicsPromotionChoose";

export const metadata: Metadata = {
  title: "Music Promotion Services | Amozart",
  description:
    "Promote your music worldwide on Spotify, YouTube, TikTok, Instagram, and major streaming platforms. Reach new listeners and grow your organic fanbase with Amozart.",
};

const page = () => {
  return (
    <>
      <PromotionHero />
      <WhyChoosePromotion />
      <MusicPromotionWork />
      <PromotionFeatures />
      <WorkSection />
      <MusicsPromotion />
      <Faqs />
      <Testimonials />
    </>
  );
};

export default page;
