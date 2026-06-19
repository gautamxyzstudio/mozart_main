import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Copyright Policy | AMozart",
  description:
    "Copyright Policy for AMozart. Learn how we handle copyright claims, DMCA notifications, intellectual property rights, and repeat infringer procedures.",
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
        <div className="max-w-[1000px] text-black80 font-medium text-base md:text-lg leading-7 md:leading-8 space-y-12">
          {/* Introduction */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Introduction</h2>
            <p className="text-base text-[#414141] font-normal">
              AMozart respects the intellectual property rights of others and expects our users to do the same. We take allegations of copyright infringement very seriously and comply with the provisions of the Digital Millennium Copyright Act (DMCA) and other applicable international copyright laws.
               This Copyright Policy explains how you can report unauthorized distribution of your copyrighted works and how our users can dispute infringement claims.
            </p>
          </div>

          {/* 1. Submitting a Notice of Infringement */}
          <div className="space-y-1">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">1. Submitting a Notice of Infringement</h2>
            <p className="text-sm text-[#414141] font-normal">
              If you believe that any musical track, artwork, lyrics, or other content distributed through AMozart infringes your copyright, you may submit a formal notification to our Designated Copyright Agent containing the following information:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li className="text-base text-[#414141] font-normal">A physical or electronic signature of the copyright owner or a person authorized to act on their behalf.</li>
              <li className="text-base text-[#414141] font-normal">Identification of the copyrighted work claimed to have been infringed (e.g., link to the original track or registration details).</li>
              <li className="text-base text-[#414141] font-normal">Identification of the infringing material distributed by AMozart that you request us to remove or disable.</li>
              <li className="text-base text-[#414141] font-normal">Your contact details, including your address, telephone number, and email address.</li>
              <li className="text-base text-[#414141] font-normal">A statement that you have a good faith belief that use of the material is not authorized by the copyright owner, its agent, or the law.</li>
              <li className="text-base text-[#414141] font-normal">A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
            </ul>
            <p className="text-sm text-[#414141] font-normal pt-2">
              Please send all infringement notifications to: <a href="mailto:support@amozart.com" className="text-primary hover:underline font-bold">support@amozart.com</a>.
            </p>
          </div>

          {/* 2. Counter-Notification Procedure */}
          <div className="space-y-1">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">2. Counter-Notification Procedure</h2>
            <p className="text-sm text-[#414141] font-normal">
              If your content was removed due to a copyright infringement claim and you believe this was done in error or due to misidentification, you may submit a counter-notification to us. Your counter-notification must include:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li className="text-base text-[#414141] font-normal">Your physical or electronic signature.</li>
              <li className="text-base text-[#414141] font-normal">Identification of the material that was removed and the location where it appeared before it was disabled.</li>
              <li className="text-base text-[#414141] font-normal">A statement under penalty of perjury that you have a good faith belief that the material was removed or disabled as a result of mistake or misidentification.</li>
              <li className="text-base text-[#414141] font-normal">Your name, address, telephone number, and email address, along with consent to the jurisdiction of the federal or local court in your territory.</li>
            </ul>
            <p className="text-sm text-[#414141] font-normal pt-2">
              Upon receiving a valid counter-notification, we will forward it to the original complaining party. If they do not file a legal action within 10 business days, we may restore the removed material.
            </p>
          </div>

          {/* 3. Repeat Infringer Policy */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">3. Repeat Infringer Policy</h2>
            <p className="text-base text-[#414141] font-normal">
              In accordance with copyright regulations, AMozart enforces a strict repeat infringer policy. We reserve the right to suspend, disable, or permanently terminate the accounts of artists or labels who are repeatedly accused of infringing copyright or who violate our Terms of Service by uploading unauthorized third-party content.
            </p>
          </div>

          {/* 4. Warranties and Clearances */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">4. Warranties and Clearances</h2>
            <p className="text-base text-[#414141] font-normal">
              By uploading tracks, cover art, and metadata, you warrant that you own 100% of the rights or have obtained all necessary licenses (including mechanical licenses, sample clearances, and permissions from featured artists/producers). Uploading covers, remixes, or tracks with uncleared samples without legal authorization is strictly prohibited.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
