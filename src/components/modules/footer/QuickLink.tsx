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
        },
        {
          title: "Our Story",
          link: "/our-story",
        },
        {
          title: "Press & Media",
          link: "/media",
        },
        {
          title: "Contact Us",
          link: "/contact",
        },
      ],
    },
    {
      label: "Services",
      linkList: [
        {
          title: "Music Distribution",
          link: "/music-distribution",
        },
        {
          title: "Artist Management",
          link: "/artist-management",
        },
        {
          title: "Playlist Pitching",
          link: "/playlist-pitching",
        },
        {
          title: "Royalty Collection",
          link: "/royalty-collection",
        },
      ],
    },
    {
      label: "Resources",
      linkList: [
        {
          title: "Help Center",
          link: "/help-center",
        },
        {
          title: "FAQs",
          link: "/faqs",
        },
        {
          title: "Artist Guide",
          link: "/artist-guide",
        },
        {
          title: "Blog",
          link: "/blog",
        },
      ],
    },
    {
      label: "Legal",
      linkList: [
        {
          title: "Terms & Conditions",
          link: "/termsandconditions",
        },
        {
          title: "Privacy Policy",
          link: "/privacy-policy",
        },
        {
          title: "Copyright Policy",
          link: "/copyright-policy",
        },
        {
          title: "Cookie Policy",
          link: "/cookie-policy",
        },
      ],
    },
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
            {item.linkList.map((subItem, idx) => (
              <Link key={idx} href={subItem.link} className="text-sm">
                {subItem.title}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuickLink;
