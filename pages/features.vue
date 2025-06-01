<template>
  <div class="space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Header -->
    <div class="text-center max-w-3xl mx-auto">
      <h1 class="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">DeepRankAI Features</h1>
      <p class="text-gray-600 dark:text-gray-300 mb-8">Start solving your marketing challenges today with 55+ tools and reports on DeepRankAI.</p>
      <button class="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-500">
        Get Started for Free
      </button>
    </div>


    <!-- Feature Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="feature in features" :key="feature.title" 
           class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <div class="h-32 bg-blue-50 dark:bg-white-900 rounded-lg mb-4 flex items-center justify-center">
          <img :src="feature.image" :alt="feature.title" class="h-24 w-24 object-contain" />
        </div>
        <h3 class="font-medium mb-2 text-gray-800 dark:text-gray-100">{{ feature.title }}</h3>
        <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">{{ feature.description }}</p>
        <div class="flex justify-between items-center">
          <button class="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
            Learn more
          </button>
          <span class="text-xs text-gray-500 dark:text-gray-400">${{ feature.price }}/mo</span>
        </div>
      </div>
    </div>

    <!-- Bottom CTA -->
    <div class="bg-purple-100 dark:bg-purple-900 rounded-lg p-8 text-center">
      <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Get it all in one with DeepRankAI</h2>
      <button class="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-600">
        Get free trial
      </button>
    </div>

    <!-- All Tools Section -->
    <div>
      <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">All tools</h2>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div v-for="category in categories" :key="category.title">
          <h3 class="font-medium mb-4 text-gray-800 dark:text-gray-100">{{ category.title }}</h3>
          <ul class="space-y-2">
            <li v-for="tool in category.tools" :key="tool" 
                class="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer">
              {{ tool }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const features = [
  {
    title: 'Keyword Research',
    description: 'Get high-performing keywords for your content and PPC campaigns.',
    image: '/images/keyword-research.svg',
  },
  {
    title: 'On-page SEO',
    description: 'Get ideas to improve your website\'s on-page SEO.',
    image: '/images/on-page-seo.svg',
  },
  {
    title: 'Competitor Analysis',
    description: 'Boost your performance by analyzing competitors.',
    image: '/images/competitor-analysis.svg',
  },
  {
    title: 'Content Marketing',
    description: 'Develop a powerful content strategy with data-driven insights.',
    image: '/images/content-marketing.svg',
  },
  {
    title: 'Local SEO',
    description: 'Optimize your site for local search results.',
    image: '/images/local-seo.svg',
  },
  {
    title: 'Rank Tracking',
    description: 'Track changes of your target keywords in real-time.',
    image: '/images/rank-tracking.svg',
  }
]

const categories = [
  {
    title: 'SEO',
    tools: [
      'Keyword Research',
      'On-Page SEO',
      'Link Building',
      'Rank Tracking',
      'Site Audit',
      'Backlink Analytics'
    ]
  },
  {
    title: 'Content',
    tools: [
      'Topic Research',
      'SEO Writing Assistant',
      'Content Audit',
      'Post Tracking',
      'Brand Monitoring'
    ]
  },
  {
    title: 'Competitive Research',
    tools: [
      'Traffic Analytics',
      'Market Explorer',
      'Organic Research',
      'Advertising Research'
    ]
  },
  {
    title: 'Social Media',
    tools: [
      'Social Media Poster',
      'Social Media Tracker',
      'Social Media Ads',
      'Social Media Analytics'
    ]
  }
]
</script>
