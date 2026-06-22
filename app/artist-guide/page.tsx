import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import AlbumIcon from "@mui/icons-material/Album";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CampaignIcon from "@mui/icons-material/Campaign";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

export const metadata: Metadata = {
  title: "Artist Guide | AMozart",
  description:
    "Build Your Music Career with Confidence. This guide helps artists prepare professional releases and understand how Amozart supports long-term growth.",
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
          <h1 className="text-[40px] md:text-5xl lg:text-[70px] font-bold tracking-tight text-foreground font-sans leading-tight">
            Artist <span className="text-primary">Guide</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground font-bold mt-4">
            Build Your Music Career with Confidence
          </p>
          <div className="w-[75%] h-[1.5px] bg-gradient-to-r from-[#6739b7] to-transparent mt-8 mb-12" />
        </div>

        {/* Content Body */}
        <div className="w-full space-y-16">
          {/* Welcome Intro Section */}
          <div className="space-y-6 max-w-[1000px]">
            <p className="text-lg md:text-lg text-black/90 font-normal leading-relaxed">
              Success in today&apos;s music industry is about more than releasing great songs. It requires planning, consistency, rights protection, and smart distribution. This guide helps artists prepare professional releases and understand how Amozart supports long-term growth.
            </p>
          </div>

          {/* Step-by-Step Guide */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Step 1 */}
              <div className="bg-[#f8f8f8] border border-[#e5e7eb] p-6 md:p-8 rounded-[24px] shadow-xs hover:border-primary/30 hover:bg-white hover:shadow-md transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-[16px] bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <AlbumIcon className="text-2xl" />
                    </div>
                    <span className="text-2xl font-extrabold text-primary/30 group-hover:text-primary transition-colors duration-300">
                      01
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">
                    Step 1: Prepare High-Quality Music
                  </h3>
                  <p className="text-sm text-black80 font-normal leading-relaxed mb-4">
                    Before uploading:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm md:text-base text-black80">
                    <li className="font-normal text-[#414141]">Use professionally mixed and mastered audio.</li>
                    <li className="font-normal text-[#414141]">Prepare clear cover artwork.</li>
                    <li className="font-normal text-[#414141]">Verify song titles and contributor information.</li>
                    <li className="font-normal text-[#414141]">Check spelling and metadata carefully.</li>
                  </ul>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-[#f8f8f8] border border-[#e5e7eb] p-6 md:p-8 rounded-[24px] shadow-xs hover:border-primary/30 hover:bg-white hover:shadow-md transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-[16px] bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <VerifiedUserIcon className="text-2xl" />
                    </div>
                    <span className="text-2xl font-extrabold text-primary/30 group-hover:text-primary transition-colors duration-300">
                      02
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">
                    Step 2: Confirm Your Rights
                  </h3>
                  <p className="text-sm md:text-base text-black80 font-normal leading-relaxed">
                    Only distribute music that you own or have permission to release. Make sure any samples, collaborations, or artwork are properly licensed.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-[#f8f8f8] border border-[#e5e7eb] p-6 md:p-8 rounded-[24px] shadow-xs hover:border-primary/30 hover:bg-white hover:shadow-md transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-[16px] bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <AssignmentIcon className="text-2xl" />
                    </div>
                    <span className="text-2xl font-extrabold text-primary/30 group-hover:text-primary transition-colors duration-300">
                      03
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">
                    Step 3: Complete Your Release Details
                  </h3>
                  <p className="text-sm md:text-base text-black80 font-normal leading-relaxed">
                    Accurate metadata helps listeners discover your music and ensures proper royalty reporting.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-[#f8f8f8] border border-[#e5e7eb] p-6 md:p-8 rounded-[24px] shadow-xs hover:border-primary/30 hover:bg-white hover:shadow-md transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-[16px] bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <CampaignIcon className="text-2xl" />
                    </div>
                    <span className="text-2xl font-extrabold text-primary/30 group-hover:text-primary transition-colors duration-300">
                      04
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">
                    Step 4: Promote Consistently
                  </h3>
                  <p className="text-sm md:text-base text-black80 font-normal leading-relaxed">
                    Publishing music is only the beginning. Build momentum through social media, short-form content, fan engagement, and strategic marketing.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="bg-[#f8f8f8] border border-[#e5e7eb] p-6 md:p-8 rounded-[24px] shadow-xs hover:border-primary/30 hover:bg-white hover:shadow-md transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-[16px] bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <TrendingUpIcon className="text-2xl" />
                    </div>
                    <span className="text-2xl font-extrabold text-primary/30 group-hover:text-primary transition-colors duration-300">
                      05
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">
                    Step 5: Monitor Your Growth
                  </h3>
                  <p className="text-sm md:text-base text-black80 font-normal leading-relaxed">
                    Review analytics, audience insights, and royalty reports regularly to understand what works and improve future releases.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* How Amozart Helps Artists */}
          <div className="bg-primary/[0.02] border border-primary/10 rounded-[32px] p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              How Amozart Helps Artists
            </h2>
            <p className="text-sm md:text-base text-black80 font-normal mb-8">
              Amozart offers:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  label: "Global music distribution",
                  href: "/services/music-distribution",
                },
                {
                  label: "Artist management support",
                  href: "/services/artists-management",
                },
                {
                  label: "YouTube Channel Management",
                  href: "/services/youtube-channel-management",
                },
                {
                  label: "YouTube Content ID",
                  href: "/services/youtube-content-id",
                },
                {
                  label: "Music promotion",
                  href: "/services/music-promotion",
                },
                {
                  label: "Label distribution",
                  href: "/services/label-distribution",
                },
                {
                  label: "Royalty and rights management",
                  href: "/services/royalty-rights-management",
                },
              ].map((benefit, idx) => (
                <Link
                  key={idx}
                  href={benefit.href}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#e5e7eb] hover:border-primary/30 hover:shadow-md transition-all duration-300 group shadow-xs cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
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
                  <span className="text-base text-foreground font-semibold group-hover:text-primary transition-colors duration-300">
                    {benefit.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Frequently Asked Questions */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Artist FAQs
              </h2>
              <div className="w-16 h-1 bg-primary mt-2" />
            </div>

            <div className="space-y-4 max-w-[1000px]">
              {[
                {
                  q: "Can beginners use Amozart?",
                  a: "Absolutely. New and experienced artists can both benefit from our platform.",
                },
                {
                  q: "Do I need a record label?",
                  a: "No. Independent creators can release music directly.",
                },
                {
                  q: "Can I update my release later?",
                  a: "Many release details can be reviewed and updated where platform policies allow.",
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
                  <div className="px-6 pb-6 text-sm md:text-base text-black80 font-normal border-t border-[#e5e7eb]/50 pt-4 leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* Start Your Next Release */}
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-primary to-[#4f2a96] text-white p-8 md:p-12 lg:p-16 shadow-xl">
            {/* Background decorative shapes */}
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none -mr-20 -mb-20" />
            <div className="absolute left-1/3 top-0 w-48 h-48 bg-[#9574cd]/20 rounded-full blur-2xl pointer-events-none -mt-10" />

            <div className="relative z-10 max-w-3xl">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Start Your Next Release
              </h2>
              <p className="text-sm md:text-lg text-white/90 font-medium leading-relaxed">
                Every successful artist begins with a single step. Let Amozart help you bring your music to listeners across the globe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
