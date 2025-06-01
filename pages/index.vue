<template>
  <div class="space-y-6">
    <!-- Welcome Section -->
    <div class="bg-grey p-6 rounded-lg shadow">
      <h1 class="text-2xl font-semibold mb-2">Welcome to DeepRankAI</h1>
      <p class="text-gray-600">Your all-in-one SEO analytics and optimization platform</p>
    </div>

    <!-- Navigation Cards Grid -->
    <div class="grid grid-cols-3 gap-6">
      <NuxtLink v-for="item in navigation" 
                :key="item.name"
                :to="item.href"
                class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
        <div class="flex items-center space-x-4">
          <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <component :is="item.icon" class="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h3 class="font-medium text-gray-900">{{ item.name }}</h3>
            <p class="text-sm text-gray-500">{{ item.description }}</p>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import {
  HomeIcon,
  ChartBarIcon,
  MagnifyingGlassIcon,
  LinkIcon,
  DocumentTextIcon,
  MapIcon,
  SparklesIcon,
  SignalIcon,
  BuildingLibraryIcon,
  BuildingStorefrontIcon,
  ClipboardDocumentCheckIcon,
  DocumentMagnifyingGlassIcon
} from '@heroicons/vue/24/outline'

const navigation = [
  { 
    name: 'Domain Overview',
    href: '/domain-overview',
    icon: ChartBarIcon,
    description: 'Analyze domain strength and performance'
  },
  {
    name: 'Traffic Analytics',
    href: '/traffic-analytics',
    icon: ChartBarIcon,
    description: 'Monitor website traffic and user behavior'
  },
  {
    name: 'Organic Traffic',
    href: '/organic-traffic',
    icon: SignalIcon,
    description: 'Track organic search performance'
  },
  {
    name: 'Keyword Research',
    href: '/keyword-research',
    icon: MagnifyingGlassIcon,
    description: 'Discover valuable keywords for your site'
  },
  {
    name: 'Keyword Magic Tool',
    href: '/keyword-magic',
    icon: SparklesIcon,
    description: 'Find the perfect keywords for SEO'
  },
  {
    name: 'Backlink Tools',
    href: '/backlink-tools',
    icon: LinkIcon,
    description: 'Analyze and monitor backlink profile'
  },
  {
    name: 'Link Building',
    href: '/link-building',
    icon: BuildingLibraryIcon,
    description: 'Build high-quality backlinks'
  },
  {
    name: 'On-Page SEO',
    href: '/on-page-seo',
    icon: ClipboardDocumentCheckIcon,
    description: 'Optimize your pages for better rankings'
  },
  {
    name: 'Listing Management',
    href: '/listing-management',
    icon: BuildingStorefrontIcon,
    description: 'Manage your business listings'
  },
  {
    name: 'Site Audit',
    href: '/site-audit',
    icon: DocumentTextIcon,
    description: 'Find and fix technical SEO issues'
  },
  {
    name: 'Local SEO',
    href: '/local-seo',
    icon: MapIcon,
    description: 'Optimize for local search results'
  },
  {
    name: 'Position Tracking',
    href: '/position-tracking',
    icon: ChartBarIcon,
    description: 'Monitor your search rankings'
  },
  {
    name: 'Log File Analyzer',
    href: '/log-file-analyzer',
    icon: DocumentMagnifyingGlassIcon,
    description: 'Analyze search engine crawling'
  }
]
</script>