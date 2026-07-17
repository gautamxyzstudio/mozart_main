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
  title: "About Amozart | Empowering Indie & Punjabi Music Creators",
  description:
    "Discover Amozart. We empower independent Punjabi artists & Indian labels to release, protect, and monetize their music globally with full transparency.",
};

const page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://amozart.com/about#webpage",
      "url": "https://amozart.com/about",
      "name": "About Amozart | Next-Generation Music Distribution & Rights Management",
      "description": "Learn about Amozart, a next-generation music distribution and rights management company built to help independent artists, creators, and labels share, protect, and monetize their music globally.",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://amozart.com/#website",
        "url": "https://amozart.com/",
        "name": "Amozart"
      },
      "mainEntity": {
        "@id": "https://amozart.com/#organization"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "Organization",
      "@id": "https://amozart.com/#organization",
      "name": "Amozart",
      "url": "https://amozart.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://admin.amozart.com/assets/amozart-BugKUjlO.webp",
        "caption": "Amozart Logo"
      },
      "description": "Named after the legendary composer Wolfgang Amadeus Mozart, Amozart is a next-generation music distribution and rights management company built for artists who want global exposure without complications.",
      "knowsAbout": [
        "Music Distribution",
        "Digital Rights Management",
        "YouTube Content ID protection",
        "Royalty Tracking",
        "Music Promotion",
        "Artist Management"
      ],
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "Carrer de Trafalgar, 10",
          "postalCode": "08010",
          "addressLocality": "Barcelona",
          "addressCountry": "Spain"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "515 W Pender St",
          "addressLocality": "Vancouver",
          "addressRegion": "BC",
          "postalCode": "V6B 6H5",
          "addressCountry": "Canada"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "Imperial Tower, CP 67, Sector 67",
          "addressLocality": "Sahibzada Ajit Singh Nagar",
          "addressRegion": "Punjab",
          "postalCode": "160062",
          "addressCountry": "India"
        }
      ]
    }
  ]
}
          `,
        }}
      />
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
