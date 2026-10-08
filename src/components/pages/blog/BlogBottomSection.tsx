"use client";

import { TransformedBlog } from "@/src/api/blog/blogApi";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { getBlogCategory, getBlogImage } from "./blogUtils";

const CalendarIcon = ({ className = "w-3.5 h-3.5 opacity-70 shrink-0" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const ArrowRightIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    />
  </svg>
);

const ArrowRightSmallIcon = () => (
  <svg
    className="w-3.5 h-3.5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    />
  </svg>
);

interface BlogBottomSectionProps {
  data: TransformedBlog[];
  isLoading: boolean;
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  onViewAll: () => void;
}

const BlogBottomSection = ({
  data,
  isLoading,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  onViewAll,
}: BlogBottomSectionProps) => {
  const recentBlogs = data && data.length > 3 ? data.slice(3) : [];

  if (!isLoading && (!data || data.length <= 3)) {
    return null;
  }

  return (
    <section className="w-full py-10 sm:py-12 md:py-18 px-4 sm:px-6 md:px-12 xl:px-24 bg-[#F8F9FA] border-t border-gray-100">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#111111] tracking-tight">
          Recent <span className="text-[#6739B7]">Blogs</span>
        </h2>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-7">
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="w-full h-80 rounded-[18px] sm:rounded-[22px] bg-white p-3.5 sm:p-4 border border-gray-100 shadow-sm animate-pulse flex flex-col justify-between"
              >
                <div className="w-full aspect-[16/9] bg-gray-200 rounded-xl mb-3" />
                <div className="h-4 bg-gray-200 rounded w-1/3 mb-2" />
                <div className="h-6 bg-gray-200 rounded w-full mb-4" />
                <div className="h-4 bg-gray-200 rounded w-1/4" />
              </div>
            ))
          : recentBlogs.map((blog: TransformedBlog, idx: number) => {
              const globalIndex = idx + 3;
              return (
                <Link
                  href={`/blog/${blog.blogSlug}`}
                  key={blog.id || idx}
                  className="bg-white rounded-[18px] sm:rounded-[22px] p-3.5 sm:p-4 md:p-5 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(103,57,183,0.12)] hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    {/* Image Wrap - 16:9 ratio to perfectly fit banners without cropping */}
                    <div className="relative w-full aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 mb-3 sm:mb-4">
                      <Image
                        src={getBlogImage(blog, globalIndex)}
                        alt={blog.title || "Blog Post"}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Meta Data */}
                    <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-gray-500 font-medium mb-2">
                      <CalendarIcon />
                      <span>
                        {dayjs(blog.blogDate || blog.createdAt).format(
                          "DD MMM, YYYY"
                        )}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-[15px] sm:text-base md:text-[18px] font-bold text-[#111111] group-hover:text-[#6739B7] transition-colors duration-300 line-clamp-2 leading-snug mb-3 sm:mb-4">
                      {blog.title}
                    </h3>
                  </div>

                  {/* Card Footer: Category Pill and Arrow Icon Button */}
                  <div className="flex items-center justify-between pt-2 border-t border-gray-50 mt-auto">
                    <span className="inline-block bg-[#F4EBFF] text-[#6739B7] text-[11px] sm:text-xs font-semibold px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full truncate max-w-[70%]">
                      {getBlogCategory(blog)}
                    </span>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gray-200 text-gray-400 group-hover:border-[#6739B7] group-hover:bg-[#6739B7] group-hover:text-white flex items-center justify-center transition-all duration-300 ml-auto flex-shrink-0">
                      <ArrowRightSmallIcon />
                    </div>
                  </div>
                </Link>
              );
            })}
      </div>

      {/* Load More Button */}
      {hasNextPage && (
        <div className="flex justify-center mt-10 sm:mt-12 md:mt-16">
          <button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className="bg-[#6739B7] hover:bg-[#53289e] active:scale-95 text-white px-7 py-3 sm:px-9 sm:py-3.5 rounded-full font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isFetchingNextPage ? (
              <>
                <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Loading...</span>
              </>
            ) : (
              <span>Load More</span>
            )}
          </button>
        </div>
      )}
    </section>
  );
};

export default BlogBottomSection;
