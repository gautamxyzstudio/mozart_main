import Faqs from "@/src/components/modules/faqs/Faqs";
import Testimonials from "@/src/components/modules/testimonials/Testimonials";
import AboutTopSection from "@/src/components/pages/about/AboutTopSection";
import ArtistsSection from "@/src/components/pages/artists/ArtistsSection";
import HomeServiceSection from "@/src/components/pages/home/HomeServiceSection";
import OurStory from "@/src/components/pages/our-story/OurStory";
import OurVisionSection from "@/src/components/pages/our-vision/OurVisionSection";
import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Amozart – Music Distribution & Artist Growth Platform ",
  description:
    "Learn about Amozart, a global music distribution platform helping artists release music worldwide, earn royalties, and grow their careers with expert support.",
};

const page = () => {
  return (
    <>
      <AboutTopSection />
      <OurStory />
      <OurVisionSection />
      <HomeServiceSection />
      <ArtistsSection />
      <Faqs />
      <Testimonials />
    </>
  );
};

export default page;
