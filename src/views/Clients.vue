<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-16">
      <h1 class="text-4xl font-bold text-center mb-4 text-gray-800">Our Clients</h1>
      <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        We're proud to work with leading organizations across various industries.
      </p>
      
      <div class="max-w-4xl mx-auto">
        <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 class="text-2xl font-bold mb-6 text-primary-600">Industries We Serve</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="flex items-start space-x-3">
              <span class="text-primary-600 text-2xl">🏗️</span>
              <div>
                <h3 class="font-bold text-gray-800">Construction & Real Estate</h3>
                <p class="text-gray-600 text-sm">Commercial and residential developments</p>
              </div>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-primary-600 text-2xl">🏭</span>
              <div>
                <h3 class="font-bold text-gray-800">Manufacturing</h3>
                <p class="text-gray-600 text-sm">Industrial facilities and production plants</p>
              </div>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-primary-600 text-2xl">🏥</span>
              <div>
                <h3 class="font-bold text-gray-800">Healthcare</h3>
                <p class="text-gray-600 text-sm">Hospitals and medical facilities</p>
              </div>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-primary-600 text-2xl">🎓</span>
              <div>
                <h3 class="font-bold text-gray-800">Education</h3>
                <p class="text-gray-600 text-sm">Schools, universities, and research centers</p>
              </div>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-primary-600 text-2xl">🏛️</span>
              <div>
                <h3 class="font-bold text-gray-800">Government</h3>
                <p class="text-gray-600 text-sm">Public infrastructure and facilities</p>
              </div>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-primary-600 text-2xl">⚡</span>
              <div>
                <h3 class="font-bold text-gray-800">Energy & Utilities</h3>
                <p class="text-gray-600 text-sm">Power plants and distribution systems</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 class="text-2xl font-bold mb-6 text-primary-600">Client Testimonials</h2>
          <div class="space-y-6">
            <div class="border-l-4 border-primary-600 pl-4">
              <p class="text-gray-700 italic mb-2">
                "Barzel Engineering delivered exceptional results on our commercial development project. 
                Their attention to detail and commitment to quality were outstanding."
              </p>
              <p class="text-gray-600 font-semibold">- John Smith, CEO, Urban Developments Inc.</p>
            </div>
            <div class="border-l-4 border-primary-600 pl-4">
              <p class="text-gray-700 italic mb-2">
                "The team's expertise in structural engineering was evident throughout our bridge project. 
                They exceeded our expectations in every way."
              </p>
              <p class="text-gray-600 font-semibold">- Sarah Johnson, Director, State Transportation Dept.</p>
            </div>
            <div class="border-l-4 border-primary-600 pl-4">
              <p class="text-gray-700 italic mb-2">
                "Working with Barzel Engineering was a pleasure. Their innovative solutions helped us 
                achieve our sustainability goals while staying within budget."
              </p>
              <p class="text-gray-600 font-semibold">- Michael Chen, Facilities Manager, Tech University</p>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-primary-600 to-primary-800 rounded-lg shadow-lg p-8 text-white text-center">
          <h2 class="text-2xl font-bold mb-4">Join Our Growing List of Satisfied Clients</h2>
          <p class="mb-6">
            Let us help you achieve your engineering goals with our proven expertise and dedication.
          </p>
          <router-link 
            to="/contact" 
            class="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
          >
            Become a Client
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Clients'
}
</script>
