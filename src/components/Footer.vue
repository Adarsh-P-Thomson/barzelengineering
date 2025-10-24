<template>
  <footer class="bg-gray-800 text-white mt-auto">
    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Company Info -->
        <div>
          <h3 class="text-xl font-bold mb-4 text-primary-400">Barzel Engineering</h3>
          <p class="text-gray-300">
            Delivering innovative engineering solutions for a better tomorrow.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-xl font-bold mb-4 text-primary-400">Quick Links</h3>
          <ul class="space-y-2">
            <li>
              <router-link to="/" class="text-gray-300 hover:text-primary-400 transition-colors">
                Home
              </router-link>
            </li>
            <li>
              <router-link to="/about" class="text-gray-300 hover:text-primary-400 transition-colors">
                About Us
              </router-link>
            </li>
            <li>
              <router-link to="/services" class="text-gray-300 hover:text-primary-400 transition-colors">
                Services
              </router-link>
            </li>
            <li>
              <router-link to="/our-work" class="text-gray-300 hover:text-primary-400 transition-colors">
                Our Work
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-xl font-bold mb-4 text-primary-400">Contact Us</h3>
          <ul class="space-y-2 text-gray-300">
            <li>Email: info@barzelengineering.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>
              <router-link to="/contact" class="text-primary-400 hover:text-primary-300 transition-colors">
                Contact Form →
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
        <p>&copy; {{ currentYear }} Barzel Engineering. All rights reserved.</p>
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
