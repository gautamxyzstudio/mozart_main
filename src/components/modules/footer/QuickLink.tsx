import { Icons } from "@/public/exports";
import Image from "next/image";
import link from "next/link";
import Link from "next/link";
import React from "react";

const QuickLink = () => {
  const quickLink = [
    // {
    //   label: "Company",
    //   linkList: [
    //     {
    //       title: "About AMozart",
    //       link: "/about",
    //       icon: undefined,
    //     },
    //     {
    //       title: "Our Story",
    //       link: "/our-story",
    //       icon: undefined,
    //     },
    //     {
    //       title: "Press & Media",
    //       link: "/media",
    //       icon: undefined,
    //     },
    //     {
    //       title: "Contact Us",
    //       link: "/contact",
    //       icon: undefined,
    //     },
    //   ],
    // },
    {
      label: "Services",
      linkList: [
        {
          title: "Music Distribution",
          link: "/music-distribution",
          icon: undefined,
        },
        {
          title: "YouTube Channel Management",
          link: "/youtube-channel-management",
          icon: undefined,
        },
        {
          title: "YouTube Content ID",
          link: "/youtube-content-id",
          icon: undefined,
        },
        {
          title: "Artist Management",
          link: "/artists",
          icon: undefined,
        },
        {
          title: "Label Distribution",
          link: "/services",
          icon: undefined,
        },
        {
          title: "Music Promotion",
          link: "/music-promotion",
          icon: undefined,
        },
        {
          title: "Multi-Label Management",
          link: "/services",
          icon: undefined,
        },
        {
          title: "Monetization",
          link: "/services",
          icon: undefined,
        },
        {
          title: "Auto Playlist & Promotion",
          link: "/services",
          icon: undefined,
        },
        {
          title: "Takedown of illegal content",
          link: "/services",
          icon: undefined,
        },
      ],
    },
    {
      label: "Resources",
      linkList: [
        {
          title: "Help Center",
          link: "/help-center",
          icon: undefined,
        },
        {
          title: "FAQs",
          link: "/faqs",
          icon: undefined,
        },
        {
          title: "Artist Guide",
          link: "/artist-guide",
          icon: undefined,
        },
        {
          title: "Blog",
          link: "/blog",
          icon: undefined,
        },
      ],
    },
    {
      label: "Legal",
      linkList: [
        {
          title: "Terms & Conditions",
          link: "/termsandconditions",
          icon: undefined,
        },
        {
          title: "Privacy Policy",
          link: "/privacy-policy",
          icon: undefined,
        },
        {
          title: "Copyright Policy",
          link: "/copyright-policy",
          icon: undefined,
        },
        {
          title: "Cookie Policy",
          link: "/cookie-policy",
          icon: undefined,
        },
      ],
    },
    {
      label: "Address",
      linkList: [
        {
          title: "Imperial Tower, CP 67, Sector 67, Sahibzada Ajit Singh Nagar, Punjab 160062",
          link: "https://maps.app.goo.gl/CW8EbVCQmuw8wUB76",
          icon: Icons.Location,
        },
        {
          title: "515 W Pender St Vancouver, BC V6B 6H5",
          link: "https://maps.app.goo.gl/nt8qqf2CFPewBCKU8",
          icon: Icons.Location,
        },
      ],
    }
  ];
  return (
    <div className="flex flex-row flex-wrap justify-between items-start gap-6 w-full">
      {quickLink.map((item, idx) => (
        <div
          key={idx + item.label}
          className="w-fit flex flex-col space-y-5 items-start text-background"
        >
          <span className="text-sm">{item.label}</span>
          
          {item.label === "Services" ? (
            <div className="flex flex-row gap-x-8 md:gap-x-12 xl:gap-x-16 items-start opacity-60">
              <div className="flex flex-col space-y-2.5 items-start">
                {item.linkList.slice(0, 5).map((subItem, sIdx) => (
                  <Link key={sIdx} href={subItem.link} className="text-sm hover:text-white transition-colors duration-200">
                    {subItem.title}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col space-y-2.5 items-start">
                {item.linkList.slice(5).map((subItem, sIdx) => (
                  <Link key={sIdx + 5} href={subItem.link} className="text-sm hover:text-white transition-colors duration-200">
                    {subItem.title}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col space-y-2.5 items-start opacity-60">
              {item.linkList.map((subItem, idx) =>
                subItem?.icon ? (
                  <Link
                    key={idx}
                    href={subItem.link}
                    className="text-sm flex items-center gap-2 w-[198px] md:w-[214px] xl:w-[313px] hover:text-white transition-colors duration-200"
                  >
                    <Image
                      src={subItem.icon}
                      alt={subItem.title}
                      className="w-6 h-6"
                    />
                    <span>{subItem.title}</span>
                  </Link>
                ) : (
                  <Link key={idx} href={subItem.link} className="text-sm hover:text-white transition-colors duration-200">
                    {subItem.title}
                  </Link>
                )
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default QuickLink;
