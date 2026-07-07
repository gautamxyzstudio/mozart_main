"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Q1. What is a music chart tracking service?",
    answer:
      "It monitors your chart position across worldwide music charts — Spotify, Apple Music, YouTube Music, JioSaavn — giving you real time data on streams, rankings, and listener activity in one place."
  },
  {
    question: "Q2. How do I get my music on global charts?",
    answer:
      "Start with correct metadata, wide distribution, and proper chart registration. Amozart's global music chart submission service handles registration and monitors your performance from day one."
  },
  {
    question: "Q3. How do I track music performance worldwide?",
    answer:
      "Amozart's music performance tracking dashboard pulls data from every major platform into one report — streams, chart positions, and geographic listener data updated in real time."
  },
  {
    question: "Q4. Do you track charts for Punjabi artists?",
    answer:
      "Yes. Our global music charts for Punjabi artists covers JioSaavn, Wynk, Spotify, and Apple Music — giving Punjabi musicians full visibility into both local and global chart performance."
  },
  {
    question: "Q5. How can I improve my chart position?",
    answer:
      "Our global music chart data insights for artists show exactly which playlists, regions, and strategies are driving your current position — and what actions will grow it further."
  },
  {
    question: "Q6. Is chart tracking available for artists in India?",
    answer:
      "Yes. Our music chart tracking service India covers regional and international platforms — perfect for Indian artists tracking both local and global music performance."
  }
];

const GlobalFaqs = () => {
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
                className={`w-full rounded-[24px] md:rounded-[32px] overflow-hidden transition-all duration-300 border border-transparent ${
                  isOpen
                    ? "bg-primary text-white"
                    : "bg-[#f6f6f9] text-[#111111] hover:bg-[#eaeaea]/50"
                }`}
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full flex items-center justify-between text-left px-6 py-5 md:px-10 md:py-6 gap-4 cursor-pointer focus:outline-none"
                >
                  <span
                    className={`font-bold text-[15px] md:text-[18px] xl:text-[19px] leading-snug transition-colors duration-300 ${
                      isOpen ? "text-white" : "text-[#111111]"
                    }`}
                  >
                    {item.question}
                  </span>
                  <div
                    className={`flex-shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-full transition-all duration-300 flex items-center justify-center shadow-lg ${
                      isOpen
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
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div
                    className={`px-6 pb-6 md:px-10 md:pb-8 text-sm md:text-base leading-relaxed  pt-4 transition-colors duration-300 ${
                      isOpen ? "text-white/85  " : "text-[#4a4a4a] "
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

export default GlobalFaqs;
