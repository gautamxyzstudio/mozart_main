import type { Metadata } from "next";
import Faqs from "@/src/components/modules/faqs/Faqs";
import Testimonials from "@/src/components/modules/testimonials/Testimonials";
import HomeAboutSection from "@/src/components/pages/home/HomeAboutSection";
import HomeLabelSection from "@/src/components/pages/home/HomeLabelSection";
import HomeNewRelease from "@/src/components/pages/home/HomeNewRelease";
import HomePromotion from "@/src/components/pages/home/HomePromotion";
import HomeServiceSection from "@/src/components/pages/home/HomeServiceSection";
import HomeTopSection from "@/src/components/pages/home/HomeTopSection";

export const metadata: Metadata = {
  title: "Global Punjabi Music Distribution & Promotion | Amozart",
  description:
    "Go global! Distribute Punjabi & indie tracks to Spotify, Apple & 100+ platforms. Secure YouTube Content ID & boost streams with Indian music ads.",
};

export default function Home() {
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
      "@type": "WebSite",
      "@id": "https://amozart.com/#website",
      "url": "https://amozart.com/",
      "name": "Amozart",
      "description": "Global music distribution, rights management, and promotion platform for independent artists and record labels.",
      "publisher": {
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
      "description": "Amozart is a next-generation music distribution and rights management company built for independent artists, creators, and labels to release, protect, and monetize their music globally.",
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
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Amozart Music Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Global Music Distribution",
              "description": "Distribute music to Spotify, Apple Music, Amazon Music, JioSaavn, Wynk, TikTok, Instagram, and 100+ global platforms."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "YouTube Channel & Content Management",
              "description": "Advanced YouTube CMS Access, Content ID protection, SEO optimization, and channel monetization."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Complete Artist Management",
              "description": "Brand development, release strategy, promotions, bookings, and digital identity management for long-term career growth."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Royalty & Rights Management",
              "description": "Real-time royalty tracking, asset rights management, and customizable royalty split templates."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Targeted Music Promotion",
              "description": "Strategic, data-driven organic and paid music promotion campaigns via Meta, YouTube, and Google Ads targeting regional and global audiences."
            }
          }
        ]
      }
    }
  ]
}
          `,
        }}
      />
      <HomeTopSection />
      <HomeAboutSection />
      <HomeNewRelease />
      <HomeServiceSection />
      <HomeLabelSection />
      <HomePromotion />
      <Faqs />
      <Testimonials />
    </>
  );
}
