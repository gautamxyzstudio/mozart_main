"use client";

import BlogTopSection from "./BlogTopSection";
import BlogBottomSection from "./BlogBottomSection";
import { useGetInfiniteBlog } from "@/src/hooks/useBlog";
import { useMemo, useState } from "react";

const BlogListVeiw = () => {
  const [category, setCategory] = useState("");
  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetInfiniteBlog(10, category);

  const blogs = useMemo(() => {
    return data?.pages.flatMap((page) => page.data) || [];
  }, [data]);

  return (
    <section className="w-full">
      <BlogTopSection
        data={blogs}
        isLoading={isLoading}
        setCategory={setCategory}
      />
      <BlogBottomSection
        data={blogs}
        isLoading={isLoading}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />
    </section>
  );
};

export default BlogListVeiw;
