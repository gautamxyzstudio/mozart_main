import type { Metadata } from 'next'
import Faqs from '@/src/components/modules/faqs/Faqs'
import Testimonials from '@/src/components/modules/testimonials/Testimonials'
import ChooseRoyalty from '@/src/components/pages/Royalty-rights-Management/ChooseRoyalty'
import HowItWorkSection from '@/src/components/pages/Royalty-rights-Management/HowItWorkSection'
import RoyaltyHeroSection from '@/src/components/pages/Royalty-rights-Management/RoyaltyHeroSection'
import RoyaltyService from '@/src/components/pages/Royalty-rights-Management/RoyaltyService'
import WhyAreDifferentRoyalty from '@/src/components/pages/Royalty-rights-Management/WhyAreDifferentRoyalty'
import WhyChooseRoyalty from '@/src/components/pages/Royalty-rights-Management/WhyChooseRoyalty'
import WhatIsRoyalty from '@/src/components/pages/Royalty-rights-Management/WhatIsRoyalty'
import React from 'react'

export const metadata: Metadata = {
  title: "Royalty Rights Management for Independent Artists | Amozart",
  description: "Collect, track & protect every music royalty with Amozart's royalty rights management service — built for independent artists & labels in India.",
};

const faqData = [
  {
    id: "panel1",
    question: "What is royalty rights management in music?",
    answer: "It is the process of collecting, tracking, and protecting every payment your music generates — from streaming, radio, sync, and live performances — ensuring every royalty reaches you accurately and on time.",
  },
  {
    id: "panel2",
    question: "How do I collect music royalties as an independent artist?",
    answer: "Register your music correctly, distribute through a royalty-tracking platform, and monitor every revenue stream. Amozart handles all of this — registration, tracking, collection, and reporting — in one place.",
  },
  {
    id: "panel3",
    question: "What is the difference between master and publishing royalties?",
    answer: "Master royalties come from your sound recording — every stream or download. Publishing royalties come from your composition — the melody and lyrics. Both are collected separately and require separate management.",
  },
  {
    id: "panel4",
    question: "What is the difference between performance and mechanical royalties?",
    answer: "Performance royalties are generated when your music plays publicly — radio, TV, or streaming. Mechanical royalties are generated when your music is reproduced — downloads or physical copies. Amozart collects both for you.",
  },
  {
    id: "panel5",
    question: "Do you manage royalties for Punjabi artists?",
    answer: "Yes. Our royalty rights management for Punjabi artists covers JioSaavn, Wynk, Spotify, and Apple Music — tracking every rupee your music earns locally and globally.",
  },
  {
    id: "panel6",
    question: "Do you offer royalty collection for labels in India?",
    answer: "Yes. Our royalty collection service for record labels India covers per-artist tracking, royalty splits, and centralised reporting — all under one label account.",
  }
];

const page = () => {
  return (
    <>
    <RoyaltyHeroSection />
    <WhatIsRoyalty />
    <WhyChooseRoyalty />
    <RoyaltyService/>
    {/* <WhyAreDifferentRoyalty /> */}
    <ChooseRoyalty />
    <HowItWorkSection />
    <Testimonials />
    <Faqs faqData={faqData} />
    </>
  )
}

export default page