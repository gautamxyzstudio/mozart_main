import { getBlog, getBlogDetailsBySlug } from "@/src/api/blog/blogApi";
import { useQuery } from "@tanstack/react-query";

export const useGetBlogDetailsBySlug = (slug: string) => {
  return useQuery({
    queryKey: ["blog-detail", slug],
    queryFn: () => getBlogDetailsBySlug(slug),
  });
};

export const useGetBlog = (
  page: number,
  limit: number,
  search: string = "",
  category: string = "",
) => {
  return useQuery({
    queryKey: ["blog", page, limit, search, category],
    queryFn: () => getBlog(page, limit, search, category),
  });
};
