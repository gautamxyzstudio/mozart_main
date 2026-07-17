"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { Images, Icons } from "@/public/exports";

interface FeatureItem {
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  image: string | StaticImageData;
}

const features: FeatureItem[] = [
  {
    titlePrefix: "Point 01 — Global ",
    titleHighlight: "Platform Reach",
    description:
      "Your music reaches 150+ platforms worldwide through our global platform reach for labels — Spotify, Apple Music, JioSaavn, Wynk, Tidal, Amazon Music, and more. One submission, complete global availability.",
    image: Images.CircleArrow2,
  },
  {
    titlePrefix: "Point 02 — Transparent ",
    titleHighlight: "Royalty System",
    description:
      "Our transparent royalty system shows every rupee your music earns — real-time platform breakdowns, listener locations, and payment schedules — so you and your artists always know exactly what is coming in.",
    image: Images.Transparent,
  },
  {
    titlePrefix: "Point 03 — Full ",
    titleHighlight: "Rights Ownership",
    description:
      "Label distribution rights ownership is at the core of Amozart. You keep 100% of your master rights and publishing credits — always. We distribute your music without claiming any ownership of what you create.",
    image: Images.ReleaseSport,
  },
  {
    titlePrefix: "Point 04 — Manage ",
    titleHighlight: "Your Full Roster",
    description:
      "Our manage multiple artists label account lets you handle every artist, release, and royalty split from one simple dashboard — no spreadsheets, no confusion, everything in one place.",
    image: Images.ArtistFriendly,
  },
];

// Platform icons for the orbital display (first feature)
const orbitPlatforms = [
  {
    name: "Meta",
    glow: "rgba(24, 119, 242, 0.5)",
    bg: "#1877F2",
    border: "#1877F2",
    radius: 48,
    angle: 180,
    mobileRadius: 42,
    mobileAngle: 108,
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="89"
        height="89"
        viewBox="0 0 89 89"
        fill="none"
      >
        <g filter="url(#filter0_d_2523_56567)">
          <g clipPath="url(#clip0_2523_56567)">
            <path
              d="M59.3784 18.5447H28.7533C23.1154 18.5447 18.5449 23.1151 18.5449 28.7531V59.3782C18.5449 65.0161 23.1154 69.5866 28.7533 69.5866H59.3784C65.0164 69.5866 69.5868 65.0161 69.5868 59.3782V28.7531C69.5868 23.1151 65.0164 18.5447 59.3784 18.5447Z"
              fill="white"
            />
            <path
              d="M28.9782 48.2348C28.9782 49.7543 29.3122 50.9224 29.7482 51.6282C30.3198 52.5528 31.1729 52.9451 32.0421 52.9451C33.1635 52.9451 34.1887 52.6665 36.1661 49.9323C37.7498 47.7405 39.6164 44.6649 40.872 42.7356L42.9982 39.4676C44.4754 37.1985 46.1845 34.6757 48.1459 32.9666C49.7457 31.571 51.4723 30.7952 53.2106 30.7952C56.1271 30.7952 58.9066 32.4853 61.0328 35.6556C63.3602 39.1278 64.4904 43.5012 64.4904 48.0146C64.4904 50.6979 63.961 52.6695 63.0613 54.2269C62.1921 55.7333 60.4976 57.2383 57.6467 57.2383V52.9436C60.0878 52.9436 60.6959 50.7008 60.6959 48.1342C60.6959 44.4768 59.8428 40.4169 57.9646 37.5164C56.6317 35.4588 54.9036 34.2017 53.002 34.2017C50.9458 34.2017 49.2921 35.7519 47.4328 38.5168C46.4441 39.9853 45.4291 41.7761 44.2902 43.7958L43.0361 46.0182C40.5162 50.4864 39.8775 51.5028 38.619 53.1828C36.4111 56.1227 34.5255 57.2383 32.0435 57.2383C29.0993 57.2383 27.237 55.9637 26.0835 54.0417C25.14 52.477 24.6777 50.4222 24.6777 48.0802L28.9782 48.2348Z"
              fill="#0081FB"
            />
            <path
              d="M28.0664 35.9604C30.038 32.9214 32.8831 30.7966 36.1468 30.7966C38.0367 30.7966 39.915 31.3566 41.8764 32.9578C44.023 34.7092 46.3096 37.5922 49.1634 42.3463L50.1872 44.0525C52.6575 48.1677 54.0618 50.2837 54.8843 51.2826C55.9415 52.5645 56.6824 52.9465 57.6448 52.9465C60.086 52.9465 60.6941 50.7037 60.6941 48.1371L64.4871 48.0175C64.4871 50.7008 63.9577 52.6724 63.058 54.2298C62.1888 55.7362 60.4943 57.2412 57.6434 57.2412C55.8716 57.2412 54.301 56.8562 52.5656 55.2185C51.2313 53.9615 49.6709 51.7289 48.4707 49.7208L44.9009 43.7564C43.1101 40.7626 41.4666 38.5314 40.5143 37.5208C39.4906 36.4344 38.1767 35.1219 36.0768 35.1219C34.3779 35.1219 32.9356 36.3133 31.7282 38.1376L28.0664 35.9604Z"
              fill="url(#paint0_linear_2523_56567)"
            />
            <path
              d="M36.0786 35.119C34.3797 35.119 32.9375 36.3104 31.73 38.1347C30.0224 40.7115 28.9782 44.5483 28.9782 48.2348C28.9782 49.7543 29.3122 50.9224 29.7482 51.6283L26.0821 54.0432C25.14 52.477 24.6777 50.4222 24.6777 48.0802C24.6777 43.8235 25.8458 39.3859 28.0682 35.959C30.0399 32.9199 32.885 30.7952 36.1486 30.7952L36.0786 35.119Z"
              fill="url(#paint1_linear_2523_56567)"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_d_2523_56567"
            x="-0.000295639"
            y="-5.14984e-05"
            width="88.1315"
            height="88.1324"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="9.27261" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0.505882 0 0 0 0 0.984314 0 0 0 0.32 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_2523_56567"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_2523_56567"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_2523_56567"
            x1="33.306"
            y1="43.3322"
            x2="60.718"
            y2="44.7167"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#0064E1" />
            <stop offset="0.4" stop-color="#0064E1" />
            <stop offset="0.83" stop-color="#0073EE" />
            <stop offset="1" stop-color="#0082FB" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_2523_56567"
            x1="30.4129"
            y1="50.0397"
            x2="30.4129"
            y2="39.9334"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#0082FB" />
            <stop offset="1" stop-color="#0064E0" />
          </linearGradient>
          <clipPath id="clip0_2523_56567">
            <rect
              x="18.5449"
              y="18.5452"
              width="51.0419"
              height="51.0419"
              rx="25.5209"
              fill="white"
            />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    name: "Spotify",
    glow: "rgba(29, 185, 84, 0.5)",
    bg: "#1DB954",
    border: "#1DB954",
    radius: 48,
    angle: 60,
    mobileRadius: 42,
    mobileAngle: 36,
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="89"
        height="89"
        viewBox="0 0 89 89"
        fill="none"
      >
        <g filter="url(#filter0_d_2523_56554)">
          <rect
            x="18.5449"
            y="18.5452"
            width="51.0419"
            height="51.0419"
            rx="25.5209"
            fill="#1ED760"
          />
          <path
            d="M59.9456 41.4596C59.3937 41.4596 59.0541 41.3187 58.5766 41.037C51.0203 36.4313 37.5104 35.3259 28.7656 37.8184C28.3836 37.9268 27.906 38.1002 27.3966 38.1002C25.9957 38.1002 24.9238 36.984 24.9238 35.5427C24.9238 34.0688 25.8153 33.2344 26.7704 32.9526C30.5061 31.8364 34.6875 31.3054 39.2403 31.3054C46.9875 31.3054 55.1062 32.9526 61.0387 36.4855C61.8665 36.9731 62.4077 37.645 62.4077 38.9346C62.4077 40.4084 61.2403 41.4596 59.9456 41.4596ZM56.6557 49.7173C56.1038 49.7173 55.7324 49.4681 55.3503 49.2622C48.7174 45.2525 38.8264 43.6378 30.0285 46.0761C29.5191 46.217 29.2432 46.3579 28.7656 46.3579C27.6301 46.3579 26.7068 45.4151 26.7068 44.2555C26.7068 43.096 27.2586 42.3266 28.3517 42.0123C31.302 41.167 34.316 40.5385 38.7309 40.5385C45.6185 40.5385 52.2726 42.2832 57.5153 45.4693C58.3749 45.9894 58.7145 46.6613 58.7145 47.6041C58.7039 48.7745 57.8124 49.7173 56.6557 49.7173ZM53.8009 56.8264C53.3551 56.8264 53.0792 56.6855 52.6653 56.4362C46.043 52.3616 38.3382 52.1882 30.729 53.7812C30.3151 53.8896 29.7738 54.063 29.466 54.063C28.4366 54.063 27.7892 53.2285 27.7892 52.3507C27.7892 51.2345 28.4366 50.7035 29.2326 50.5301C37.9243 48.5686 46.8071 48.742 54.3846 53.3694C55.0319 53.792 55.414 54.1713 55.414 55.1575C55.414 56.1436 54.6605 56.8264 53.8009 56.8264Z"
            fill="#111111"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_2523_56554"
            x="-0.000295639"
            y="-5.14984e-05"
            width="88.1315"
            height="88.1324"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="9.27261" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.117647 0 0 0 0 0.843137 0 0 0 0 0.376471 0 0 0 0.32 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_2523_56554"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_2523_56554"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    ),
  },
  {
    name: "YouTube Music",
    glow: "rgba(255, 0, 0, 0.6)",
    bg: "#FF0000",
    border: "#FFFFFF",
    radius: 48,
    angle: 140,
    mobileRadius: 42,
    mobileAngle: 324,
    svg: (
      <svg viewBox="0 0 24 24" className="w-[55%] h-[55%] fill-white">
        <circle
          cx="12"
          cy="12"
          r="10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M10 8.5v7l6-3.5-6-3.5z" />
      </svg>
    ),
  },
  {
    name: "Apple Music",
    glow: "rgba(252, 60, 68, 0.5)",
    bg: "#FC3C44",
    border: "#FC3C44",
    radius: 48,
    angle: 270,
    mobileRadius: 42,
    mobileAngle: 252,
    svg: (
      <svg viewBox="0 0 24 24" className="w-[55%] h-[55%] fill-white">
        <path d="M19 3H9c-1.1 0-2 .9-2 2v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V8h8v4.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V3z" />
      </svg>
    ),
  },
  {
    name: "Tidal",
    glow: "rgba(255, 255, 255, 0.6)",
    bg: "#FFFFFF",
    border: "#FFFFFF",
    radius: 40,
    angle: 90,
    mobileRadius: 34,
    mobileAngle: 180,
    svg: (
      <svg viewBox="0 0 24 24" className="w-[55%] h-[55%] fill-[#111]">
        <path d="M14.5 10L12 12.5L9.5 10L12 7.5L14.5 10Z" />
        <path d="M14.5 14.5L12 17L9.5 14.5L12 12L14.5 14.5Z" />
        <path d="M10 10L7.5 12.5L5 10L7.5 7.5L10 10Z" />
        <path d="M19 10L16.5 12.5L14 10L16.5 7.5L19 10Z" />
      </svg>
    ),
  },
  {
    name: "JioSaavn",
    glow: "rgba(226, 240, 23, 0.5)",
    bg: "#E2F017",
    border: "#E2F017",
    radius: 40,
    angle: 210,
    mobileRadius: 34,
    mobileAngle: 72,
    svg: (
      <svg viewBox="0 0 24 24" className="w-[55%] h-[55%] fill-black">
        <path d="M19.5 9.5C19.5 5.5 16 2.5 12 2.5S4.5 5.5 4.5 9.5c0 3.2 2 6 5 6.7v-2.1c-1.8-.6-3-2.3-3-4.6 0-2.8 2.5-5 5.5-5s5.5 2.2 5.5 5c0 2.3-1.2 4-3 4.6v2.1c3-.7 5-3.5 5-6.7z" />
        <circle cx="12" cy="9.5" r="2" />
      </svg>
    ),
  },
  {
    name: "Wynk",
    glow: "rgba(225, 48, 108, 0.5)",
    bg: "#E1306C",
    border: "#E1306C",
    radius: 40,
    angle: 330,
    mobileRadius: 34,
    mobileAngle: 288,
    svg: (
      <svg viewBox="0 0 24 24" className="w-[55%] h-[55%] fill-white">
        <circle
          cx="12"
          cy="12"
          r="9"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M12 6v8.5a2.5 2.5 0 1 1-2-2.5h2V7.5L16 6.5v3.5l-4 1" />
      </svg>
    ),
  },
  {
    name: "Deezer",
    glow: "rgba(0, 210, 196, 0.5)",
    bg: "#00D2C4",
    border: "#00D2C4",
    radius: 34,
    angle: 10,
    mobileRadius: 26,
    mobileAngle: 144,
    svg: (
      <svg viewBox="0 0 24 24" className="w-[60%] h-[60%] fill-white">
        <path d="M12 3a1 1 0 0 1 1 1v12.27a3.5 3.5 0 1 1-2 0V4a1 1 0 0 1 1-1z" />
        <path d="M12 8.5c1.5-1.5 3.5-2.5 5.5-2.5a1 1 0 0 1 1 1v2c0 .55-.45 1-1 1-1.5 0-3 1-4 2v-3.5z" />
      </svg>
    ),
  },
  {
    name: "Purple Heart",
    glow: "rgba(224, 64, 251, 0.5)",
    bg: "#10091c",
    border: "#E040FB",
    radius: 34,
    angle: 300,
    mobileRadius: 26,
    mobileAngle: 0,
    svg: (
      <svg
        viewBox="0 0 24 24"
        className="w-[60%] h-[60%] stroke-[#E040FB] stroke-[2.5] fill-none"
        strokeLinecap="round"
      >
        <line x1="12" y1="6" x2="12" y2="18" />
        <line x1="9.5" y1="8" x2="9.5" y2="16" />
        <line x1="14.5" y1="8" x2="14.5" y2="16" />
        <line x1="7" y1="10" x2="7" y2="14" />
        <line x1="17" y1="10" x2="17" y2="14" />
      </svg>
    ),
  },
];

const MusicCareer = () => {
  return (
    <section className="w-full bg-black py-20 md:py-28 xl:py-36 overflow-hidden relative">
      {/* Subtle animated background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-150 h-150 bg-[#6739b7]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-100 h-100 bg-[#9b4dff]/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-1xl    relative z-10">
        {/* Section Header */}
        <div className=" mb-20 md:mb-28 xl:mb-36 px-6 md:px-12 xl:px-20">
          <h2 className="text-3xl md:text-4xl xl:text-[46px] font-bold text-white leading-tight xl:leading-[1.2] max-w-3xl ">
            Why Amozart Is the Best Distribution for Record Labels in India
          </h2>
          <p className="mt-5 md:mt-7 text-[#9ca3af] text-sm md:text-base xl:text-base max-w-2xl  leading-relaxed font-light">
            Partnering with Amozart Label gives independent artists the tools, support, and opportunities needed to release music confidently and reach a global audience.
          </p>
        </div>

        {/* Feature Blocks */}
        <div className="flex flex-col gap-12 md:gap-13 xl:gap-26.25 px-6 md:px-12 xl:px-20  ">
          {features.map((feature, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center gap-12 md:gap-16 xl:gap-20 group`}
              >
                {/* Image Side */}

                {/* Text Side */}
                <div className="w-full md:w-1/2 flex flex-col">
                  <h3 className="text-2xl md:text-3xl xl:text-[40px] font-bold text-white leading-snug xl:leading-tight mb-5">
                    {feature.titlePrefix}
                    <span className="text-primary bg-clip-text ">
                      {feature.titleHighlight}
                    </span>
                  </h3>
                  <p className="text-[#9ca3af] text-sm md:text-[15px] xl:text-base leading-[1.8] max-w-[480px]">
                    {feature.description}
                  </p>
                </div>

                <div className="w-full md:w-1/2 flex justify-center relative">
                  {/* Glow behind image */}
                  <div
                    className={`absolute inset-0 ${isEven ? "left-50" : "right-40"
                      } bg-[#6739b7]/60 rounded-full blur-[80px] scale-75 group-hover:scale-90 transition-transform duration-700 pointer-events-none`}
                  />

                  {idx === 0 ? (
                    /* ======= ORBITAL VINYL WITH PLATFORM ICONS ======= */
                    <div className="relative z-10 w-full max-w-105 xl:max-w-120 aspect-square flex items-center justify-center select-none">
                      {/* Concentric orbit track rings */}
                      <svg
                        viewBox="0 0 100 100"
                        className="absolute inset-0 w-full h-full pointer-events-none opacity-20 z-0 overflow-visible"
                      >
                        <circle
                          cx="50"
                          cy="50"
                          r="34"
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="0.3"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="0.3"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="48"
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="0.3"
                        />
                      </svg>

                      {/* Rotating Vinyl Record */}
                      <div
                        className="absolute w-[55%] h-[55%] rounded-full overflow-hidden z-10 animate-rotate360"
                        style={{ animationDuration: "30s" }}
                      >
                        <Image
                          src={feature.image}
                          alt="Rotating vinyl record"
                          width={480}
                          height={480}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Mozart Center Logo */}
                      <div className="absolute z-20 w-[42px] h-[42px] md:w-[48px] md:h-[48px] rounded-full bg-primary flex items-center justify-center  pointer-events-none">
                        <Image
                          src={Icons.MozartIcon}
                          alt="Mozart Brand Logo"
                          className="w-[50%] h-[50%] brightness-0 invert"
                        />
                      </div>

                      {/* Orbiting Platform Icons */}
                      {orbitPlatforms.map((platform, pIdx) => {
                        const angleRad = (platform.angle * Math.PI) / 180;
                        const leftVal =
                          50 + platform.radius * Math.cos(angleRad);
                        const topVal =
                          50 - platform.radius * Math.sin(angleRad);

                        return (
                          <div
                            key={pIdx}
                            className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                            style={{
                              left: `${leftVal}%`,
                              top: `${topVal}%`,
                            }}
                          >
                            <div
                              className="animate-float-bob"
                              style={{
                                animationDelay: `${pIdx * 0.3}s`,
                                animationDuration: `${6 + (pIdx % 3) * 1.5}s`,
                              }}
                            >
                              <div
                                className="w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 hover:scale-120 border"
                                style={{
                                  backgroundColor: platform.bg,
                                  borderColor: platform.border,
                                  boxShadow: `0 0 18px ${platform.glow}`,
                                }}
                              >
                                {platform.svg}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    /* ======= NORMAL IMAGE FOR OTHER FEATURES ======= */
                    <div className="relative z-10 w-full max-w-105 xl:max-w-[480px]">
                      <Image
                        src={feature.image}
                        alt={feature.titlePrefix + feature.titleHighlight}
                        width={480}
                        height={480}
                        className="w-full h-auto object-contain drop-shadow-2xl group-hover:scale-[1.03] transition-transform duration-500"
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MusicCareer;
