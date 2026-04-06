import { getServerSideSitemapIndex } from "next-sitemap";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_MAIN_URL;

  return getServerSideSitemapIndex([
    `${baseUrl}/page-sitemap.xml`,
    `${baseUrl}/blog-sitemap.xml`,
  ]);
}
