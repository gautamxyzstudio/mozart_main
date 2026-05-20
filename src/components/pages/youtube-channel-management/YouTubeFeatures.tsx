import { Images } from "@/public/exports";
import Image from "next/image";
import React from "react";

const YouTubeFeatures = () => {
  return (
    <>
      <section className="bg-white">
        <span className="w-full xl:text-[200px] xl:leading-34 md:text-[120px] md:leading-22 text-[60px] leading-13 text-black/70 font-bold opacity-10 xl:-mt-7 md:-mt-5 mt-10 xl:-ml-0 md:-ml-0 -ml-1 select-none">
          Key Features
        </span>

        <h3 className="text-4xl md:text-[44px] text-[29px] text-black font-bold text-center lg:py-10 md:pt-7 pt-5">
          Everything We Manage
        </h3>

        <div className="xl:px-25 xl:pt-0 md:pb-25 md:px-13 px-6 py-16 flex flex-col xl:space-y-13 md:space-y-6 space-y-8">
          {/* Feature 1 */}
          <div className="bg-[#FFD5D2] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between items-end lg:p-15 md:p-6.25 p-6 ">
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
              <h2 className="text-black font-medium xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                Channel Setup & Optimization
              </h2>
              <p className="text-black xl:text-base text-sm">
                We set up your YouTube music channel with the right structure,
                branding, and settings. Everything is optimized to support your
                songs and help your channel grow from the start.{" "}
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
          <div className="bg-[#E3D7F3] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between items-end lg:p-[60px] md:p-[25px] p-6">
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
              <h2 className="text-black font-medium xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                SEO Titles, Tags & Descriptions
              </h2>
              <p className="text-black xl:text-base text-sm">
                We add SEO-friendly titles, tags, and descriptions so your songs
                rank higher and appear in YouTube Music new releases. This helps
                more listeners discover your content naturally.{" "}
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
          <div className="bg-[#FBFFDB] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between items-end lg:p-15 md:p-6.25 p-6">
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
              <h2 className="text-black font-medium xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                Consistent Content Planning
              </h2>
              <p className="text-black xl:text-base text-sm"> 
                Reach active music fans. We build targeting structures mapping
                Your music uploads follow a clear, regular schedule. We plan
                everything in advance so your channel stays active and performs
                well.
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
          <div className="bg-[#C5FFF8] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between items-end lg:p-15 md:p-6.25 p-6">
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
              <h2 className="text-black font-medium xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                Thumbnail Design
              </h2>
              <p className="text-black xl:text-base text-sm">
                We design simple, attractive, and click-worthy thumbnails that
                bring more views and increase engagement on every music release.
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
          <div className="bg-[#C3E5FF] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between items-end lg:p-15 md:p-6.25 p-6">
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
              <h2 className="text-black font-medium xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                Audience Growth Strategy
              </h2>
              <p className="text-black xl:text-base text-sm">
                We create a smart plan to grow your listeners by improving
                reach, engagement, and visibility. Many artists in Punjab trust
                this strategy for stable YouTube music content management.{" "}
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
          <div className="bg-[#E3D7F3] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between items-end lg:p-15 md:p-6.25 p-6">
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
              <h2 className="text-black font-medium xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                Community Management
              </h2>
              <p className="text-black xl:text-base text-sm">
                We handle comments and interactions to keep your audience active
                and positive. Better communication builds trust and loyal fans.
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
          <div className="bg-[#FBFFDB] xl:h-156 md:h-91.75 xl:rounded-3xl md:rounded-2xl rounded-xl sticky xl:top-10 md:top-25 top-20 flex md:flex-row flex-col md:items-center md:justify-between items-end lg:p-15 md:p-6.25 p-6">
            <div className="flex flex-col space-y-4 xl:w-153.5 xl:ml-13 md:w-90 md:ml-7.5 w-full md:p-0 pr-6">
              <h2 className="text-black font-medium xl:text-[64px] xl:leading-18 md:text-4xl text-[32px] leading-9.5">
                Analytics & Reporting
              </h2>
              <p className="text-black xl:text-base text-sm">
                You receive clear monthly reports that show how your videos
                perform. These insights help improve future uploads and boost
                your overall channel growth.{" "}
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
