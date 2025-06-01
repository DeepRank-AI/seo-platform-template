<template>
  <header class="bg-white dark:bg-gray-800 shadow-sm">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 justify-between items-center">
        <div class="flex items-center space-x-8">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center">
            <span class="text-2xl font-bold text-blue-600 dark:text-blue-400">DeepRankAI</span>
          </NuxtLink>

          <!-- Main Navigation -->
          <nav class="hidden md:flex space-x-6">
            <NuxtLink to="/features" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium">
              Features
            </NuxtLink>
            <NuxtLink to="/pricing" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium">
              Pricing
            </NuxtLink>

            <!-- Resources Dropdown -->
            <div class="relative group">
              <button class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium inline-flex items-center">
                Resources
                <ChevronDownIcon class="ml-1 h-4 w-4" />
              </button>

              <!-- Resources Dropdown Menu -->
              <div class="absolute left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div class="p-4 grid grid-cols-1 gap-4">
                  <div>
                    <a href="#" class="flex items-start p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                      <BookOpenIcon class="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      <div class="ml-3">
                        <a href="https://DeepRankAI.com/blog" class="text-sm font-medium text-gray-900 dark:text-gray-100">Blog</a>
                        <p class="text-xs text-gray-500">Latest industry insights</p>
                      </div>
                    </a>
                  </div>

                  <div>
                    <a href="#" class="flex items-start p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                      <QuestionMarkCircleIcon class="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      <div class="ml-3">
                        <p class="text-sm font-medium text-gray-900 dark:text-gray-100">Help Center</p>
                        <p class="text-xs text-gray-500">Guides and documentation</p>
                      </div>
                    </a>
                  </div>

                  <div>
                    <a href="#" class="flex items-start p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                      <AcademicCapIcon class="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      <div class="ml-3">
                        <p class="text-sm font-medium text-gray-900 dark:text-gray-100">Academy</p>
                        <p class="text-xs text-gray-500">Learn SEO and marketing</p>
                      </div>
                    </a>
                  </div>

                  <div>
                    <a href="#" class="flex items-start p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                      <PresentationChartLineIcon class="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      <div class="ml-3">
                        <p class="text-sm font-medium text-gray-900 dark:text-gray-100">Webinars</p>
                        <p class="text-xs text-gray-500">Expert-led sessions</p>
                      </div>
                    </a>
                  </div>

                  <div>
                    <a href="#" class="flex items-start p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                      <BuildingOfficeIcon class="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      <div class="ml-3">
                        <p class="text-sm font-medium text-gray-900 dark:text-gray-100">Hire an Agency</p>
                        <p class="text-xs text-gray-500">Find trusted partners</p>
                      </div>
                    </a>
                  </div>

                  <div>
                    <a href="#" class="flex items-start p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                      <ChartBarIcon class="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      <div class="ml-3">
                        <p class="text-sm font-medium text-gray-900 dark:text-gray-100">Top Websites</p>
                        <p class="text-xs text-gray-500">Traffic analytics</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Company Dropdown -->
            <div class="relative group">
              <button class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium inline-flex items-center">
                Company
                <ChevronDownIcon class="ml-1 h-4 w-4" />
              </button>

              <!-- Company Dropdown Menu -->
              <div class="absolute left-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div class="py-1">
                  <NuxtLink to="/about" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                    About Us
                  </NuxtLink>
                  <NuxtLink to="/newsroom" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Newsroom
                  </NuxtLink>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Careers
                    <span class="ml-2 text-xs bg-blue-100 text-blue-800 px-1.5 rounded">We're hiring</span>
                  </a>
                  <NuxtLink to="/affiliate" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Affiliate Program
                  </NuxtLink>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                    For Investors
                    <ArrowTopRightOnSquareIcon class="inline-block h-4 w-4 ml-1" />
                  </a>
                  <NuxtLink to="/integrations" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Partner Integrations
                  </NuxtLink>
                  <NuxtLink to="/contacts" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Contacts
                  </NuxtLink>
                  <NuxtLink to="/stats" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Stats and Facts
                  </NuxtLink>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <!-- Right Side -->
        <div class="flex items-center space-x-4">
          <ClientOnly>
            <ColorModeButton />
          </ClientOnly>
          <button class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            <span class="sr-only">Notifications</span>
            <BellIcon class="h-6 w-6" />
          </button>
          <button class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            <span class="sr-only">Settings</span>
            <CogIcon class="h-6 w-6" />
          </button>
          <button 
            @click="authModals.showLoginModal = true"
            class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Log in
          </button>
        </div>
      </div>
    </div>

    <!-- Auth Modals -->
    <AuthModals ref="authModals" />
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { 
  BellIcon, 
  CogIcon, 
  SunIcon, 
  MoonIcon,
  ChevronDownIcon,
  ArrowTopRightOnSquareIcon,
  BookOpenIcon,
  QuestionMarkCircleIcon,
  AcademicCapIcon,
  PresentationChartLineIcon,
  BuildingOfficeIcon,
  ChartBarIcon
} from '@heroicons/vue/24/outline'

const colorMode = useColorMode()
const authModals = ref(null)

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>222222222

<style scoped>
.group:hover .group-hover\:visible {
  visibility: visible;
}

.group:hover .group-hover\:opacity-100 {
  opacity: 1;
}

.invisible {
  visibility: hidden;
}
</style>