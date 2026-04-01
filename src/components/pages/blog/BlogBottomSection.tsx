/* eslint-disable @typescript-eslint/no-explicit-any */
import { TransformedBlog } from "@/src/api/blog/blogApi";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

const BlogBottomSection = ({
  data,
  isLoading,
}: {
  data: any;
  isLoading: boolean;
}) => {
  return (
    <section className="w-full py-16 px-6 md:px-12 xl:px-24 bg-[#F8F8F8]">
      {/* Header */}
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-[#111] font-bold text-[32px] md:text-[48px] tracking-tight">
          Recent Blogs
        </h2>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12">
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="flex-2 relative md:h-90 h-56 w-full rounded-[30px] bg-primary20 animate-pulse"
              />
            ))
          : data?.slice(3).map((blog: TransformedBlog) => (
              <Link
                href={`/blog/${blog.blogSlug}`}
                key={blog.id}
                className="flex flex-col group cursor-pointer"
              >
                {/* Image Wrap */}
                <div className="w-full aspect-[1.4/1] rounded-2xl overflow-hidden mb-5 bg-gray-100">
                  <Image
                    src={blog.smallBanner || ""}
                    alt={blog.title}
                    width={200}
                    height={350}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                </div>

                {/* Meta Data */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#666] text-[13px]">
                    {dayjs(blog.blogDate).format("DD MMM, YYYY")}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-black font-bold text-[19px] md:text-[21px] leading-[1.3] group-hover:text-primary transition-colors duration-300">
                  {blog.title}
                </h3>
              </Link>
            ))}
      </div>
    </section>
  );
};

export default BlogBottomSection;
