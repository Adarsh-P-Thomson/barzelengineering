<template>
  <div class="min-h-screen bg-slate-50">
    <!-- Hero Section -->
    <div class="relative h-[75vh] min-h-[600px] overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img 
          src="../assets/ourwork1.jpg" 
          alt="Our Work" 
          class="w-full h-full object-cover object-center"
        />
        <!-- Dark Overlay -->
        <div class="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-cyan-900/85"></div>
        
        <!-- Animated Grid Pattern -->
        <div class="absolute inset-0 opacity-10">
          <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" stroke-width="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>

        <!-- Gradient Orbs -->
        <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div class="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse" style="animation-delay: 2s;"></div>
      </div>

      <!-- Hero Content -->
      <div class="relative container mx-auto px-4 h-full flex items-center">
        <div class="max-w-5xl">
          <div class="inline-block px-4 py-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full mb-6">
            <span class="text-cyan-400 font-semibold text-sm tracking-wider uppercase">Engineered Showcase</span>
          </div>
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Our <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Work</span>
          </h1>
          <p class="text-2xl md:text-3xl text-slate-300 mb-8 italic leading-relaxed font-light">
            "Creativity is thinking up new things.<br />Innovation is doing new things."
          </p>
          <div class="max-w-3xl">
            <p class="text-lg text-slate-300 leading-relaxed mb-6">
              We don't just build products; we <span class="font-semibold text-cyan-400">engineer solutions</span>. Our gallery showcases the precision, durability, and custom design that define Barzel Engineering.
            </p>
            <p class="text-lg text-slate-300 leading-relaxed">
              From specialized automotive pallets and heavy-duty skids to complex SS & MS fabrications and special purpose machines, <span class="font-semibold text-cyan-400">our work is our promise of quality</span>.
            </p>
          </div>
          <div class="mt-10">
            <div class="inline-block px-6 py-3 bg-slate-800/50 backdrop-blur-sm border border-cyan-400/30 rounded-lg">
              <span class="text-cyan-400 font-semibold tracking-wide">↓ Explore Our Capabilities Below ↓</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Chapter 1: Automotive & Transport Solutions -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-12">
            <div class="inline-block px-4 py-2 bg-cyan-50 rounded-full mb-4">
              <span class="text-cyan-600 font-semibold text-sm tracking-wider uppercase">Chapter 1</span>
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Automotive & <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Transport Solutions</span>
            </h2>
            <p class="text-lg text-slate-600 max-w-3xl mx-auto">
              Tailored pallets, skids, and transportation solutions crafted to improve efficiency for the automotive industry.
            </p>
          </div>

          <!-- Featured Grid -->
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div 
              v-for="(image, index) in automotiveImages.slice(0, 8)" 
              :key="index"
              @click="openLightbox('automotive', index)"
              class="group relative aspect-square overflow-hidden rounded-xl cursor-pointer bg-slate-200"
              :class="index === 0 ? 'md:col-span-2 md:row-span-2' : ''"
            >
              <img 
                :src="getImagePath(image)" 
                :alt="`Automotive ${index + 1}`"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="absolute bottom-4 left-4 right-4">
                  <p class="text-white font-semibold text-sm md:text-base">Click to view gallery</p>
                </div>
              </div>
              <!-- Gradient border effect -->
              <div class="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400 rounded-xl transition-colors duration-300"></div>
            </div>
          </div>

          <div class="text-center mt-8">
            <button 
              @click="openLightbox('automotive', 0)"
              class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/30"
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
    <section class="py-20 bg-slate-100">
      <div class="container mx-auto px-4">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-12">
            <div class="inline-block px-4 py-2 bg-blue-50 rounded-full mb-4">
              <span class="text-blue-600 font-semibold text-sm tracking-wider uppercase">Chapter 2</span>
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              SS & MS <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">Fabrication</span>
            </h2>
            <p class="text-lg text-slate-600 max-w-3xl mx-auto">
              Precision fabrication of stainless steel and mild steel trolleys, heavy equipment, and industrial structures.
            </p>
          </div>

          <!-- Horizontal Filmstrip -->
          <div class="relative">
            <div 
              ref="filmstripContainer"
              class="flex gap-4 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory filmstrip-scrollbar"
              @scroll="updateScrollButtons"
            >
              <div 
                v-for="(image, index) in fabricationImages.slice(0, 10)" 
                :key="index"
                @click="openLightbox('fabrication', index)"
                class="group relative flex-shrink-0 w-72 md:w-96 h-64 md:h-80 overflow-hidden rounded-xl cursor-pointer bg-slate-200 snap-start"
              >
                <img 
                  :src="getImagePath(image)" 
                  :alt="`Fabrication ${index + 1}`"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div class="absolute bottom-4 left-4 right-4">
                    <p class="text-white font-semibold">Click to view gallery</p>
                  </div>
                </div>
                <div class="absolute inset-0 border-2 border-transparent group-hover:border-blue-400 rounded-xl transition-colors duration-300"></div>
              </div>
            </div>

            <!-- Scroll Buttons -->
            <button 
              v-if="showScrollLeft"
              @click="scrollFilmstrip('left')"
              class="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800/80 backdrop-blur-sm text-white rounded-full shadow-xl hover:bg-slate-700 transition-colors z-10 flex items-center justify-center"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
            </button>
            <button 
              v-if="showScrollRight"
              @click="scrollFilmstrip('right')"
              class="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800/80 backdrop-blur-sm text-white rounded-full shadow-xl hover:bg-slate-700 transition-colors z-10 flex items-center justify-center"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
              </svg>
            </button>
          </div>

          <div class="text-center mt-8">
            <button 
              @click="openLightbox('fabrication', 0)"
              class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg hover:from-blue-400 hover:to-indigo-400 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/30"
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
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-12">
            <div class="inline-block px-4 py-2 bg-indigo-50 rounded-full mb-4">
              <span class="text-indigo-600 font-semibold text-sm tracking-wider uppercase">Chapter 3</span>
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Special Purpose Machines <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">(SPMs) & Fixtures</span>
            </h2>
            <p class="text-lg text-slate-600 max-w-3xl mx-auto">
              Custom-designed jigs, fixtures, and special purpose machines built to solve unique operational challenges.
            </p>
          </div>

          <!-- Masonry Grid -->
          <div class="masonry-grid">
            <div 
              v-for="(image, index) in spmImages.slice(0, 9)" 
              :key="index"
              @click="openLightbox('spm', index)"
              class="group masonry-item relative overflow-hidden rounded-xl cursor-pointer bg-slate-200"
            >
              <img 
                :src="getImagePath(image)" 
                :alt="`SPM ${index + 1}`"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="absolute bottom-4 left-4 right-4">
                  <p class="text-white font-semibold">Click to view gallery</p>
                </div>
              </div>
              <div class="absolute inset-0 border-2 border-transparent group-hover:border-indigo-400 rounded-xl transition-colors duration-300"></div>
            </div>
          </div>

          <div class="text-center mt-8">
            <button 
              @click="openLightbox('spm', 0)"
              class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover:from-indigo-400 hover:to-purple-400 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-indigo-500/30"
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

    <!-- Chapter 4: Facility & Capabilities -->
    <section class="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <div class="inline-block px-4 py-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full mb-4">
              <span class="text-cyan-400 font-semibold text-sm tracking-wider uppercase">Chapter 4</span>
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Facility & <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Capabilities</span>
            </h2>
            <p class="text-lg text-slate-300 max-w-3xl mx-auto">
              A look inside our 25,000 sqft facility and the advanced machinery that makes it all possible.
            </p>
          </div>

          <!-- Side-by-Side Layout -->
          <div class="grid md:grid-cols-2 gap-6">
            <div 
              @click="openLightbox('facility', 0)"
              class="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer bg-slate-800"
            >
              <img 
                src="../assets/manufacturingunit.jpg" 
                alt="Manufacturing Facility"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent">
                <div class="absolute bottom-6 left-6 right-6">
                  <h3 class="text-2xl font-bold text-white mb-2">25,000 Sqft Facility</h3>
                  <p class="text-slate-300">State-of-the-art manufacturing infrastructure</p>
                </div>
              </div>
              <div class="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400 rounded-2xl transition-colors duration-300"></div>
            </div>

            <div 
              @click="openLightbox('facility', 1)"
              class="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer bg-slate-800"
            >
              <img 
                src="../assets/cncbendingmachine.jpg" 
                alt="CNC Bending Machine"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent">
                <div class="absolute bottom-6 left-6 right-6">
                  <h3 class="text-2xl font-bold text-white mb-2">CNC Press Brake</h3>
                  <p class="text-slate-300">Advanced precision bending technology</p>
                </div>
              </div>
              <div class="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400 rounded-2xl transition-colors duration-300"></div>
            </div>
          </div>

          <div class="text-center mt-8">
            <button 
              @click="openLightbox('facility', 0)"
              class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/30"
            >
              <span>View All Facility Images</span>
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
    <section class="py-20 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 relative overflow-hidden">
      <!-- Animated Background Pattern -->
      <div class="absolute inset-0 opacity-20">
        <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-dots" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="white"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-dots)" />
        </svg>
      </div>

      <div class="container mx-auto px-4 relative">
        <div class="max-w-4xl mx-auto text-center">
          <div class="inline-block p-3 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
            </svg>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Have a Complex Project?
          </h2>
          <p class="text-xl text-white/90 mb-10 leading-relaxed">
            We have the design expertise and fabrication power to build it.
          </p>
          <router-link 
            to="/contact" 
            class="inline-flex items-center gap-3 px-10 py-5 bg-white text-cyan-600 font-bold text-lg rounded-xl hover:bg-slate-50 transform hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            <span>Contact Us for a Quote</span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
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
        class="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm"
        @click="closeLightbox"
      >
        <div class="absolute inset-0 flex flex-col">
          <!-- Header -->
          <div class="flex items-center justify-between p-4 md:p-6 bg-gradient-to-b from-slate-900/80 to-transparent">
            <div class="text-white">
              <p class="text-sm text-slate-400">{{ currentCategory.toUpperCase() }}</p>
              <p class="text-lg font-semibold">Image {{ currentImageIndex + 1 }} of {{ currentImages.length }}</p>
            </div>
            <button 
              @click="closeLightbox"
              class="w-12 h-12 bg-slate-800/80 hover:bg-slate-700 text-white rounded-full transition-colors flex items-center justify-center"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </button>
          </div>

          <!-- Image Container -->
          <div class="flex-1 flex items-center justify-center p-4 md:p-8" @click.stop>
            <button 
              @click="previousImage"
              class="absolute left-4 w-14 h-14 bg-slate-800/80 hover:bg-slate-700 text-white rounded-full transition-colors flex items-center justify-center z-10"
            >
              <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
            </button>

            <div class="max-w-6xl max-h-full">
              <img 
                :src="getImagePath(currentImages[currentImageIndex])" 
                :alt="`Image ${currentImageIndex + 1}`"
                class="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
            </div>

            <button 
              @click="nextImage"
              class="absolute right-4 w-14 h-14 bg-slate-800/80 hover:bg-slate-700 text-white rounded-full transition-colors flex items-center justify-center z-10"
            >
              <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
              </svg>
            </button>
          </div>

          <!-- Thumbnail Strip -->
          <div class="p-4 md:p-6 bg-gradient-to-t from-slate-900/80 to-transparent">
            <div class="flex gap-2 overflow-x-auto pb-2 justify-center thumbnail-scrollbar">
              <div 
                v-for="(image, index) in currentImages" 
                :key="index"
                @click.stop="currentImageIndex = index"
                class="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden cursor-pointer border-2 transition-all"
                :class="index === currentImageIndex ? 'border-cyan-400 scale-110' : 'border-slate-700 opacity-60 hover:opacity-100'"
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
      'manufacturingunit.jpg', 'cncbendingmachine.jpg',
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
  background: #cbd5e1;
  border-radius: 4px;
}

.filmstrip-scrollbar::-webkit-scrollbar-thumb {
  background: linear-gradient(to right, #06b6d4, #3b82f6);
  border-radius: 4px;
}

.filmstrip-scrollbar::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to right, #0891b2, #2563eb);
}

/* Masonry Grid */
.masonry-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  grid-auto-rows: 200px;
}

.masonry-item:nth-child(3n + 1) {
  grid-row: span 2;
}

.masonry-item:nth-child(3n + 2) {
  grid-row: span 1;
}

.masonry-item:nth-child(3n + 3) {
  grid-row: span 2;
}

@media (min-width: 768px) {
  .masonry-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Thumbnail Scrollbar */
.thumbnail-scrollbar::-webkit-scrollbar {
  height: 6px;
}

.thumbnail-scrollbar::-webkit-scrollbar-track {
  background: #1e293b;
  border-radius: 3px;
}

.thumbnail-scrollbar::-webkit-scrollbar-thumb {
  background: #06b6d4;
  border-radius: 3px;
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

/* Animations */
@keyframes pulse {
  0%, 100% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.3;
  }
}

.animate-pulse {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
