/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

const BlogTopSection = ({
  data,
  isLoading,
}: {
  data: any;
  isLoading: boolean;
}) => {
  return (
    <section className="w-full h-full relative flex flex-row justify-between items-start overflow-clip">
      <div className="absolute md:w-37 md:h-188.75 w-17.5 h-87.5 bg-[linear-gradient(180deg,rgba(103,57,183,0)_0%,rgba(103,57,183,0.45)_33.78%,rgba(103,57,183,0)_66.97%)] opacity-20 rotate-24 xl:mt-15.25 xl:ml-0 md:-mt-3 md:-ml-9 mt-11.25 left-0" />
      <div className="absolute md:w-37 md:h-188.75 w-17.5 h-87.5 bg-[linear-gradient(180deg,rgba(103,57,183,0)_0%,rgba(103,57,183,0.45)_33.78%,rgba(103,57,183,0)_66.97%)] opacity-20 xl:rotate-204 rotate-24 xl:-mt-44.5 xl:mr-10 md:-mt-3 md:mr-3.5 mt-12.5 mr-17 right-0" />
      <div className="px-6 md:px-13 xl:px-25 md:mt-30 mt-19 mb-30 w-full">
        <h1 className="text-[#111] font-bold capitalize text-[36px] leading-[1.1] md:text-[64px] xl:text-[100px] mb-12">
          Our Blogs
        </h1>

        <div className="flex flex-col md:flex-row gap-6 w-full h-auto ">
          {isLoading ? (
            <div className="flex-2 relative xl:h-151 md:h-89 h-56 xl:w-193.75 md:w-120 w-full rounded-[30px] bg-secondary animate-pulse" />
          ) : data?.[0] ? (
            <Link
              href={`/blog/${data[0].blogSlug}`}
              className="flex-2 relative xl:h-151 md:h-89 h-56 xl:w-193.75 md:w-120 w-full rounded-[30px] overflow-hidden group"
            >
              {data[0].smallBanner && (
                <Image
                  src={data[0].smallBanner}
                  alt={data[0].title || "Blog Image"}
                  width={1400}
                  height={1400}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                <div className="flex items-center gap-3 text-white/80 text-sm mb-2">
                  {/* <span>
                    {data.data[0].category?.join(", ") || "Uncategorized"}
                  </span>
                  <span className="w-10 h-px bg-white/40"></span> */}
                  <span>{dayjs(data[0].blogDate).format("DD MMM, YYYY")}</span>
                </div>
                <h2 className="text-white text-xl md:text-3xl font-bold">
                  {data[0].title}
                </h2>
              </div>
            </Link>
          ) : null}

          <div className="md:w-[30%] flex flex-col gap-6 w-full">
            {/* Small Card 1 */}
            {isLoading ? (
              <div className="relative flex-1 xl:h-full md:h-60 h-40 w-full rounded-3xl bg-secondary animate-pulse" />
            ) : data?.[1] ? (
              <Link
                href={`/blog/${data[1].blogSlug}`}
                className="relative flex-1 xl:h-full md:h-60 h-40 w-full rounded-3xl overflow-hidden group"
              >
                {data[1].smallBanner && (
                  <Image
                    src={data[1].smallBanner}
                    width={800}
                    height={800}
                    alt={data[1].title || "Blog Image"}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-5">
                  <div className="flex items-center gap-2 text-white/80 text-xs mb-1">
                    {/* <span>{data.data[1].category?.[0] || "Blog"}</span>
                    <span className="w-6 h-px bg-white/40"></span> */}
                    <span>
                      {dayjs(data[1].blogDate).format("DD MMM, YYYY")}
                    </span>
                  </div>
                  <h3 className="text-white text-base md:text-lg font-bold leading-tight">
                    {data[1].title}
                  </h3>
                </div>
              </Link>
            ) : null}

            {/* Small Card 2 */}
            {isLoading ? (
              <div className="relative flex-1 xl:h-full md:h-60 h-40 w-full rounded-3xl bg-secondary animate-pulse" />
            ) : data?.[2] ? (
              <Link
                href={`/blog/${data[2].blogSlug}`}
                className="relative flex-1 xl:h-full md:h-60 h-40 w-full rounded-3xl overflow-hidden group"
              >
                {data[2].smallBanner && (
                  <Image
                    src={data[2].smallBanner}
                    width={800}
                    height={800}
                    alt={data[2].title || "Blog Image"}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-5">
                  <div className="flex items-center gap-2 text-white/80 text-xs mb-1">
                    {/* <span>{data.data[2].category?.[0] || "Blog"}</span>
                    <span className="w-6 h-px bg-white/40"></span> */}
                    <span>
                      {dayjs(data[2].blogDate).format("DD MMM, YYYY")}
                    </span>
                  </div>
                  <h3 className="text-white text-base md:text-lg font-bold leading-tight">
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
