import React from "react";
import { Metadata } from "next";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PaymentsIcon from "@mui/icons-material/Payments";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import CampaignIcon from "@mui/icons-material/Campaign";

export const metadata: Metadata = {
  title: "Amozart Help Center | Music Distribution & Royalty Support",
  description:
    " Find answers to your questions about Punjabi music distribution, setting up YouTube CMS, tracking music royalties, and managing digital audio rights. ",
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
          <h1 className="text-[40px] md:text-5xl lg:text-[80px] font-bold tracking-tight text-foreground font-sans leading-tight">
            Music Distribution <span className="text-primary">Help & Support</span> Center
          </h1>
          <div className="w-[75%] h-[1.5px] bg-gradient-to-r from-[#6739b7] to-transparent mt-8 mb-12" />
        </div>

        {/* Content Body */}
        <div className="w-full space-y-16">
          {/* Welcome Intro Section */}
          <div className="space-y-6 max-w-[1000px]">
            <p className="text-lg md:text-lg text-black font-normal ">
              Welcome to the Amozart Help Center. Whether you&apos;re releasing your first track or managing an entire music label, we&apos;re here to make the process easier. This resource hub answers common questions about music distribution, YouTube Content ID, royalty management, artist services, and account support.
            </p>
            <div className="border-l-4 border-primary pl-6 py-3 bg-primary/5 rounded-r-2xl max-w-3xl">
              <p className="text-base md:text-lg text-foreground font-semibold">
                Our mission is simple: Help creators focus on making music while we help deliver it to audiences around the world.
              </p>
            </div>
          </div>

          {/* Topics We Cover */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Topics We Cover
              </h2>
              <div className="w-16 h-1 bg-primary mt-2" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Music Distribution */}
              <div className="bg-[#f8f8f8] border border-[#e5e7eb] p-6 md:p-8 rounded-[24px] shadow-xs hover:border-primary/30 hover:bg-white hover:shadow-md transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-[16px] bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <MusicNoteIcon className="text-2xl" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">
                    Music Distribution
                  </h3>
                  <p className="text-base text-black80 font-normal leading-relaxed">
                    Learn how to prepare your release, submit songs, update metadata, and publish music across leading streaming platforms.
                  </p>
                </div>
              </div>

              {/* YouTube Services */}
              <div className="bg-[#f8f8f8] border border-[#e5e7eb] p-6 md:p-8 rounded-[24px] shadow-xs hover:border-primary/30 hover:bg-white hover:shadow-md transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-[16px] bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <YouTubeIcon className="text-2xl" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">
                    YouTube Services
                  </h3>
                  <p className="text-base text-black80 font-normal leading-relaxed">
                    Understand YouTube Channel Management, YouTube Content ID, monetization eligibility, and copyright claim handling.
                  </p>
                </div>
              </div>

              {/* Royalties & Rights */}
              <div className="bg-[#f8f8f8] border border-[#e5e7eb] p-6 md:p-8 rounded-[24px] shadow-xs hover:border-primary/30 hover:bg-white hover:shadow-md transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-[16px] bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <PaymentsIcon className="text-2xl" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">
                    Royalties & Rights
                  </h3>
                  <p className="text-base text-black80 font-normal leading-relaxed">
                    Find information about royalty reporting, payment processing, rights ownership, and revenue management.
                  </p>
                </div>
              </div>

              {/* Artist & Label Support */}
              <div className="bg-[#f8f8f8] border border-[#e5e7eb] p-6 md:p-8 rounded-[24px] shadow-xs hover:border-primary/30 hover:bg-white hover:shadow-md transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-[16px] bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <SupportAgentIcon className="text-2xl" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">
                    Artist & Label Support
                  </h3>
                  <p className="text-base text-black80 font-normal leading-relaxed">
                    Explore guidance for independent artists, record labels, and music businesses looking to expand their reach.
                  </p>
                </div>
              </div>

              {/* Promotion & Growth */}
              <div className="bg-[#f8f8f8] border border-[#e5e7eb] p-6 md:p-8 rounded-[24px] shadow-xs hover:border-primary/30 hover:bg-white hover:shadow-md transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-[16px] bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <CampaignIcon className="text-2xl" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">
                    Promotion & Growth
                  </h3>
                  <p className="text-base text-black80 font-normal leading-relaxed">
                    Discover practical tips to market your releases, build your audience, and strengthen your digital presence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Artists Choose Amozart */}
          <div className="bg-primary/[0.02] border border-primary/10 rounded-[32px] p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              Why Artists Choose <span className="text-primary">Amozart</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Worldwide music distribution",
                "Dedicated artist support",
                "YouTube Content ID solutions",
                "Royalty and rights management",
                "Music promotion services",
                "Label distribution assistance",
              ].map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#e5e7eb] shadow-xs"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-primary shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-base text-foreground font-semibold">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Frequently Asked Questions */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Frequently Asked Questions
              </h2>
              <div className="w-16 h-1 bg-primary mt-2" />
            </div>

            <div className="space-y-4 max-w-[1000px]">
              {[
                {
                  q: "How do I distribute my music through Amozart?",
                  a: "Create an account, upload your release, complete the required details, and submit it for review.",
                },
                {
                  q: "Do I keep ownership of my music?",
                  a: "Yes. You remain the owner of your original recordings and intellectual property.",
                },
                {
                  q: "Can I distribute singles and albums?",
                  a: "Yes. Amozart supports both individual tracks and larger releases.",
                },
                {
                  q: "Who can use Amozart?",
                  a: "Independent artists, bands, producers, labels, and music creators are welcome.",
                },
              ].map((faq, idx) => (
                <details
                  key={idx}
                  className="group border border-[#e5e7eb] rounded-2xl bg-white hover:border-primary/30 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer select-none">
                    <span className="text-base md:text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                      {faq.q}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center transition-transform duration-300 group-open:rotate-180 shrink-0">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-base text-black80 font-normal border-t border-[#e5e7eb]/50 pt-4 leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* Need Personal Assistance? */}
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-primary to-[#4f2a96] text-white p-8 md:p-12 lg:p-16 shadow-xl">
            {/* Background decorative shapes */}
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none -mr-20 -mb-20" />
            <div className="absolute left-1/3 top-0 w-48 h-48 bg-[#9574cd]/20 rounded-full blur-2xl pointer-events-none -mt-10" />

            <div className="relative z-10 max-w-3xl">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Need Personal Assistance?
              </h2>
              <p className="text-base text-white/90 font-medium mb-8 leading-relaxed">
                Our support team is ready to help with your questions. Reach out to Amozart and let us guide you through every stage of your music journey.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:support@amozart.com"
                  className="inline-flex items-center gap-2 bg-white text-primary hover:bg-[#f8f8f8] font-bold px-6 py-3.5 md:px-8 md:py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                >
                  <svg
                    className="w-5 h-5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Email: support@amozart.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
