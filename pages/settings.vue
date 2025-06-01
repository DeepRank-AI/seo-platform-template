<template>
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
    <!-- Header -->
    <h1 class="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-100">Settings</h1>

    <!-- Theme Settings -->
    <div class="bg-gray-50 dark:bg-gray-800 rounded-lg shadow">
      <div class="p-6">
        <h2 class="text-lg font-medium mb-2 text-gray-800 dark:text-gray-100">Theme</h2>
        <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">Customize the look and feel of your dashboard.</p>
        <div class="flex items-center space-x-4">
          <!-- Light Theme -->
          <button 
            @click="setTheme('light')"
            class="flex items-center space-x-2 px-4 py-2 rounded-md"
            :class="colorMode.preference === 'light' 
              ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200' 
              : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'"
            type="button"
            aria-label="Switch to light theme"
          >
            <SunIcon class="h-5 w-5" />
            <span>Light</span>
          </button>

          <!-- Dark Theme -->
          <button 
            @click="setTheme('dark')"
            class="flex items-center space-x-2 px-4 py-2 rounded-md"
            :class="colorMode.preference === 'dark' 
              ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200' 
              : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'"
            type="button"
            aria-label="Switch to dark theme"
          >
            <MoonIcon class="h-5 w-5" />
            <span>Dark</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Profile Settings -->
    <div class="bg-gray-50 dark:bg-gray-800 rounded-lg shadow">
      <div class="p-6 space-y-6">
        <h2 class="text-lg font-medium mb-2 text-gray-800 dark:text-gray-100">Profile</h2>
        <p class="text-gray-600 dark:text-gray-300 text-sm mb-6">
          This information will be displayed publicly, so be careful what you share.
        </p>

        <form @submit.prevent="saveProfile" class="space-y-6">
          <!-- Name -->
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
            <p id="name-help" class="text-xs text-gray-500 dark:text-gray-400 mb-2">
              Will appear on receipts, invoices, and other communication.
            </p>
            <input 
              id="name"
              v-model="profile.name"
              type="text"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-100"
              aria-describedby="name-help"
            />
          </div>

          <!-- Email -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
            <p id="email-help" class="text-xs text-gray-500 dark:text-gray-400 mb-2">
              Used to sign in, for email receipts, and product updates.
            </p>
            <input 
              id="email"
              v-model="profile.email"
              type="email"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-100"
              aria-describedby="email-help"
            />
          </div>

          <!-- Username -->
          <div>
            <label for="username" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Username</label>
            <p id="username-help" class="text-xs text-gray-500 dark:text-gray-400 mb-2">
              Your unique username for logging in and your profile URL.
            </p>
            <div class="flex rounded-md shadow-sm">
              <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm dark:bg-gray-600 dark:border-gray-500">
                DeepRankAI.com/
              </span>
              <input 
                id="username"
                v-model="profile.username"
                type="text"
                class="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-none rounded-r-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-100"
                aria-describedby="username-help"
              />
            </div>
          </div>

          <!-- Avatar -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Avatar</label>
            <div class="flex items-center space-x-4">
              <div class="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                <UserIcon v-if="!profile.avatar" class="h-8 w-8 text-gray-400" />
                <img v-else :src="profile.avatar" :alt="profile.name" class="h-full w-full object-cover">
              </div>
              <button 
                type="button"
                class="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
                aria-label="Choose Avatar"
              >
                Choose
              </button>
              <p class="text-xs text-gray-500 dark:text-gray-400">JPG, GIF or PNG. 1MB Max.</p>
            </div>
          </div>

          <!-- Bio -->
          <div>
            <label for="bio" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Bio</label>
            <p id="bio-help" class="text-xs text-gray-500 dark:text-gray-400 mb-2">Brief description for your profile. URLs are hyperlinked.</p>
            <textarea 
              id="bio"
              v-model="profile.bio"
              rows="3"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-100"
              aria-describedby="bio-help"
            ></textarea>
          </div>

          <!-- Save Button -->
          <div class="flex justify-end">
            <button 
              type="submit"
              class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { SunIcon, MoonIcon, UserIcon } from '@heroicons/vue/solid';

// Data initialization
const colorMode = ref({ preference: 'light' }); // Replace with your theme logic
const profile = ref({
  name: '',
  email: '',
  username: '',
  avatar: null,
  bio: '',
});

// Methods
const setTheme = (theme) => {
  colorMode.value.preference = theme;
};

const saveProfile = () => {
  console.log('Saving profile:', profile.value);
};
</script>
