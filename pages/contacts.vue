<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-3xl font-bold mb-8 text-gray-900">Contact Us</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <!-- Contact Form -->
      <div>
        <h2 class="text-xl font-semibold mb-4 text-gray-900">Get in Touch</h2>
        <form class="space-y-4 bg-white p-6 rounded-lg shadow-md">
          <div>
            <label class="block text-sm font-medium text-gray-700">Name</label>
            <input 
              type="text" 
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 text-gray-900"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 text-gray-900"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Message</label>
            <textarea 
              rows="4" 
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 text-gray-900"
            ></textarea>
          </div>
          <button 
            type="submit" 
            class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
      
      <!-- Other Ways to Connect -->
      <div>
        <h2 class="text-xl font-semibold mb-4 text-gray-900">Other Ways to Connect</h2>
        <div class="space-y-6 bg-gray-50 p-6 rounded-lg shadow-md">
          <div>
            <h3 class="font-medium mb-2 text-gray-900">Support</h3>
            <p class="text-gray-600">support@DeepRankAI.com</p>
          </div>
          <div>
            <h3 class="font-medium mb-2 text-gray-900">Sales</h3>
            <p class="text-gray-600">sales@DeepRankAI.com</p>
          </div>
          <div>
            <h3 class="font-medium mb-2 text-gray-900">Press</h3>
            <p class="text-gray-600">press@DeepRankAI.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
