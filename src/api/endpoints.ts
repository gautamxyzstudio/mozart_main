const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
export const EndPoint = {
  BLOG: (page: number, limit: number, category: string = "") =>
    `${BASE_URL}/api/blogs?populate=*&pagination[page]=${page}&pagination[pageSize]=${limit}&category=${category}`,

  BLOG_BY_SLUG: (slug: string) => `${BASE_URL}/api/blogs/${slug}`,
};
