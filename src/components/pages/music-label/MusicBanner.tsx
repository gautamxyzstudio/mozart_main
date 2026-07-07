import { Images } from '@/public/exports';
import Image from 'next/image';

export default function MusicBanner() {
  return (
    <div className="w-full mx-auto xl:px-25 xl:py-38 md:px-12.5 md:py-25 px-6 py-16">
      {/* Main Card Container */}
      <div className="relative bg-primary rounded-3xl overflow-hidden pt-12 md:pt-16 flex flex-col items-center text-center shadow-xl">
        
        {/* === ONLY FOR MOBILE SCREEN (New Big Vector) === */}
        <div className="block md:hidden absolute top-0 left-1/2 -translate-x-1/2 w-full h-auto pointer-events-none z-0 opacity-70">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 327 226" fill="none" className="w-full h-full">
            <path d="M-58.1529 -76.066L23.4472 -176.234C24.8312 -177.916 26.4188 -179.442 28.2793 -180.624C34.2246 -184.369 40.6952 -184.974 46.5835 -182.61C51.9811 -180.448 55.9875 -175.785 57.9927 -170.369L131.297 28.0485C137.132 43.8448 158.142 47.3246 168.857 34.2196L266.442 -85.2156L266.568 -85.3786L276.572 -97.6285C296.752 -118.298 326.554 -129.214 357.621 -124.058C405.079 -116.181 438.585 -72.3929 433.45 -24.987C428.075 24.6456 383.565 60.1991 334.179 55.7362C332.873 55.6229 331.571 55.4843 330.265 55.3111C306.058 52.1004 285.333 39.7958 271.142 22.3266C260.525 9.26675 240.39 9.40224 229.737 22.4384L70.1792 217.731C67.7392 220.71 64.5549 223 60.9797 224.348C59.1885 225.017 57.5754 225.581 57.0885 225.671C48.3368 227.119 38.6263 220.39 35.2657 212.545L-61.242 -53.5829C-61.9202 -55.5292 -62.4654 -57.5008 -62.8059 -59.4537C-63.8219 -65.3545 -61.943 -71.4016 -58.1529 -76.066Z" fill="white" style={{ fill: 'white', fillOpacity: 0.15 }} />
          </svg>
        </div>

        {/* === ONLY FOR DESKTOP/TABLET SCREENS (Two Small Vectors) === */}
        {/* Background Vector 1 (Top Left) */}
        <div className="hidden md:block absolute top-0 left-10 pointer-events-none z-0 opacity-60 transform -translate-x-12 -translate-y-6 w-[185px] h-auto">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 185 224" fill="none" className="w-full h-full">
            <path d="M-81.6259 58.9596L-37.463 4.24765C-36.7139 3.32927 -35.8547 2.49566 -34.8477 1.85011C-31.6301 -0.195703 -28.1281 -0.525937 -24.9413 0.765096C-22.02 1.94581 -19.8517 4.49296 -18.7665 7.45119L20.9066 115.827C24.0645 124.455 35.4358 126.356 41.2348 119.198L94.0491 53.962L94.1171 53.873L99.5312 47.1821C110.453 35.8923 126.582 29.9302 143.396 32.7463C169.081 37.0487 187.215 60.9658 184.436 86.859C181.527 113.968 157.438 133.388 130.709 130.95C130.002 130.888 129.298 130.812 128.591 130.718C115.489 128.964 104.273 122.243 96.5925 112.702C90.8467 105.568 79.9495 105.642 74.1835 112.763L-12.171 219.432C-13.4915 221.059 -15.2149 222.309 -17.1499 223.046C-18.1193 223.411 -18.9923 223.72 -19.2559 223.768C-23.9924 224.56 -29.2478 220.884 -31.0666 216.599L-83.2978 71.2399C-83.6648 70.1768 -83.9599 69.0999 -84.1442 68.0332C-84.6941 64.8102 -83.6772 61.5073 -81.6259 58.9596Z" fill="white" style={{ fill: 'white', fillOpacity: 0.15 }} />
          </svg>
        </div>

        {/* Background Vector 2 (Top Right) */}
        <div className="hidden md:block absolute top-0 right-8 pointer-events-none z-0 opacity-60 transform translate-x-8 -translate-y-8 w-[181px] h-auto">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 181 186" fill="none" className="w-full h-full">
            <path d="M266.343 126.542L222.18 181.254C221.431 182.173 220.571 183.006 219.565 183.652C216.347 185.698 212.845 186.028 209.658 184.737C206.737 183.556 204.569 181.009 203.483 178.051L163.81 69.6749C160.652 61.047 149.281 59.1463 143.482 66.3043L90.6677 131.54 L90.5997 131.629L85.1856 138.32C74.2636 149.61 58.1344 155.572 41.3206 152.756C15.636 148.453 -2.49805 124.536 0.281032 98.643C3.19019 71.5336 27.2793 52.1143 54.0078 54.5519C54.7145 54.6138 55.4193 54.6895 56.1262 54.7841C69.2273 56.5378 80.4439 63.2586 88.1243 72.8002C93.8701 79.9336 104.767 79.8596 110.533 72.7392L196.888 -33.9299C198.208 -35.5568 199.932 -36.8074 201.867 -37.5437C202.836 -37.9093 203.709 -38.2176 203.973 -38.2664C208.709 -39.0575 213.965 -35.3823 215.783 -31.0969L268.015 114.262C268.382 115.325 268.677 116.402 268.861 117.469C269.411 120.692 268.394 123.995 266.343 126.542Z" fill="white" style={{ fill: 'white', fillOpacity: 0.15 }} />
          </svg>
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          {/* Main Heading */}
          <h2 className="text-white text-2xl xl:text-[58px] md:text-[32px] font-bold mb-4">
            Start Your Label Distribution Journey With Amozart
          </h2>

          {/* Subheading */}
          <p className="text-purple-100 text-[18px] xl:text-[20px] md:text-base font-medium opacity-90 mb-6 md:mb-8">
            Join independent artists and labels already releasing music globally. Submit your first track today and grow your career the right way.
          </p>

          {/* CTA Button */}
          <button className="bg-white text-[#6A38C2] font-semibold px-8 py-3 rounded-full shadow-md hover:bg-purple-50 transition-all duration-200 text-sm sm:text-base mb-10 md:mb-14">
            Get Started Free
          </button>
        </div>

        {/* Responsive Piano Image Container */}
        <div className="w-full relative mt-auto -mb-1 sm:-mb-2 md:-mb-3 max-w-10xl">
          <Image
            src={Images.Track}  
            alt="Piano Keys"
            width={1300}
            height={300}
            layout="responsive"
            priority
            className="object-contain object-bottom "
          />
        </div>

      </div>
    </div>
  );
}