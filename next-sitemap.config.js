/** @type {import('next-sitemap').IConfig} */
const siteUrl = process.env.NEXT_PUBLIC_BASE_MAIN_URL;

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  sitemapBaseFileName: 'page-sitemap',
  generateIndexSitemap: false,
  exclude: ['/blog-sitemap.xml', '/sitemap.xml', '/sitemap_index.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [
      `${siteUrl}/sitemap_index.xml`,
    ],
  },
  transform: async (config, path) => {
    // Custom priority and changefreq per page
    const customPages = {
      '/': { priority: 1.0, changefreq: 'daily' },
      '/services': { priority: 0.9, changefreq: 'daily' },
      '/artists': { priority: 0.9, changefreq: 'daily' },
      '/blog': { priority: 0.9, changefreq: 'daily' },
      '/about': { priority: 0.9, changefreq: 'daily' },
      '/our-story': { priority: 0.7, changefreq: 'monthly' },
      '/our-vision': { priority: 0.7, changefreq: 'monthly' },
      '/contact': { priority: 0.7, changefreq: 'monthly' },
      '/terms-and-conditions': { priority: 0.7, changefreq: 'monthly' },
    };

    const custom = customPages[path] || {};

    return {
      loc: path,
      changefreq: custom.changefreq || config.changefreq || 'weekly',
      priority: custom.priority ?? config.priority ?? 0.7,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
