
import React from "react";


const HomeTopSection = () => {
  return (
    <div className="w-full h-auto relative flex flex-row justify-between items-start overflow-clip">
      <div className="md:w-37 md:h-188.75 w-17.5 h-87.5 bg-[linear-gradient(180deg,rgba(103,57,183,0)_0%,rgba(103,57,183,0.45)_33.78%,rgba(103,57,183,0)_66.97%)] opacity-20 rotate-24 xl:mt-15.25 xl:ml-0 md:-mt-3 md:-ml-9 mt-11.25" />
      <div className="md:w-37 md:h-188.75 w-17.5 h-87.5 bg-[linear-gradient(180deg,rgba(103,57,183,0)_0%,rgba(103,57,183,0.45)_33.78%,rgba(103,57,183,0)_66.97%)] opacity-20 xl:rotate-204 rotate-24 xl:-mt-44.5 xl:mr-10 md:-mt-3 md:mr-3.5 mt-12.5 mr-17" />
      <div className=" absolute w-full h-full flex flex-col top-0 left-0 right-0">
        <div className="flex xl:flex-row flex-col xl:justify-between items-start xl:px-25 md:px-13 px-6 w-full">
          <div className="flex flex-col md:space-y-5 space-y-3 xl:mt-38 mt-29">
            <h1 className="hidden">Distribute Your Music To The World</h1>
            <span className="text-2xl font-medium md:text-[48px] md:leading-13.5 xl:text-[64px] xl:leading-17.5">
              Distribute Your Music To
            </span>
            <span className="text-4xl font-bold md:text-[64px] md:leading-17.5 xl:text-[100px] xl:leading-26.5">
              The World
            </span>
          </div>
          <div className="flex flex-col md:space-y-5 space-y-3 xl:mt-38 mt-29 xl:w-101">
            <span className="text-sm xl:text-base">
              We help artists and creators go global with music distribution,
              YouTube channel management, paid promotions, & more. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTopSection;
