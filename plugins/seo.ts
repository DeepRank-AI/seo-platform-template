export default defineNuxtPlugin(() => {
  const pageMeta = {
    '/': {
      title: 'SEO Analytics Dashboard',
      description: 'Get a comprehensive overview of your website\'s SEO performance with DeepRankAI\'s analytics dashboard.'
    },
    '/domain-overview': {
      title: 'Domain Overview & Analysis',
      description: 'Analyze any domain\'s online presence, traffic, and SEO metrics with detailed insights and competitor comparison.'
    },
    '/traffic-analytics': {
      title: 'Traffic Analytics',
      description: 'Deep dive into your website traffic patterns, user behavior, and engagement metrics.'
    },
    '/niche-traffic': {
      title: 'Industry Traffic Analysis',
      description: 'Analyze traffic patterns across different industries and benchmark against competitors.'
    },
    '/market-explorer': {
      title: 'Market Explorer',
      description: 'Research and analyze market opportunities, identify competitors, and track industry trends.'
    },
    '/organic-traffic': {
      title: 'Organic Traffic Insights',
      description: 'Track and analyze your organic search traffic, rankings, and keyword performance.'
    },
    '/keyword-research': {
      title: 'Keyword Research Tool',
      description: 'Discover high-performing keywords and optimize your content strategy with our advanced keyword research tools.'
    },
    '/keyword-magic': {
      title: 'Keyword Magic Tool',
      description: 'Find millions of keyword ideas and opportunities with our comprehensive keyword suggestion tool.'
    },
    '/backlink-tools': {
      title: 'Backlink Analytics',
      description: 'Analyze your backlink profile, track new links, and identify link building opportunities.'
    },
    '/link-building': {
      title: 'Link Building Tools',
      description: 'Discover and track link building opportunities to improve your website\'s authority.'
    },
    '/on-page-seo': {
      title: 'On-Page SEO Checker',
      description: 'Optimize your web pages with actionable on-page SEO recommendations and best practices.'
    },
    '/site-audit': {
      title: 'Site Audit Tool',
      description: 'Comprehensive technical SEO audit to identify and fix issues affecting your website\'s performance.'
    },
    '/local-seo': {
      title: 'Local SEO Tools',
      description: 'Optimize your local search presence and manage business listings across the web.'
    },
    '/contacts': {
      title: 'Contact Us',
      description: 'Get in touch with our team for support and inquiries.'
    },
    '/about': {
      title: 'About DeepRankAI',
      description: 'Learn more about DeepRankAI and how we help you grow your website\'s SEO performance.'
    },
    '/affiliate': {
      title: 'Affiliate Program',
      description: 'Join our affiliate program and start earning by promoting DeepRankAI.'
    },
    '/features': {
      title: 'Features',
      description: 'Explore the powerful features of DeepRankAI to enhance your SEO strategy.'
    },
    '/integrations': {
      title: 'Integrations',
      description: 'Discover integrations with your favorite tools to supercharge your SEO workflow.'
    },
    '/pricing': {
      title: 'Pricing Plans',
      description: 'Choose the perfect plan for your needs and get started with DeepRankAI today.'
    },
    '/projects': {
      title: 'Projects Dashboard',
      description: 'Manage and track the SEO performance of your projects effectively.'
    },
    '/newsroom': {
      title: 'Newsroom',
      description: 'Stay updated with the latest news and updates from DeepRankAI.'
    },
    '/settings': {
      title: 'Settings',
      description: 'Customize your DeepRankAI settings and preferences.'
    },
    '/stats': {
      title: 'Statistics',
      description: 'Analyze detailed SEO statistics to monitor your website\'s progress.'
    },
    '/listing-management': {
      title: 'Listing Management',
      description: 'Manage your business listings and enhance your local search presence.'
    },
    '/log-file-analyzer': {
      title: 'Log File Analyzer',
      description: 'Analyze server log files for SEO insights and optimization opportunities.'
    },
    '/position-tracking': {
      title: 'Position Tracking',
      description: 'Track keyword rankings and monitor your position in search results.'
    },
    '/rank-booster': {
      title: 'Rank Booster Tool',
      description: 'Boost your website rankings with actionable insights and strategies.'
    },
    '/seo-assistant': {
      title: 'SEO Assistant',
      description: 'Leverage AI-powered tools to optimize your website and improve performance.'
    },
    '/seo-features': {
      title: 'SEO Features',
      description: 'Explore the range of SEO tools and features available in DeepRankAI.'
    },
    '/website-performance': {
      title: 'Website Performance Insights',
      description: 'Monitor and enhance your website\'s performance with detailed metrics.'
    },
    '/ai/automated-reporting': {
      title: 'Automated Reporting',
      description: 'Generate comprehensive SEO reports automatically and save time.'
    },
    '/ai/competitive-analysis': {
      title: 'Competitive Analysis',
      description: 'Analyze competitors to uncover new opportunities and strategies.'
    },
    '/ai/content-roi': {
      title: 'Content ROI Analysis',
      description: 'Evaluate the ROI of your content and make data-driven decisions.'
    },
    '/ai/continuous-learning': {
      title: 'Continuous Learning',
      description: 'Leverage AI to continuously improve your SEO strategy over time.'
    },
    '/ai/conversion-attribution': {
      title: 'Conversion Attribution',
      description: 'Track the sources of conversions to optimize your marketing efforts.'
    },
    '/ai/data-collection': {
      title: 'AI Data Collection',
      description: 'Use AI-powered tools to collect and analyze data for better insights.'
    },
    '/ai/keyword-forecasting': {
      title: 'Keyword Forecasting',
      description: 'Predict keyword trends and stay ahead of your competitors.'
    },
    '/ai/predictive-roi': {
      title: 'Predictive ROI',
      description: 'Forecast the ROI of your campaigns with AI-powered predictions.'
    },
    '/ai/sentiment-analysis': {
      title: 'Sentiment Analysis',
      description: 'Analyze customer sentiment and improve your content strategy.'
    },
    '/ai/voice-visual-search': {
      title: 'Voice & Visual Search',
      description: 'Optimize your website for voice and visual search to capture new audiences.'
    }
  };

  addRouteMiddleware('seo', (to) => {
    const meta = pageMeta[to.path];
    if (meta) {
      useHead({
        title: meta.title,
        meta: [
          { name: 'description', content: meta.description },
          { property: 'og:title', content: `${meta.title} | DeepRankAI` },
          { property: 'og:description', content: meta.description },
          { name: 'twitter:title', content: `${meta.title} | DeepRankAI` },
          { name: 'twitter:description', content: meta.description }
        ]
      });
    }
  });
});
