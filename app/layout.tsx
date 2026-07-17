import type { Metadata } from "next";
import "./globals.css";
import Header from "@/src/components/modules/header/Header";
import Footer from "@/src/components/modules/footer/Footer";
import { CanonicalURL } from "@/src/components/modules/canonicalUrl/CanonicalURL";
import { ToastContainer } from "react-toastify";
import { GoogleTagManager } from "@next/third-parties/google";
import "react-toastify/dist/ReactToastify.css";
import Providers from "./providers";

// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/effect-creative";
import "swiper/css/effect-coverflow";
import Script from "next/script";
import ClarityTracker from "@/src/components/clarityTracker/ClarityTracker";

export const metadata: Metadata = {
  metadataBase: new URL("https://amozart.com"),

  title: "Global Punjabi Music Distribution & Promotion | Amozart",
  description:
    "Go global! Distribute Punjabi & indie tracks to Spotify, Apple & 100+ platforms. Secure YouTube Content ID & boost streams with Indian music ads.",
  openGraph: {
    title: "Amozart | Global Music Services | Music Distribution",
    description:
      "Distribute your music worldwide with top music distribution, promotion, YouTube Content ID, royalty management & artist services. Grow your career globally.",
    url: "https://amozart.com",
    siteName: "Amozart",
    type: "website",
    images: [
      {
        url: "https://admin.amozart.com/assets/amozart-BugKUjlO.webp",
        width: 1200,
        height: 630,
        alt: "Amozart",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amozart | Global Music Services | Music Distribution ",
    description:
      "Distribute your music worldwide with top music distribution, promotion, YouTube Content ID, royalty management & artist services. Grow your career globally.",
    images: ["https://admin.amozart.com/assets/amozart-BugKUjlO.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/hvdtrial-graphit"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Martel:wght@400;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* ✅ Google Analytics */}

        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
             gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
                 page_path: window.location.pathname,
               }); `,
          }}
        />
        <meta
          name="google-site-verification"
          content="m6-TDGzBNK3GBch_S9HUkA96m-znL-s6B5otuhizHVQ"
        />
        <CanonicalURL />
        <GoogleTagManager gtmId={`${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER}`} />

      </head>
      <body className={`antialiased max-w-screen-2xl mx-auto`}>

        <Providers>
          <ClarityTracker />
          <Header />

          {children}
          <Footer />
          <ToastContainer />

        </Providers>
      </body>
    </html>
  );
}
