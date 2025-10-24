<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-16">
      <h1 class="text-4xl font-bold text-center mb-4 text-gray-800">Our Services</h1>
      <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        We offer comprehensive engineering solutions tailored to meet your specific needs.
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div class="text-primary-600 text-5xl mb-4">🏗️</div>
          <h3 class="text-2xl font-bold mb-3 text-gray-800">Structural Engineering</h3>
          <p class="text-gray-600 mb-4">
            Comprehensive structural analysis and design services for buildings, bridges, and infrastructure projects.
          </p>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>• Building Design</li>
            <li>• Bridge Engineering</li>
            <li>• Seismic Analysis</li>
          </ul>
        </div>

        <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div class="text-primary-600 text-5xl mb-4">⚡</div>
          <h3 class="text-2xl font-bold mb-3 text-gray-800">Electrical Engineering</h3>
          <p class="text-gray-600 mb-4">
            Power systems, electrical distribution, and control systems design and implementation.
          </p>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>• Power Distribution</li>
            <li>• Control Systems</li>
            <li>• Energy Efficiency</li>
          </ul>
        </div>

        <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div class="text-primary-600 text-5xl mb-4">⚙️</div>
          <h3 class="text-2xl font-bold mb-3 text-gray-800">Mechanical Engineering</h3>
          <p class="text-gray-600 mb-4">
            HVAC systems, mechanical design, and industrial equipment solutions.
          </p>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>• HVAC Design</li>
            <li>• Mechanical Systems</li>
            <li>• Industrial Equipment</li>
          </ul>
        </div>

        <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div class="text-primary-600 text-5xl mb-4">💧</div>
          <h3 class="text-2xl font-bold mb-3 text-gray-800">Civil Engineering</h3>
          <p class="text-gray-600 mb-4">
            Site development, water resources, and transportation engineering services.
          </p>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>• Site Development</li>
            <li>• Water Resources</li>
            <li>• Transportation</li>
          </ul>
        </div>

        <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div class="text-primary-600 text-5xl mb-4">🌱</div>
          <h3 class="text-2xl font-bold mb-3 text-gray-800">Environmental Engineering</h3>
          <p class="text-gray-600 mb-4">
            Sustainable solutions for environmental challenges and compliance.
          </p>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>• Environmental Assessment</li>
            <li>• Sustainability Planning</li>
            <li>• Waste Management</li>
          </ul>
        </div>

        <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div class="text-primary-600 text-5xl mb-4">📊</div>
          <h3 class="text-2xl font-bold mb-3 text-gray-800">Project Management</h3>
          <p class="text-gray-600 mb-4">
            End-to-end project management services ensuring on-time and on-budget delivery.
          </p>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>• Planning & Scheduling</li>
            <li>• Budget Management</li>
            <li>• Quality Assurance</li>
          </ul>
        </div>
      </div>

      <div class="text-center mt-12">
        <router-link 
          to="/contact" 
          class="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
        >
          Request a Consultation
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Services'
}
</script>
