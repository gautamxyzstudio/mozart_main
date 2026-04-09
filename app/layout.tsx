import type { Metadata } from "next";
import "./globals.css";
import Header from "@/src/components/modules/header/Header";
import Footer from "@/src/components/modules/footer/Footer";
import { CanonicalURL } from "@/src/components/modules/canonicalUrl/CanonicalURL";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Providers from "./providers";

// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/effect-creative";
import "swiper/css/effect-coverflow";


export const metadata: Metadata = {
  title: "Amozart | Global Music Services | Music Distribution",
  description:
    "Distribute your music worldwide with top music distribution, promotion, YouTube Content ID, royalty management & artist services. Grow your career globally.",
  openGraph: {
    title: "Amozart | Global Music Services | Music Distribution",
    description:
      "Distribute your music worldwide with top music distribution, promotion, YouTube Content ID, royalty management & artist services. Grow your career globally.",
    url: "https://amozart.com",
    locale: "en_US",
    images: [
      {
        url: "/amozart.png",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amozart | Global Music Services | Music Distribution ",
    description:
      "Distribute your music worldwide with top music distribution, promotion, YouTube Content ID, royalty management & artist services. Grow your career globally. ",
    images: ["/amozart.png"],
  },
  robots:{
    index: true,
    follow: true,
  }
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
        <meta
          name="google-site-verification"
          content="m6-TDGzBNK3GBch_S9HUkA96m-znL-s6B5otuhizHVQ"
        />
        <CanonicalURL />
      </head>
      <body className={`antialiased max-w-screen-2xl mx-auto`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
