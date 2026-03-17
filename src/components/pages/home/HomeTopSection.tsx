"use client";
import { Images } from "@/public/exports";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import HomeTicker from "./HomeTicker";


const HomeTopSection = () => {
  const images = [
    { img: Images.Album },
    { img: Images.Disk },
    { img: Images.AlbumTwo },
    { img: Images.AlbumThree },
  ];

  const counterData = [
    {
      number: 54,
      label: "Trusted By Artists",
    },
    {
      number: 25,
      label: "Top Streams Platform",
    },
  ];

  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true);
      },
      { threshold: 0.4 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <div className="w-full h-full relative flex flex-row justify-between items-start overflow-clip">
      <div className="absolute md:w-37 md:h-188.75 w-17.5 h-87.5 bg-[linear-gradient(180deg,rgba(103,57,183,0)_0%,rgba(103,57,183,0.45)_33.78%,rgba(103,57,183,0)_66.97%)] opacity-20 rotate-24 xl:mt-15.25 xl:ml-0 md:-mt-3 md:-ml-9 mt-11.25 left-0" />
      <div className="absolute md:w-37 md:h-188.75 w-17.5 h-87.5 bg-[linear-gradient(180deg,rgba(103,57,183,0)_0%,rgba(103,57,183,0.45)_33.78%,rgba(103,57,183,0)_66.97%)] opacity-20 xl:rotate-204 rotate-24 xl:-mt-44.5 xl:mr-10 md:-mt-3 md:mr-3.5 mt-12.5 mr-17 right-0" />
      <div className="w-full h-full flex flex-col">
        <div className="flex xl:flex-row flex-col md:space-y-5 space-y-4 xl:justify-between xl:items-center xl:mt-38 mt-29 items-start xl:px-25 md:px-13 px-6 xl:w-full">
          <div className="flex flex-col md:space-y-5 space-y-3 ">
            <h1 className="hidden">Distribute Your Music To The World</h1>
            <span className="text-2xl font-medium md:text-[48px] md:leading-13.5 xl:text-[64px] xl:leading-17.5">
              Distribute Your Music To
            </span>
            <span className="text-4xl font-bold md:text-[64px] md:leading-17.5 xl:text-[100px] xl:leading-26.5">
              The World
            </span>
          </div>
          <div className="flex flex-col xl:space-y-8 space-y-6 xl:w-101 md:w-137 w-full">
            <span className="text-sm xl:text-base">
              We help artists and creators go global with music distribution,
              YouTube channel management, paid promotions, & more. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </span>
            <Link
              href={"/"}
              title="Release Now"
              className="bg-primary py-3 md:px-15 md:w-fit w-full text-center rounded-full font-bold text-base text-background hover:shadow-[0_0_32px_0_rgba(110,54,190,0.24)] transition ease-in-out duration-300 hover:translate-y-1.5"
            >
              Release Now
            </Link>
          </div>
        </div>
        <div className="flex md:flex-row md:items-center flex-col xl:pl-25 md:pl-13 pl-6 xl:mt-0 md:mt-13 mt-7.5 mb-16">
          <Image
            src={Images.Disk}
            alt="disk"
            className="xl:w-176.25 xl:h-175.25 xl:p-5 md:w-88.75 md:h-88 w-81.75 h-81.25 p-2.25 animate-rotate360 z-5"
          />
          <div className="w-full xl:-ml-88.25 md:-ml-61.5 xl:mt-35 md:mt-11 -mt-33.5 flex flex-col ">
            <div
              ref={sectionRef}
              className="z-10 bg-primary w-full xl:py-8.75 xl:pr-25 xl:pl-9 md:py-7.5 md:pr-13 md:pl-10.5 py-4 pl-4 pr-6 h-auto rounded-l-full flex flex-row items-center xl:gap-x-15.5 md:gap-x-8.5 gap-x-4.5"
            >
              <div className="flex flex-row items-center xl:-space-x-62.75 md:-space-x-32.5 -space-x-18.25 w-fit">
                {images.map((item, idx) => (
                  <Image
                    src={item.img}
                    alt={`Album${idx}`}
                    key={idx}
                    className="xl:w-88 xl:h-88 md:w-50 md:h-50 w-27.5 h-27.5 rounded-full relative"
                    style={{ zIndex: images.length - idx }}
                  />
                ))}
              </div>
              <div className="flex flex-col xl:space-y-8 md:space-y-4 space-y-3 md:w-33.5 w-18.5">
                {counterData.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col space-y-0.5 text-background"
                  >
                    <span className="font-bold text-[30px] leading-5 md:text-[62px] md:leading-17 xl:text-[100px] xl:leading-26.5">
                      {visible ? <Counter end={item.number} /> : 0}
                    </span>
                    <span className="text-[10px] leading-4 md:text-base">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <HomeTicker />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTopSection;

const Counter = ({ end }: { end: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const speed = 30;

    const timer = setInterval(() => {
      start += 1;
      if (start > end) {
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [end]);

  return count;
};
