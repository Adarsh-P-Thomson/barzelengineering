<template>
  <div class="min-h-screen bg-slate-900">
    <!-- Hero Section -->
    <div class="relative h-[70vh] min-h-[600px] overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img 
          src="../assets/ourwork1.jpg" 
          alt="Our Work" 
          class="w-full h-full object-cover object-center"
        />
        <!-- Dark Overlay -->
        <div class="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-cyan-900/80"></div>
      </div>

      <!-- Hero Content -->
      <div class="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div class="max-w-4xl">
          <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Our <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Work</span>
          </h1>
          <p class="text-lg sm:text-xl md:text-2xl text-slate-300 mb-6 md:mb-8 leading-relaxed max-w-3xl">
            Engineering excellence through precision manufacturing, custom solutions, and innovative design.
          </p>
          <div class="inline-block px-4 md:px-6 py-2 md:py-3 bg-slate-800/50 backdrop-blur-sm border border-cyan-400/30 rounded-lg">
            <span class="text-cyan-400 font-medium text-sm md:text-base tracking-wide">Showcasing 25+ Years of Innovation</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Machineries Section -->
    <section class="py-16 md:py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-10 md:mb-12">
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-400 mb-4 md:mb-6">Our Manufacturing Arsenal</h2>
            <p class="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              State-of-the-art machinery and equipment powering precision manufacturing across our 25,000 sqft facility.
            </p>
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <!-- Multi Cut Machine -->
            <div class="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div class="relative h-48 md:h-56 overflow-hidden">
                <img 
                  src="../assets/multicutmachine.jpg" 
                  alt="Multi Cut Machine"
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>
              <div class="p-4 md:p-6">
                <h3 class="text-lg md:text-xl font-bold text-white mb-2">Multi Cut Machine</h3>
                <p class="text-sm md:text-base text-slate-300">Advanced cutting technology for precision material processing</p>
              </div>
            </div>

            <!-- Band Shaw Machine -->
            <div class="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
              <div class="relative h-48 md:h-56 overflow-hidden">
                <img 
                  src="../assets/bandshawmachine.jpg" 
                  alt="Band Shaw Machine"
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>
              <div class="p-4 md:p-6">
                <h3 class="text-lg md:text-xl font-bold text-white mb-2">Band Shaw Machine</h3>
                <p class="text-sm md:text-base text-slate-300">High-precision band saw for efficient material cutting</p>
              </div>
            </div>

            <!-- Drilling Machine -->
            <div class="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 sm:col-span-2 lg:col-span-1">
              <div class="relative h-48 md:h-56 overflow-hidden">
                <img 
                  src="../assets/drillingmachine.png" 
                  alt="Drilling Machine"
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>
              <div class="p-4 md:p-6">
                <h3 class="text-lg md:text-xl font-bold text-white mb-2">Drilling Machine</h3>
                <p class="text-sm md:text-base text-slate-300">Industrial-grade drilling for precise hole creation</p>
              </div>
            </div>
          </div>

          <!-- Facility Overview -->
          <div class="mt-12 md:mt-16 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 md:p-8">
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">25,000 Sqft Manufacturing Facility</h3>
                <p class="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
                  Our state-of-the-art facility houses cutting-edge machinery and skilled craftsmen, enabling us to deliver precision-engineered solutions across multiple industries.
                </p>
                <div class="grid grid-cols-2 gap-4">
                  <div class="text-center">
                    <div class="text-2xl md:text-3xl font-bold text-cyan-400 mb-1">25K+</div>
                    <div class="text-sm md:text-base text-slate-300">Sqft Facility</div>
                  </div>
                  <div class="text-center">
                    <div class="text-2xl md:text-3xl font-bold text-blue-400 mb-1">25+</div>
                    <div class="text-sm md:text-base text-slate-300">Years Experience</div>
                  </div>
                </div>
              </div>
              <div class="relative">
                <img 
                  src="../assets/manufacturingunit.jpg" 
                  alt="Manufacturing Unit"
                  class="w-full h-64 md:h-80 object-cover rounded-xl shadow-2xl"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Chapter 1: Automotive & Transport Solutions -->
    <section class="py-16 md:py-20 bg-slate-900">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-10 md:mb-12">
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
              Automotive <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Solutions</span>
            </h2>
            <p class="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Custom pallets, skids, and transportation solutions engineered for automotive industry efficiency.
            </p>
          </div>

          <!-- Simplified Grid -->
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
            <div 
              v-for="(image, index) in automotiveImages.slice(0, 8)" 
              :key="index"
              @click="openLightbox('automotive', index)"
              class="group relative aspect-square overflow-hidden rounded-xl cursor-pointer bg-slate-800 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
              :class="index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''"
            >
              <img 
                :src="getImagePath(image)" 
                :alt="`Automotive ${index + 1}`"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="absolute bottom-3 left-3 right-3">
                  <p class="text-white font-medium text-sm">View Gallery</p>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center">
            <button 
              @click="openLightbox('automotive', 0)"
              class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/30"
            >
              <span>View All {{ automotiveImages.length }} Images</span>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Chapter 2: SS & MS Fabrication -->
    <section class="py-16 md:py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-10 md:mb-12">
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
              SS & MS <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Fabrication</span>
            </h2>
            <p class="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Precision fabrication of stainless steel and mild steel components for industrial applications.
            </p>
          </div>

          <!-- Horizontal Scroll Gallery -->
          <div class="relative mb-8">
            <div 
              ref="filmstripContainer"
              class="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory filmstrip-scrollbar"
              @scroll="updateScrollButtons"
            >
              <div 
                v-for="(image, index) in fabricationImages.slice(0, 8)" 
                :key="index"
                @click="openLightbox('fabrication', index)"
                class="group relative flex-shrink-0 w-64 md:w-80 h-48 md:h-64 overflow-hidden rounded-xl cursor-pointer bg-slate-800 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 snap-start"
              >
                <img 
                  :src="getImagePath(image)" 
                  :alt="`Fabrication ${index + 1}`"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div class="absolute bottom-3 left-3 right-3">
                    <p class="text-white font-medium text-sm">View Gallery</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Scroll Buttons -->
            <button 
              v-if="showScrollLeft"
              @click="scrollFilmstrip('left')"
              class="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-slate-800/90 backdrop-blur-sm text-white rounded-full shadow-xl hover:bg-slate-700 transition-colors z-10 flex items-center justify-center border border-slate-600"
            >
              <svg class="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
            </button>
            <button 
              v-if="showScrollRight"
              @click="scrollFilmstrip('right')"
              class="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-slate-800/90 backdrop-blur-sm text-white rounded-full shadow-xl hover:bg-slate-700 transition-colors z-10 flex items-center justify-center border border-slate-600"
            >
              <svg class="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
              </svg>
            </button>
          </div>

          <div class="text-center">
            <button 
              @click="openLightbox('fabrication', 0)"
              class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-600 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/30"
            >
              <span>View All {{ fabricationImages.length }} Images</span>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Chapter 3: Special Purpose Machines -->
    <section class="py-16 md:py-20 bg-slate-900">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-10 md:mb-12">
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
              Special Purpose <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Machines</span>
            </h2>
            <p class="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Custom jigs, fixtures, and specialized machinery designed for unique operational requirements.
            </p>
          </div>

          <!-- Compact Grid -->
          <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
            <div 
              v-for="(image, index) in spmImages.slice(0, 8)" 
              :key="index"
              @click="openLightbox('spm', index)"
              class="group relative aspect-square overflow-hidden rounded-xl cursor-pointer bg-slate-800 border border-slate-700 hover:border-indigo-500/50 transition-all duration-300"
              :class="index === 0 ? 'md:col-span-2' : ''"
            >
              <img 
                :src="getImagePath(image)" 
                :alt="`SPM ${index + 1}`"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="absolute bottom-3 left-3 right-3">
                  <p class="text-white font-medium text-sm">View Gallery</p>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center">
            <button 
              @click="openLightbox('spm', 0)"
              class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-indigo-500/30"
            >
              <span>View All {{ spmImages.length }} Images</span>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA Banner -->
    <section class="py-16 md:py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-5">
        <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      <!-- Gradient Orbs -->
      <div class="absolute top-1/2 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <div class="inline-block p-3 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full mb-6">
            <svg class="w-10 h-10 md:w-12 md:h-12 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
            </svg>
          </div>
          <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Ready to Bring Your <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Vision to Life?</span>
          </h2>
          <p class="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8 md:mb-10 leading-relaxed">
            From concept to completion, we engineer solutions that exceed expectations.
          </p>
          <router-link 
            to="/contact" 
            class="inline-flex items-center gap-2 px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-105 text-base md:text-lg shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50"
          >
            <span>Start Your Project</span>
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
            </svg>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <Transition name="lightbox">
      <div 
        v-if="lightboxOpen" 
        class="fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-sm"
        @click="closeLightbox"
      >
        <div class="absolute inset-0 flex flex-col">
          <!-- Header -->
          <div class="flex items-center justify-between p-4 md:p-6 bg-gradient-to-b from-slate-800/90 to-transparent">
            <div class="text-white">
              <p class="text-sm text-cyan-400 font-medium">{{ currentCategory.toUpperCase() }}</p>
              <p class="text-lg font-semibold">{{ currentImageIndex + 1 }} of {{ currentImages.length }}</p>
            </div>
            <button 
              @click="closeLightbox"
              class="w-10 h-10 md:w-12 md:h-12 bg-slate-800/80 hover:bg-slate-700 text-white rounded-full transition-colors flex items-center justify-center border border-slate-600"
            >
              <svg class="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </button>
          </div>

          <!-- Image Container -->
          <div class="flex-1 flex items-center justify-center p-4 md:p-8" @click.stop>
            <button 
              @click="previousImage"
              class="absolute left-4 w-12 h-12 md:w-14 md:h-14 bg-slate-800/90 hover:bg-slate-700 text-white rounded-full transition-colors flex items-center justify-center z-10 border border-slate-600"
            >
              <svg class="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
            </button>

            <div class="max-w-6xl max-h-full">
              <img 
                :src="getImagePath(currentImages[currentImageIndex])" 
                :alt="`Image ${currentImageIndex + 1}`"
                class="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl border border-slate-700"
              />
            </div>

            <button 
              @click="nextImage"
              class="absolute right-4 w-12 h-12 md:w-14 md:h-14 bg-slate-800/90 hover:bg-slate-700 text-white rounded-full transition-colors flex items-center justify-center z-10 border border-slate-600"
            >
              <svg class="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
              </svg>
            </button>
          </div>

          <!-- Thumbnail Strip -->
          <div class="p-4 md:p-6 bg-gradient-to-t from-slate-800/90 to-transparent">
            <div class="flex gap-2 overflow-x-auto pb-2 justify-center thumbnail-scrollbar">
              <div 
                v-for="(image, index) in currentImages" 
                :key="index"
                @click.stop="currentImageIndex = index"
                class="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden cursor-pointer border-2 transition-all"
                :class="index === currentImageIndex ? 'border-cyan-400 scale-110 shadow-lg shadow-cyan-500/30' : 'border-slate-600 opacity-60 hover:opacity-100 hover:border-slate-500'"
              >
                <img 
                  :src="getImagePath(image)" 
                  :alt="`Thumbnail ${index + 1}`"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue'

export default {
  name: 'OurWork',
  setup() {
    // Image collections
    const automotiveImages = ref([
      'ourwork1.jpg', 'ourwork2.jpg', 'ourwork3.jpg', 'ourwork4.jpg',
      'ourwork5.jpg', 'ourwork6.jpg', 'ourwork7.jpg', 'ourwork8.jpg',
      'ourwork9.jpg', 'ourwork10.jpg', 'ourwork11.jpg', 'ourwork12.jpg'
    ])

    const fabricationImages = ref([
      'ourwork13.jpg', 'ourwork14.jpg', 'ourwork15.jpg', 'ourwork16.jpg',
      'ourwork17.jpg', 'ourwork18.jpg', 'ourwork19.jpg', 'ourwork20.jpg',
      'ourwork21.jpg', 'ourwork22.jpg', 'ourwork23.jpg', 'ourwork24.jpg'
    ])

    const spmImages = ref([
      'ourwork25.jpg', 'ourwork26.jpg', 'ourwork27.jpg', 'ourwork28.jpg',
      'ourwork29.jpg', 'ourwork30.jpg', 'ourwork31.jpg', 'ourwork32.jpg',
      'ourwork33.jpg', 'ourwork34.jpg', 'ourwork35.jpg'
    ])

    const facilityImages = ref([
      'manufacturingunit.jpg', 'multicutmachine.jpg',
      'bandshawmachine.jpg', 'compressormachine.png', 'drillingmachine.png'
    ])

    // Lightbox state
    const lightboxOpen = ref(false)
    const currentCategory = ref('')
    const currentImageIndex = ref(0)

    // Filmstrip scroll state
    const filmstripContainer = ref(null)
    const showScrollLeft = ref(false)
    const showScrollRight = ref(true)

    const currentImages = computed(() => {
      switch (currentCategory.value) {
        case 'automotive':
          return automotiveImages.value
        case 'fabrication':
          return fabricationImages.value
        case 'spm':
          return spmImages.value
        case 'facility':
          return facilityImages.value
        default:
          return []
      }
    })

    const getImagePath = (imageName) => {
      try {
        return new URL(`../assets/${imageName}`, import.meta.url).href
      } catch (e) {
        console.warn(`Image not found: ${imageName}`)
        return ''
      }
    }

    const openLightbox = (category, index) => {
      currentCategory.value = category
      currentImageIndex.value = index
      lightboxOpen.value = true
      document.body.style.overflow = 'hidden'
    }

    const closeLightbox = () => {
      lightboxOpen.value = false
      document.body.style.overflow = ''
    }

    const nextImage = () => {
      currentImageIndex.value = (currentImageIndex.value + 1) % currentImages.value.length
    }

    const previousImage = () => {
      currentImageIndex.value = (currentImageIndex.value - 1 + currentImages.value.length) % currentImages.value.length
    }

    const scrollFilmstrip = (direction) => {
      const container = filmstripContainer.value
      if (!container) return
      
      const scrollAmount = direction === 'left' ? -400 : 400
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }

    const updateScrollButtons = () => {
      const container = filmstripContainer.value
      if (!container) return
      
      showScrollLeft.value = container.scrollLeft > 0
      showScrollRight.value = container.scrollLeft < (container.scrollWidth - container.clientWidth - 10)
    }

    // Keyboard navigation
    const handleKeydown = (e) => {
      if (!lightboxOpen.value) return
      
      if (e.key === 'ArrowLeft') previousImage()
      else if (e.key === 'ArrowRight') nextImage()
      else if (e.key === 'Escape') closeLightbox()
    }

    onMounted(() => {
      window.addEventListener('keydown', handleKeydown)
      if (filmstripContainer.value) {
        filmstripContainer.value.addEventListener('scroll', updateScrollButtons)
      }
    })

    onUnmounted(() => {
      window.removeEventListener('keydown', handleKeydown)
      document.body.style.overflow = ''
    })

    return {
      automotiveImages,
      fabricationImages,
      spmImages,
      facilityImages,
      lightboxOpen,
      currentCategory,
      currentImageIndex,
      currentImages,
      filmstripContainer,
      showScrollLeft,
      showScrollRight,
      getImagePath,
      openLightbox,
      closeLightbox,
      nextImage,
      previousImage,
      scrollFilmstrip,
      updateScrollButtons
    }
  }
}
</script>

<style scoped>
/* Filmstrip Scrollbar */
.filmstrip-scrollbar::-webkit-scrollbar {
  height: 8px;
}

.filmstrip-scrollbar::-webkit-scrollbar-track {
  background: #1e293b;
  border-radius: 4px;
}

.filmstrip-scrollbar::-webkit-scrollbar-thumb {
  background: linear-gradient(to right, #06b6d4, #3b82f6);
  border-radius: 4px;
}

.filmstrip-scrollbar::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to right, #0891b2, #2563eb);
}

/* Thumbnail Scrollbar */
.thumbnail-scrollbar::-webkit-scrollbar {
  height: 6px;
}

.thumbnail-scrollbar::-webkit-scrollbar-track {
  background: #334155;
  border-radius: 3px;
}

.thumbnail-scrollbar::-webkit-scrollbar-thumb {
  background: #06b6d4;
  border-radius: 3px;
}

.thumbnail-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #0891b2;
}

/* Lightbox Transition */
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.3s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

/* Enhanced hover effects for better interactivity */
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

/* Smooth scrolling for better UX */
.scroll-smooth {
  scroll-behavior: smooth;
}

/* Custom snap scrolling */
.snap-x {
  scroll-snap-type: x mandatory;
}

.snap-start {
  scroll-snap-align: start;
}
</style>
