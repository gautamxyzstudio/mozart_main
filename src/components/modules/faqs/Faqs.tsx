"use client";
import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: "panel1",
    question: "What Does The AMozart Do?",
    answer:
      "The AMozart is a specialized platform helping artists with music distribution, YouTube management, and global growth strategies.",
  },
  {
    id: "panel2",
    question: "Which Platforms Can I Distribute My Music To?",
    answer:
      "We distribute to all major platforms including Spotify, Apple Music, YouTube Music, Amazon, and 150+ other digital stores.",
  },
  {
    id: "panel3",
    question: "How Can I Monitor The Success Of My Music After Distribution?",
    answer:
      "You get a dedicated dashboard with real-time analytics, daily stream counts, and detailed revenue reports.",
  },
  {
    id: "panel4",
    question: "Do You Help With Branding And Visuals?",
    answer:
      "Yes, our creative team helps with cover art design, social media kits, and overall artist branding to ensure a professional look.",
  },
  {
    id: "panel5",
    question: "What Is Your Pricing Structure?",
    answer:
      "We have flexible plans ranging from per-release pricing to yearly subscriptions depending on your needs.",
  },
];

const Faqs = () => {
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
          {faqData.map((faq) => {
            const isCurrentExpanded = expanded === faq.id;

            return (
              <Accordion
                key={faq.id}
                expanded={isCurrentExpanded}
                onChange={handleChange(faq.id)}
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
