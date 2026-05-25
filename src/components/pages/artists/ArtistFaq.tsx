"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What does an artist manager do?",
    answer:
      "An artist manager helps guide your music career, handles business decisions, and supports growth. Amozart helps make this process smooth.  ",
  },
  {
    question: "When should an artist hire a manager?",
    answer:
      "You should consider a manager when your music has traction, goals, and a plan for growth; Amozart steps in to elevate your career.  ",
  },
  {
    question: " How much do artist managers charge?",
    answer:
      "Most artist managers take a standard commission of earnings, and Amozart’s terms are always clear and fair.  ",
  },
  {
    question: "Can artists manage themselves? ",
    answer:
      "Yes, many artists self-manage early on, but Amozart can help you scale faster with expert support and industry guidance.",
  },
  {
    question: "What’s the difference between a manager and an agent?",
    answer:
      "A manager oversees your overall career; an agent focuses on booking shows. Amozart provides full management strategy.  ",
  },
  {
    question: "How do I find the right manager for my music?",
    answer:
      "Start by networking, asking for referrals, and checking experience; artists often choose Amozart for trusted industry expertise. ",
  },
];

const ArtistFaq = () => {
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

export default ArtistFaq;
