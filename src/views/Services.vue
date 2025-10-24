<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <div class="relative h-[60vh] min-h-[500px] overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img 
          src="../assets/cncbendingmachine.jpg" 
          alt="Manufacturing Machinery" 
          class="w-full h-full object-cover object-center"
        />
        <!-- Blue Overlay -->
        <div class="absolute inset-0 bg-[rgba(0,74,153,0.7)]"></div>
      </div>

      <!-- Hero Content -->
      <div class="relative container mx-auto px-4 h-full flex items-center">
        <div class="max-w-4xl">
          <h1 class="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Our Services
          </h1>
          <p class="text-2xl md:text-3xl text-white font-light">
            Engineering Excellence for Every Industrial Need
          </p>
        </div>
      </div>
    </div>

    <!-- Introductory Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-[#004a99] mb-6">A Comprehensive Approach to Industrial Solutions</h2>
          <p class="text-lg text-gray-700 leading-relaxed">
            At Barzel Engineering, we offer a comprehensive suite of industrial services, built on a foundation of precision engineering, advanced technology, and unwavering commitment to quality. From concept to completion, we deliver innovative solutions tailored to your specific requirements.
          </p>
        </div>
      </div>
    </section>

    <!-- Modular Solutions Grid -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-4xl font-bold text-[#004a99] mb-12 text-center">Explore Our Core Capabilities</h2>
          
          <div class="grid md:grid-cols-3 gap-6">
            <!-- Card 1 -->
            <div 
              @click="scrollToSection('automotive')"
              class="group cursor-pointer bg-gray-50 rounded-lg p-8 hover:bg-[#004a99] transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2"
            >
              <div class="w-16 h-16 bg-[#004a99] group-hover:bg-white rounded-lg flex items-center justify-center mb-6 transition-colors">
                <svg class="w-8 h-8 text-white group-hover:text-[#004a99] transition-colors" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-800 group-hover:text-white mb-3 transition-colors">
                Customized Automotive Solutions
              </h3>
              <p class="text-gray-600 group-hover:text-white/90 transition-colors">
                Tailored pallets, skids, and transportation solutions for the automotive industry.
              </p>
            </div>

            <!-- Card 2 -->
            <div 
              @click="scrollToSection('utility')"
              class="group cursor-pointer bg-gray-50 rounded-lg p-8 hover:bg-[#004a99] transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2"
            >
              <div class="w-16 h-16 bg-[#004a99] group-hover:bg-white rounded-lg flex items-center justify-center mb-6 transition-colors">
                <svg class="w-8 h-8 text-white group-hover:text-[#004a99] transition-colors" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-800 group-hover:text-white mb-3 transition-colors">
                Installation & Utility Systems
              </h3>
              <p class="text-gray-600 group-hover:text-white/90 transition-colors">
                Expert installation of fuel pipelines, compressed air lines, and utility systems.
              </p>
            </div>

            <!-- Card 3 -->
            <div 
              @click="scrollToSection('fabrication')"
              class="group cursor-pointer bg-gray-50 rounded-lg p-8 hover:bg-[#004a99] transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2"
            >
              <div class="w-16 h-16 bg-[#004a99] group-hover:bg-white rounded-lg flex items-center justify-center mb-6 transition-colors">
                <svg class="w-8 h-8 text-white group-hover:text-[#004a99] transition-colors" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-800 group-hover:text-white mb-3 transition-colors">
                Design, Manufacture & Fabrication
              </h3>
              <p class="text-gray-600 group-hover:text-white/90 transition-colors">
                High-quality SS & MS fabrications, trolleys, and industrial structures.
              </p>
            </div>

            <!-- Card 4 -->
            <div 
              @click="scrollToSection('spm')"
              class="group cursor-pointer bg-gray-50 rounded-lg p-8 hover:bg-[#004a99] transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2"
            >
              <div class="w-16 h-16 bg-[#004a99] group-hover:bg-white rounded-lg flex items-center justify-center mb-6 transition-colors">
                <svg class="w-8 h-8 text-white group-hover:text-[#004a99] transition-colors" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-800 group-hover:text-white mb-3 transition-colors">
                Special Purpose Machines (SPMs)
              </h3>
              <p class="text-gray-600 group-hover:text-white/90 transition-colors">
                Custom machines, jigs, and fixtures designed for specific operations.
              </p>
            </div>

            <!-- Card 5 -->
            <div 
              @click="scrollToSection('plants')"
              class="group cursor-pointer bg-gray-50 rounded-lg p-8 hover:bg-[#004a99] transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2"
            >
              <div class="w-16 h-16 bg-[#004a99] group-hover:bg-white rounded-lg flex items-center justify-center mb-6 transition-colors">
                <svg class="w-8 h-8 text-white group-hover:text-[#004a99] transition-colors" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-800 group-hover:text-white mb-3 transition-colors">
                Industrial Plants & Shop Support
              </h3>
              <p class="text-gray-600 group-hover:text-white/90 transition-colors">
                Plant setup, commissioning, and comprehensive production support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 1: Customized Automotive Solutions -->
    <section id="automotive" class="py-20 bg-gray-50 scroll-mt-20">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="order-2 md:order-1">
              <img 
                src="../assets/ourwork1.jpg" 
                alt="Automotive Solutions" 
                class="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            <div class="order-1 md:order-2">
              <h2 class="text-4xl font-bold text-[#004a99] mb-6">Customized Automotive Solutions</h2>
              <p class="text-lg text-gray-700 leading-relaxed mb-6">
                We specialize in crafting tailored pallets, skids, and transportation solutions designed to optimize logistics and safety within the automotive industry. Our custom designs ensure precise handling and protection for your components.
              </p>
              <h3 class="text-xl font-bold text-gray-800 mb-4">Key Offerings:</h3>
              <ul class="space-y-3">
                <li class="flex items-start gap-3">
                  <span class="flex-shrink-0 w-6 h-6 bg-[#004a99] rounded-full flex items-center justify-center mt-1">
                    <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                  </span>
                  <span class="text-gray-700">Automotive Pallets</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="flex-shrink-0 w-6 h-6 bg-[#004a99] rounded-full flex items-center justify-center mt-1">
                    <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                  </span>
                  <span class="text-gray-700">Stillages</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="flex-shrink-0 w-6 h-6 bg-[#004a99] rounded-full flex items-center justify-center mt-1">
                    <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                  </span>
                  <span class="text-gray-700">Skids</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="flex-shrink-0 w-6 h-6 bg-[#004a99] rounded-full flex items-center justify-center mt-1">
                    <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                  </span>
                  <span class="text-gray-700">Transport Cages</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2: Installation & Utility Systems -->
    <section id="utility" class="py-20 bg-white scroll-mt-20">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-4xl font-bold text-[#004a99] mb-6 text-center">Installation & Utility Systems</h2>
          <p class="text-lg text-gray-700 leading-relaxed mb-12 text-center max-w-3xl mx-auto">
            Our expertise extends to the expert installation of critical utility systems, ensuring seamless and safe operations. This includes fuel pipelines, compressed air lines, and water pipelines, all executed to the highest standards.
          </p>
          
          <div class="bg-gray-50 rounded-lg p-8 md:p-12">
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <h3 class="text-2xl font-bold text-[#004a99] mb-4">Utility Systems & DG Rooms</h3>
                <p class="text-gray-700 leading-relaxed">
                  We provide expert installation and commissioning services for comprehensive utility systems and Diesel Generator (DG) rooms, guaranteeing reliable power and infrastructure for your facility.
                </p>
              </div>
              <div class="flex items-center justify-center">
                <div class="grid grid-cols-2 gap-4 w-full">
                  <div class="bg-white rounded-lg p-4 shadow-md text-center">
                    <div class="text-3xl mb-2">⛽</div>
                    <p class="text-sm font-semibold text-gray-700">Fuel Pipelines</p>
                  </div>
                  <div class="bg-white rounded-lg p-4 shadow-md text-center">
                    <div class="text-3xl mb-2">💨</div>
                    <p class="text-sm font-semibold text-gray-700">Compressed Air</p>
                  </div>
                  <div class="bg-white rounded-lg p-4 shadow-md text-center">
                    <div class="text-3xl mb-2">💧</div>
                    <p class="text-sm font-semibold text-gray-700">Water Pipelines</p>
                  </div>
                  <div class="bg-white rounded-lg p-4 shadow-md text-center">
                    <div class="text-3xl mb-2">⚡</div>
                    <p class="text-sm font-semibold text-gray-700">DG Rooms</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: Design, Manufacture & Fabrication -->
    <section id="fabrication" class="py-20 bg-gray-50 scroll-mt-20">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-4xl font-bold text-[#004a99] mb-6 text-center">Design, Manufacture & Fabrication</h2>
          <p class="text-lg text-gray-700 leading-relaxed mb-12 text-center max-w-3xl mx-auto">
            From conceptual design to robust manufacturing, we excel in producing a wide range of fabrications. This includes high-quality SS & MS trolleys, pallets, and skids, as well as complex heavy fabrication equipment and industrial structurals for various applications.
          </p>
          
          <div class="grid md:grid-cols-3 gap-6">
            <div class="relative h-64 rounded-lg overflow-hidden shadow-lg group">
              <img src="../assets/ourwork13.jpg" alt="Fabrication 1" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"/>
              <div class="absolute inset-0 bg-gradient-to-t from-[#004a99]/80 to-transparent flex items-end p-6">
                <h3 class="text-white font-bold text-lg">SS & MS Trolleys</h3>
              </div>
            </div>
            <div class="relative h-64 rounded-lg overflow-hidden shadow-lg group">
              <img src="../assets/ourwork14.jpg" alt="Fabrication 2" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"/>
              <div class="absolute inset-0 bg-gradient-to-t from-[#004a99]/80 to-transparent flex items-end p-6">
                <h3 class="text-white font-bold text-lg">Heavy Equipment</h3>
              </div>
            </div>
            <div class="relative h-64 rounded-lg overflow-hidden shadow-lg group">
              <img src="../assets/ourwork15.jpg" alt="Fabrication 3" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"/>
              <div class="absolute inset-0 bg-gradient-to-t from-[#004a99]/80 to-transparent flex items-end p-6">
                <h3 class="text-white font-bold text-lg">Industrial Structurals</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 4: Special Purpose Machines -->
    <section id="spm" class="py-20 bg-white scroll-mt-20">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-4xl font-bold text-[#004a99] mb-6">Special Purpose Machines (SPMs) & Equipment</h2>
              <p class="text-lg text-gray-700 leading-relaxed mb-6">
                Our team designs and manufactures custom machines, equipment, jigs, and fixtures, including Special Purpose Machines (SPMs), engineered to optimize specific operational processes, enhance efficiency, and solve unique production challenges.
              </p>
              <div class="bg-gray-50 rounded-lg p-6">
                <h3 class="text-xl font-bold text-gray-800 mb-4">Our SPM Capabilities:</h3>
                <ul class="space-y-3 text-gray-700">
                  <li class="flex items-center gap-2">
                    <span class="text-[#004a99]">▸</span> Custom Machine Design
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="text-[#004a99]">▸</span> Jigs & Fixtures
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="text-[#004a99]">▸</span> Process Automation
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="text-[#004a99]">▸</span> Efficiency Optimization
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <img 
                src="../assets/ourwork25.jpg" 
                alt="Special Purpose Machines" 
                class="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 5: Industrial Plants & Shop Support -->
    <section id="plants" class="py-20 bg-gray-50 scroll-mt-20">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-4xl font-bold text-[#004a99] mb-12 text-center">Industrial Plants & Shop Support</h2>
          
          <div class="grid md:grid-cols-2 gap-8 mb-8">
            <div class="bg-white rounded-lg p-8 shadow-lg">
              <div class="w-16 h-16 bg-[#004a99] rounded-lg flex items-center justify-center mb-6">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-[#004a99] mb-4">Plant Setup & Commissioning</h3>
              <p class="text-gray-700 leading-relaxed">
                We provide expertise in setting up and commissioning industrial plants, including specialized facilities such as Liquid Paint Booths and Powder Coating Plants, ensuring full operational readiness.
              </p>
            </div>

            <div class="bg-white rounded-lg p-8 shadow-lg">
              <div class="w-16 h-16 bg-[#004a99] rounded-lg flex items-center justify-center mb-6">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-[#004a99] mb-4">Production Support</h3>
              <p class="text-gray-700 leading-relaxed">
                Our capabilities extend to comprehensive machine shop and press shop production works, offering reliable support for your ongoing manufacturing needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-[#004a99] text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            Ready to Innovate Your Operations?
          </h2>
          <p class="text-xl mb-10 text-white/90">
            Partner with Barzel Engineering for tailored solutions that drive efficiency and quality.
          </p>
          <router-link 
            to="/contact" 
            class="inline-block px-10 py-4 bg-white text-[#004a99] font-bold text-lg rounded-lg hover:bg-gray-100 transition-colors"
          >
            Discuss Your Project
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Services',
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        const offsetTop = element.offsetTop - 80 // Account for fixed header if any
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        })
      }
    }
  }
}
</script>

<style scoped>
.scroll-mt-20 {
  scroll-margin-top: 5rem;
}
</style>
