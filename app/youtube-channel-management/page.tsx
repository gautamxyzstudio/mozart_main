import React from "react";
import { Metadata } from "next";
import YouTubeHero from "@/src/components/pages/youtube-channel-management/YouTubeHero";
import WhyChooseYouTube from "@/src/components/pages/youtube-channel-management/WhyChooseYouTube";
import YouTubeFeatures from "@/src/components/pages/youtube-channel-management/YouTubeFeatures";
import Testimonials from "@/src/components/modules/testimonials/Testimonials";
import Faqs from "@/src/components/modules/faqs/Faqs";

export const metadata: Metadata = {
  title: " YouTube Channel Management for Musicians | Amozart",
  description:
    " Professional YouTube channel management for artists & Punjabi musicians. SEO, thumbnails, content planning & subscriber growth — all handled for you.",
};

const youtubeFaqsData = [
  {
    id: "panel1",
    question: "What does your YouTube channel management for musicians include?",
    answer:
      "Our service covers complete channel setup, video SEO, thumbnail design, content planning, community management, and audience growth strategy - everything needed to run a professional music channel without you having to manage it yourself.",
  },
  {
    id: "panel2",
    question: "Can you help grow my channel if I'm just starting out?",
    answer:
      "Yes. Whether you're launching your first channel or already have one, our YouTube channel management for artists is built to take you from zero to consistent, sustainable subscriber growth on YouTube.",
  },
  {
    id: "panel3",
    question: "Do you offer YouTube channel management for Punjabi artists specifically?",
    answer:
      "Yes - this is one of our core specialties. We understand the regional music landscape and help Punjabi and Indian artists grow channels that reach both local fans and a global audience.",
  },
  {
    id: "panel4",
    question: "How do you approach subscriber growth on YouTube?",
    answer:
      "We focus on consistent uploads, strong video SEO, audience targeting, and engagement - not artificial growth tactics. This builds the kind of channel that keeps growing long after the first few releases, rather than one of the many fastest growing YouTube channels that spikes and fades.",
  },
  {
    id: "panel5",
    question: "Will I get reports on how my channel is performing?",
    answer:
      "Yes. You receive clear monthly analytics covering views, subscriber growth, audience engagement, and overall channel performance, so you always know exactly how your investment is paying off.",
  },
];

const page = () => {
  return (
    <>
      <YouTubeHero />
      <WhyChooseYouTube />
      <YouTubeFeatures />
      <Testimonials />
      <Faqs faqData={youtubeFaqsData} />
    </>
  );
};

export default page;




