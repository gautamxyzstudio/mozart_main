const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
export const EndPoint = {
  BLOG: (
    page: number,
    limit: number,
    search: string = "",
    category: string = "",
  ) =>
    `${BASE_URL}/api/blogs?populate=*&sort=date:asc&pagination[page]=${page}&pagination[pageSize]=${limit}&search=${search}&category=${category}`,

  BLOG_BY_SLUG: (slug: string) => `${BASE_URL}/api/blogs/${slug}`,
};
