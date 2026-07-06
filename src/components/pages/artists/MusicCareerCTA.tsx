import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Images } from "@/public/exports";

const MusicCareerCTA = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20">
        {/* Banner Container */}
        <div className="relative w-full min-h-125 xl:min-h-130 md:min-h-75 flex flex-col md:flex-row items-center md:my-10 overflow-hidden md:overflow-visible rounded-[32px] md:rounded-[32px] bg-[#6c42c7]">
          {/* Background Color & Shape Container */}
          <div className="absolute inset-0 overflow-hidden rounded-[32px] pointer-events-none">
            <div className="absolute top-0 left-0 md:-left-0 xl:-left-10 opacity-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="
        w-90 h-49
        md:w-100 md:h-46
        xl:w-180 xl:h-82.5
      "
                viewBox="0 0 738 388"
                fill="none"
              >
                <path
                  d="M-98.778 -130.399L39.8304 -302.116C42.1814 -304.998 44.8781 -307.614 48.0385 -309.64C58.1372 -316.061 69.1284 -317.098 79.1305 -313.046C88.299 -309.34 95.1043 -301.346 98.5105 -292.061L223.027 48.0833C232.938 75.1626 268.628 81.128 286.828 58.6622L452.589 -146.084L452.803 -146.363L469.795 -167.363C504.075 -202.797 554.697 -221.509 607.468 -212.671C688.081 -199.167 744.996 -124.102 736.274 -42.8347C727.143 42.2497 651.538 103.199 567.649 95.5478C565.431 95.3536 563.219 95.116 561 94.819C519.881 89.315 484.677 68.2215 460.572 38.2743C442.539 15.8859 408.337 16.1182 390.24 38.4659L119.211 373.254C115.066 378.36 109.657 382.285 103.584 384.596C100.542 385.743 97.8016 386.711 96.9745 386.864C82.1086 389.347 65.6141 377.812 59.9057 364.362L-104.025 -91.8562C-105.177 -95.1929 -106.103 -98.5727 -106.682 -101.921C-108.407 -112.036 -105.216 -122.403 -98.778 -130.399Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          {/* Left Content */}
          <div className="relative z-10 w-full md:w-[70%] px-6 pt-12 md:p-10 xl:p-10 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-4xl md:text-[26px] lg:text-[58px] font-bold text-white  mb-5 leading-tight">
              Ready to Take <br /> Your Music Global?
            </h2>

            <p className="text-white/90 text-[13px] md:text-sm font-medium leading-relaxed mb-8 max-w-[280px] md:max-w-[420px] mx-auto md:mx-0 font-light">
              Join hundreds of independent and Punjabi artists already growing their careers with Amozart.
            </p>

            <Link
              href="/apply"
              className="inline-flex items-center justify-center px-15 py-3 rounded-full bg-white text-[#6c42c7] font-bold text-[15px] hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md"
            >
              Start Managing My Career
            </Link>
          </div>

          <div className="relative w-full md:absolute right-0 md:-right-4 top-auto md:top-1/2 md:-translate-y-1/2  md:w-[47%] lg:w-[52%] h-[320px] md:h-[130%] z-20 pointer-events-none mt-20 md:mt-0 flex justify-center -mb-4 md:mb-0 -ml-[5%] md:ml-0">
            <Image
              src={Images.GoodThing}
              alt="Piano Keyboard"
              fill
              className="object-contain object-bottom md:object-right transform md:transform-none -rotate-90 md:rotate-0 scale-120 md:scale-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicCareerCTA;
