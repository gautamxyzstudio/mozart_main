import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help Center | AMozart",
  description:
    "Help Center for AMozart. Find quick answers to common questions about accounts, billing, music distribution, royalties, copyright, and artist support.",
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
            Quick <span className="text-primary">Answers</span> to common <span className="text-primary">Questions.</span>
          </h1>
          <div className="w-[75%] h-[1.5px] bg-gradient-to-r from-[#6739b7] to-transparent mt-8 mb-16" />
        </div>

        {/* Content Body */}
        <div className="max-w-[1000px] text-black80 font-medium text-base md:text-lg leading-7 md:leading-8 space-y-12">
          {/* Account & Billing */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Account & Billing</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li className="text-base text-[#414141] font-normal">Create and manage your account</li>
              <li className="text-base text-[#414141] font-normal">Subscription plans</li>
              <li className="text-base text-[#414141] font-normal">Payment methods</li>
              <li className="text-base text-[#414141] font-normal">Invoices and refunds</li>
            </ul>
          </div>

          {/* Music Distribution */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Music Distribution</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li className="text-base text-[#414141] font-normal">Uploading music</li>
              <li className="text-base text-[#414141] font-normal">Release requirements</li>
              <li className="text-base text-[#414141] font-normal">Store delivery timelines</li>
              <li className="text-base text-[#414141] font-normal">Metadata guidelines</li>
            </ul>
          </div>

          {/* Royalties & Payments */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Royalties & Payments</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li className="text-base text-[#414141] font-normal">Understanding royalties</li>
              <li className="text-base text-[#414141] font-normal">Payment schedules</li>
              <li className="text-base text-[#414141] font-normal">Withdrawal methods</li>
              <li className="text-base text-[#414141] font-normal">Tax information</li>
            </ul>
          </div>

          {/* Copyright & Content ID */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Copyright & Content ID</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li className="text-base text-[#414141] font-normal">Copyright ownership</li>
              <li className="text-base text-[#414141] font-normal">YouTube Content ID</li>
              <li className="text-base text-[#414141] font-normal">Copyright disputes</li>
              <li className="text-base text-[#414141] font-normal">Claim management</li>
            </ul>
          </div>

          {/* Artist Support */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Artist Support</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li className="text-base text-[#414141] font-normal">Contact support</li>
              <li className="text-base text-[#414141] font-normal">Report an issue</li>
              <li className="text-base text-[#414141] font-normal">Feature requests</li>
              <li className="text-base text-[#414141] font-normal">Partnership inquiries</li>
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
