import React from "react";
import ContactTopSection from "@/src/components/pages/contact/ContactTopSection";
import { BottomSection } from "@/src/components/pages/contact/BottomSection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connect with Amozart | Artist Support & Music Services",
  description:
    "Contact Amozart for music distribution, artist support, YouTube management, promotions, and global release services - let’s grow your music career together",
};

const page = () => {
  return (
    <>
      <ContactTopSection />
      <BottomSection />
    </>
  );
};

export default page;
