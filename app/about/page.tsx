import Faqs from "@/src/components/modules/faqs/Faqs";
import Testimonials from "@/src/components/modules/testimonials/Testimonials";
import AboutTopSection from "@/src/components/pages/about/AboutTopSection";
import React from "react";

const page = () => {
  return (
    <>
      <AboutTopSection />
      <Testimonials />
      <Faqs />
    </>
  );
};

export default page;
