import { Icons } from "@/public/exports";
import Image from "next/image";
import Link from "next/link";

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
          link: "/services/music-distribution",
        },
        {
          title: "YouTube Channel Management",
          link: "/services/youtube-channel-management",
        },
        {
          title: "YouTube Content ID",
          link: "/services/youtube-content-id",
        },
        {
          title: "Artist Management",
          link: "/services/artists-management",
        },
        {
          title: "Label Distribution",
          link: "/services/label-distribution",
        },
        {
          title: "Global Music Charts",
          link: "/services/global-music-charts",
        },
        {
          title: "Music Promotion",
          link: "/services/music-promotion",
        },
        {
          title: "Royalty-rights Management",
          link: "/services/royalty-rights-management",
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
          title:
            "Imperial Tower, CP 67, Sector 67, Sahibzada Ajit Singh Nagar, Punjab 160062",
          link: "https://maps.app.goo.gl/CW8EbVCQmuw8wUB76",
          icon: Icons.Location,
        },
        {
          title: "515 W Pender St Vancouver, BC V6B 6H5",
          link: "https://maps.app.goo.gl/nt8qqf2CFPewBCKU8",
          icon: Icons.Location,
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

          {item.label === "Services" ? (
            <div className="flex flex-row gap-x-8 md:gap-x-12 xl:gap-x-16 items-start opacity-60">
              <div className="flex flex-col space-y-2.5 items-start">
                {item.linkList.slice(0, 4).map((subItem, sIdx) => (
                  <Link
                    key={sIdx}
                    href={subItem.link}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {subItem.title}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col space-y-2.5 items-start">
                {item.linkList.slice(4).map((subItem, sIdx) => (
                  <Link
                    key={sIdx + 5}
                    href={subItem.link}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {subItem.title}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col space-y-2.5 items-start opacity-60">
              {item.linkList.map((subItem, idx) => (
                <Link
                  key={idx}
                  href={subItem.link}
                  className="text-sm hover:text-white transition-colors duration-200"
                >
                  {subItem.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default QuickLink;
