// SEO Training Dataset
export const seoDataset = {
  content_patterns: {
    high_performing: [
      {
        pattern: "comprehensive_guide",
        characteristics: [
          "2000+ words",
          "Clear heading hierarchy",
          "Table of contents",
          "Expert quotes",
          "Case studies",
          "Actionable steps",
          "Visual elements"
        ],
        example_structure: {
          introduction: "Problem statement + solution overview",
          body: "Step-by-step breakdown with examples",
          conclusion: "Summary + next steps"
        }
      },
      {
        pattern: "listicle",
        characteristics: [
          "Numbered sections",
          "Scannable format",
          "Consistent structure per item",
          "Supporting images",
          "Brief explanations"
        ]
      }
    ],
    title_formulas: [
      "How to [Achieve Result] in [Timeframe]",
      "[Number] Ways to [Solve Problem]",
      "The Ultimate Guide to [Topic]",
      "Why [Common Belief] is Wrong and What to Do Instead",
      "[Do Something] Like [Expert/Professional]"
    ]
  },
  
  seo_best_practices: {
    technical: {
      core_web_vitals: {
        lcp: "< 2.5 seconds",
        fid: "< 100 milliseconds",
        cls: "< 0.1"
      },
      url_structure: {
        patterns: [
          "category/subcategory/product",
          "blog/topic/post-title",
          "services/service-name"
        ],
        characteristics: [
          "Lowercase",
          "Hyphens for spaces",
          "No special characters",
          "Descriptive keywords"
        ]
      },
      schema_markup: {
        priority_types: [
          "Article",
          "Product",
          "LocalBusiness",
          "FAQPage",
          "HowTo"
        ]
      }
    },
    
    on_page: {
      title_tags: {
        max_length: 60,
        format: "[Primary Keyword] - [Secondary Keyword] | [Brand]",
        examples: [
          "Best SEO Tools 2024 - Top 10 Compared | DeepRankAI",
          "Local SEO Guide - Small Business Rankings | DeepRankAI"
        ]
      },
      meta_descriptions: {
        max_length: 155,
        elements: [
          "Primary keyword",
          "Unique value proposition",
          "Call to action"
        ]
      },
      heading_hierarchy: {
        h1: "Main topic (include primary keyword)",
        h2: "Major subtopics",
        h3: "Supporting points",
        h4: "Detailed subsections"
      }
    },
    
    content_optimization: {
      keyword_placement: {
        priority_locations: [
          "First 100 words",
          "At least one H2",
          "Image alt text",
          "Conclusion"
        ],
        density: {
          primary: "1.5-2.5%",
          secondary: "0.5-1.5%",
          lsi: "natural occurrence"
        }
      },
      content_length: {
        blog_post: "1500-2500 words",
        product_page: "1000-1500 words",
        category_page: "500-1000 words",
        landing_page: "1000-2000 words"
      }
    }
  },
  
  search_intent: {
    types: {
      informational: {
        indicators: ["how to", "what is", "guide", "tutorial"],
        content_format: "Educational content, step-by-step guides",
        examples: [
          "how to improve SEO",
          "what is domain authority"
        ]
      },
      navigational: {
        indicators: ["login", "download", "website name"],
        content_format: "Direct, clear pathways to specific pages",
        examples: [
          "repo booster login",
          "google analytics dashboard"
        ]
      },
      commercial: {
        indicators: ["best", "top", "review", "compare"],
        content_format: "Comparison tables, detailed reviews",
        examples: [
          "best SEO tools",
          "semrush vs ahrefs"
        ]
      },
      transactional: {
        indicators: ["buy", "price", "discount", "deal"],
        content_format: "Product pages, clear CTAs",
        examples: [
          "buy SEO software",
          "SEO tool pricing"
        ]
      }
    }
  },
  
  ranking_factors: {
    content_quality: {
      signals: [
        "Comprehensive coverage",
        "Expert authorship",
        "Regular updates",
        "Unique insights",
        "Original research"
      ],
      metrics: {
        dwell_time: "> 3 minutes",
        bounce_rate: "< 40%",
        pages_per_session: "> 2"
      }
    },
    user_experience: {
      mobile_first: [
        "Responsive design",
        "Touch-friendly elements",
        "Fast loading speed",
        "Readable text size"
      ],
      engagement: [
        "Clear navigation",
        "Logical content structure",
        "Interactive elements",
        "Fast site speed"
      ]
    },
    backlink_quality: {
      characteristics: [
        "Topical relevance",
        "Domain authority",
        "Natural anchor text",
        "Editorial context"
      ],
      red_flags: [
        "Spammy anchor text",
        "Low-quality domains",
        "Irrelevant context",
        "Paid links without disclosure"
      ]
    }
  }
}