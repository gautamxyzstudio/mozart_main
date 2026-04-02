import { getBlog, getBlogDetailsBySlug } from "@/src/api/blog/blogApi";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useGetBlogDetailsBySlug = (slug: string) => {
  return useQuery({
    queryKey: ["blog-detail", slug],
    queryFn: () => getBlogDetailsBySlug(slug),
  });
};

export const useGetBlog = (
  page: number,
  limit: number,
  category: string = "",
) => {
  return useQuery({
    queryKey: ["blog", page, limit, category],
    queryFn: () => getBlog(page, limit, category),
  });
};

export const useGetInfiniteBlog = (limit: number, category: string = "") => {
  return useInfiniteQuery({
    queryKey: ["blog-infinite", limit, category],
    queryFn: ({ pageParam = 1 }) => getBlog(pageParam, limit, category),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.page < Math.ceil(lastPage.total / lastPage.limit)) {
        return lastPage.page + 1;
      }
      return undefined;
    },
  });
};
