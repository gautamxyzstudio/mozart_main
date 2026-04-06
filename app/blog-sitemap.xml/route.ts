import { getServerSideSitemap, ISitemapField } from "next-sitemap";

export async function GET() {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_MAIN_URL || "http://localhost:3000";
  const fields: ISitemapField[] = [];

  try {
    if (backendUrl) {
      const res = await fetch(
        `${backendUrl}/api/blogs?populate=*&pagination[page]=1&pagination[pageSize]=1000`
      );
      const data = await res.json();
      
      if (data && data.data) {
        data.data.forEach((item: any) => {
          fields.push({
            loc: `${baseUrl}/blog/${item.attributes.slug}`,
            lastmod: item.attributes.updatedAt || new Date().toISOString(),
            priority: 0.7,
            changefreq: "daily",
          });
        });
      }
    }
  } catch (err) {
    console.error("Error fetching blogs for blog-sitemap:", err);
  }

  // Fallback to avoid empty sitemap crash
  if (fields.length === 0) {
    fields.push({
      loc: `${baseUrl}/blog`,
      lastmod: new Date().toISOString(),
      priority: 0.7,
      changefreq: "daily",
    });
  }

  return getServerSideSitemap(fields);
}
