<template>
  <div class="space-y-6">
    <!-- Header Section -->
    <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
      <h1 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Organic Traffic Insights</h1>
      <p class="text-gray-600 dark:text-gray-300 mb-4">
        An easy "not provided" keyword solution combining Google Analytics, Search Console and DeepRankAI data
      </p>
      
      <div class="flex space-x-4">
        <div class="flex-1">
          <input 
            type="text" 
            placeholder="Enter domain" 
            class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100"
          />
        </div>
        <AnalyzeButton />
      </div>
    </div>
  </div>
</template>

<script setup>
// No additional JavaScript changes needed, uses the existing imports and AnalyzeButton component.
</script>
