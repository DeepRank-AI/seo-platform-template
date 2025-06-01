<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-3xl font-extrabold mb-8 text-gray-800 dark:text-gray-100">About Us</h1>
    <div class="prose max-w-none">
      <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
        DeepRankAI is a leading provider of SEO and digital marketing solutions, helping businesses grow their online presence through data-driven insights and powerful tools.
      </p>

      <!-- Mission and Vision Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Our Mission</h2>
          <p class="text-gray-600 dark:text-gray-300">
            To empower businesses of all sizes with enterprise-grade SEO and marketing tools that drive measurable results and sustainable growth.
          </p>
        </div>
        <div>
          <h2 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Our Vision</h2>
          <p class="text-gray-600 dark:text-gray-300">
            To be the world's most trusted source for digital marketing intelligence, helping companies make data-driven decisions.
          </p>
        </div>
      </div>

      <!-- Company Values Section -->
      <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 mb-12">
        <h2 class="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Company Values</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div>
            <h3 class="font-medium mb-2 text-gray-800 dark:text-gray-100">Innovation</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Constantly pushing boundaries to deliver cutting-edge solutions.
            </p>
          </div>
          <div>
            <h3 class="font-medium mb-2 text-gray-800 dark:text-gray-100">Transparency</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Open and honest communication with our customers and partners.
            </p>
          </div>
          <div>
            <h3 class="font-medium mb-2 text-gray-800 dark:text-gray-100">Excellence</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Committed to delivering the highest quality in everything we do.
            </p>
          </div>
        </div>
      </div>

      <!-- Team Section (Optional) -->
      <div>
        <h2 class="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Meet Our Team</h2>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          Our team is composed of industry experts who are passionate about innovation, data, and driving success for our customers.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="member in team" :key="member.id" class="text-center">
            <img
              :src="member.image"
              :alt="member.name"
              class="w-24 h-24 rounded-full mx-auto mb-4 shadow-lg"
            />
            <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">{{ member.name }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Example team data (optional)
const team = ref([
  { id: 1, name: "John Doe", role: "CEO", image: "/images/john.jpg" },
  { id: 2, name: "Jane Smith", role: "CTO", image: "/images/jane.jpg" },
  { id: 3, name: "Mike Brown", role: "CMO", image: "/images/mike.jpg" },
  { id: 4, name: "Emily Davis", role: "CFO", image: "/images/emily.jpg" },
]);
</script>
