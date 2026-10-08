import { TransformedBlog } from "@/src/api/blog/blogApi";

export const blogCategories = [
  "General",
  "Music Distribution",
  "Music Promotion",
  "YouTube Content ID",
  "Global Chart",
  "Royalty & Rights Management",
  "Music Label",
  "YouTube Channel & Content Management",
  "Artist Management",
];

export const getBlogCategory = (blog?: TransformedBlog): string => {
  if (!blog?.category) return "Music Business";
  if (Array.isArray(blog.category)) {
    const nonGeneral = blog.category.find(
      (c) => c && c.trim().toLowerCase() !== "general"
    );
    return nonGeneral || blog.category[0] || "General";
  }
  return typeof blog.category === "string" ? blog.category : "General";
};

export const getBlogImage = (
  blog?: TransformedBlog,
  index: number = 0
): string => {
  if (blog?.banner && blog.banner.trim() !== "") return blog.banner;
  if (blog?.smallBanner && blog.smallBanner.trim() !== "") return blog.smallBanner;

  if (index === 0) return "/blogImg.webp";
  if (index === 1) return "/blogImg2.webp";
  if (index === 2) return "/blogImg3.webp";

  const recentIndex = ((index - 3) % 9) + 1;
  return `/recentblog${recentIndex}.webp`;
};
