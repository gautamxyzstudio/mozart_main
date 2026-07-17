"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Q1. What is label distribution for independent artists?",
    answer:
      "It is a service that delivers your music to global platforms, collects royalties, and manages rights — without signing to a major label. Amozart gives independent artists the same tools that major record label distribution companies use."
  },
  {
    question: "Q2. How is Amozart different from other record distribution companies?",
    answer:
      "Most record distribution companies only deliver music to platforms. Amozart combines digital distribution for labels with royalty splits, sync placement, contract tools, and artist management — all in one place."
  },
  {
    question: "Q3. Do I keep my rights when distributing through Amozart?",
    answer:
      "Yes — always. Label distribution rights ownership is central to how Amozart works. You keep 100% of your master rights and publishing credits at all times."
  },
  {
    question: "Q4. Can I manage multiple artists under one account?",
    answer:
      "Yes. Our manage multiple artists label account is built for growing rosters. Upload releases, set royalty splits, and track every artist's earnings from one simple dashboard."
  },
  {
    question: "Q5. Is Amozart right for labels and artists in India?",
    answer:
      "Yes. As a dedicated music label for independent artists India, we cover regional platforms like JioSaavn and Wynk alongside every major international store — perfect for Indian and Punjabi artists releasing locally and globally."
  },
  {
    question: "Q6. What does the independent distributor music service include?",
    answer:
      "Global distribution to 150+ platforms, royalty splits, pre-save links, sync placement, a contract system, and dedicated label support — everything a growing independent label needs."
  }
];

const MusicFaqs = () => {
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

export default MusicFaqs;
