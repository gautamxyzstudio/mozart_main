import React from "react";
import BackgroundVideo from "../../modules/backgroundVideo/BackgroundVideo";
import Link from "next/link";

const HomeAboutSection = () => {
  return (
    <section className="min-h-screen w-full h-full relative overflow-clip">
      <BackgroundVideo />
      <div className="w-full h-full absolute bg-primary top-0 bottom-0 mix-blend-hue" />
      <div className="flex flex-col z-10 relative w-full h-full justify-between min-h-screen">
        <span className="text-[200px] leading-51.5 text-background/10 font-bold xl:-mt-11.25">
          About
        </span>
        <div className="flex flex-col self-end space-y-4 text-background pr-25 items-start w-[47%]">
          <h2 className="xl:text-[64px] xl:leading-18 font-bold">
            About Mozart
          </h2>
          <p className="xl:text-base text-background/70">
            Mozart is a comprehensive music distribution platform designed to
            help independent artists and labels reach global audiences across
            all major streaming platforms.
          </p>

          <p className="xl:text-base text-background/70">
            {` With our cutting-edge technology and industry expertise, we've
            helped thousands of artists distribute their music to Spotify, Apple
            Music, Amazon Music, and 100+ other platforms worldwide.`}
          </p>

          <p className="xl:text-base text-background/70">
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
        <span className="xl:text-[200px] xl:leading-51.5 text-background/10 font-bold text-end xl:-mb-13.25">
          Mozart
        </span>
      </div>
    </section>
  );
};

export default HomeAboutSection;
