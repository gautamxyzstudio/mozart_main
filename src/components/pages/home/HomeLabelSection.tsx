import { Icons, Images } from "@/public/exports";
import Image from "next/image";
import React from "react";

const HomeLabelSection = () => {
  const labelData = [
    {
      label: "Youtube CMS Access",
      description:
        "Manage your music on YouTube with advanced Content Management System access. Track performance, manage claims, and protect your content.",
      image: Images.Dummy,
    },
    {
      label: "Asset/Channel Rights Management",
      description:
        "Take control of your digital rights. Protect your music across streaming platforms and social media channels with our rights management tools.",
      image: Images.Dummy2,
    },
    {
      label: "Royalty Strategy",
      description:
        "Set up and manage royalty distribution with customizable split templates. Ensure fair compensation for all contributors to your music.",
      image: Images.Dummy3,
    },
  ];
  return (
    <section className="bg-foreground flex flex-col xl:space-y-18.75 md:space-y-8 space-y-6 w-full xl:pb-25">
      <span className="xl:text-[200px] xl:leading-51.5 md:text-[124px] md:leading-32.5 text-[70px] leading-19 text-background/10 font-bold xl:-mt-11.25 md:-mt-4.25 -mt-2.25">
        Labels
      </span>
      <div className="w-full flex flex-col xl:space-y-13.75 md:space-y-6 space-y-4 xl:px-25 md:px-13 px-6">
        <div className="w-full flex flex-col space-y-4">
          <h2 className="xl:text-[64px] xl:leading-18 md:text-[48px] md:leading-13.5 text-[32px] leading-9.5 font-bold text-background">
            For Labels And Managers
          </h2>
          <p className="text-background/70 xl:text-base text-sm xl:w-[60%] md:w-[80%]">
            We help Punjabi artists and creators go global — with music
            distribution, YouTube channel management, paid promotions, and
            more...
          </p>
        </div>

        <div className="w-full h-auto flex flex-col space-y-0">
          {labelData.map((item, idx) => (
            <div
              key={idx}
              className="w-full group xl:h-60 xl:hover:h-167 h-58.5 transition-all duration-500 ease-in-out rounded-t-[20px] bg-foreground text-background hover:bg-primary xl:py-17.5 px-5 flex flex-col xl:space-y-15 cursor-pointer"
            >
              <div className="flex xl:flex-row flex-col space-y-3 xl:items-center xl:justify-between h-full justify-center">
                <div className="relative xl:w-[48%]">
                  <h3 className="font-black uppercase xl:text-[48px] xl:leading-14 md:text-[32px] md:leading-10 text-2xl">
                    {item.label}
                  </h3>
                  <span className="font-black opacity-10 absolute xl:-top-19.25 -top-15 xl:text-[100px] xl:leading-30.5 text-[80px] leading-25">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-row items-center xl:space-x-3.25 xl:w-[39%]">
                  <span className="md:text-base text-sm">
                    {item.description}
                  </span>
                  <Image
                    src={Icons.CircleArrow}
                    alt="CircleArrow"
                    className="w-25.25 h-25.25 group-hover:-rotate-90 rotate-0 transition-all duration-500 ease-in-out xl:block hidden"
                  />
                </div>
              </div>
              <Image
                src={item.image}
                alt="Dummy"
                className="w-full h-97 object-cover rounded-xl group-hover:block hidden transition-all duration-500 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeLabelSection;
