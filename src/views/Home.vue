<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-5xl font-bold mb-6">Welcome to Barzel Engineering</h1>
        <p class="text-xl mb-8">Innovative Solutions for Complex Engineering Challenges</p>
        <div class="space-x-4">
          <router-link 
            to="/services" 
            class="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
          >
            Our Services
          </router-link>
          <router-link 
            to="/contact" 
            class="inline-block bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors border-2 border-white"
          >
            Get in Touch
          </router-link>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose Us</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div class="text-primary-600 text-4xl mb-4">🎯</div>
            <h3 class="text-2xl font-bold mb-3 text-gray-800">Precision</h3>
            <p class="text-gray-600">
              We deliver precise engineering solutions tailored to your specific needs.
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div class="text-primary-600 text-4xl mb-4">💡</div>
            <h3 class="text-2xl font-bold mb-3 text-gray-800">Innovation</h3>
            <p class="text-gray-600">
              Cutting-edge technologies and innovative approaches to problem-solving.
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div class="text-primary-600 text-4xl mb-4">🤝</div>
            <h3 class="text-2xl font-bold mb-3 text-gray-800">Partnership</h3>
            <p class="text-gray-600">
              We work closely with our clients to ensure success at every stage.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-16 bg-primary-600 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p class="text-xl mb-8">Let's discuss how we can help bring your vision to life.</p>
        <router-link 
          to="/contact" 
          class="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
        >
          Contact Us Today
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
