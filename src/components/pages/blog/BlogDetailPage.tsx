"use client";
import { Icons, Images } from "@/public/exports";
import { useGetBlog, useGetBlogDetailsBySlug } from "@/src/hooks/useBlog";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import dayjs from "dayjs";
import CustomButton from "../../atom/button/CustomButton";
import { useRouter } from "next/navigation";
import { TransformedBlog } from "@/src/api/blog/blogApi";

interface TOCItem {
  label: string;
  id: string;
}

const BlogCard = ({ props }: { props: TransformedBlog }) => {
  return (
    <div className="flex flex-col group h-full p-3 rounded-xl border border-background bg-primary20">
      {/* Image Wrap */}
      <div className="w-full aspect-[1.4/1] rounded-xl overflow-hidden mb-5 bg-gray-100">
        <Image
          src={props.banner || props.smallBanner || Images.RecentBlog}
          alt={props.title}
          width={400}
          height={300}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
      </div>
      <span className="text-primary text-sm">
        {dayjs(props.blogDate).format("DD MMM, YYYY")}
      </span>
      {/* Title */}
      <h3 className="text-black font-bold text-[19px] md:text-[21px] leading-[1.3] group-hover:text-primary transition-colors duration-300 line-clamp-2">
        {props.title}
      </h3>
    </div>
  );
};

const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
};

const BlogDetailPage = ({ slug }: { slug: string }) => {
  const router = useRouter();
  const { data, isLoading } = useGetBlogDetailsBySlug(slug);

  const [activeIndex, setActiveIndex] = useState(0);

  const blogData = data?.blogData;

  const { tocItems, processedContent } = useMemo(() => {
    if (typeof window === "undefined" || !blogData) {
      return { tocItems: [], processedContent: blogData || "" };
    }

    const parser = new DOMParser();
    const doc = parser.parseFromString(blogData, "text/html");
    const headings = doc.querySelectorAll("h2, h3");
    const items: TOCItem[] = [];

    headings.forEach((heading, index) => {
      const text = heading.textContent || "";
      let id = heading.id;
      if (!id) {
        id = slugify(text) || `heading-${index}`;
        heading.id = id;
      }
      items.push({ label: text, id });
    });

    return { tocItems: items, processedContent: doc.body.innerHTML };
  }, [blogData]);

  const handleScroll = (id: string, index: number) => {
    setActiveIndex(index);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const { data: recentBlogsData } = useGetBlog(1, 10);

  const recentBlogs = (recentBlogsData?.data || []).filter(
    (item) => String(item.id) !== String(data?.id),
  );

  return (
    <>
      <section className="xl:max-w-screen-2xl mx-auto px-6 xl:px-25 md:px-13 py-12 lg:py-20 ">
        <div className="w-full">
          <nav className="mb-8 md:mt-14 mt-5 ">
            <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-lg md:text-xs text-[10px] font-medium text-gray-500">
              <Link href="/" className="hover:text-primary cursor-pointer">
                Home
              </Link>
              <span>›</span>
              <Link href="/blog" className="hover:text-primary cursor-pointer">
                Blog
              </Link>
              <span>›</span>
              <span className="text-primary">{data?.title}</span>
            </div>
          </nav>

          {/* ===== 2. FEATURED IMAGE (FULL WIDTH) ===== */}
          <div className="flex items-center justify-center mb-10">
            {isLoading ? (
              <div className="w-full xl:h-150 md:h-120 h-80 rounded-3xl bg-secondary animate-pulse"></div>
            ) : (
              <Image
                src={data?.banner || data?.smallBanner || ""}
                alt="AI DJ Mixer"
                width={1400}
                height={1400}
                className="rounded-xl w-[90%] h-[70%] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)]"
              />
            )}
          </div>

          {/* ===== 3. CONTENT & SIDEBAR ROW ===== */}
          <div className="flex flex-col xl:flex-row gap-12 items-start">
            <div className="xl:w-[68%] w-full">
              <div className="flex flex-col items-start mb-4 w-full">
                <span className="text-black font-normal leading-6 text-base tracking-wider">
                  {data?.category.map((item: string) => item).join(", ")}
                </span>
                <div className="w-full flex flex-row gap-x-2 items-center justify-end ">
                  <span className="w-8 h-px bg-[#111]"></span>
                  <span className="text-primary text-sm">
                    {dayjs(data?.blogDate).format("DD MMM, YYYY")}
                  </span>
                </div>
              </div>

              <h1 className="md:text-4xl text-2xl xl:text-5xl font-medium text-foreground mb-8 ">
                {data?.title}
              </h1>

              {/* Content Body */}
              <div
                className="w-full __html"
                dangerouslySetInnerHTML={{
                  __html: processedContent || data?.blogData || "",
                }}
              ></div>
            </div>

            {/* ================= RIGHT SIDEBAR ================= */}
            <aside className="xl:w-[46%] xl:block md:hidden hidden  w-full sticky top-5">
              <div className="space-y-8">
                {/* TOC Card */}
                <div className="bg-[#F9F9F9] rounded-2xl p-5 border border-gray-100">
                  <h3 className="text-[20px] font-medium text-[#2E2E2E] leading-7 pb-4">
                    In this article
                  </h3>
                  <ul className="space-y-2.5">
                    {tocItems.map((item, index) => (
                      <li
                        key={item.id}
                        onClick={() => handleScroll(item.id, index)}
                        className=" cursor-pointer flex  gap-3"
                      >
                        <div
                          className={` h-8 w-1 rounded-full shrink-0 transition-colors ${
                            activeIndex === index
                              ? "bg-primary"
                              : "bg-transparent "
                          }`}
                        />
                        <span
                          className={`text-sm transition-colors flex items-center ${
                            activeIndex === index
                              ? "text-primary font-medium"
                              : "text-black hover:text-black"
                          }`}
                        >
                          {item.label}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Social Share Box */}
                  <div className="mt-7 relative rounded-xl p-5 text-white overflow-hidden min-h-24.75 w-107.5 flex flex-col justify-center">
                    {/* Background Image */}
                    <Image
                      src={Images.BgImg}
                      alt="Social Background"
                      fill
                      className="rounded-[10px]"
                    />

                    <div className="absolute inset-0 bg-black/20 -z-10" />

                    <p className="text-base font-normal mb-4 relative z-10">
                      Share with our community!
                    </p>

                    <div className="flex gap-4 relative z-10">
                      {[
                        {
                          icon: Icons.Facebook2,
                          link: "https://www.facebook.com/people/Amozart-Official/61578529725247",
                        },
                        {
                          icon: Icons.linkedIn2,
                          link: "https://www.linkedin.com/company/amozart",
                        },
                        {
                          icon: Icons.Twitter2,
                          link: "https://x.com/AmozartOfficial",
                        },
                      ].map((item, idx) => (
                        <Link href={item.link} key={idx}>
                          <Image
                            src={item.icon}
                            alt={item.link + idx}
                            className="w-full h-full"
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      {recentBlogs.length > 0 && (
        <div className="mt-10 md:mt-16 xl:mt-25 overflow-hidden lg:mx-0 bg-secondary xl:px-25 xl:py-31 md:px-16 md:py-20 px-6 py-10">
          <div className="flex flex-row items-center justify-between w-full mb-8 md:mb-14">
            <h3 className="xl:text-[64px] md:text-5xl text-2xl font-semibold">
              Latest Blog
            </h3>
            <CustomButton
              label="View All Blogs"
              buttonType="primary"
              onClick={() => router.push("/blog")}
              customClasses="px-6 py-3 md:px-8 md:py-3 !rounded-2xl text-[14px] md:text-[18px] font-medium"
            />
          </div>

          <div className="flex flex-nowrap lg:grid lg:grid-cols-3 overflow-x-auto lg:overflow-x-visible no-scrollbar gap-5 md:gap-7 lg:gap-[30px] h-[360px] md:h-[380px] lg:h-[400px] items-center">
            {recentBlogs.slice(0, 3).map((item) => (
              <Link
                key={item.id}
                href={`/blog/${item.blogSlug || item.title.replace(/ /g, "-")}`}
                className="shrink-0 snap-center transition-all duration-300 w-[78vw] sm:w-[55vw] md:w-[45vw] lg:w-full h-full"
              >
                <div className="transform transition-transform duration-300 hover:scale-[1.02] h-full w-full">
                  <BlogCard props={item} />
                </div>
              </Link>
            ))}
          </div>

          <div className="w-full flex justify-center mt-6 md:mt-12 lg:mt-16 px-6"></div>
        </div>
      )}
    </>
  );
};

export default BlogDetailPage;
