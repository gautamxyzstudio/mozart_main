import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artist Guide | AMozart",
  description:
    "Artist Guide for AMozart. Learn how to launch your music releases, optimize metadata, distribute globally, run marketing campaigns, and maximize your royalties.",
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
          <h1 className="text-[52px] md:text-6xl lg:text-[100px] font-bold tracking-tight text-foreground font-sans leading-none">
            Artist <span className="text-primary">Success</span><br />Starts Here
          </h1>
          <div className="w-[75%] h-[1.5px] bg-gradient-to-r from-[#6739b7] to-transparent mt-8 mb-16" />
        </div>

        {/* Content Body */}
        <div className="max-w-[1000px] text-black80 font-medium text-base md:text-lg leading-7 md:leading-8 space-y-12">
          {/* Getting Started */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Getting Started</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li className="text-base text-[#414141] font-normal">Creating your artist profile</li>
              <li className="text-base text-[#414141] font-normal">Preparing your first release</li>
              <li className="text-base text-[#414141] font-normal">Cover art requirements</li>
              <li className="text-base text-[#414141] font-normal">Metadata best practices</li>
            </ul>
          </div>

          {/* Distribution Guide */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Distribution Guide</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li className="text-base text-[#414141] font-normal">How music distribution works</li>
              <li className="text-base text-[#414141] font-normal">Choosing a release date</li>
              <li className="text-base text-[#414141] font-normal">Uploading singles, EPs, and albums</li>
              <li className="text-base text-[#414141] font-normal">Delivering to Spotify, Apple Music, YouTube Music, and more</li>
            </ul>
          </div>

          {/* Music Marketing */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Music Marketing</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li className="text-base text-[#414141] font-normal">Building your fanbase</li>
              <li className="text-base text-[#414141] font-normal">Social media strategies</li>
              <li className="text-base text-[#414141] font-normal">Playlist pitching</li>
              <li className="text-base text-[#414141] font-normal">Pre-save campaigns</li>
              <li className="text-base text-[#414141] font-normal">Music promotion tips</li>
            </ul>
          </div>

          {/* Revenue & Royalties */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Revenue & Royalties</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li className="text-base text-[#414141] font-normal">How artists earn money</li>
              <li className="text-base text-[#414141] font-normal">Streaming royalties explained</li>
              <li className="text-base text-[#414141] font-normal">Publishing royalties</li>
              <li className="text-base text-[#414141] font-normal">Maximizing revenue</li>
            </ul>
          </div>

          {/* Career Growth */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Career Growth</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li className="text-base text-[#414141] font-normal">Personal branding</li>
              <li className="text-base text-[#414141] font-normal">Building an artist website</li>
              <li className="text-base text-[#414141] font-normal">Networking with industry professionals</li>
              <li className="text-base text-[#414141] font-normal">Creating a long-term music strategy</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Contact Us</h2>
            <p className="text-base text-[#414141] font-normal">
              Email:{" "}
              <a href="mailto:privacy@amozart.com" className="text-primary hover:underline font-bold">
              support@amozart.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
