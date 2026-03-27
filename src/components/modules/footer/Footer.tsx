import React from "react";
import NewsLetter from "./NewsLetter";
import { Icons, Images } from "@/public/exports";
import Image from "next/image";
import Link from "next/link";
import QuickLink from "./QuickLink";

const Footer = () => {
  return (
    <footer className="flex flex-col w-full h-full relative overflow-clip">
      <NewsLetter />
      <div className="absolute md:right-0 xl:top-47 md:top-72 top-56 xl:w-156 xl:h-143 md:w-81 md:h-76.75 -right-51.25 w-88 h-83.75 overflow-clip">
        <div className=" relative w-full h-full">
          <Image src={Images.Lyrics} alt="Lyrics" className="w-full h-full" />
          <Image
            src={Images.Disk}
            alt="Lyrics"
            className="xl:w-125 xl:h-125 md:w-65.25 md:h-65.25 absolute xl:top-9 xl:left-10 md:top-5.5 md:left-4.5 top-6.5 left-4.75 w-70.75 h-70.75 animate-rotate360"
          />
        </div>
      </div>
      <div className="w-full pt-13 pb-2 px-6 md:px-13 md:pb-4 xl:pt-21.5 xl:px-25 xl:pb-0 bg-foreground flex flex-col xl:space-y-8 space-y-6 items-start">
        <div className="flex flex-col md:space-y-4 space-y-3 items-start xl:w-174.5 md:w-109.25 w-58 h-auto">
          <Link href={"/"}>
            <Image
              src={Images.WhiteLogo}
              className="w-auto md:h-10.5 h-4.5"
              alt="Mozart"
            />
          </Link>
          <p className="text-background opacity-70 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            tristique tortor quis urna consequat, aliquet porta elit convallis.
            Integer luctus nisl in enim pulvinar, quis fermentum augue feugiat.
            Aenean a ante id tellus volutpat hendrerit.
          </p>
          <div className="p-1.5 bg-[#FFFFFF29] xl:mt-2 flex flex-row items-center gap-x-1.5 rounded-full">
            {[
              {
                icon: Icons.Instagram,
                link: "https://www.instagram.com/officialamozart",
              },
              { icon: Icons.Facebook, link: "https://www.facebook.com" },
              {
                icon: Icons.LinkedIn,
                link: "https://www.linkedin.com/company/amozart",
              },
              { icon: Icons.Twitter, link: "https://x.com" },
            ].map((item, idx) => (
              <Link href={item.link} key={idx}>
                <Image
                  src={item.icon}
                  alt={item.link + idx}
                  className="border border-background rounded-full xl:w-9 xl:h-9 xl:p-1.5 w-7.5 h-7.5 p-1.25"
                />
              </Link>
            ))}
          </div>
        </div>

        <QuickLink />

        <div className="w-full border-t border-primary20 xl:py-6 py-4 flex md:flex-row flex-col gap-y-3 justify-between md:items-center xl:mt-0 md:mt-2">
          <span className="text-background xl:text-base md:text-xs text-[10px] leading-3.5">
            &copy;Copyright {new Date().getFullYear()} Mozart. All Rights
            Reserved
          </span>
          <span className="text-background xl:text-base md:text-xs text-[10px] leading-3.5">
            Designed & Developed by{" "}
            <Link
              href={"https://www.xyz.studio/"}
              title="Xyz Studio"
              className="font-medium"
            >
              XYZ Studio
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
