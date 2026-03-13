import Faqs from "@/src/components/modules/faqs/Faqs";
import Testimonials from "@/src/components/modules/testimonials/Testimonials";
import AboutTopSection from "@/src/components/pages/about/AboutTopSection";
import ArtistsSection from "@/src/components/pages/artists/ArtistsSection";
import React from "react";

const page = () => {
  return (
    <>
      <AboutTopSection />
      <ArtistsSection />
      <Faqs />
      <Testimonials />
    </>
  );
};

export default page;
