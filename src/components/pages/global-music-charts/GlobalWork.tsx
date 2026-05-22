import { Icons, Images } from "@/public/exports";
import Image from "next/image";
import React from "react";

const GlobalWork = () => {
    const labelData = [
        {
            label: "Submit Your Music",
            description:
                "Upload your track or provide streaming links to begin the chart tracking process. We verify your details to ensure your music is ready for global ranking. ",
            image: Images.Dummy,
        },
        {
            label: "Data Collection Begins ",
            description:
                "Our system gathers real-time data from streaming platforms and audience engagement. Every play, view, and interaction helps shape your chart position. ",
            image: Images.Dummy2,
        },
        {
            label: "Performance Is Analyzed",
            description:
                "Our system gathers real-time data from streaming platforms and audience engagement.Every play, view, and interaction helps shape your chart position. ",
            image: Images.Dummy2,
        },
       
        {
            label: "Charts Update Weekly ",
            description:
                "Your global chart position refreshes regularly with the latest data. See your progress, track your growth, and watch your rank rise over time. ",
            image: Images.Dummy3,
        },
    ];
    return (
        <section className="bg-foreground flex flex-col xl:space-y-12.75 md:space-y-8 space-y-6 w-full xl:pb-15">
            <span className="xl:text-[200px] xl:leading-31.5 md:text-[124px] md:leading-12.5 text-[70px] leading-5 text-background/10 font-bold xl:-mt-1 md:mt-5 mt-5">
                Works
            </span>
            <div className="w-full flex flex-col xl:space-y-13.75 md:space-y-6 space-y-4 xl:px-25 md:px-13 px-6 ">
                <div className="w-full flex flex-col space-y-4">
                    <h2 className="xl:text-[64px] xl:leading-3 md:text-[48px] md:leading-13.5 text-[29px] leading-9.5 font-bold text-white">
                   WhyAreDifferent
                    </h2>
                    {/* <p className="text-white xl:text-base text-sm xl:w-[60%] md:w-[80%]">
                        Getting your music live worldwide is simple and fast. Follow a few easy steps to upload, distribute, and start earning from your music. w
                    </p> */}
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

export default GlobalWork;
