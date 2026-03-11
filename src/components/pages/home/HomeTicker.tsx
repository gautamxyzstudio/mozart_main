"use client";
import dynamic from "next/dynamic";

interface HorizontalTickerProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
}

const HorizontalTicker = dynamic<HorizontalTickerProps>(
  () => import("react-infinite-ticker").then((mod) => mod.HorizontalTicker),
  {
    ssr: false,
  },
);
const HomeTicker = () => {
  return (
    <div className="md:flex xl:py-12 md:pt-3 justify-center w-full -z-10 xl:ml-0 md:ml-12 hidden">
      <HorizontalTicker duration={10000}>
        {tickerData.map((item, idx) => (
          <span
            className="text-primary font-bold xl:text-[30px] xl:leading-9 w-fit text-nowrap xl:mr-25 md:mr-16 mr-8"
            key={idx}
          >
            {item.title}
          </span>
        ))}
      </HorizontalTicker>
    </div>
  );
};

export default HomeTicker;

export const tickerData = [
  {
    title: "INDEPENDENT NOT ALONE",
  },
  {
    title: "PROMOTE",
  },
  {
    title: "VERY PLATFORM",
  },
  {
    title: "ONE UPLOAD",
  },
  {
    title: "YOUR MUSIC",
  },
];
