import Faqs from "@/src/components/modules/faqs/Faqs";
import Testimonials from "@/src/components/modules/testimonials/Testimonials";
import ServicesCenterSection from "@/src/components/pages/services/ServicesCenterSection";
import { ServicesTopSection } from "@/src/components/pages/services/ServicesTopSection";
import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amozart Services for Independent Artists & Creators",
  description:
    "From publishing guidance to release management, Amozart delivers trusted services that help independent artists launch, promote, and build a strong music identity.",
};

const page = () => {
  return (
    <>
      <ServicesTopSection />
      <ServicesCenterSection />
      <Faqs />
      <Testimonials />
    </>
  );
};

export default page;
