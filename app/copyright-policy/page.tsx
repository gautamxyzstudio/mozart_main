import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Copyright Policy | AMozart",
  description:
    "Amozart respects creators and expects all users to respect intellectual property rights. Learn about our original content policy, complaints, investigation process, and repeat infringement rules.",
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
            Copyright <span className="text-primary">Policy</span>
          </h1>
          <div className="w-[75%] h-[1.5px] bg-gradient-to-r from-[#6739b7] to-transparent mt-8 mb-16" />
        </div>

        {/* Content Body */}
        <div className="max-w-[1000px] text-black80 font-medium text-base md:text-lg leading-7 md:leading-8 space-y-5">
          {/* Introduction */}
          <div className="space-y-4">
            <p className="text-base text-[#414141] font-normal font-semibold">
              Amozart respects creators and expects all users to respect intellectual property rights.
            </p>
            <p className="text-base text-[#414141] font-normal">
              At Amozart, protecting original work is one of our highest priorities. We are committed to supporting artists, labels, producers, and creators by maintaining a platform that values creativity and legal ownership. Every user is expected to upload and distribute content responsibly while respecting the copyrights and intellectual property rights of others.
            </p>
          </div>

          {/* Original Content Only */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Original Content Only</h2>
            <p className="text-base text-[#414141] font-normal">
              Users may only upload music, artwork, videos, lyrics, or other materials that they own or have the legal authority to distribute. Before submitting any content through Amozart, it is your responsibility to ensure that all necessary permissions, licenses, and approvals have been obtained. Uploading unauthorized or copyrighted material without permission may result in the removal of the content and further action on your account.
            </p>
          </div>

          {/* Copyright Complaints */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Copyright Complaints</h2>
            <p className="text-base text-[#414141] font-normal">
              If you believe that your copyrighted work has been uploaded or used through Amozart without your permission, you may submit a copyright complaint to our support team. To help us review your request efficiently, please provide relevant details about the original work, evidence of ownership, and information that identifies the allegedly infringing content. We take all valid copyright concerns seriously and aim to address them promptly.
            </p>
          </div>

          {/* Investigation Process */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Investigation Process</h2>
            <p className="text-base text-[#414141] font-normal">
              Every copyright complaint received by Amozart is reviewed carefully and fairly. During the investigation, we may request additional information from the reporting party or the user who uploaded the content. If necessary, access to the reported material may be limited or temporarily restricted while the review is in progress. Our goal is to resolve disputes responsibly while respecting the rights of all parties involved.
            </p>
          </div>

          {/* Repeat Infringement */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Repeat Infringement</h2>
            <p className="text-base text-[#414141] font-normal">
              Users who repeatedly upload content that violates copyright laws or intellectual property rights may face account restrictions, suspension, or permanent removal from the Amozart platform. We maintain a zero-tolerance approach toward repeated infringement to protect creators and maintain a trusted music distribution ecosystem.
            </p>
          </div>

          {/* Fair Resolution */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Fair Resolution</h2>
            <p className="text-base text-[#414141] font-normal">
              Amozart encourages rights holders and users to resolve copyright disputes in a professional and respectful manner. We strive to handle every claim objectively and in accordance with applicable laws and industry standards. Our commitment is to support a fair environment where original creators are protected and legitimate content can be distributed with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
