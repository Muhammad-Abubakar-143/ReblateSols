
const sitemap = require('sitemap');
const hostname = 'https://reblatesols.com/';

const urls = [
  { url: '/', changefreq: 'daily', priority: 1 },
  { url: '/portfolio', changefreq: 'daily', priority: 0.8 },
  { url: '/services', changefreq: 'daily', priority: 0.8 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  // Add additional pages here
];

const sitemapInstance = sitemap.createSitemap({
  hostname,
  urls,
});
