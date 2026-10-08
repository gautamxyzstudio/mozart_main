"use client";

import { TransformedBlog } from "@/src/api/blog/blogApi";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { blogCategories, getBlogCategory, getBlogImage } from "./blogUtils";

const CalendarIcon = ({ className = "w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-80 shrink-0" }: { className?: string }) => (
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

const ArrowRightIcon = ({ className = "w-4 h-4 sm:w-5 sm:h-5" }: { className?: string }) => (
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
      strokeWidth={2.25}
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    />
  </svg>
);

interface BlogTopSectionProps {
  data: TransformedBlog[];
  isLoading: boolean;
  activeCategory: string;
  onCategorySelect: (category: string) => void;
}

const BlogTopSection = ({
  data,
  isLoading,
  activeCategory,
  onCategorySelect,
}: BlogTopSectionProps) => {
  return (
    <section className="w-full relative overflow-hidden pt-24 sm:pt-28 md:pt-36 lg:pt-40 pb-6 sm:pb-8 md:pb-12 bg-white">
      {/* Original Signature Diagonal Purple Gradient Beams */}
      <div className="absolute md:w-37 md:h-188.75 w-24 h-96 bg-[linear-gradient(180deg,rgba(103,57,183,0)_0%,rgba(103,57,183,0.35)_33.78%,rgba(103,57,183,0)_66.97%)] opacity-25 rotate-24 xl:mt-15.25 xl:ml-0 md:-mt-3 md:-ml-9 mt-4 left-0 pointer-events-none -z-10" />
      <div className="absolute md:w-37 md:h-188.75 w-24 h-96 bg-[linear-gradient(180deg,rgba(103,57,183,0)_0%,rgba(103,57,183,0.35)_33.78%,rgba(103,57,183,0)_66.97%)] opacity-25 xl:rotate-204 rotate-24 xl:-mt-44.5 xl:mr-10 md:-mt-3 md:mr-3.5 mt-6 right-0 pointer-events-none -z-10" />

      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#6739B7]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-0 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-[#9333EA]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="px-4 sm:px-6 md:px-12 xl:px-24 w-full flex flex-col gap-y-6 sm:gap-y-7 md:gap-y-9">
        {/* Header: Title and Subtitle */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 sm:gap-4 md:gap-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#111111] tracking-tight leading-tight">
            Our <span className="text-[#6739B7]">Blogs</span>
          </h1>
          <p className="text-[#666666] text-xs sm:text-sm md:text-[15px] font-normal max-w-sm md:text-right leading-relaxed">
            Insights, news and resources for artists, labels and the music industry.
          </p>
        </div>

        {/* Category Pill Filters (Smooth horizontal scroll on mobile, flex-wrap on desktop) */}
        <div className="w-full overflow-x-auto no-scrollbar py-1 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex flex-row md:flex-wrap items-center gap-2 sm:gap-2.5 md:gap-3.5 min-w-max md:min-w-0 md:justify-center">
            {blogCategories.map((cat, index) => {
              const isSelected =
                activeCategory === cat ||
                (activeCategory === "" && cat === "General");

              return (
                <button
                  key={index}
                  onClick={() => onCategorySelect(cat)}
                  className={`px-3.5 py-1.5 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none whitespace-nowrap ${
                    isSelected
                      ? "bg-[#6739B7] text-white shadow-md shadow-[#6739B7]/25"
                      : "bg-white text-[#222222] border border-[#E5E7EB] hover:border-[#6739B7]/50 hover:text-[#6739B7] hover:bg-[#FAF7FD]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Spotlight Grid */}
        <div className="w-full flex flex-col gap-4 sm:gap-6">
          {isLoading ? (
            /* Loading Skeletons */
            <div className="flex flex-col gap-4 sm:gap-6 w-full">
              <div className="w-full h-[280px] sm:h-[360px] md:h-[440px] rounded-[20px] sm:rounded-[24px] md:rounded-[32px] bg-[#1a0c30] animate-pulse" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="h-[220px] sm:h-[270px] rounded-[18px] sm:rounded-[22px] md:rounded-[26px] bg-[#140a26] animate-pulse" />
                <div className="h-[220px] sm:h-[270px] rounded-[18px] sm:rounded-[22px] md:rounded-[26px] bg-[#140a26] animate-pulse" />
              </div>
            </div>
          ) : data && data.length > 0 ? (
            <>
              {/* Main Featured Hero Card (data[0]) */}
              <Link
                href={`/blog/${data[0].blogSlug}`}
                className="relative w-full rounded-[20px] sm:rounded-[24px] md:rounded-[32px] overflow-hidden bg-gradient-to-br from-[#16082C] via-[#261048] to-[#3B156E] text-white p-5 sm:p-7 md:p-10 lg:p-12 border border-white/10 shadow-2xl transition-all duration-300 group hover:shadow-purple-900/30 block"
              >
                {/* Glow Effects inside card */}
                <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#8B5CF6]/25 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#6739B7]/30 rounded-full blur-3xl pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-center relative z-10">
                  {/* Left Column: Content */}
                  <div className="lg:col-span-6 flex flex-col justify-between h-full order-2 lg:order-1">
                    <div>
                      <span className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#7C3AED] text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider w-fit shadow-sm mb-2.5 sm:mb-4">
                        {getBlogCategory(data[0])}
                      </span>

                      <div className="flex items-center gap-1.5 sm:gap-2 text-white/80 text-xs sm:text-sm font-medium mb-2 sm:mb-3">
                        <CalendarIcon />
                        <span>
                          {dayjs(data[0].blogDate || data[0].createdAt).format(
                            "DD MMM, YYYY"
                          )}
                        </span>
                      </div>

                      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-extrabold text-white leading-snug sm:leading-[1.2] mb-2.5 sm:mb-4 group-hover:text-purple-200 transition-colors line-clamp-3">
                        {data[0].title}
                      </h2>

                      {data[0].metaDescr && (
                        <p className="text-white/70 text-xs sm:text-sm md:text-base line-clamp-2 leading-relaxed mb-4 sm:mb-6">
                          {data[0].metaDescr}
                        </p>
                      )}
                    </div>

                    {/* Circular Action Button */}
                    <div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-[#7C3AED] text-white flex items-center justify-center group-hover:scale-110 group-hover:bg-[#8B5CF6] transition-all duration-300 shadow-lg mt-1 sm:mt-2">
                      <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Right Column: Visual Graphic Banner */}
                  <div className="lg:col-span-6 w-full flex items-center justify-center order-1 lg:order-2">
                    <div className="relative w-full aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-[#1e0d38]">
                      <Image
                        src={getBlogImage(data[0], 0)}
                        alt={data[0].title || "Blog Feature"}
                        fill
                        sizes="(max-width: 1024px) 100vw, 600px"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Two Secondary Spotlight Cards (data[1] and data[2]) */}
              {(data[1] || data[2]) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {/* Secondary Card 1 */}
                  {data[1] && (
                    <Link
                      href={`/blog/${data[1].blogSlug}`}
                      className="relative rounded-[18px] sm:rounded-[22px] md:rounded-[26px] overflow-hidden bg-[#0e061c] border border-white/15 p-5 sm:p-6 md:p-8 min-h-[220px] sm:min-h-[260px] md:min-h-[290px] flex flex-col justify-between group cursor-pointer shadow-xl transition-all duration-300 hover:border-white/30 block"
                    >
                      {/* Background Image with High Visibility */}
                      <Image
                        src={getBlogImage(data[1], 1)}
                        alt={data[1].title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                      />
                      {/* Gentle readability gradients */}
                      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black/70 to-transparent z-1 pointer-events-none" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#090314] via-[#090314]/10 via-50% to-transparent z-1 pointer-events-none" />

                      {/* Top Bar */}
                      <div className="relative z-10">
                        <span className="inline-flex items-center px-3 py-1 sm:px-3.5 sm:py-1 rounded-full bg-[#7C3AED] text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-wider w-fit shadow-md">
                          {getBlogCategory(data[1])}
                        </span>
                      </div>

                      {/* Bottom Content */}
                      <div className="relative z-10 pt-6 sm:pt-8 md:pt-10">
                        <div className="flex items-center gap-1.5 text-white/90 text-[11px] sm:text-xs font-medium mb-1.5 sm:mb-2.5">
                          <CalendarIcon className="w-3.5 h-3.5 opacity-90 shrink-0" />
                          <span>
                            {dayjs(
                              data[1].blogDate || data[1].createdAt
                            ).format("DD MMM, YYYY")}
                          </span>
                        </div>
                        <div className="flex items-end justify-between gap-3 sm:gap-4">
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-white leading-snug line-clamp-2 group-hover:text-purple-200 transition-colors drop-shadow-sm">
                            {data[1].title}
                          </h3>
                          <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full border border-white/40 bg-black/30 backdrop-blur-xs text-white flex items-center justify-center group-hover:bg-[#7C3AED] group-hover:border-[#7C3AED] group-hover:scale-105 transition-all duration-300 flex-shrink-0 ml-1 sm:ml-2">
                            <ArrowRightIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  )}

                  {/* Secondary Card 2 */}
                  {data[2] && (
                    <Link
                      href={`/blog/${data[2].blogSlug}`}
                      className="relative rounded-[18px] sm:rounded-[22px] md:rounded-[26px] overflow-hidden bg-[#0e061c] border border-white/15 p-5 sm:p-6 md:p-8 min-h-[220px] sm:min-h-[260px] md:min-h-[290px] flex flex-col justify-between group cursor-pointer shadow-xl transition-all duration-300 hover:border-white/30 block"
                    >
                      {/* Background Image with High Visibility */}
                      <Image
                        src={getBlogImage(data[2], 2)}
                        alt={data[2].title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                      />
                      {/* Gentle readability gradients */}
                      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black/70 to-transparent z-1 pointer-events-none" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#090314] via-[#090314]/10 via-50% to-transparent z-1 pointer-events-none" />

                      {/* Top Bar */}
                      <div className="relative z-10">
                        <span className="inline-flex items-center px-3 py-1 sm:px-3.5 sm:py-1 rounded-full bg-[#7C3AED] text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-wider w-fit shadow-md">
                          {getBlogCategory(data[2])}
                        </span>
                      </div>

                      {/* Bottom Content */}
                      <div className="relative z-10 pt-6 sm:pt-8 md:pt-10">
                        <div className="flex items-center gap-1.5 text-white/90 text-[11px] sm:text-xs font-medium mb-1.5 sm:mb-2.5">
                          <CalendarIcon className="w-3.5 h-3.5 opacity-90 shrink-0" />
                          <span>
                            {dayjs(
                              data[2].blogDate || data[2].createdAt
                            ).format("DD MMM, YYYY")}
                          </span>
                        </div>
                        <div className="flex items-end justify-between gap-3 sm:gap-4">
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-white leading-snug line-clamp-2 group-hover:text-purple-200 transition-colors drop-shadow-sm">
                            {data[2].title}
                          </h3>
                          <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full border border-white/40 bg-black/30 backdrop-blur-xs text-white flex items-center justify-center group-hover:bg-[#7C3AED] group-hover:border-[#7C3AED] group-hover:scale-105 transition-all duration-300 flex-shrink-0 ml-1 sm:ml-2">
                            <ArrowRightIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  )}
                </div>
              )}
            </>
          ) : (
            <div className="w-full py-12 sm:py-16 text-center bg-gray-50 rounded-2xl border border-gray-100 flex flex-col items-center justify-center gap-3">
              <p className="text-gray-600 font-medium text-base sm:text-lg">
                No articles found in this category.
              </p>
              <button
                onClick={() => onCategorySelect("General")}
                className="text-[#6739B7] font-semibold text-sm hover:underline cursor-pointer"
              >
                View all articles
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogTopSection;
