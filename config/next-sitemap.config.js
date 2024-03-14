/** @type {import('next-sitemap').IConfig} */

const dev = process.env.NODE_ENV !== 'production';

module.exports = {
  siteUrl: dev ? 'http://localhost:3000' : process.env.NEXT_PUBLIC_SITE_URI,
  generateRobotsTxt: true, // (optional)
  sitemapSize: 7000,
};
