import { Icons, Images } from "@/public/exports";
import Image from "next/image";
import React from "react";

const HomeLabelSection = () => {
    const labelData = [
        {
            label: "Share Your Music",
            description:
                "Upload your track, add your artwork, and fill in your release details. Our platform accepts all standard audio formats and walks you through every field so nothing gets rejected by a streaming platform.",
            image: Images.Dummy,
        },
        {
            label: "Choose Your Platforms",
            description:
                "Select the platforms you want to release on - from Spotify and Apple Music to JioSaavn, Wynk, Deezer, Tidal, and 150+ others. You can target global audiences or focus on specific regional markets, all from the same dashboard.",
            image: Images.Dummy2,
        },
        {
            label: "Set Your Release Date",
            description:
                "Pick a date and let us handle the rest. We submit your music to every selected platform and confirm delivery within 24 to 72 hours. You'll be notified the moment your track goes live.",
            image: Images.Dummy3,
        },
        {
            label: "Track and Earn",
            description:
                "Once live, your real-time analytics dashboard shows streams, listener data, and earnings as they come in. All royalties are paid directly to you - 100%, every time, on schedule.",
            image: Images.Dummy3,
        },
    ];
    return (
        <section className="bg-foreground flex flex-col xl:space-y-12.75 md:space-y-8 space-y-6 w-full xl:pb-15">
            <span className="xl:text-[200px] xl:leading-51.5 md:text-[124px] md:leading-32.5 text-[70px] leading-19 text-background/10 font-bold xl:-mt-11.25 md:-mt-4.25 -mt-2.25">
                Works
            </span>
            <div className="w-full flex flex-col xl:space-y-13.75 md:space-y-6 space-y-4 xl:px-25 md:px-13 px-6 ">
                <div className="w-full flex flex-col space-y-4">
                    <h2 className="xl:text-[64px] xl:leading-18 md:text-[48px] md:leading-13.5 text-[32px] leading-9.5 font-bold text-white">
                        How It Works
                    </h2>
                    <p className="text-white xl:text-base text-sm xl:w-[60%] md:w-[80%]">
                        Getting your music live worldwide is simple and fast. Follow a few easy steps to upload, distribute, and start earning from your music.
                    </p>
                </div>

                <div className="w-full h-auto flex flex-col space-y-0">
                    {labelData.map((item, idx) => (
                        <div
                            key={idx}
                            className="w-full group xl:h-60 xl:hover:h-167 h-58.5 transition-all duration-500 ease-in-out rounded-t-[20px] bg-foreground text-background xl:hover:bg-primary xl:py-17.5 px-5 flex flex-col xl:space-y-15 cursor-pointer"
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
                                className="w-full h-97 object-cover rounded-xl xl:group-hover:block hidden transition-all duration-500 ease-in-out"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeLabelSection;
