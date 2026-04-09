import { Icons } from "@/public/exports";
import Image from "next/image";
import link from "next/link";
import Link from "next/link";
import React from "react";

const QuickLink = () => {
  const quickLink = [
    {
      label: "Company",
      linkList: [
        {
          title: "About AMozart",
          link: "/about",
          icon: undefined,
        },
        {
          title: "Our Story",
          link: "/our-story",
          icon: undefined,
        },
        {
          title: "Press & Media",
          link: "/media",
          icon: undefined,
        },
        {
          title: "Contact Us",
          link: "/contact",
          icon: undefined,
        },
      ],
    },
    {
      label: "Services",
      linkList: [
        {
          title: "Music Distribution",
          link: "/music-distribution",
          icon: undefined,
        },
        {
          title: "Artist Management",
          link: "/artist-management",
          icon: undefined,
        },
        {
          title: "Playlist Pitching",
          link: "/playlist-pitching",
          icon: undefined,
        },
        {
          title: "Royalty Collection",
          link: "/royalty-collection",
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
          <div className="flex flex-col space-y-2.5 items-start opacity-60">
          {item.linkList.map((subItem, idx) =>
              subItem?.icon ? (
                <Link
                  key={idx}
                  href={subItem.link}
                  className="text-sm flex items-center gap-2
                  w-[198px] md:w-[214px] xl:w-[313px]"
                >
                  <Image
                    src={subItem.icon}
                    alt={subItem.title}
                    className="w-6 h-6"
                  />
                  <span>{subItem.title}</span>
                </Link>
              ) : (
                <Link key={idx} href={subItem.link} className="text-sm">
                  {subItem.title}
                </Link>
              ),
            )}
 
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuickLink;
