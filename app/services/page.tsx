import Faqs from "@/src/components/modules/faqs/Faqs";
import Testimonials from "@/src/components/modules/testimonials/Testimonials";
import ServicesCenterSection from "@/src/components/pages/services/ServicesCenterSection";
import { ServicesTopSection } from "@/src/components/pages/services/ServicesTopSection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Music Distribution, YouTube CMS & Promotion for Punjabi Artists",
  description:
    "Explore global distribution, dedicated artist management, advanced YouTube CMS access , and targeted digital music promotion built for Indian audiences.",
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
      "@type": "ServicePage",
      "@id": "https://amozart.com/services#webpage",
      "url": "https://amozart.com/services",
      "name": "Global Music Services | Distribution, Management & Promotion",
      "description": "Explore Amozart's music services including global music distribution, YouTube channel management, Content ID protection, artist management, and targeted music promotion.",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://amozart.com/#website",
        "url": "https://amozart.com/",
        "name": "Amozart"
      },
      "provider": {
        "@id": "https://amozart.com/#organization"
      },
      "inLanguage": "en-US",
      "mainEntity": {
        "@type": "ItemList",
        "name": "Amozart Core Services",
        "description": "Comprehensive list of digital music services offered by Amozart.",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "Service",
              "name": "Global Music Distribution",
              "description": "Distribute your music to Spotify, Apple Music, Amazon Music, JioSaavn, Wynk, TikTok, Instagram, and over 100+ global streaming platforms with fast delivery and worldwide reach.",
              "provider": {
                "@id": "https://amozart.com/#organization"
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Service",
              "name": "YouTube Channel & Content Management",
              "description": "Advanced YouTube CMS access, content planning, search engine optimization (SEO), monetization setup, and professional rights management.",
              "provider": {
                "@id": "https://amozart.com/#organization"
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Service",
              "name": "YouTube Content ID Protection",
              "description": "Identify, track, and secure digital rights for your music across YouTube, ensuring automatic claiming and maximum revenue safety.",
              "provider": {
                "@id": "https://amozart.com/#organization"
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "Service",
              "name": "Complete Artist Management",
              "description": "Long-term career building including brand development, structured release strategy, promotions, booking assistance, and digital identity management.",
              "provider": {
                "@id": "https://amozart.com/#organization"
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 5,
            "item": {
              "@type": "Service",
              "name": "Targeted Music Promotion",
              "description": "Data-driven organic and paid music promotion campaigns via Meta, YouTube, and Google Ads, explicitly tailored for Indian, Punjabi, and global audiences.",
              "provider": {
                "@id": "https://amozart.com/#organization"
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 6,
            "item": {
              "@type": "Service",
              "name": "Royalty & Rights Management",
              "description": "Real-time royalty tracking across streaming networks and customizable royalty split templates to ensure fair, transparent compensation.",
              "provider": {
                "@id": "https://amozart.com/#organization"
              }
            }
          }
        ]
      }
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
      <ServicesTopSection />
      <ServicesCenterSection />
      <Faqs />
      <Testimonials />
    </>
  );
};

export default page;
