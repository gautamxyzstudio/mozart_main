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
  title: "Music Distribution for Independent Artists | Amozart",
  description:
    "Trusted online music distribution service. Get your songs on 150+ platforms, keep 100% royalties. Built for independent & Punjabi artists globally. ",
};

const musicDistributionFaqs = [
  {
    id: "panel1",
    question: "What is Amozart and how does your music distribution service work?",
    answer:
      "Amozart is an online music distribution service that helps independent artists and labels get their music live on every major streaming platform worldwide. You simply upload your track, add your artwork and release details, choose your platforms, and set a release date. We handle the rest - submitting your music to Spotify, Apple Music, JioSaavn, Wynk, Amazon Music, and 150+ other stores and making sure it goes live within 24 to 72 hours. Once your music is live, you track your streams and earnings directly from your Amozart dashboard.",
  },
  {
    id: "panel2",
    question: "Do I keep 100% of my royalties and rights with Amozart?",
    answer:
      "Yes, completely. Amozart operates on a music distribution with 100% royalty retention model, which means every rupee, dollar, or euro your music earns comes directly to you - we do not take any percentage of your streaming income, download revenue, or sync earnings. You also keep full ownership of your master recording rights and songwriting credits at all times. We distribute your music; we never own any part of it.",
  },
  {
    id: "panel3",
    question: "Which platforms will my music be distributed to?",
    answer:
      "Your music will be distributed to 150+ platforms globally, including Spotify, Apple Music, Amazon Music, TikTok, YouTube Music, Tidal, Deezer, Beatport, Pandora, Vevo, and Shazam. For Indian audiences, we also cover JioSaavn, Wynk, and Gaana - platforms that many global distributors either skip or handle poorly. You can release on all platforms at once or select specific stores based on where your audience already listens.",
  },
  {
    id: "panel4",
    question: "Is Amozart the right music distribution service for Punjabi artists?",
    answer:
      "Amozart was built with exactly this in mind. Our music distribution for Punjabi artists covers both Indian regional platforms like JioSaavn and Wynk and every major international store simultaneously, so a single upload reaches listeners in Punjab, the UK, Canada, Australia, and anywhere else your audience is based. We understand the regional release landscape and handle metadata, platform requirements, and delivery correctly across every market - something many international distributors struggle with for South Asian music.",
  },
  {
    id: "panel5",
    question: "What happens to my music if I decide to leave Amozart?",
    answer:
      "Your music and your rights are always yours. If you choose to move to a different distributor at any time, you can take your full catalog with you - no lock-in periods, no exit penalties, and no conditions on your ownership. We will process the removal of your content from all platforms promptly and provide everything you need for a smooth transition to your next distributor.",
  },
];

const page = () => {
  return (
    <>
      <MusicDistribution />
      <WhyChooseDistribution />
      <DigitalStreamingPlatforms />
      <KeyFeatures />
      <WorksSection />
      <Testimonials />
      <Faqs faqData={musicDistributionFaqs} />
    </>
  );
};

export default page;
