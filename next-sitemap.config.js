/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://www.camfor.com.au",
  outDir: "out",
  generateRobotsTxt: true,
  changefreq: "monthly",
  priority: 0.7,
  sitemapSize: 5000,
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
  },
  transform: async (config, path) => {
    // Custom priority for key pages
    const priorities = {
      "/": 1.0,
      "/services": 0.9,
      "/about": 0.8,
      "/contact": 0.8,
      "/projects": 0.6,
    };

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};

module.exports = config;
