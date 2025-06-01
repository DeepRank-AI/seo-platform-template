<template>
  <!-- Login Modal -->
  <UModal v-model="showLoginModal">
    <div class="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
      <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Log in to DeepRankAI</h2>
      
      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
          <input 
            v-model="loginForm.email"
            type="email" 
            required
            class="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
          <input 
            v-model="loginForm.password"
            type="password"
            required 
            class="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input 
              type="checkbox" 
              class="h-4 w-4 rounded border-gray-300 dark:border-gray-600 text-blue-600 dark:text-blue-400 focus:ring-blue-500"
            />
            <label class="ml-2 text-sm text-gray-600 dark:text-gray-300">Remember me</label>
          </div>
          <button type="button" class="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-500">Forgot password?</button>
        </div>

        <button type="submit" class="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Log in
        </button>
      </form>

      <div class="relative my-6">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-gray-300 dark:border-gray-600"></div>
        </div>
        <div class="relative flex justify-center text-sm">
          <span class="bg-gray-50 dark:bg-gray-800 px-2 text-gray-500 dark:text-gray-400">Or continue with</span>
        </div>
      </div>

      <div class="grid grid-cols-3 gap-3">
        <button class="flex justify-center items-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
          <UIcon name="i-simple-icons-google" class="h-5 w-5" />
        </button>
        <button class="flex justify-center items-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
          <UIcon name="i-simple-icons-facebook" class="h-5 w-5 text-blue-600" />
        </button>
        <button class="flex justify-center items-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
          <UIcon name="i-simple-icons-linkedin" class="h-5 w-5 text-blue-700" />
        </button>
      </div>

      <p class="mt-4 text-center text-sm text-gray-600 dark:text-gray-300">
        Don't have an account?
        <button @click="switchToSignup" class="text-blue-600 dark:text-blue-400 hover:text-blue-500">Sign up</button>
      </p>
    </div>
  </UModal>

  <!-- Signup Modal -->
  <UModal v-model="showSignupModal">
    <div class="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
      <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Create your account</h2>
      
      <form @submit.prevent="handleSignup" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
          <input 
            v-model="signupForm.name"
            type="text"
            required
            class="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
          <input 
            v-model="signupForm.email"
            type="email"
            required
            class="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
          <input 
            v-model="signupForm.password"
            type="password"
            required
            class="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button type="submit" class="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Sign up
        </button>
      </form>

      <div class="relative my-6">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-gray-300 dark:border-gray-600"></div>
        </div>
        <div class="relative flex justify-center text-sm">
          <span class="bg-gray-50 dark:bg-gray-800 px-2 text-gray-500 dark:text-gray-400">Or continue with</span>
        </div>
      </div>

      <div class="grid grid-cols-3 gap-3">
        <button class="flex justify-center items-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
          <UIcon name="i-simple-icons-google" class="h-5 w-5" />
        </button>
        <button class="flex justify-center items-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
          <UIcon name="i-simple-icons-facebook" class="h-5 w-5 text-blue-600" />
        </button>
        <button class="flex justify-center items-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
          <UIcon name="i-simple-icons-linkedin" class="h-5 w-5 text-blue-700" />
        </button>
      </div>

      <p class="mt-4 text-center text-sm text-gray-600 dark:text-gray-300">
        Already have an account?
        <button @click="switchToLogin" class="text-blue-600 dark:text-blue-400 hover:text-blue-500">Log in</button>
      </p>
    </div>
  </UModal>
</template>

<script setup>
import { ref } from 'vue'

const showLoginModal = ref(false)
const showSignupModal = ref(false)

const loginForm = ref({
  email: '',
  password: ''
})

const signupForm = ref({
  name: '',
  email: '',
  password: ''
})

const handleLogin = () => {
  console.log('Login:', loginForm.value)
}

const handleSignup = () => {
  console.log('Signup:', signupForm.value)
}

const switchToSignup = () => {
  showLoginModal.value = false
  showSignupModal.value = true
}

const switchToLogin = () => {
  showSignupModal.value = false
  showLoginModal.value = true
}

defineExpose({
  showLoginModal,
  showSignupModal
})
</script>
