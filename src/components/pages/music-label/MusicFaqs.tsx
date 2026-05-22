"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What Happens When YouTube Content ID Finds A Match?",
    answer:
      "When a match is found, a Content ID claim is automatically placed on the video. Depending on your preferences, this claim can either monetize the video (running ads and transferring revenue to you), track its viewership statistics, or block it entirely from being viewed. With AMozart, we default to monetization to maximize your music earnings.",
  },
  {
    question: "Do I Get A Copyright Strike With A Content ID Claim?",
    answer:
      "No. A Content ID claim is completely different from a copyright strike. A Content ID claim is an automated system match that simply allows you to manage or monetize your music in user-uploaded videos without affecting the uploader's channel health. A copyright strike only occurs through a formal, manual DMCA takedown request.",
  },
  {
    question: "Why Do Some User Videos Get Blocked While Others Are Monetized?",
    answer:
      "This is determined by the copyright owner's specific settings. While AMozart defaults to monetizing matched videos so you can earn royalties, you can choose to block videos in certain regions or globally. If another co-owner or rights holder of the song requests a block, YouTube will apply the block policy.",
  },
  {
    question: "Can Short Clips Or YouTube Shorts Be Claimed?",
    answer:
      "Yes. YouTube's advanced Content ID algorithm is capable of identifying audio matches as brief as just a few seconds. This ensures that even short clips, loops, and YouTube Shorts featuring your tracks are accurately detected, claimed, and monetized on your behalf.",
  },
  {
    question: "Will My Music Be Available On YouTube Music Automatically?",
    answer:
      "Yes. When you distribute your music with AMozart, we deliver your tracks to all major streaming stores including YouTube Music. This automatically creates official 'Art Tracks' on YouTube. The Content ID system runs separately to detect and monetize user-generated content using your music.",
  },
  {
    question: "What Content Is Not Eligible For Content ID Claims?",
    answer:
      "To be eligible for Content ID, you must own 100% of the exclusive rights to the audio. Ineligible content includes: non-exclusive beats or instrumentals (such as leased beats), public domain recordings, royalty-free loops, sound effects, copyright-free background music, and unauthorized remixes, mashups, or compilation albums.",
  },
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
                      isOpen
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
