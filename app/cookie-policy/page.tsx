import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Amozart Music Distribution Platform",
  description:
    "Learn how Amozart uses cookies to improve your dashboard user experience, secure royalty tracking tools, and optimize site navigation for artists.",
};

const Page = () => {
  return (
    <section className="w-full relative min-h-screen bg-white text-foreground overflow-clip">
      {/* Background slanted purple gradient shape on top-right */}
      <div className="absolute md:w-30 md:h-188.75 w-17.5 h-87.5 bg-[linear-gradient(180deg,rgba(103,57,183,0)_0%,rgba(103,57,183,0.45)_33.78%,rgba(103,57,183,0)_66.97%)] opacity-20 xl:rotate-204 rotate-24 xl:-mt-70.5 xl:mr-10 md:-mt-3 md:mr-9 mt-12.5 mr-6 right-6" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-13 xl:px-28 pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-44 lg:pb-32">
        {/* Header Section */}
        <div className="flex flex-col items-start w-full">
          <h1 className="text-[52px] md:text-6xl lg:text-[80px] font-bold tracking-tight text-foreground font-sans leading-none">
            Cookies <span className="text-primary">Policy</span>
          </h1>
          <div className="w-[75%] h-[1.5px] bg-gradient-to-r from-[#6739b7] to-transparent mt-8 mb-16" />
        </div>

        {/* Content Body */}
        <div className="max-w-[1000px] text-black80 font-medium text-base md:text-lg leading-7 md:leading-8 space-y-5">
          {/* Introduction */}
          <div className="space-y-4">
            <p className="text-base md:text-lg text-[#414141] font-normal">
              This Cookies Policy explains how Amozart uses cookies and similar technologies to improve your browsing experience.
            </p>
          </div>

          {/* What Are Cookies? */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">What Are Cookies?</h2>
            <p className="text-base text-[#414141] font-normal">
              Cookies are small text files stored on your device that help websites remember preferences and improve functionality.
            </p>
          </div>

          {/* Why We Use Cookies */}
          <div className="space-y-1">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Why We Use Cookies</h2>
            <p className="text-sm md:text-base text-[#414141] font-normal">Cookies help us:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li className="text-base text-[#414141] font-normal">Keep the website secure</li>
              <li className="text-base text-[#414141] font-normal">Remember user preferences</li>
              <li className="text-base text-[#414141] font-normal">Analyze performance</li>
              <li className="text-base text-[#414141] font-normal">Improve navigation</li>
              <li className="text-base text-[#414141] font-normal">Enhance user experience</li>
            </ul>
          </div>

          {/* Managing Cookies */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Managing Cookies</h2>
            <p className="text-base text-[#414141] font-normal">
              You can adjust your browser settings to block or delete cookies. Some features may not function properly if cookies are disabled.
            </p>
          </div>

          {/* Policy Updates */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Policy Updates</h2>
            <p className="text-base text-[#414141] font-normal">
              As our website evolves, this Cookies Policy may be revised to reflect changes in technology or legal requirements. Continued use of the website indicates acceptance of the current version.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
