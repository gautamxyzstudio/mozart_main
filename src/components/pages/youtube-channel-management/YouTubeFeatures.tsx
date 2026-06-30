import { Images } from "@/public/exports";
import Image from "next/image";
import React from "react";

const YouTubeFeatures = () => {
  return (
    <>
      <section className="bg-white">
        <span className="w-full xl:text-[200px] xl:leading-34 md:text-[120px] md:leading-22 text-[60px] leading-13 text-black/70 font-bold opacity-10 xl:-mt-7 md:-mt-5 mt-10 xl:-ml-3 md:-ml-3 -ml-1 select-none">
          Key Features
        </span>

        <h3 className="text-4xl md:text-[44px] text-[29px] text-black font-bold text-center lg:py-10 md:pt-7 pt-5 px-6 max-w-4xl mx-auto">
          Everything Included in Our YouTube Page Management
        </h3>

        <div className="xl:px-25 xl:pt-0 md:pb-25 md:px-13 px-6 py-16 flex flex-col xl:space-y-13 md:space-y-6 space-y-8">
          {/* Feature 1 */}
          <div className="bg-[#FFD5D2] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between gap-7 lg:p-15 md:p-6.25 p-6 ">
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
              <h2 className="text-black font-medium xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                Channel Setup & Optimization
              </h2>
              <p className="text-black xl:text-base text-sm">
                We set up your channel with the right structure, branding, and settings from day one - proper youtube page management that gives your channel a strong, professional foundation to grow from.
              </p>
            </div>
            <div className="xl:w-126.75 xl:h-115 md:w-75 md:h-67.5 w-75.75 h-69 md:mt-0 mt-8 relative">
              <Image
                src={Images.ChannelLayout}
                alt="Channel Layout Design"
                className="object-contain w-full h-full"
              />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#E3D7F3] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between gap-7 lg:p-15 md:p-6.25 p-6">
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
              <h2 className="text-black font-medium xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                YouTube SEO for Music Releases
              </h2>
              <p className="text-black xl:text-base text-sm">
                Every upload gets SEO-optimized titles, tags, and descriptions so your songs rank higher in search and appear in YouTube Music's new release feeds, helping more fans discover your music naturally.
              </p>
            </div>
            <div className="flex flex-col space-y-4 xl:w-150 xl:mr-13 md:w-90 md:mr-7.5 w-full">
              <Image
                src={Images.SeoTagImg}
                alt="Copyright Whitelisting"
                className="object-contain w-full h-full"
              />
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#FBFFDB] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between gap-7 lg:p-15 md:p-6.25 p-6">
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
              <h2 className="text-black font-medium xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                Consistent Content Planning
              </h2>
              <p className="text-black xl:text-base text-sm"> 
                We build a clear, regular upload schedule planned in advance, so your channel stays active and the algorithm keeps recommending your content to new listeners.
              </p>
            </div>
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:mr-13 md:w-90 md:mr-7.5 w-full">
              <Image
                src={Images.ContentPlan}
                alt="Audience Targeting"
                className="object-contain w-full h-full"
              />
            </div>
          </div>

          {/* Feature 4 */}
          <div className="bg-[#C5FFF8] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between gap-7 lg:p-15 md:p-6.25 p-6">
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
              <h2 className="text-black font-medium xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                YouTube Thumbnail Design for Music Videos
              </h2>
              <p className="text-black xl:text-base text-sm">
                Custom, click-worthy thumbnails designed specifically for music content - built to stand out in a crowded feed and pull in more views on every release.
              </p>
            </div>
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:mr-13 md:w-90 md:mr-7.5 w-full">
              <Image
                src={Images.Thumnail}
                alt="Thumbnail Design"
                className="object-contain w-full h-full"
              />
            </div>
          </div>
          {/* Feature 5 */}
          <div className="bg-[#C3E5FF] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between gap-7 lg:p-15 md:p-6.25 p-6">
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
              <h2 className="text-black font-medium xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                Audience Growth Strategy for Independent Artists
              </h2>
              <p className="text-black xl:text-base text-sm">
                We build a YouTube audience growth strategy for independent artists tailored to your genre and audience, focused on real reach, engagement, and long-term subscriber growth on YouTube - not inflated numbers that disappear later.
              </p>
            </div>
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:mr-13 md:w-90 md:mr-7.5 w-full">
              <Image
                src={Images.Audience}
                alt="Thumbnail Design"
                className="object-contain w-full h-full"
              />
            </div>
          </div>
          {/* Feature 6 */}
          <div className="bg-[#E3D7F3] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between gap-7 lg:p-15 md:p-6.25 p-6">
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
              <h2 className="text-black font-medium xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                Community Management
              </h2>
              <p className="text-black xl:text-base text-sm">
                We manage comments and fan interactions to keep your audience engaged and positive, building the kind of loyal following that shows up for every new release.
              </p>
            </div>
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:mr-13 md:w-90 md:mr-7.5 w-full">
              <Image
                src={Images.Community}
                alt="Thumbnail Design"
                className="object-contain w-full h-full"
              />
            </div>
          </div>
          {/* Feature 7 */}
          <div className="bg-[#FBFFDB] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between gap-7 lg:p-15 md:p-6.25 p-6">
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
              <h2 className="text-black font-medium xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                Analytics & Reporting
              </h2>
              <p className="text-black xl:text-base text-sm">
                Clear, monthly reports show exactly how your channel and videos are performing, so you always know what's working and what to plan next.
              </p>
            </div>
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:mr-13 md:w-90 md:mr-7.5 w-full">
              <Image
                src={Images.AnalystReporting}
                alt="Thumbnail Design"
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default YouTubeFeatures;
