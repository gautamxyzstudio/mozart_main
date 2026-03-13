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
    <section className=" py-16 flex flex-col space-y-12 bg-white">
      {services.map((service, index) => {
        const isEven = index % 2 !== 0;

        return (
          <div
            key={service.id}
            className={`w-full xl:h-162.5 md:h-125 sticky flex flex-col mb-40 ${
              isEven ? "md:flex-row-reverse" : "md:flex-row"
            } items-center justify-between xl:rounded-[40px] md:rounded-3xl rounded-2xl  pt-30 bg-white overflow-hidden `}
            style={{ top: `${index * -20 + 80}px` }}
          >
            <div className="flex flex-col space-y-8 md:w-[45%] w-full z-20 ">
              <div className="flex flex-col items-start space-x-4">
                <span className="text-[80px] md:text-[100px] font-bold text-black/20 leading-none">
                  {service.id}
                </span>
                <div className="w-px h-24 bg-primary rounded-full" />
              </div>

              <div className="flex flex-col space-y-4">
                <h2 className="font-bold xl:text-[56px] md:text-4xl text-[32px] leading-tight text-gray-900">
                  {service.title}
                </h2>
                <p className="text-gray-500 xl:text-lg text-sm leading-relaxed max-w-md">
                  {service.desc}
                </p>
              </div>
            </div>

            {/* --- Image Section Side --- */}
            <div className="md:w-[50%] w-full mt-10 md:mt-0 flex justify-center items-center relative h-full">
              <div
                className={`absolute w-[120%] h-[120%]  transition-all duration-700 ${
                  isEven ? "left-[-10%] scale-x-[-1]" : "right-[-10%]"
                }`}
              >
                <Image
                  src={isEven ? Images.BgVector : Images.BgVector2}
                  alt="bg-vector"
                  fill
                  className="object-contain opacity-60"
                />
              </div>

              {/* 2. Main Foreground Content */}
              <div className="relative z-10 flex justify-center items-center w-full h-full mb-10">
                {service.imgType === "disk" && (
                  <div className="relative scale-110">
                    <Image
                      src={Images.Disk}
                      alt="Disk"
                      className="animate-rotate360 xl:w-105 md:w-[320px] w-60 h-auto rounded-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                    />
                    <div className="absolute top-0 right-14 bg-white p-2 rounded-xl shadow-lg animate-bounce">
                      <Image
                        src={Images.Music}
                        alt="Music"
                        width={48}
                        height={48}
                        className="w-8 h-8 md:w-12 md:h-12"
                      />
                    </div>
                    <div className="absolute bottom-10 -left-2 bg-white p-2 rounded-xl  shadow-lg animate-bounce ">
                      <Image
                        src={Images.Spotify2}
                        alt="Spotify"
                        width={48}
                        height={48}
                        className="w-8 h-8 md:w-12 md:h-12"
                      />
                    </div>
                    <div className="absolute top-10 -left-4 bg-white p-2 rounded-xl shadow-lg animate-bounce delay-300 duration-1000">
                      <Image
                        src={Images.YouTube}  
                        alt="YouTube"
                        width={48}
                        height={48}
                        className="w-8 h-8 md:w-12 md:h-12 object-contain"
                      />
                    </div>

                  </div>
                )}

                {service.imgType === "youtube" && (
                  <div className="relative xl:w-120 md:w-87.5 w-full group">
                    <Image
                      src={Images.YouTubeVideo}
                      alt="YT"
                      className="w-full h-auto drop-shadow-2xl rounded-2xl"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 w-16 h-12 flex items-center justify-center rounded-xl shadow-2xl group-hover:scale-110 transition-transform cursor-pointer">
                      <div className="border-l-15 border-l-white border-y-10 border-y-transparent ml-1" />
                    </div>
                  </div>
                )}

                {service.imgType === "player" && (
                  <div className="relative xl:w-112.5 md:w-[320px] w-full">
                    <Image
                      src={Images.Plays}
                      alt="Player"
                      className="w-full h-auto drop-shadow-2xl rounded-xl"
                    />
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl flex items-center gap-4 w-[85%] border border-white/20">
                      <div className="w-12 h-12 bg-black rounded-full animate-spin-slow" />
                      <div className="flex-1 space-y-2">
                        <div className="h-2 w-full bg-gray-200 rounded" />
                        <div className="h-2 w-2/3 bg-gray-100 rounded" />
                      </div>
                    </div>
                  </div>
                )}

                {service.imgType === "label" && (
                  <div className="relative xl:w-100 md:w-75 w-full">
                    <Image
                      src={Images.Sraph}
                      alt="Label"
                      className="w-full h-auto"
                    />
                 
                  </div>
                )}
                {service.imgType === "promotion" && (
                  <div className="relative xl:w-100 md:w-75 w-full">
                    <Image
                      src={Images.Speaker}
                      alt="Label"
                      className="w-full h-auto"
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
