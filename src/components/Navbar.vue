<template>
  <nav class="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-xl border-b-2 border-cyan-900/50 backdrop-blur-sm sticky top-0 z-50">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center py-3">
        <!-- Logo and Brand -->
        <router-link to="/" class="flex items-center gap-3 group">
          <div class="bg-white rounded-lg p-2 shadow-lg transform group-hover:scale-105 transition-transform duration-300 shadow-cyan-500/20">
            <img src="../assets/logo.png" alt="Barzel Engineering Logo" class="h-8 w-auto">
          </div>
          <div>
            <h1 class="text-xl font-bold text-white">
              Barzel Engineering
            </h1>
            <p class="text-[10px] text-cyan-400 tracking-wider uppercase">Precision & Excellence</p>
          </div>
        </router-link>
        
        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-1">
          <router-link 
            to="/" 
            class="relative px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-700 hover:text-cyan-400 transition-all duration-300 font-medium"
            :class="{ 'bg-slate-700 text-cyan-400': $route.path === '/' }"
          >
            Home
          </router-link>
          <router-link 
            to="/about" 
            class="relative px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-700 hover:text-cyan-400 transition-all duration-300 font-medium"
            :class="{ 'bg-slate-700 text-cyan-400': $route.path === '/about' }"
          >
            About Us
          </router-link>
          <router-link 
            to="/services" 
            class="relative px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-700 hover:text-cyan-400 transition-all duration-300 font-medium"
            :class="{ 'bg-slate-700 text-cyan-400': $route.path === '/services' }"
          >
            Services
          </router-link>
          <router-link 
            to="/machinery" 
            class="relative px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-700 hover:text-cyan-400 transition-all duration-300 font-medium"
            :class="{ 'bg-slate-700 text-cyan-400': $route.path === '/machinery' }"
          >
            Machinery
          </router-link>
          <router-link 
            to="/our-work" 
            class="relative px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-700 hover:text-cyan-400 transition-all duration-300 font-medium"
            :class="{ 'bg-slate-700 text-cyan-400': $route.path === '/our-work' }"
          >
            Our Work
          </router-link>
          <router-link 
            to="/clients" 
            class="relative px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-700 hover:text-cyan-400 transition-all duration-300 font-medium"
            :class="{ 'bg-slate-700 text-cyan-400': $route.path === '/clients' }"
          >
            Clients
          </router-link>
          <router-link 
            to="/contact" 
            class="ml-2 px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/30"
          >
            Contact Us
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden focus:outline-none p-2 rounded-lg hover:bg-slate-700 transition-colors text-cyan-400"
        >
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <div v-if="mobileMenuOpen" class="md:hidden pb-4 space-y-1 border-t border-cyan-900/50 mt-2 pt-4 bg-slate-800/95 backdrop-blur-sm">
        <router-link 
          to="/" 
          class="block py-2.5 px-4 rounded-lg text-slate-300 hover:bg-slate-700 hover:text-cyan-400 transition-all font-medium"
          :class="{ 'bg-slate-700 text-cyan-400': $route.path === '/' }"
          @click="mobileMenuOpen = false"
        >
          Home
        </router-link>
        <router-link 
          to="/about" 
          class="block py-2.5 px-4 rounded-lg text-slate-300 hover:bg-slate-700 hover:text-cyan-400 transition-all font-medium"
          :class="{ 'bg-slate-700 text-cyan-400': $route.path === '/about' }"
          @click="mobileMenuOpen = false"
        >
          About Us
        </router-link>
        <router-link 
          to="/services" 
          class="block py-2.5 px-4 rounded-lg text-slate-300 hover:bg-slate-700 hover:text-cyan-400 transition-all font-medium"
          :class="{ 'bg-slate-700 text-cyan-400': $route.path === '/services' }"
          @click="mobileMenuOpen = false"
        >
          Services
        </router-link>
        <router-link 
          to="/machinery" 
          class="block py-2.5 px-4 rounded-lg text-slate-300 hover:bg-slate-700 hover:text-cyan-400 transition-all font-medium"
          :class="{ 'bg-slate-700 text-cyan-400': $route.path === '/machinery' }"
          @click="mobileMenuOpen = false"
        >
          Machinery
        </router-link>
        <router-link 
          to="/our-work" 
          class="block py-2.5 px-4 rounded-lg text-slate-300 hover:bg-slate-700 hover:text-cyan-400 transition-all font-medium"
          :class="{ 'bg-slate-700 text-cyan-400': $route.path === '/our-work' }"
          @click="mobileMenuOpen = false"
        >
          Our Work
        </router-link>
        <router-link 
          to="/clients" 
          class="block py-2.5 px-4 rounded-lg text-slate-300 hover:bg-slate-700 hover:text-cyan-400 transition-all font-medium"
          :class="{ 'bg-slate-700 text-cyan-400': $route.path === '/clients' }"
          @click="mobileMenuOpen = false"
        >
          Clients
        </router-link>
        <router-link 
          to="/contact" 
          class="block py-2.5 px-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all mt-2 text-center shadow-lg"
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
