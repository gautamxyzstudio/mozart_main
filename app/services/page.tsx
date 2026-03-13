import Faqs from "@/src/components/modules/faqs/Faqs";
import Testimonials from "@/src/components/modules/testimonials/Testimonials";
import { ServicesTopSection } from "@/src/components/pages/services/ServicesTopSection";
import React from "react";

const page = () => {
  return (
    <>
      <ServicesTopSection />
      <Faqs />
      <Testimonials />
    </>
  );
};

export default page;
