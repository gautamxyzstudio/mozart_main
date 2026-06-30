import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Images, Icons } from "@/public/exports";

const MusicDistribution = () => {
  const bottomOffset = -7; // offset below container for a gentle premium curve

  const platforms = [
    // Outer track (Track 4): R = 47% (desktop radius: 47)
    {
      name: "Meta",
      glow: "rgba(24, 119, 242, 0.5)",
      bg: "#1877F2",
      border: "#1877F2",
      radius: 40,
      angle: 20,
      mobileRadius: 40,
      mobileAngle: 108,
      svg: (
        <svg viewBox="0 0 24 24" className="w-[55%] h-[55%] fill-white">
          <path d="M16.5 6C14.62 6 13.06 7.03 12 8.5C10.94 7.03 9.38 6 7.5 6C4.46 6 2 8.46 2 11.5C2 14.54 4.46 17 7.5 17C9.38 17 10.94 15.97 12 14.5C13.06 15.97 14.62 17 16.5 17C19.54 17 22 14.54 22 11.5C22 8.46 19.54 6 16.5 6ZM7.5 15C5.57 15 4 13.43 4 11.5C4 9.57 5.57 8 7.5 8C8.91 8 10.13 8.85 10.72 10.12C10.9 10.5 11 11 11 11.5C11 12 10.9 12.5 10.72 12.88C10.13 14.15 8.91 15 7.5 15ZM16.5 15C15.09 15 13.87 14.15 13.28 12.88C13.1 12.5 13 12 13 11.5C13 11 13.1 10.5 13.28 10.12C13.87 8.85 15.09 8 16.5 8C18.43 8 20 9.57 20 11.5C20 13.43 18.43 15 16.5 15Z" />
        </svg>
      ),
    },
    {
      name: "Wynk Red",
      glow: "rgba(230, 0, 83, 0.5)",
      bg: "#E60053",
      border: "#E60053",
      radius: 40,
      angle: 160,
      mobileRadius: 40,
      mobileAngle: 36,
      svg: (
        <svg viewBox="0 0 24 24" className="w-[60%] h-[60%] fill-white">
          <circle
            cx="12"
            cy="12"
            r="10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle
            cx="12"
            cy="12"
            r="6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M12 8v5a2 2 0 1 1-2-2h2" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: "Purple Heart",
      glow: "rgba(224, 64, 251, 0.5)",
      bg: "#10091c",
      border: "#E040FB",
      radius: 40,
      angle: 95,
      mobileRadius: 40,
      mobileAngle: 252,
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
          <line x1="4.5" y1="12" x2="4.5" y2="13" />
          <line x1="19.5" y1="12" x2="19.5" y2="13" />
        </svg>
      ),
    },

    // Track 3: R = 40%
    {
      name: "Spotify",
      glow: "rgba(29, 185, 84, 0.5)",
      bg: "#1DB954",
      border: "#1DB954",
      radius: 40,
      angle: 130,
      mobileRadius: 40,
      mobileAngle: 324,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="124"
          height="124"
          viewBox="0 0 124 124"
          fill="none"
        >
          <g filter="url(#filter0_d_2711_7813)">
            <rect x="32" y="32" width="60" height="60" rx="30" fill="#1ED760" />
            <path
              d="M80.6683 58.9364C80.0195 58.9364 79.6203 58.7708 79.0589 58.4396C70.1766 53.0255 54.2956 51.7262 44.016 54.6561C43.5669 54.7835 43.0055 54.9873 42.4067 54.9873C40.76 54.9873 39.5 53.6752 39.5 51.981C39.5 50.2485 40.5479 49.2676 41.6707 48.9364C46.062 47.6243 50.9772 47.0001 56.3291 47.0001C65.436 47.0001 74.9795 48.9364 81.9532 53.0892C82.9263 53.6625 83.5625 54.4523 83.5625 55.9682C83.5625 57.7007 82.1902 58.9364 80.6683 58.9364ZM76.8009 68.6434C76.1522 68.6434 75.7156 68.3504 75.2665 68.1083C67.4695 63.395 55.8425 61.4969 45.5006 64.3631C44.9018 64.5287 44.5774 64.6943 44.016 64.6943C42.6812 64.6943 41.5958 63.586 41.5958 62.223C41.5958 60.8599 42.2446 59.9555 43.5295 59.586C46.9976 58.5924 50.5406 57.8536 55.7303 57.8536C63.8267 57.8536 71.6487 59.9045 77.8114 63.6497C78.8219 64.2612 79.2211 65.051 79.2211 66.1593C79.2087 67.5351 78.1607 68.6434 76.8009 68.6434ZM73.4451 77.0001C72.9211 77.0001 72.5968 76.8345 72.1102 76.5415C64.3257 71.7517 55.2687 71.5478 46.324 73.4204C45.8374 73.5478 45.2012 73.7517 44.8394 73.7517C43.6293 73.7517 42.8683 72.7708 42.8683 71.7389C42.8683 70.4268 43.6293 69.8026 44.5649 69.5988C54.7822 67.2931 65.2239 67.4969 74.1312 72.9364C74.8922 73.4332 75.3413 73.879 75.3413 75.0383C75.3413 76.1975 74.4556 77.0001 73.4451 77.0001Z"
              fill="#111111"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_2711_7813"
              x="0"
              y="0"
              width="124"
              height="124"
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
              <feGaussianBlur stdDeviation="16" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.117647 0 0 0 0 0.843137 0 0 0 0 0.376471 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_2711_7813"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_2711_7813"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      ),
    },
    {
      name: "Tidal",
      glow: "rgba(255, 255, 255, 0.6)",
      bg: "#FFFFFF",
      border: "#FFFFFF",
      radius: 40,
      angle: 60,
      mobileRadius: 40,
      mobileAngle: 180,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="124"
          height="124"
          viewBox="0 0 124 124"
          fill="none"
        >
          <g filter="url(#filter0_d_2711_7820)">
            <g clipPath="url(#clip0_2711_7820)">
              <path
                d="M80 32H44C37.3726 32 32 37.3726 32 44V80C32 86.6274 37.3726 92 44 92H80C86.6274 92 92 86.6274 92 80V44C92 37.3726 86.6274 32 80 32Z"
                fill="white"
              />
              <path
                d="M67.6051 57.4003L61.4047 63.6019L55.2031 57.4003L61.4047 51.2023L67.6051 57.4003Z"
                fill="#111111"
              />
              <path
                d="M67.6051 69.8047L61.4047 76.0051L55.2031 69.8047L61.4107 63.6031L67.6051 69.8047Z"
                fill="#111111"
              />
              <path
                d="M55.1989 57.4039L48.9973 63.6019L42.7969 57.4039L48.9973 51.2L55.1989 57.4039Z"
                fill="#111111"
              />
              <path
                d="M80.0114 57.4039L73.8134 63.6019L67.6094 57.4039L73.8134 51.2L80.0114 57.4039Z"
                fill="#111111"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d_2711_7820"
              x="0"
              y="0"
              width="124"
              height="124"
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
              <feGaussianBlur stdDeviation="16" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_2711_7820"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_2711_7820"
                result="shape"
              />
            </filter>
            <clipPath id="clip0_2711_7820">
              <rect x="32" y="32" width="60" height="60" rx="30" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },

    // Track 2: R = 32%
    {
      name: "Wynk Pink",
      glow: "rgba(225, 48, 108, 0.5)",
      bg: "#E1306C",
      border: "#E1306C",
      radius: 33,
      angle: 145,
      mobileRadius: 32,
      mobileAngle: 0,
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
      name: "YouTube Music",
      glow: "rgba(255, 0, 0, 0.6)",
      bg: "#FF0000",
      border: "#FF0000",
      radius: 33,
      angle: 110,
      mobileRadius: 32,
      mobileAngle: 288,
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
      radius: 33,
      angle: 40,
      mobileRadius: 32,
      mobileAngle: 216,
      svg: (
        <svg viewBox="0 0 24 24" className="w-[55%] h-[55%] fill-white">
          <path d="M19 3H9c-1.1 0-2 .9-2 2v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V8h8v4.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V3z" />
        </svg>
      ),
    },

    // Track 1: R = 24%
    {
      name: "JioSaavn Yellow",
      glow: "rgba(226, 240, 23, 0.5)",
      bg: "#E2F017",
      border: "#E2F017",
      radius: 26,
      angle: 80,
      mobileRadius: 32,
      mobileAngle: 144,
      svg: (
        <svg viewBox="0 0 24 24" className="w-[55%] h-[55%] fill-black">
          <path d="M19.5 9.5C19.5 5.5 16 2.5 12 2.5S4.5 5.5 4.5 9.5c0 3.2 2 6 5 6.7v-2.1c-1.8-.6-3-2.3-3-4.6 0-2.8 2.5-5 5.5-5s5.5 2.2 5.5 5c0 2.3-1.2 4-3 4.6v2.1c3-.7 5-3.5 5-6.7z" />
          <circle cx="12" cy="9.5" r="2" />
        </svg>
      ),
    },
    {
      name: "JioSaavn Floral",
      glow: "rgba(0, 210, 196, 0.5)",
      bg: "#00D2C4",
      border: "#00D2C4",
      radius: 26,
      angle: 30,
      mobileRadius: 32,
      mobileAngle: 72,
      svg: (
        <svg viewBox="0 0 24 24" className="w-[60%] h-[60%] fill-white">
          <path d="M12 3a1 1 0 0 1 1 1v12.27a3.5 3.5 0 1 1-2 0V4a1 1 0 0 1 1-1z" />
          <path d="M12 8.5c1.5-1.5 3.5-2.5 5.5-2.5a1 1 0 0 1 1 1v2c0 .55-.45 1-1 1-1.5 0-3 1-4 2v-3.5z" />
          <path d="M12 8.5c-1.5-1.5-3.5-2.5-5.5-2.5a1 1 0 0 0-1 1v2c0 .55.45 1 1 1 1.5 0 3 1 4 2v-3.5z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-[#06030b] text-white w-full flex flex-col overflow-hidden relative pt-20 md:pt-40">
      {/* Decorative dark purple vector loops in background for mobile */}
      {/* Top Left Loop */}
      <div className="absolute top-[8%] left-[-30px] opacity-35 md:hidden z-0 pointer-events-none">
        <svg
          width="140"
          height="120"
          viewBox="0 0 140 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-40 20C-40 20 20 -20 60 10C100 40 120 90 80 110C40 130 -10 90 -30 60C-50 30 -40 20 -40 20Z"
            stroke="#4a154b"
            strokeWidth="6"
            fill="none"
          />
        </svg>
      </div>

      {/* Top Right Loop */}
      <div className="absolute top-[5%] right-[-40px] opacity-35 md:hidden z-0 pointer-events-none">
        <svg
          width="160"
          height="150"
          viewBox="0 0 160 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M180 10C180 10 110 -10 70 20C30 50 20 110 60 130C100 150 150 120 170 80C190 40 180 10 180 10Z"
            stroke="#4a154b"
            strokeWidth="6"
            fill="none"
          />
        </svg>
      </div>

      {/* Middle Right Loop */}
      <div className="absolute top-[35%] right-[-50px] opacity-25 md:hidden z-0 pointer-events-none">
        <svg
          width="150"
          height="150"
          viewBox="0 0 150 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M190 50C190 50 120 20 80 60C40 100 40 160 90 180C140 200 180 160 190 110C200 60 190 50 190 50Z"
            stroke="#311b92"
            strokeWidth="5"
            fill="none"
          />
        </svg>
      </div>

      {/* Semicircle Curved glowing vectors on the sides (for desktop) */}
      <div className="hidden md:block">
        {/* Left side abstract glowing vector */}
        <svg
          className="absolute left-[-20px] md:left-[-10px] top-[15%] w-[120px] md:w-[280px] h-[250px] md:h-[500px] text-primary/10 pointer-events-none opacity-40"
          xmlns="http://www.w3.org/2000/svg"
          width="206"
          height="344"
          viewBox="0 0 206 344"
          fill="none"
        >
          <path
            opacity="0.3"
            d="M-114.3 343.679C-112.379 342.335 -110.451 340.984 -108.518 339.628C-91.1569 327.436 -73.1996 314.835 -54.1327 307.5L-54.0743 307.477C-22.633 295.186 14.1283 297.816 49.4356 314.894L49.6575 314.999C51.6547 315.917 53.6577 316.846 55.6549 317.775C68.8645 323.918 82.5295 330.271 97.6136 333.649C113.048 337.139 130.112 337.735 145.634 335.327C164.181 332.445 179.855 325.397 190.962 314.941L191.132 314.777C203.956 302.211 208.61 285.811 204.604 267.347C201.614 253.583 193.765 239.217 182.489 226.885C166.908 209.508 146.744 195.551 124.167 186.521C101.824 177.585 77.6066 173.657 54.1366 175.153C40.4949 175.896 27.4488 178.245 17.603 180.209C14.6831 180.782 11.6639 181.401 8.74405 182.003C-9.03221 185.656 -27.4158 189.438 -43.7905 186.194L-44.0475 186.147C-53.2217 184.534 -62.0631 179.098 -66.0459 172.617C-68.4109 168.765 -68.9482 164.814 -67.681 160.553C-65.7422 154.738 -59.8557 150.845 -56.5095 149.045L-56.2292 148.893C-48.0068 144.177 -36.3506 142.061 -24.0054 139.816C-12.285 137.689 -0.16745 135.491 10.6595 130.722C24.3713 124.685 33.4988 115.631 38.5619 103.036L38.7663 102.486C44.6294 85.5603 39.9342 65.9747 25.5334 47.3419C7.85057 24.2613 -17.2312 10.9471 -41.694 0L-51.464 21.8766C-29.8744 31.5379 -7.90511 43.0811 6.56584 61.9653C10.8931 67.5703 20.3885 81.808 16.2423 94.3682C10.4726 108.273 -4.45383 111.914 -28.2684 116.239C-42.0152 118.735 -56.2234 121.312 -67.9964 128.028C-79.1912 134.1 -87.1683 143.06 -90.4795 153.265L-90.5437 153.475C-93.8665 164.411 -92.4474 175.37 -86.4325 185.165C-78.87 197.486 -64.2647 206.896 -48.3046 209.73C-27.2348 213.874 -6.48605 209.608 13.5736 205.481C16.5694 204.868 19.4016 204.283 22.2514 203.722C31.3673 201.899 43.3447 199.736 55.4914 199.081H55.614C96.3289 196.451 138.13 213.261 164.713 242.934L164.8 243.028C173.157 252.157 179.143 262.876 181.216 272.432C183.441 282.672 181.233 290.896 174.471 297.57C157.389 313.561 125.405 315.367 102.869 310.271C90.2789 307.448 78.3599 301.907 65.7402 296.045C63.7371 295.115 61.74 294.186 59.7369 293.268C18.4147 273.315 -25.0857 270.427 -62.7581 285.15C-84.5579 293.543 -103.73 307.004 -122.271 320.02C-124.187 321.364 -126.09 322.702 -128 324.035L-114.306 343.691L-114.3 343.679Z"
            fill="#7632C5"
          />
        </svg>

        {/* Right side abstract glowing vector */}
        <svg
          className="absolute right-[-20px] md:right-[-40px] top-[10%] w-[140px] md:w-[320px] h-[250px] md:h-[500px] text-primary/10 pointer-events-none opacity-40"
          xmlns="http://www.w3.org/2000/svg"
          width="224"
          height="310"
          viewBox="0 0 224 310"
          fill="none"
        >
          <path
            opacity="0.3"
            d="M288.653 0.0105286C286.922 1.22198 285.185 2.43872 283.443 3.66071C267.797 14.6481 251.614 26.0042 234.431 32.6146L234.378 32.6356C206.044 43.7126 172.914 41.3423 141.096 25.9515L140.896 25.8567C139.096 25.0298 137.29 24.1923 135.491 23.3548C123.586 17.819 111.271 12.0935 97.6775 9.04904C83.768 5.90451 68.3901 5.36728 54.4017 7.53735C37.687 10.1341 23.5617 16.4864 13.5519 25.9094L13.3993 26.0569C1.8422 37.3814 -2.35223 52.1612 1.25804 68.8003C3.95259 81.2046 11.0258 94.1514 21.1882 105.265C35.2293 120.925 53.4017 133.503 73.7477 141.641C93.8831 149.694 115.708 153.234 136.859 151.885C149.153 151.216 160.91 149.099 169.783 147.329C172.414 146.813 175.135 146.255 177.767 145.712C193.786 142.42 210.354 139.012 225.111 141.936L225.342 141.978C233.61 143.431 241.578 148.33 245.167 154.171C247.298 157.642 247.783 161.203 246.641 165.043C244.893 170.284 239.589 173.792 236.573 175.414L236.32 175.551C228.91 179.801 218.406 181.708 207.28 183.731C196.718 185.648 185.798 187.629 176.04 191.927C163.683 197.368 155.458 205.527 150.895 216.877L150.711 217.373C145.427 232.626 149.658 250.277 162.636 267.069C178.572 287.869 201.175 299.868 223.221 309.733L232.026 290.018C212.569 281.311 192.771 270.908 179.73 253.89C175.83 248.839 167.273 236.008 171.009 224.689C176.209 212.158 189.66 208.877 211.122 204.979C223.511 202.73 236.315 200.407 246.925 194.355C257.014 188.882 264.203 180.808 267.187 171.611L267.244 171.421C270.239 161.566 268.96 151.69 263.539 142.863C256.724 131.759 243.562 123.279 229.179 120.724C210.191 116.99 191.492 120.835 173.414 124.554C170.714 125.107 168.162 125.634 165.594 126.139C157.379 127.783 146.585 129.731 135.638 130.321H135.527C98.8353 132.692 61.1643 117.543 37.2081 90.8014L37.1292 90.7172C29.5981 82.4898 24.2038 72.8297 22.3355 64.2178C20.3304 54.9897 22.3197 47.5787 28.414 41.5636C43.8077 27.1525 72.6319 25.5249 92.941 30.1179C104.288 32.6619 115.029 37.6553 126.402 42.9383C128.207 43.7758 130.007 44.6133 131.812 45.4402C169.051 63.4225 208.254 66.0245 242.204 52.7564C261.85 45.1927 279.128 33.0623 295.837 21.3322C297.563 20.1207 299.279 18.9145 301 17.7136L288.659 0L288.653 0.0105286Z"
            fill="#7632C5"
          />
        </svg>
      </div>

      {/* Ambient background glow radiating from bottom center */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[350px] h-[350px] md:w-[700px] md:h-[700px] bg-primary/25 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Typography Section */}
      <div className="w-full flex flex-col items-center text-center px-6 relative z-10 pt-5">
        <span className="text-white/80 font-medium text-[20px] md:text-3xl xl:text-5xl mb-1 md:mb-2 tracking-wide font-sans">
          Music Distribution
        </span>

        <h1 className="text-white font-extrabold text-[28px] leading-tight md:text-6xl xl:text-[76px] xl:leading-[86px] tracking-tight">
          That Reaches
        </h1>

        <h1 className="text-white font-extrabold text-[34px] leading-tight md:text-6xl xl:text-[76px] xl:leading-[86px] tracking-tight mb-4 md:mb-7">
          Every{" "}
          <span className="text-[#8c52ff] bg-linear-to-r from-[#8c52ff] to-[#a273ff] bg-clip-text">
            Platform
          </span>
        </h1>

        <p className="text-white/70 text-[14px] md:text-lg xl:text-base font-light tracking-wide max-w-3xl mx-auto mb-8 md:mb-16">
          The simplest online music distribution service for independent artists - get your songs on Spotify, Apple Music, JioSaavn, Wynk, and 150+ platforms worldwide.
        </p>
      </div>

      {/* ============================================================== */}
      {/* 1. MOBILE/TABLET FULL-CIRCLE ORBIT VIEW (< md Breakpoint)      */}
      {/* ============================================================== */}
      <div className="flex md:hidden flex-col items-center w-full px-6 relative z-10 mb-10 select-none">
        {/* Orbital Centerpiece Container */}
        <div className="w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] relative flex items-center justify-center">
          {/* Full Circle Concentric Tracks SVG */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full pointer-events-none opacity-25 z-0 overflow-visible"
          >
            <circle
              cx="50"
              cy="50"
              r="24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="0.4"
            />
            <circle
              cx="50"
              cy="50"
              r="32"
              fill="none"
              stroke="#ffffff"
              strokeWidth="0.4"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#ffffff"
              strokeWidth="0.4"
            />
          </svg>

          {/* Fully Visible Slow-Rotating Vinyl Record */}
          <div
            className="absolute w-[145px] h-[145px] sm:w-[165px] sm:h-[165px] rounded-full overflow-hidden z-10 flex items-center justify-center animate-rotate360"
            style={{ animationDuration: "35s" }}
          >
            <Image
              src={Images.CircleArrow2}
              alt="Rotating vinyl record"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Purple Brand Mozart Center Logo - Stationary for premium look */}
          <div className="absolute z-20 w-[42px] h-[42px] sm:w-[48px] sm:h-[48px] rounded-full bg-[#6236b0] flex items-center justify-center border-2 border-[#8c52ff] shadow-[0_0_15px_rgba(140,82,255,0.7)] pointer-events-none">
            <Image
              src={Icons.MozartIcon}
              alt="Mozart Brand Logo"
              className="w-[50%] h-[50%] brightness-0 invert"
            />
          </div>

          {/* Platform Badges orbiting in a full 360-degree circle */}
          {platforms.map((platform, idx) => {
            const angleRad = (platform.mobileAngle * Math.PI) / 180;
            // X and Y positions as exact percentage coordinates (centered around 50%, 50%)
            const leftVal = 50 + platform.mobileRadius * Math.cos(angleRad);
            const topVal = 50 + platform.mobileRadius * Math.sin(angleRad);

            return (
              <div
                key={idx}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                style={{
                  left: `${leftVal}%`,
                  top: `${topVal}%`,
                }}
              >
                <div
                  className="animate-float-bob"
                  style={{
                    animationDelay: `${idx * 0.25}s`,
                    animationDuration: `${5.5 + (idx % 3) * 1.2}s`,
                  }}
                >
                  <div
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-115 border"
                    style={{
                      backgroundColor: platform.bg,
                      borderColor: platform.border,
                      boxShadow: `0 0 15px ${platform.glow}`,
                    }}
                  >
                    {platform.svg}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Full-Width Release Now Pill Button */}
        <Link
          href={`${process.env.NEXT_PUBLIC_ADMIN_BASE_MAIN_URL}/signup`}
          className="w-full max-w-[325px] bg-[#6236b0] hover:bg-[#512da8] text-white text-[15px] font-bold py-4 rounded-full shadow-[0_0_25px_rgba(98,54,176,0.6)] transition duration-300 transform active:scale-98 text-center mt-9 z-30"
        >
          Release Now
        </Link>
      </div>

      {/* ============================================================== */}
      {/* 2. DESKTOP CONCENTRIC SEMI-CIRCLE VIEW (>= md Breakpoint)      */}
      {/* ============================================================== */}
      <div className="hidden md:flex w-full relative h-[450px] lg:h-[550px] z-10 justify-center overflow-hidden">
        {/* Orbital concentric track wrapper - perfectly matching 2:1 aspect ratio */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] lg:w-[1100px] lg:h-[550px] overflow-visible">
          {/* SVG Concentric Tracks - Mathematically aligned with polar positions */}
          <svg
            viewBox="0 0 1000 500"
            className="absolute inset-0 w-full h-full pointer-events-none opacity-20 z-0 overflow-visible"
          >
            <circle
              cx="500"
              cy="570"
              r="260"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.5"
            />
            <circle
              cx="500"
              cy="570"
              r="330"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.5"
            />
            <circle
              cx="500"
              cy="570"
              r="400"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.5"
            />
          </svg>

          {/* Premium realistic slow-rotating vinyl record */}
          <div
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden z-10 w-[350px] h-[350px] lg:w-[550px] lg:h-[550px]"
            style={{
              top: "118%",
            }}
          >
            <Image
              src={Images.CircleArrow2}
              alt="Rotating vinyl record"
              className="w-full h-full object-cover animate-rotate360"
              style={{ animationDuration: "30s" }}
            />
          </div>

          {/* Centered pill button (Release Now) - positioned right on top of vinyl */}
          <Link
            href={`${process.env.NEXT_PUBLIC_ADMIN_BASE_MAIN_URL}/signup`}
            className="absolute bottom-[5%] left-1/2 -translate-x-1/2 z-30 bg-linear-to-r from-[#6236b0] to-[#512da8] hover:from-[#7c4dff] hover:to-[#6739b7] text-white text-sm lg:text-base font-bold py-3.5 md:px-12 lg:py-4 lg:px-14 rounded-full shadow-[0_0_35px_rgba(103,57,183,0.5)] transition duration-300 transform hover:scale-105 active:scale-95 text-center whitespace-nowrap"
          >
            Release Now
          </Link>

          {/* Platform platform glowing badges positioned using polar math coordinates */}
          {platforms.map((platform, idx) => {
            const angleRad = (platform.angle * Math.PI) / 180;

            // X position as percentage of parent width
            const leftVal = 50 + platform.radius * Math.cos(angleRad);

            // Y position (bottom) as percentage of parent height (2x because height = 0.5 * width)
            const bottomVal =
              (bottomOffset + platform.radius * Math.sin(angleRad)) * 2;

            return (
              <div
                key={idx}
                className="absolute -translate-x-1/2 translate-y-1/2 z-20"
                style={{
                  left: `${leftVal}%`,
                  bottom: `${bottomVal}%`,
                }}
              >
                <div
                  className="animate-float-bob"
                  style={{
                    animationDelay: `${idx * 0.3}s`,
                    animationDuration: `${6 + (idx % 3) * 1.5}s`,
                  }}
                >
                  <div
                    className="w-11 h-11 lg:w-14 lg:h-14 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 hover:scale-120 border"
                    style={{
                      backgroundColor: platform.bg,
                      borderColor: platform.border,
                      boxShadow: `0 0 20px ${platform.glow}`,
                    }}
                  >
                    {platform.svg}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Stats Bar */}
      <div className="w-full bg-[#030105] py-10 md:py-12 relative z-20 overflow-hidden">
        {/* Top Gradient */}
        <div className="absolute top-0 left-0 w-full h-24 bg-linear-to-b from-[#17032f]/30 via-[#15032d]/10 to-transparent pointer-events-none z-10" />

        {/* Left Fade */}
        <div className="absolute left-0 top-0 h-full w-20 md:w-32 bg-linear-to-r from-[#030105] to-transparent z-30 pointer-events-none" />

        {/* Right Fade */}
        <div className="absolute right-0 top-0 h-full w-20 md:w-32 bg-linear-to-l from-[#030105] to-transparent z-30 pointer-events-none" />

        <div className="flex w-full overflow-hidden relative z-20">
          <div className="flex w-max animate-marquee space-x-16 md:space-x-24 px-8 md:px-12">
            {Array(10)
              .fill([
                { value: "150+", label: "Platforms Worldwide" },
                { value: "1M+", label: "Tracks Distributed" },
                { value: "200K+", label: "Independent Artists" },
                { value: "99.9%", label: "Platform Uptime" },
                { value: "100+", label: "Countries Reached" },
                { value: "100%", label: "Royalty Retention" },
              ])
              .flat()
              .map((stat, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-start text-left space-y-2 shrink-0"
                >
                  <span className="text-3xl md:text-[38px] xl:text-[46px] font-black text-white leading-none tracking-tight">
                    {stat.value}
                  </span>

                  <span className="text-xs md:text-[13px] xl:text-sm font-medium text-white/40 tracking-normal leading-tight whitespace-nowrap">
                    {stat.label}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicDistribution;
