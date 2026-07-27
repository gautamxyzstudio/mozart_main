"use client";
import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const defaultFaqData: FaqItem[] = [
  {
    id: "panel1",
    question: "What is a music promotion service?",
    answer:
      "It promotes your music across streaming platforms, social media, blogs, and paid channels — helping independent artists reach more listeners and grow streams without a label's marketing team.",
  },
  {
    id: "panel2",
    question: "How do I promote music on Spotify and YouTube?",
    answer:
      "Spotify promotion starts with playlist pitching before your release date. YouTube promotion involves targeted ads and influencer outreach. Amozart handles both as part of every campaign.",
  },
  {
    id: "panel3",
    question: "How do I get more streams as an independent artist?",
    answer:
      "A combination of playlist pitching, paid ads, social media promotion, and organic engagement drives the most consistent stream growth. Our music promotion campaign for new artists covers all of these in one coordinated release campaign.",
  },
  {
    id: "panel4",
    question: "Do you promote music for Punjabi artists?",
    answer:
      "Yes. Our music promotion service for Punjabi artists targets the platforms and communities Punjabi music reaches — from India to the UK, Canada, and the global Punjabi diaspora.",
  },
  {
    id: "panel5",
    question: "What is the difference between paid and organic promotion?",
    answer:
      "Paid promotion drives immediate reach through targeted ads. Organic music promotion builds a genuine fanbase over time through playlist visibility and content engagement. The best results come from combining both.",
  },
  {
    id: "panel6",
    question: "Is your promotion service available in India?",
    answer:
      "Yes. Our paid music promotion service India covers Meta, YouTube, and Google ad campaigns alongside regional playlist pitching and social media promotion tailored to Indian audiences.",
  },
];

interface FaqsProps {
  faqData?: FaqItem[];
}

const Faqs: React.FC<FaqsProps> = ({ faqData = defaultFaqData }) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <section className="bg-foreground w-full flex flex-col relative">
      <span className="xl:text-[200px] xl:leading-51.5 md:text-[124px] md:leading-32.5 text-[70px] leading-19 text-background/10 font-bold xl:-mt-7.25 md:-mt-4.25 -mt-2.25">
        FAQ&apos;s
      </span>

      <div className="w-full pt-4 xl:pb-25 md:pb-16 pb-10 xl:px-25 md:px-13 px-6 flex flex-col xl:space-y-13 md:space-y-10 space-y-8">
        <h2 className="xl:text-[64px] xl:leading-18 md:text-[48px] md:leading-13.5 text-[32px] leading-9.5 font-bold text-background">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col gap-y-6.5 w-full">
          {faqData.map((faq, idx) => {
            const panelId = faq.id || `panel${idx}`;
            const isCurrentExpanded = expanded === panelId;

            return (
              <Accordion
                key={panelId}
                expanded={isCurrentExpanded}
                onChange={handleChange(panelId)}
                disableGutters
                elevation={0}
                sx={{
                  backgroundColor: isCurrentExpanded ? "#7632C5" : "#3D3D3D",
                  borderRadius: "24px !important",
                  color: "white",
                  "&:before": { display: "none" },
                  transition:
                    "background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  overflow: "hidden",
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <div
                      className={`
           w-9 h-9 md:w-11 md:h-11 
          rounded-full flex items-center justify-center transition-all duration-300 
          ${isCurrentExpanded ? "bg-background text-primary rotate-90 shadow-lg" : "bg-primary text-background"}
        `}
                    >
                      <ArrowForwardIcon className="text-[1.1rem] md:text-[1.4rem]" />
                    </div>
                  }
                  sx={{
                    padding: { xs: "8px 16px", md: "16px 28px" },
                    "& .MuiAccordionSummary-content": {
                      margin: { xs: "8px 0", md: "12px 0" },
                    },
                    "& .MuiAccordionSummary-expandIconWrapper": {
                      transition: "none",
                    },
                  }}
                >
                  <span
                    className={`
         text-base md:text-xl font-medium
        ${isCurrentExpanded ? "text-white" : "text-gray-100"}
      `}
                  >
                    {faq.question}
                  </span>
                </AccordionSummary>

                <AccordionDetails
                  sx={{
                    padding: { xs: "0 16px 20px 16px", md: "0 28px 28px 28px" },
                  }}
                >
                  <p
                    className={`
     text-sm md:text-base transition-colors duration-300 
        ${isCurrentExpanded ? "text-blue-50 border-white/20" : "text-gray-300 border-gray-500/30"}
      `}
                  >
                    {faq.answer}
                  </p>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
