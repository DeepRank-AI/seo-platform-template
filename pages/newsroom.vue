<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-3xl font-bold mb-8 text-gray-900">Newsroom</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="article in news" 
        :key="article.id" 
        class="bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow"
      >
        <div class="p-6">
          <span class="text-sm text-blue-600 font-medium">{{ article.category }}</span>
          <h2 class="mt-2 text-lg font-semibold text-gray-900">{{ article.title }}</h2>
          <p class="mt-2 text-sm text-gray-600">{{ article.excerpt }}</p>
          <div class="mt-4 flex items-center justify-between">
            <span class="text-sm text-gray-500">{{ article.date }}</span>
            <button class="text-sm text-blue-600 hover:text-blue-700 font-medium">Read more</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const news = [
  {
    id: 1,
    category: 'Product Update',
    title: 'Introducing Advanced Keyword Clustering',
    excerpt: 'New feature helps organize keywords into meaningful groups for better content planning.',
    date: 'March 15, 2024'
  },
  {
    id: 2,
    category: 'Company News',
    title: 'DeepRankAI Reaches 1 Million Users',
    excerpt: 'A major milestone in our mission to democratize SEO tools.',
    date: 'March 10, 2024'
  },
  {
    id: 3,
    category: 'Industry Insights',
    title: 'The Future of SEO in 2024',
    excerpt: 'Our analysis of emerging trends and predictions for the coming year.',
    date: 'March 5, 2024'
  }
]
</script>
