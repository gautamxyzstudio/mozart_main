"use client";

import BlogTopSection from "./BlogTopSection";
import BlogBottomSection from "./BlogBottomSection";
import { useGetInfiniteBlog } from "@/src/hooks/useBlog";
import { useMemo, useState } from "react";

const BlogListVeiw = () => {
  const [activeCategory, setActiveCategory] = useState("General");
  const queryCategory = activeCategory === "General" ? "" : activeCategory;

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetInfiniteBlog(9, queryCategory);

  const blogs = useMemo(() => {
    return data?.pages.flatMap((page) => page.data) || [];
  }, [data]);

  const handleCategorySelect = (selectedCat: string) => {
    setActiveCategory(selectedCat);
  };

  const handleViewAll = () => {
    setActiveCategory("General");
  };

  return (
    <div className="w-full min-h-screen bg-white">
      <BlogTopSection
        data={blogs}
        isLoading={isLoading}
        activeCategory={activeCategory}
        onCategorySelect={handleCategorySelect}
      />
      <BlogBottomSection
        data={blogs}
        isLoading={isLoading}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        onViewAll={handleViewAll}
      />
    </div>
  );
};

export default BlogListVeiw;
