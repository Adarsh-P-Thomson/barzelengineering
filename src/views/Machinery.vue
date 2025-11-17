<template>
  <div class="min-h-screen bg-slate-900">
    <!-- Hero Section -->
    <div class="relative h-[70vh] min-h-[600px] overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img 
          src="../assets/floormachinery.png" 
          alt="Our Machinery" 
          class="w-full h-full object-cover object-center"
        />
        <!-- Dark Overlay -->
        <div class="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-cyan-900/80"></div>
      </div>

      <!-- Hero Content -->
      <div class="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div class="max-w-4xl">
          <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Our <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Machinery</span>
          </h1>
          <p class="text-lg sm:text-xl md:text-2xl text-slate-300 mb-6 md:mb-8 leading-relaxed max-w-3xl">
            State-of-the-art equipment powering precision manufacturing and engineering excellence.
          </p>
          <div class="inline-block px-4 md:px-6 py-2 md:py-3 bg-slate-800/50 backdrop-blur-sm border border-cyan-400/30 rounded-lg">
            <span class="text-cyan-400 font-medium text-sm md:text-base tracking-wide">Advanced Manufacturing Technology</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Machinery Section -->
    <section class="py-16 md:py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-10 md:mb-12">
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
              Manufacturing <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Excellence</span>
            </h2>
            <p class="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive range of advanced machinery enables us to deliver precision, quality, and efficiency across all manufacturing processes.
            </p>
          </div>

          <!-- Machinery Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Laser Cutting Machine -->
            <div class="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div class="relative h-64 overflow-hidden">
                <img 
                  src="../assets/lasercutting.png" 
                  alt="Laser Cutting Machine" 
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent flex items-end p-6">
                  <h3 class="text-2xl font-bold text-white">Laser Cutting</h3>
                </div>
              </div>
              <div class="p-6">
                <p class="text-slate-300 text-base mb-4 leading-relaxed">
                  High-precision laser cutting technology for intricate patterns and complex geometries with micron-level accuracy.
                </p>
                <ul class="space-y-2">
                  <li class="flex items-start gap-2 text-sm text-slate-400">
                    <svg class="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span>Precision cutting for complex designs</span>
                  </li>
                  <li class="flex items-start gap-2 text-sm text-slate-400">
                    <svg class="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span>Minimal material waste</span>
                  </li>
                  <li class="flex items-start gap-2 text-sm text-slate-400">
                    <svg class="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span>Clean edges with no finishing required</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Welding Equipment -->
            <div class="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div class="relative h-64 overflow-hidden">
                <img 
                  src="../assets/weldingmachine.jpg" 
                  alt="Welding Equipment" 
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent flex items-end p-6">
                  <h3 class="text-2xl font-bold text-white">Advanced Welding</h3>
                </div>
              </div>
              <div class="p-6">
                <p class="text-slate-300 text-base mb-4 leading-relaxed">
                  Multiple welding processes including TIG, MIG, and ARC for superior joint strength and durability.
                </p>
                <ul class="space-y-2">
                  <li class="flex items-start gap-2 text-sm text-slate-400">
                    <svg class="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span>TIG, MIG & ARC welding capabilities</span>
                  </li>
                  <li class="flex items-start gap-2 text-sm text-slate-400">
                    <svg class="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span>High-strength joints</span>
                  </li>
                  <li class="flex items-start gap-2 text-sm text-slate-400">
                    <svg class="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span>Certified welding processes</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- CNC Drilling -->
            <div class="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div class="relative h-64 overflow-hidden">
                <img 
                  src="../assets/drillingmachine.png" 
                  alt="CNC Drilling Machine" 
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent flex items-end p-6">
                  <h3 class="text-2xl font-bold text-white">CNC Drilling</h3>
                </div>
              </div>
              <div class="p-6">
                <p class="text-slate-300 text-base mb-4 leading-relaxed">
                  Computer numerical control drilling for precise hole placement and consistent results across production runs.
                </p>
                <ul class="space-y-2">
                  <li class="flex items-start gap-2 text-sm text-slate-400">
                    <svg class="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span>Automated precision drilling</span>
                  </li>
                  <li class="flex items-start gap-2 text-sm text-slate-400">
                    <svg class="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span>Consistent hole placement</span>
                  </li>
                  <li class="flex items-start gap-2 text-sm text-slate-400">
                    <svg class="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span>Multiple diameter capabilities</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Powder Coating -->
            <div class="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div class="relative h-64 overflow-hidden">
                <img 
                  src="../assets/powdercoatingbooth.jpg" 
                  alt="Powder Coating Booth" 
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent flex items-end p-6">
                  <h3 class="text-2xl font-bold text-white">Powder Coating</h3>
                </div>
              </div>
              <div class="p-6">
                <p class="text-slate-300 text-base mb-4 leading-relaxed">
                  Professional powder coating booth for durable, corrosion-resistant, and aesthetically superior finishes.
                </p>
                <ul class="space-y-2">
                  <li class="flex items-start gap-2 text-sm text-slate-400">
                    <svg class="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span>Durable coating finish</span>
                  </li>
                  <li class="flex items-start gap-2 text-sm text-slate-400">
                    <svg class="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span>Corrosion resistance</span>
                  </li>
                  <li class="flex items-start gap-2 text-sm text-slate-400">
                    <svg class="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span>Wide color range available</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Bandshaw Machine -->
            <div class="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div class="relative h-64 overflow-hidden">
                <img 
                  src="../assets/bandshawmachine.jpg" 
                  alt="Bandshaw Machine" 
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent flex items-end p-6">
                  <h3 class="text-2xl font-bold text-white">Bandshaw Cutting</h3>
                </div>
              </div>
              <div class="p-6">
                <p class="text-slate-300 text-base mb-4 leading-relaxed">
                  Heavy-duty bandsaw for efficient cutting of various materials and thickness ranges.
                </p>
                <ul class="space-y-2">
                  <li class="flex items-start gap-2 text-sm text-slate-400">
                    <svg class="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span>Heavy-duty metal cutting</span>
                  </li>
                  <li class="flex items-start gap-2 text-sm text-slate-400">
                    <svg class="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span>Multiple material compatibility</span>
                  </li>
                  <li class="flex items-start gap-2 text-sm text-slate-400">
                    <svg class="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span>Variable thickness handling</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Air Compressor -->
            <div class="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div class="relative h-64 overflow-hidden">
                <img 
                  src="../assets/compressormachine.png" 
                  alt="Air Compressor" 
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent flex items-end p-6">
                  <h3 class="text-2xl font-bold text-white">Air Compressor</h3>
                </div>
              </div>
              <div class="p-6">
                <p class="text-slate-300 text-base mb-4 leading-relaxed">
                  Industrial-grade air compressor providing consistent compressed air for all pneumatic operations.
                </p>
                <ul class="space-y-2">
                  <li class="flex items-start gap-2 text-sm text-slate-400">
                    <svg class="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span>High-capacity compressed air</span>
                  </li>
                  <li class="flex items-start gap-2 text-sm text-slate-400">
                    <svg class="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span>Powers pneumatic tools</span>
                  </li>
                  <li class="flex items-start gap-2 text-sm text-slate-400">
                    <svg class="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span>Continuous operation capability</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Multi-Cut Machine -->
            <div class="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div class="relative h-64 overflow-hidden">
                <img 
                  src="../assets/multicutmachine.jpg" 
                  alt="Multi-Cut Machine" 
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent flex items-end p-6">
                  <h3 class="text-2xl font-bold text-white">Multi-Cut Machine</h3>
                </div>
              </div>
              <div class="p-6">
                <p class="text-slate-300 text-base mb-4 leading-relaxed">
                  Versatile cutting system capable of handling complex fabrication requirements with multiple cutting modes.
                </p>
                <ul class="space-y-2">
                  <li class="flex items-start gap-2 text-sm text-slate-400">
                    <svg class="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span>Multi-function cutting</span>
                  </li>
                  <li class="flex items-start gap-2 text-sm text-slate-400">
                    <svg class="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span>Complex fabrication capability</span>
                  </li>
                  <li class="flex items-start gap-2 text-sm text-slate-400">
                    <svg class="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span>Versatile application range</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- CNC Bending Machine -->
            <div class="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div class="relative h-64 overflow-hidden">
                <img 
                  src="../assets/shopfloormachinery.png" 
                  alt="CNC Bending Machine" 
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent flex items-end p-6">
                  <h3 class="text-2xl font-bold text-white">CNC Bending Machine</h3>
                </div>
              </div>
              <div class="p-6">
                <p class="text-slate-300 text-base mb-4 leading-relaxed">
                  Advanced CNC bending technology for precise sheet metal forming and complex angle bends.
                </p>
                <ul class="space-y-2">
                  <li class="flex items-start gap-2 text-sm text-slate-400">
                    <svg class="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span>Precision angle bending</span>
                  </li>
                  <li class="flex items-start gap-2 text-sm text-slate-400">
                    <svg class="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span>Computer-controlled accuracy</span>
                  </li>
                  <li class="flex items-start gap-2 text-sm text-slate-400">
                    <svg class="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span>Complex sheet metal forming</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Drilling Machine -->
            <div class="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div class="relative h-64 overflow-hidden">
                <img 
                  src="../assets/floormachinery1.jpg" 
                  alt="Drilling Machine" 
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent flex items-end p-6">
                  <h3 class="text-2xl font-bold text-white">Drilling Machine</h3>
                </div>
              </div>
              <div class="p-6">
                <p class="text-slate-300 text-base mb-4 leading-relaxed">
                  Heavy-duty drilling equipment for precise hole creation in various materials and thickness ranges.
                </p>
                <ul class="space-y-2">
                  <li class="flex items-start gap-2 text-sm text-slate-400">
                    <svg class="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span>Precision drilling operations</span>
                  </li>
                  <li class="flex items-start gap-2 text-sm text-slate-400">
                    <svg class="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span>Multiple material compatibility</span>
                  </li>
                  <li class="flex items-start gap-2 text-sm text-slate-400">
                    <svg class="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span>Variable depth capabilities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 md:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 text-white relative overflow-hidden">
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <div class="inline-block p-4 bg-cyan-500/20 backdrop-blur-sm rounded-full mb-6 border border-cyan-400/30">
            <svg class="w-16 h-16 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
            </svg>
          </div>
          <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Ready to Leverage Our <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Technology?</span>
          </h2>
          <p class="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8 md:mb-10 leading-relaxed">
            Our advanced machinery and skilled team are ready to bring your projects to life with precision and excellence.
          </p>
          <router-link 
            to="/contact" 
            class="inline-flex items-center gap-2 px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-105 text-base md:text-lg shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50"
          >
            <span>Get In Touch</span>
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
            </svg>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Machinery'
}
</script>

<style scoped>
/* Additional styles if needed */
</style>
