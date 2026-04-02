/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const blogCategories = [
  "General",
  "Music Distribution",
  "Music Promotion",
  "YouTube Content ID",
  "Global Chart",
  "Royality & Rights Management",
  "Music Label",
  "YouTube Channel & Content Management",
  "Artist Management",
];

const BlogTopSection = ({
  data,
  isLoading,
  setCategory,
}: {
  data: any;
  isLoading: boolean;
  setCategory: (category: string) => void;
}) => {
  const [activeCategory, setActiveCategory] = useState("");
  return (
    <section className="w-full h-full relative flex flex-row justify-between items-start overflow-clip">
      <div className="absolute md:w-37 md:h-188.75 w-17.5 h-87.5 bg-[linear-gradient(180deg,rgba(103,57,183,0)_0%,rgba(103,57,183,0.45)_33.78%,rgba(103,57,183,0)_66.97%)] opacity-20 rotate-24 xl:mt-15.25 xl:ml-0 md:-mt-3 md:-ml-9 mt-11.25 left-0" />
      <div className="absolute md:w-37 md:h-188.75 w-17.5 h-87.5 bg-[linear-gradient(180deg,rgba(103,57,183,0)_0%,rgba(103,57,183,0.45)_33.78%,rgba(103,57,183,0)_66.97%)] opacity-20 xl:rotate-204 rotate-24 xl:-mt-44.5 xl:mr-10 md:-mt-3 md:mr-3.5 mt-12.5 mr-17 right-0" />
      <div className="px-6 md:px-13 xl:px-25 md:mt-30 mt-19 mb-30 w-full flex flex-col xl:gap-y-10 md:gap-y-8 gap-y-6">
        <h1 className="text-[#111] font-bold capitalize text-[36px] leading-[1.1] md:text-[64px] xl:text-[100px] ">
          Our Blogs
        </h1>
        <div className="md:flex flex-row justify-center items-center flex-wrap gap-5 w-full h-auto hidden z-10">
          {blogCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveCategory(category);
                setCategory(category);
              }}
              className={`${activeCategory === category ? "bg-primary text-background" : "bg-secondary text-foreground"} lg:text-base text-sm rounded-full lg:px-6 lg:py-3.5 px-8 py-4.5 cursor-pointer`}
            >
              {category}
            </button>
          ))}
        </div>
        

        <div className="flex flex-col md:flex-row gap-6 justify-between w-full h-auto ">
          {isLoading ? (
            <div className="relative xl:h-151 md:h-89 h-56 xl:w-193.75 md:w-120 w-full rounded-[30px] bg-secondary animate-pulse" />
          ) : data?.[0] ? (
            <Link
              href={`/blog/${data[0].blogSlug}`}
              className="relative xl:h-151 md:h-89 h-56 xl:w-193.75 md:w-120 w-full rounded-[30px] overflow-hidden group"
            >
              {data[0].smallBanner && (
                <Image
                  src={data[0].banner}
                  alt={data[0].title || "Blog Image"}
                  width={1400}
                  height={1400}
                  className="h-full w-full aspect-auto transition-transform duration-500 group-hover:scale-115"
                />
              )}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                <span className="text-white text-sm mb-2">
                  {dayjs(data[0].blogDate).format("DD MMM, YYYY")}
                </span>

                <h2 className="text-white text-xl md:text-3xl font-bold">
                  {data[0].title}
                </h2>
              </div>
            </Link>
          ) : null}

          <div className="xl:w-110.25 md:w-120 flex flex-col gap-6 w-full xl:h-151 md:h-89 h-56">
            {/* Small Card 1 */}
            {isLoading ? (
              <div className="relative xl:h-72.25 md:h-60 h-40 w-full rounded-3xl bg-secondary animate-pulse" />
            ) : data?.[1] ? (
              <Link
                href={`/blog/${data[1].blogSlug}`}
                className="relative xl:h-72.25 md:h-60 h-40 w-full rounded-3xl overflow-hidden group"
              >
                {data[1].smallBanner && (
                  <Image
                    src={data[1].smallBanner}
                    width={400}
                    height={100}
                    alt={data[1].title || "Blog Image"}
                    className="w-full h-full aspect-auto transition-transform duration-500 group-hover:scale-115"
                  />
                )}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-5">
                  <span className="text-white text-sm mb-2">
                    {dayjs(data[1].blogDate).format("DD MMM, YYYY")}
                  </span>
                  <h3 className="text-white text-base md:text-lg xl:text-2xl font-bold leading-tight">
                    {data[1].title}
                  </h3>
                </div>
              </Link>
            ) : null}

            {/* Small Card 2 */}
            {isLoading ? (
              <div className="relative xl:h-72.25 md:h-60 h-40 w-full rounded-3xl bg-secondary animate-pulse" />
            ) : data?.[2] ? (
              <Link
                href={`/blog/${data[2].blogSlug}`}
                className="relative xl:h-72.25 md:h-60 h-40 w-full rounded-3xl overflow-hidden group"
              >
                {data[2].smallBanner && (
                  <Image
                    src={data[2].smallBanner}
                    width={800}
                    height={100}
                    alt={data[2].title || "Blog Image"}
                    className="w-full h-full aspect-auto transition-transform duration-500 group-hover:scale-115"
                  />
                )}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-5">
                  <span className="text-white text-sm mb-2">
                    {dayjs(data[2].blogDate).format("DD MMM, YYYY")}
                  </span>

                  <h3 className="text-white text-base md:text-lg xl:text-2xl font-bold leading-tight">
                    {data[2].title}
                  </h3>
                </div>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogTopSection;
