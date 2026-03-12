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
    question: "What Does The Mozart Do?",
    answer:
      "The Mozart is a specialized platform helping artists with music distribution, YouTube management, and global growth strategies.",
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
    <div className="bg-[#0F1012] relative ">
      <h1 className=" xl:text-[200px] md:text-[124px] text-[70px]  font-bold text-white/20  leading-none">
        FAQ&apos;s
      </h1>

      <div className="max-w-8xl relative z-10 py-4 xl:px-20 md:px-15 px-4">
        <h2 className="xl:text[64px] md:text-[48px] text-[32px] md:text-6xl font-bold text-white xl:mb-16 md:mb-12 mb-6 ">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col gap-4">
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
                  marginBottom: "12px",
                  border: isCurrentExpanded
                    ? "1px solid #7C66E3"
                    : "1px solid #111",
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
          ${isCurrentExpanded ? "bg-white text-primary rotate-90 shadow-lg" : "bg-primary text-white"}
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
         leading-relaxed text-sm md:text-base transition-colors duration-300 
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
    </div>
  );
};

export default Faqs;
