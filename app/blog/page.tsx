
import BlogListVeiw from "@/src/components/pages/blog/BlogListVeiw";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Punjabi Music Marketing Tips & Distribution Guides | Amozart Blog",
  description:
    "Master the music industry. Get the latest tips on global music distribution, YouTube monetization, streaming growth, and music promotion for indie artists.",
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
      "@type": "Blog",
      "@id": "https://amozart.com/blog#webpage",
      "url": "https://amozart.com/blog",
      "name": "Amozart Music Business Blog & Artist Guides",
      "description": "Stay updated with the latest music distribution strategies, YouTube monetization tips, rights management insights, and digital music promotion guides from Amozart.",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://amozart.com/#website",
        "url": "https://amozart.com/",
        "name": "Amozart"
      },
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
      <BlogListVeiw />
    </>
  );
};

export default page;
