"use client";

import BlogTopSection from "./BlogTopSection";
import BlogBottomSection from "./BlogBottomSection";
import { useGetBlog } from "@/src/hooks/useBlog";

const BlogListVeiw = () => {
  const { data, isLoading } = useGetBlog(1, 10);
  return (
    <section className="w-full">
      <BlogTopSection data={data?.data} isLoading={isLoading} />
      <BlogBottomSection data={data?.data} isLoading={isLoading} />
    </section>
  );
};

export default BlogListVeiw;
