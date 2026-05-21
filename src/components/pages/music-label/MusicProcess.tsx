import React from 'react';

interface ProcessStep {
  id: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    id: "01",
    titlePrefix: "Music ",
    titleHighlight: "Submission",
    description: "Upload your track with artwork and details, letting the team evaluate your song quickly and accurately for the next steps."
  },
  {
    id: "02",
    titlePrefix: "Quality Check ",
    titleHighlight: "& Approval",
    description: "Your music goes through a proper review to ensure rights, originality, and platform readiness before it moves toward release."
  },
  {
    id: "03",
    titlePrefix: "Global Release ",
    titleHighlight: "& Royalty Growth",
    description: "Your song reaches major music platforms worldwide, helping you expand your audience and begin earning consistent royalties."
  }
];

export default function MusicProcess() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl xl:text-[64px] font-medium text-center text-gray-900 mb-12 tracking-tight">
      Your Music Journey Process 
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative bg-white rounded-2xl p-8 shadow-[0_0_24px_rgba(17,17,17,0.16)] border border-gray-100/50 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1"
            >
              <div>
                {/* Background Step Number */}
                <div className="relative mb-6 select-none">
                  <span className="text-purple-600/10 text-7xl font-extrabold tracking-tighter block leading-none">
                    {step.id}
                  </span>
                  <span className="absolute left-0 bottom-11 text-base font-bold text-primary tracking-wider uppercase">
                    Step
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-snug">
                  {step.titlePrefix}
                  <span className="text-primary">{step.titleHighlight}</span>
                </h3>

                {/* Step Description */}
                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}