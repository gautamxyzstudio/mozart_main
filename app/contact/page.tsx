import React from "react";
import ContactTopSection from "@/src/components/pages/contact/ContactTopSection";
import { BottomSection } from "@/src/components/pages/contact/BottomSection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Amozart | Music Distribution Support India, CA & ES",
  description:
    "Get expert artist support. Contact Amozart's music rights team at our regional hubs in Punjab (India), Vancouver (Canada), and Barcelona (Spain).",
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
      "@type": "ContactPage",
      "@id": "https://amozart.com/contact#webpage",
      "url": "https://amozart.com/contact",
      "name": "Contact Amozart | Global Support & Office Locations",
      "description": "Get in touch with Amozart's support team for inquiries regarding music distribution, rights management, and global artist services. View our locations in Spain, Canada, and India.",
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
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "availableLanguage": ["en", "pa", "hi"],
          "description": "Global Independent Artist and Music Label Support Team"
        }
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
      <ContactTopSection />
      <BottomSection />
    </>
  );
};

export default page;
