<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-16">
      <h1 class="text-4xl font-bold text-center mb-4 text-gray-800">Our Work</h1>
      <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Explore some of our recent projects and see how we've helped our clients achieve their goals.
      </p>
      
      <div class="max-w-6xl mx-auto space-y-8">
        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div class="md:flex">
            <div class="md:w-1/3 bg-primary-100 flex items-center justify-center p-8">
              <div class="text-primary-600 text-6xl">🏢</div>
            </div>
            <div class="md:w-2/3 p-8">
              <h3 class="text-2xl font-bold mb-2 text-gray-800">Downtown Commercial Complex</h3>
              <p class="text-sm text-primary-600 mb-4">Structural & Mechanical Engineering</p>
              <p class="text-gray-600 mb-4">
                A 25-story mixed-use development featuring retail, office spaces, and residential units. 
                Our team provided comprehensive structural and mechanical engineering services.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Structural Design</span>
                <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">HVAC Systems</span>
                <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Energy Efficient</span>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div class="md:flex">
            <div class="md:w-1/3 bg-primary-100 flex items-center justify-center p-8">
              <div class="text-primary-600 text-6xl">🌉</div>
            </div>
            <div class="md:w-2/3 p-8">
              <h3 class="text-2xl font-bold mb-2 text-gray-800">River Crossing Bridge</h3>
              <p class="text-sm text-primary-600 mb-4">Civil & Structural Engineering</p>
              <p class="text-gray-600 mb-4">
                A 500-meter cable-stayed bridge connecting two major cities. The project included 
                comprehensive structural analysis and environmental impact assessment.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Bridge Design</span>
                <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Seismic Analysis</span>
                <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Environmental</span>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div class="md:flex">
            <div class="md:w-1/3 bg-primary-100 flex items-center justify-center p-8">
              <div class="text-primary-600 text-6xl">🏭</div>
            </div>
            <div class="md:w-2/3 p-8">
              <h3 class="text-2xl font-bold mb-2 text-gray-800">Industrial Manufacturing Facility</h3>
              <p class="text-sm text-primary-600 mb-4">Mechanical & Electrical Engineering</p>
              <p class="text-gray-600 mb-4">
                A state-of-the-art manufacturing facility with automated systems and sustainable 
                energy solutions. Complete electrical and mechanical systems design.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Automation</span>
                <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Power Systems</span>
                <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Green Energy</span>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div class="md:flex">
            <div class="md:w-1/3 bg-primary-100 flex items-center justify-center p-8">
              <div class="text-primary-600 text-6xl">🏫</div>
            </div>
            <div class="md:w-2/3 p-8">
              <h3 class="text-2xl font-bold mb-2 text-gray-800">University Campus Expansion</h3>
              <p class="text-sm text-primary-600 mb-4">Multi-Disciplinary Engineering</p>
              <p class="text-gray-600 mb-4">
                Campus expansion project including new academic buildings, research facilities, 
                and student housing. Comprehensive engineering services across all disciplines.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Campus Design</span>
                <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Infrastructure</span>
                <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Sustainability</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <router-link 
          to="/contact" 
          class="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
        >
          Start Your Project
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OurWork'
}
</script>
