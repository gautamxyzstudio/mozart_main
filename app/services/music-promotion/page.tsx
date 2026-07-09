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
import WhatIsPromotion from "@/src/components/pages/promotion/WhatIsPromotion";


export const metadata: Metadata = {
  title: "Music Promotion Service for Independent Artists | Amozart",
  description:
    "Amozart's music promotion service for independent artists covers playlist pitching, social media, paid ads & organic growth — promote your music globally.",
};

const page = () => {
  return (
    <>
      <PromotionHero />
      <WhatIsPromotion />
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
