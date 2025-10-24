<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-16">
      <h1 class="text-4xl font-bold text-center mb-12 text-gray-800">About Us</h1>
      
      <div class="max-w-4xl mx-auto">
        <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 class="text-3xl font-bold mb-4 text-primary-600">Our Story</h2>
          <p class="text-gray-700 mb-4 leading-relaxed">
            Barzel Engineering was founded with a vision to revolutionize the engineering industry 
            through innovation, dedication, and excellence. With years of experience and a team of 
            highly skilled professionals, we have successfully delivered numerous projects across 
            various sectors.
          </p>
          <p class="text-gray-700 leading-relaxed">
            Our commitment to quality and customer satisfaction has made us a trusted partner for 
            businesses seeking reliable engineering solutions.
          </p>
        </div>

        <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 class="text-3xl font-bold mb-4 text-primary-600">Our Mission</h2>
          <p class="text-gray-700 leading-relaxed">
            To provide innovative and sustainable engineering solutions that exceed client 
            expectations while contributing to a better future for our communities and environment.
          </p>
        </div>

        <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 class="text-3xl font-bold mb-4 text-primary-600">Our Values</h2>
          <ul class="space-y-3">
            <li class="flex items-start">
              <span class="text-primary-600 mr-2">✓</span>
              <span class="text-gray-700"><strong>Excellence:</strong> We strive for the highest quality in everything we do.</span>
            </li>
            <li class="flex items-start">
              <span class="text-primary-600 mr-2">✓</span>
              <span class="text-gray-700"><strong>Integrity:</strong> We conduct our business with honesty and transparency.</span>
            </li>
            <li class="flex items-start">
              <span class="text-primary-600 mr-2">✓</span>
              <span class="text-gray-700"><strong>Innovation:</strong> We embrace new technologies and creative solutions.</span>
            </li>
            <li class="flex items-start">
              <span class="text-primary-600 mr-2">✓</span>
              <span class="text-gray-700"><strong>Collaboration:</strong> We believe in the power of teamwork and partnership.</span>
            </li>
          </ul>
        </div>

        <div class="text-center mt-12">
          <router-link 
            to="/contact" 
            class="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Get in Touch with Our Team
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUs'
}
</script>
