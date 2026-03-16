import { Images } from "@/public/exports";
import Image from "next/image";
import React from "react";

const ServicesCenterSection = () => {
  const services = [
    {
      id: "01",
      title: "Music Distribution",
      desc: "We get your music on every major digital platform—Spotify, Apple Music, Amazon Music, and many more—making it accessible to a global audience.",
      imgType: "disk",
    },
    {
      id: "02",
      title: "YouTube Channel Management",
      desc: "From strategy to execution, we manage your YouTube channel end-to-end. This includes content optimization, copyright management, SEO, and monetization.",
      imgType: "youtube",
    },
    {
      id: "03",
      title: "Artist Management",
      desc: "We help artists build their careers with complete support—brand development, release planning, bookings, and digital placement.",
      imgType: "player",
    },
    {
      id: "04",
      title: "Label Distribution",
      desc: "Professional distribution for labels, delivering content efficiently across multiple platforms under one roof.",
      imgType: "label",
    },
    {
      id: "05",
      title: "Promotion",
      desc: "We track, collect, and deposit your earnings from all platforms royalties, ad revenue, and streaming payouts directly into your account.",
      imgType: "promotion",
    },
  ];

  return (
    <section className="py-12 md:py-16 flex flex-col space-y-8 md:space-y-12 bg-white  md:px-0">
      {services.map((service, index) => {
        const isEven = index % 2 !== 0;

        return (
          <div
            key={service.id}
            className={`w-full min-h-125 md:h-screen sticky flex flex-col ${
              isEven ? "md:flex-row-reverse" : "md:flex-row"
            } items-center justify-between py-12 md:py-20 lg:py-27 bg-white overflow-hidden`}
            style={{ top: `40px` }}
          >
            {/* --- Text Content Side --- */}
            <div
              className={`flex flex-col space-y-6 md:space-y-8 lg:w-[45%] md:w-[50%] w-full z-20 
              ${isEven ? "md:pr-10 XL:pr-20" : "md:pl-10 xl:pl-20"} px-4`}
            >
              <div className="flex flex-col items-start">
                <span className="text-[60px] md:text-[80px] lg:text-[100px] font-bold text-black/10 leading-none">
                  {service.id}
                </span>
                <div className="w-px h-16 md:h-24 bg-primary rounded-full mt-2 ml-4" />
              </div>

              <div className="flex flex-col space-y-4">
                <h2 className="font-bold xl:text-[64px] md:text-[32px] text-[32px] leading-18  text-black">
                  {service.title}
                </h2>
                <p className="text-gray-500 lg:text-base md:text-sm text-sm leading-relaxed max-w-md">
                  {service.desc}
                </p>
              </div>
            </div>

            {/* --- Image Section Side --- */}
            <div className="md:w-[50%] w-full mt-12 md:mt-0 flex justify-center items-center relative h-75 md:h-full">
              <div
                className={`absolute xl:w-170 xl:h-148.5 transition-all duration-700 pointer-events-none ${
                  isEven ? "left-0 scale-x-[-1]" : " right-0"
                }`}
              >
                <Image
                  src={isEven ? Images.BgVector : Images.BgVector2}
                  alt="bg-vector"
                  fill
                  className="object-contain opacity-40 md:opacity-100"
                />
              </div>

              {/* Main Images Logic */}
              <div className="relative z-10 flex justify-center items-center scale-90 md:scale-100 lg:scale-110">
                {service.imgType === "disk" && (
                  <div className="xl:w-[450px] xl:h-[450px] md:w-[350px] md:h-[350px] w-[280px] h-[280px] relative">
                    <Image
                      src={Images.Disk}
                      alt="Disk"
                      className="xl:w-[90%] xl:h-[90%] md:w-[85%] md:h-[85%] w-70.75 h-70.75 absolute md:-top-[3.5%] md:left-[7.5%] object-cover rounded-full animate-rotate360 shadow-2xl"
                    />
                    <div className="absolute xl:top-15 xl:left-[84%]  md:top-12  md:left-70 top-10 left-57 w-10 h-10 md:w-14 md:h-14">
                      <Image
                        src={Images.Spotify}
                        fill
                        alt="S"
                        className="rounded-xl shadow-lg"
                      />
                    </div>
                    <div className="absolute xl:top-[7%] xl:left-16  md:-top-5 md:left-24 top-6 left-6 w-10 h-10 md:w-14 md:h-14">
                      <Image
                        src={Images.Wynk}
                        fill
                        alt="W"
                        className="rounded-xl shadow-lg"
                      />
                    </div>
                    <div className="absolute xl:top-40 xl:left-10 md:top-30 md:-left-1 top-45 -left-1 w-10 h-10 md:w-14 md:h-14">
                      <Image
                        src={Images.AppleMusic}
                        fill
                        alt="A"
                        className="rounded-xl shadow-lg"
                      />
                    </div>
                    <div className="absolute xl:top-[55%] xl:right-5 md:top-50 md:right-10 top-46 right-0 w-10 h-10 md:w-14 md:h-14">
                      <Image
                        src={Images.JioSaavn}
                        fill
                        alt="J"
                        className="rounded-xl shadow-lg"
                      />
                    </div>
                    <div className="absolute xl:bottom-10 xl:left-[40%] md:top-62 md:left-30 top-65 left-30 w-10 h-10 md:w-14 md:h-14">
                      <Image
                        src={Images.YoutubeMusic}
                        fill
                        alt="Y"
                        className="rounded-xl shadow-lg"
                      />
                    </div>
                  </div>
                )}

                {service.imgType === "youtube" && (
                  <div className="relative xl:w-75 md:w-75 w-[320px] group px-4">
                    <Image
                      src={Images.YouTubeVideo}
                      alt="YT"
                      className="w-full h-auto absolute -left-9 -bottom-35"
                    />
                  </div>
                )}

                {service.imgType === "player" && (
                  <div className="relative xl:w-100 md:w-75 w-75">
                    <Image
                      src={Images.Plays}
                      alt="Player"
                      className="w-full h-auto   rounded-xl absolute -top-40 left-4"
                    />
                  </div>
                )}

                {(service.imgType === "label" ||
                  service.imgType === "promotion") && (
                  <div className="relative xl:w-[400px] md:w-[320px] w-[280px]">
                    <Image
                      src={
                        service.imgType === "label"
                          ? Images.Sraph
                          : Images.Speaker
                      }
                      alt="Service"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ServicesCenterSection;
