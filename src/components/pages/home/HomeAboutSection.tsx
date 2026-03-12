import React from "react";
import BackgroundVideo from "../../modules/backgroundVideo/BackgroundVideo";
import Link from "next/link";

const HomeAboutSection = () => {
  return (
    <section className="xl:max-h-202.5 w-full xl:h-202.5 md:h-131 h-202.5 relative overflow-clip">
      <BackgroundVideo />
      <div className="w-full h-full absolute bg-primary top-0 bottom-0 mix-blend-hue" />
      <div className="flex flex-col z-10 relative w-full xl:h-202.5 md:h-131 h-202.5 md:justify-between">
        <span className="xl:text-[200px] xl:leading-51.5 md:text-[124px] md:leading-32.5 text-[70px] leading-19 text-background/10 font-bold xl:-mt-11.25 md:-mt-4.25 -mt-2.25">
          About
        </span>
        <div className="flex flex-col self-end space-y-4 text-background xl:pr-25 md:pr-13 md:pl-0 px-6 md:items-start items-center md:text-start text-center xl:w-[47%] md:w-[52%] w-full xl:mt-0 md:-mt-6">
          <h2 className="xl:text-[64px] xl:leading-18 md:text-[48px] md:leading-13.5 text-[32px] leading-9.5 font-bold">
            About Mozart
          </h2>
          <p className="xl:text-base text-sm text-background/70">
            Mozart is a comprehensive music distribution platform designed to
            help independent artists and labels reach global audiences across
            all major streaming platforms.
          </p>

          <p className="xl:text-base text-sm text-background/70 xl:mt-0 -mt-4">
            With our cutting-edge technology and industry expertise, we&rsquo;ve
            helped thousands of artists distribute their music to Spotify, Apple
            Music, Amazon Music, and 100+ other platforms worldwide.
          </p>

          <p className="xl:text-base text-sm text-background/70 xl:mt-0 -mt-4">
            From distribution to promotion, we provide the tools and support you
            need to build your music career and connect with fans around the
            world.
          </p>
          <Link
            href={"/about"}
            title="Release Now"
            className="text-primary py-3 md:mt-4 md:px-15 md:w-fit w-full text-center rounded-full font-bold text-base bg-background hover:shadow-[0_0_32px_0_rgba(110,54,190,0.24)] transition ease-in-out duration-300 hover:translate-y-1.5"
          >
            Read more
          </Link>
        </div>
        <span className="xl:text-[200px] xl:leading-51.5 md:text-[124px] md:leading-32.5 text-[70px] leading-19 text-background/10 font-bold text-end xl:-mb-13.25 xl:mt-0 md:-mt-6 -mb-3 self-end flex h-full items-end">
          Mozart
        </span>
      </div>
    </section>
  );
};

export default HomeAboutSection;
