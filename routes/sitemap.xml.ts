import { defineEventHandler } from 'h3';

export default defineEventHandler(async (event) => {
  const { SitemapStream, streamToPromise } = require('sitemap');
  const { Readable } = require('stream');

  const pages = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'weekly', priority: 0.7 },
    { url: '/affiliate', changefreq: 'weekly', priority: 0.7 },
    { url: '/contacts', changefreq: 'weekly', priority: 0.7 },
    { url: '/features', changefreq: 'weekly', priority: 0.7 },
    { url: '/integrations', changefreq: 'weekly', priority: 0.7 },
    { url: '/pricing', changefreq: 'weekly', priority: 0.7 },
    { url: '/projects', changefreq: 'weekly', priority: 0.8 },
    { url: '/newsroom', changefreq: 'weekly', priority: 0.6 },
    { url: '/settings', changefreq: 'weekly', priority: 0.7 },
    { url: '/stats', changefreq: 'weekly', priority: 0.7 },
  ];

  // SEO Pages
  const seoPages = [
    '/domain-overview',
    '/traffic-analytics',
    '/niche-traffic',
    '/market-explorer',
    '/organic-traffic',
    '/keyword-research',
    '/keyword-magic',
    '/backlink-tools',
    '/link-building',
    '/listing-management',
    '/local-seo',
    '/log-file-analyzer',
    '/on-page-seo',
    '/position-tracking',
    '/rank-booster',
    '/seo-assistant',
    '/seo-features',
    '/site-audit',
    '/website-performance',
  ].map((url) => ({ url, changefreq: 'daily', priority: 0.8 }));

  // AI Pages
  const aiPages = [
    '/ai/automated-reporting',
    '/ai/competitive-analysis',
    '/ai/content-roi',
    '/ai/data-collection',
    '/ai/keyword-forecasting',
    '/ai/predictive-roi',
    '/ai/sentiment-analysis',
    '/ai/voice-visual-search',
  ].map((url) => ({ url, changefreq: 'weekly', priority: 0.7 }));

  // Combine all pages
  const allPages = [...pages, ...seoPages, ...aiPages];

  // Create a stream to write to
  const sitemap = new SitemapStream({ hostname: 'https://app.DeepRankAI.com' });

  // Write pages to sitemap
  for (const page of allPages) {
    sitemap.write(page);
  }

  sitemap.end();

  // Generate XML
  const xml = await streamToPromise(sitemap);
  event.node.res.setHeader('Content-Type', 'application/xml');
  return xml.toString();
});
