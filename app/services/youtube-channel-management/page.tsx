import React from "react";
import { Metadata } from "next";
import YouTubeHero from "@/src/components/pages/youtube-channel-management/YouTubeHero";
import WhyChooseYouTube from "@/src/components/pages/youtube-channel-management/WhyChooseYouTube";
import YouTubeFeatures from "@/src/components/pages/youtube-channel-management/YouTubeFeatures";
import Testimonials from "@/src/components/modules/testimonials/Testimonials";
import Faqs from "@/src/components/modules/faqs/Faqs";
import YouTubeWorkSection from "@/src/components/pages/youtube-channel-management/YouTubeWorkSection";

export const metadata: Metadata = {
  title: "YouTube Channel Management for Musicians | Amozart",
  description:
    "Scale your artist channel on YouTube. From copyright whitelisting via Content ID, video SEO, channel layout designs to custom monetization setup with Amozart.",
};

const page = () => {
  return (
    <>
      <YouTubeHero />
      <WhyChooseYouTube />
      <YouTubeFeatures />
      <YouTubeWorkSection />
      <Testimonials />
      <Faqs />
    </>
  );
};

export default page;
