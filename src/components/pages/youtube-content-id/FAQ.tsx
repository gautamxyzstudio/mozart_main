"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is a YouTube Content ID and do I need it as an independent artist?",
    answer:
      "YouTube Content ID is a fingerprinting system that scans all YouTube videos for your music and collects revenue on your behalf whenever a match is found. If you're an independent artist with original music, you need it — without it, every reupload and background music use of your song earns nothing for you.",
  },
  {
    question: "How does YouTube Content ID work for musicians practically?",
    answer:
      "Once your track is registered, YouTube scans every video on the platform against your audio fingerprint. When it finds a match, it automatically applies your chosen policy — monetize, track, or block — without you having to do anything manually.",
  },
  {
    question: "Can I monetize music on YouTube without a label through Amozart?",
    answer:
      "Yes. Amozart gives independent artists direct access to YouTube Content ID without needing a label. You own your music, you register it through us, and all royalties come directly to you.",
  },
  {
    question: "What happens when someone uploads a cover of my song?",
    answer:
      "Cover videos are matched by YouTube's Content ID system just like reuploads. Once your music is registered, you automatically earn royalties from YouTube cover videos — the revenue from those videos is redirected to you rather than the uploader.",
  },
  {
    question: "What is the difference between a Content ID claim and a copyright strike?",
    answer:
      "A Content ID claim is automatic and non-punitive — it monetizes a video on your behalf without penalizing the uploader. A copyright strike is a manual action that can remove content and harm the uploader's channel. For most artists, Content ID monetization is the smarter, more profitable approach.",
  },
  {
    question: "Is your Content ID service available for artists in India?",
    answer:
      "Yes. As a YouTube Content ID registration service India artists use, we handle all regional requirements and ensure your music rights protection on YouTube India is set up correctly across both local and international audiences.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 xl:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        <h2 className="text-[#111111] font-extrabold text-[36px] md:text-[48px] xl:text-[54px] leading-tight tracking-tight text-left">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col space-y-4 w-full">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`w-full rounded-[24px] md:rounded-[32px] overflow-hidden transition-all duration-300 border border-transparent ${isOpen
                    ? "bg-primary text-white"
                    : "bg-[#f6f6f9] text-[#111111] hover:bg-[#eaeaea]/50"
                  }`}
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full flex items-center justify-between text-left px-6 py-5 md:px-10 md:py-6 gap-4 cursor-pointer focus:outline-none"
                >
                  <span
                    className={`font-bold text-[15px] md:text-[18px] xl:text-[19px] leading-snug transition-colors duration-300 ${isOpen ? "text-white" : "text-[#111111]"
                      }`}
                  >
                    {item.question}
                  </span>
                  <div
                    className={`flex-shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-full transition-all duration-300 flex items-center justify-center shadow-lg ${isOpen
                        ? "bg-white text-primary rotate-90"
                        : "bg-primary text-white"
                      }`}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 md:w-5 md:h-5"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div
                    className={`px-6 pb-6 md:px-10 md:pb-8 text-sm md:text-base leading-relaxed  pt-4 transition-colors duration-300 ${isOpen
                        ? "text-white/85  "
                        : "text-[#4a4a4a] "
                      }`}
                  >
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
