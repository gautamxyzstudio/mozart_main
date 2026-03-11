import { Images } from "@/public/exports";
import Image from "next/image";
import React from "react";

const BlogBottomSection = () => {
  const blogs = [
    {
      id: 1,
      category: "Lifestyle",
      date: "17 Feb, 2024",
      title: "Breaking Free from Your Comfort Zone",
      img: Images.RecentBlog,
    },
    {
      id: 2,
      category: "Career",
      date: "17 Feb, 2024",
      title: "How to Stand Out in a Competitive Job Market",
      img: Images.RecentBlog2,
    },
    {
      id: 3,
      category: "Health",
      date: "17 Feb, 2024",
      title: "The Link Between Mental Health and Physical Health",
      img: Images.RecentBlog3,
    },
    {
      id: 4,
      category: "Lifestyle",
      date: "17 Feb, 2024",
      title: "Mastering the Art of Minimalist Living",
      img: Images.RecentBlog4,
    },
    {
      id: 5,
      category: "Career",
      date: "17 Feb, 2024",
      title: "The Future of Remote Work: Trends to Watch",
      img: Images.RecentBlog5,
    },
    {
      id: 6,
      category: "Health",
      date: "17 Feb, 2024",
      title: "Superfoods for a Stronger Immune System",
      img: Images.RecentBlog6,
    },
    {
      id: 7,
      category: "Music",
      date: "17 Feb, 2024",
      title: "Behind the Scenes: Producing a Global Hit",
      img: Images.RecentBlog7,
    },
    {
      id: 8,
      category: "Technology",
      date: "17 Feb, 2024",
      title: "Exploring the World of Web3 and Decentralization",
      img: Images.RecentBlog8,
    },
    {
      id: 9,
      category: "Creative",
      date: "17 Feb, 2024",
      title: "Finding Inspiration in Everyday Objects",
      img: Images.RecentBlog9,
    },
  ];

  return (
    <section className="w-full py-16 px-6 md:px-12 xl:px-24 bg-[#F8F8F8]">
      {/* Header */}
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-[#111] font-bold text-[32px] md:text-[48px] tracking-tight">
          Recent Blogs
        </h2>
        <button className="bg-[#6739B7] text-white px-8 py-2.5 rounded-full text-sm font-semibold hover:bg-[#532e94] transition-all active:scale-95">
          View All
        </button>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12">
        {" "}
        {blogs.map((blog) => (
          <div key={blog.id} className="flex flex-col group cursor-pointer">
            {/* Image Wrap */}
            <div className="w-full aspect-[1.4/1] rounded-2xl overflow-hidden mb-5 bg-gray-100">
              <Image
                src={blog.img}
                alt={blog.title}
                width={200}
                height={350}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
            </div>

            {/* Meta Data */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[#111] font-semibold text-[13px] uppercase tracking-wider">
                {blog.category}
              </span>
              <div className="w-8 h-[1.5px] bg-gray-300"></div>
              <span className="text-[#666] text-[13px]">{blog.date}</span>
            </div>

            {/* Title */}
            <h3 className="text-[#111] font-bold text-[19px] md:text-[21px] leading-[1.3] group-hover:text-[#6739B7] transition-colors duration-300">
              {blog.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogBottomSection;
