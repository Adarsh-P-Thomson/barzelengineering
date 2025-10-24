<template>
  <footer class="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white mt-auto border-t border-slate-700">
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div class="md:col-span-2">
          <div class="flex items-center gap-4 mb-6">
            <div class="bg-white rounded-xl p-3 shadow-lg shadow-cyan-500/20">
              <img src="../assets/logo.png" alt="Barzel Engineering Logo" class="h-10 w-auto">
            </div>
            <div>
              <h3 class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Barzel Engineering</h3>
              <p class="text-xs text-slate-400 mt-1 tracking-wider uppercase">Precision & Excellence</p>
            </div>
          </div>
          <p class="text-slate-300 mb-4 leading-relaxed">
            Delivering precision engineering solutions with cutting-edge technology and unmatched expertise.
          </p>
          <div class="flex gap-4 mt-6">
            <a href="#" class="w-10 h-10 bg-slate-700 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-500 rounded-lg flex items-center justify-center transition-all transform hover:scale-110">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" class="w-10 h-10 bg-slate-700 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-500 rounded-lg flex items-center justify-center transition-all transform hover:scale-110">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-bold mb-4 text-cyan-400">Quick Links</h3>
          <ul class="space-y-2">
            <li>
              <router-link to="/" class="text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                <span class="w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Home
              </router-link>
            </li>
            <li>
              <router-link to="/about" class="text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                <span class="w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                About Us
              </router-link>
            </li>
            <li>
              <router-link to="/services" class="text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                <span class="w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Services
              </router-link>
            </li>
            <li>
              <router-link to="/our-work" class="text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                <span class="w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Our Work
              </router-link>
            </li>
            <li>
              <router-link to="/contact" class="text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                <span class="w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Contact
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-bold mb-4 text-cyan-400">Contact Us</h3>
          <ul class="space-y-3 text-slate-300">
            <li class="flex items-start gap-2">
              <svg class="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              <a href="mailto:info@barzelengineering.com" class="hover:text-cyan-400 transition-colors">
                info@barzelengineering.com
              </a>
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <div>
                <a href="tel:+919940016330" class="hover:text-cyan-400 transition-colors block">+91 99400 16330</a>
                <a href="tel:+917760990196" class="hover:text-cyan-400 transition-colors block">+91 77609 90196</a>
              </div>
            </li>
            <li class="pt-2">
              <router-link to="/contact" class="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold group">
                Get Directions
                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                </svg>
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-slate-700 mt-10 pt-6 text-center">
        <p class="text-slate-400">&copy; {{ currentYear }} Barzel Engineering. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'Footer',
  setup() {
    const currentYear = computed(() => new Date().getFullYear())
    
    return {
      currentYear
    }
  }
}
</script>
