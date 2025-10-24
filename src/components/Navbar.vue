<template>
  <nav class="bg-primary-600 text-white shadow-lg">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center py-4">
        <div class="text-2xl font-bold">
          <router-link to="/" class="hover:text-primary-200 transition-colors">
            Barzel Engineering
          </router-link>
        </div>
        
        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-6">
          <router-link 
            to="/" 
            class="hover:text-primary-200 transition-colors px-3 py-2 rounded"
            :class="{ 'bg-primary-700': $route.path === '/' }"
          >
            Home
          </router-link>
          <router-link 
            to="/about" 
            class="hover:text-primary-200 transition-colors px-3 py-2 rounded"
            :class="{ 'bg-primary-700': $route.path === '/about' }"
          >
            About Us
          </router-link>
          <router-link 
            to="/services" 
            class="hover:text-primary-200 transition-colors px-3 py-2 rounded"
            :class="{ 'bg-primary-700': $route.path === '/services' }"
          >
            Services
          </router-link>
          <router-link 
            to="/our-work" 
            class="hover:text-primary-200 transition-colors px-3 py-2 rounded"
            :class="{ 'bg-primary-700': $route.path === '/our-work' }"
          >
            Our Work
          </router-link>
          <router-link 
            to="/clients" 
            class="hover:text-primary-200 transition-colors px-3 py-2 rounded"
            :class="{ 'bg-primary-700': $route.path === '/clients' }"
          >
            Clients
          </router-link>
          <router-link 
            to="/contact" 
            class="hover:text-primary-200 transition-colors px-3 py-2 rounded"
            :class="{ 'bg-primary-700': $route.path === '/contact' }"
          >
            Contact Us
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden focus:outline-none"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              v-if="!mobileMenuOpen"
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path 
              v-else
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden pb-4">
        <router-link 
          to="/" 
          class="block py-2 px-4 hover:bg-primary-700 rounded"
          @click="mobileMenuOpen = false"
        >
          Home
        </router-link>
        <router-link 
          to="/about" 
          class="block py-2 px-4 hover:bg-primary-700 rounded"
          @click="mobileMenuOpen = false"
        >
          About Us
        </router-link>
        <router-link 
          to="/services" 
          class="block py-2 px-4 hover:bg-primary-700 rounded"
          @click="mobileMenuOpen = false"
        >
          Services
        </router-link>
        <router-link 
          to="/our-work" 
          class="block py-2 px-4 hover:bg-primary-700 rounded"
          @click="mobileMenuOpen = false"
        >
          Our Work
        </router-link>
        <router-link 
          to="/clients" 
          class="block py-2 px-4 hover:bg-primary-700 rounded"
          @click="mobileMenuOpen = false"
        >
          Clients
        </router-link>
        <router-link 
          to="/contact" 
          class="block py-2 px-4 hover:bg-primary-700 rounded"
          @click="mobileMenuOpen = false"
        >
          Contact Us
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Navbar',
  setup() {
    const mobileMenuOpen = ref(false)
    
    return {
      mobileMenuOpen
    }
  }
}
</script>
