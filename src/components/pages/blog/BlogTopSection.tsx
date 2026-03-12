import { Images } from "@/public/exports";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogTopSection = () => {
  return (
    <>
      <section className="w-full h-full  relative flex flex-col justify-center overflow-clip bg-white">
        <div className="absolute md:w-37 md:h-188.75 w-17.5 h-97.5 bg-[linear-gradient(180deg,rgba(103,57,183,0)_0%,rgba(103,57,183,0.45)_33.78%,rgba(103,57,183,0)_66.97%)] opacity-20 rotate-24 xl:mt-15.25 xl:ml-0 md:-mt-3 md:-ml-9 mt-11.25 left-0 z-0" />
        <div className="absolute md:w-37 md:h-188.75 w-17.5 h-87.5 bg-[linear-gradient(180deg,rgba(103,57,183,0)_0%,rgba(103,57,183,0.45)_33.78%,rgba(103,57,183,0)_66.97%)] opacity-20 xl:rotate-204 rotate-24 xl:-mt-44.5 xl:mr-10 md:-mt-3 md:mr-3.5 mt-12.5 mr-17 right-0 z-0" />

        <div className="  px-3 md:px-6 xl:px-24 mt-30 mb-30">
          <h1 className="text-[#111] font-bold capitalize text-[36px] leading-[1.1] md:text-[64px] xl:text-[100px] mb-12">
            Our Blogs
          </h1>

          <div className="flex flex-col md:flex-row gap-6 w-full h-auto">
            <Link href="/blogs/blog-detail" className="block">
              <div className="flex-2 relative xl:h-151 md:h-89 h-56 xl:w-193.75 md:w-120 w-100 rounded-[30px] overflow-hidden group">
                <Image
                  src={Images.BlogImg}
                  alt="Blog Img"
                  className="h-full w-full"
                />
                {/* Exact Overlay and Content */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                  <div className="flex items-center gap-3 text-white/80 text-sm mb-2">
                    <span>Technology</span>
                    <span className="w-10 h-px bg-white/40"></span>
                    <span>17 Feb, 2024</span>
                  </div>
                  <h2 className="text-white text-xl md:text-3xl font-bold">
                    How AI is Changing the Way We Work and Live
                  </h2>
                </div>
              </div>
            </Link>

            <div className="flex-1 flex flex-col gap-6">
              {/* Small Card 1 */}
              <div className="relative flex-1 xl:h-full md:h-60 h-10 w-full rounded-3xl overflow-hidden group">
                <Image
                  src={Images.BlogImg2}
                  alt="blog img2"
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-5">
                  <div className="flex items-center gap-2 text-white/80 text-xs mb-1">
                    <span>Travel</span>
                    <span className="w-6 h-px bg-white/40"></span>
                    <span>17 Feb, 2024</span>
                  </div>
                  <h3 className="text-white text-base md:text-lg font-bold leading-tight">
                    How to Travel Like a Local: Insider Tips
                  </h3>
                </div>
              </div>

              {/* Small Card 2 */}
              <div className="relative flex-1 min-h-35 md:h-60 rounded-3xl overflow-hidden group">
                <Image
                  src={Images.BlogImg3}
                  alt="Blog Img3"
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-5">
                  <div className="flex items-center gap-2 text-white/80 text-xs mb-1">
                    <span>Lifestyle</span>
                    <span className="w-6 h-px bg-white/40"></span>
                    <span>17 Feb, 2024</span>
                  </div>
                  <h3 className="text-white text-base md:text-lg font-bold leading-tight">
                    5 Daily Habits for a More Productive Life
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogTopSection;
