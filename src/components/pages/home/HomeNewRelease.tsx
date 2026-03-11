import React from "react";
import AlbumSlider from "./AlbumSlider";

const HomeNewRelease = () => {
  return (
    <section className="flex flex-col xl:p-25 xl:pr-20 md:px-13 md:pt-0 px-6 pt-13 w-full h-full md:space-y-0 space-y-8">
      <span className="xl:text-[200px] xl:leading-51.5 md:text-[124px] md:leading-32.5 text-[70px] leading-19 text-foreground/10 font-bold xl:-mt-11.75 md:-mt-4.25 xl:-ml-25 md:-ml-13 -ml-6">
        New Release
      </span>
      <AlbumSlider />
    </section>
  );
};

export default HomeNewRelease;
