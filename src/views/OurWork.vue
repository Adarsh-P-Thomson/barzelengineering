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

    <!-- Main Gallery Section -->
    <section class="py-16 md:py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-10 md:mb-12">
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
              Our <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Gallery</span>
            </h2>
            <p class="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of precision-engineered solutions across automotive, fabrication, and industrial applications.
            </p>
          </div>

          <!-- Masonry Gallery Grid -->
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            <div 
              v-for="(image, index) in allImages" 
              :key="index"
              @click="openLightbox(index)"
              class="group relative overflow-hidden rounded-xl cursor-pointer bg-slate-800 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              <div class="aspect-square overflow-hidden">
                <img 
                  :src="getImagePath(image)" 
                  :alt="`Gallery Image ${index + 1}`"
                  class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div class="flex items-center gap-2 text-white">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                    <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
                  </svg>
                  <span class="font-medium text-sm">View</span>
                </div>
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

    <!-- Lightbox -->
    <Transition name="lightbox">
      <div 
        v-if="lightboxOpen" 
        @click="closeLightbox"
        class="fixed inset-0 bg-slate-900/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <div @click.stop class="relative w-full h-full flex flex-col items-center justify-center">
          <!-- Close Button -->
          <button 
            @click="closeLightbox"
            class="absolute top-4 right-4 w-10 h-10 md:w-12 md:h-12 bg-slate-800/90 hover:bg-slate-700 text-white rounded-full transition-colors flex items-center justify-center z-10 border border-slate-600"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
            </svg>
          </button>

          <!-- Image Counter -->
          <div class="absolute top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-slate-800/90 rounded-full border border-slate-600">
            <span class="text-white font-medium text-sm">{{ currentImageIndex + 1 }} / {{ allImages.length }}</span>
          </div>

          <!-- Navigation -->
          <div class="flex items-center gap-4 w-full max-w-7xl">
            <button 
              @click="previousImage"
              class="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-slate-800/90 hover:bg-slate-700 text-white rounded-full transition-colors flex items-center justify-center z-10 border border-slate-600"
            >
              <svg class="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
            </button>

            <div class="max-w-6xl max-h-full flex-1 flex items-center justify-center">
              <img 
                :src="getImagePath(allImages[currentImageIndex])" 
                :alt="`Image ${currentImageIndex + 1}`"
                class="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl border border-slate-700"
              />
            </div>

            <button 
              @click="nextImage"
              class="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-slate-800/90 hover:bg-slate-700 text-white rounded-full transition-colors flex items-center justify-center z-10 border border-slate-600"
            >
              <svg class="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
              </svg>
            </button>
          </div>

          <!-- Thumbnail Strip -->
          <div class="mt-6 p-4 md:p-6 bg-gradient-to-t from-slate-800/90 to-transparent rounded-lg max-w-7xl w-full">
            <div class="flex gap-2 overflow-x-auto pb-2 justify-center thumbnail-scrollbar">
              <div 
                v-for="(image, index) in allImages" 
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
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'OurWork',
  setup() {
    // Combined image collection
    const allImages = ref([
      'ourwork1.jpg', 'ourwork2.jpg', 'ourwork3.jpg', 'ourwork4.jpg',
      'ourwork5.jpg', 'ourwork6.jpg', 'ourwork7.jpg', 'ourwork8.jpg',
      'ourwork9.jpg', 'ourwork10.jpg', 'ourwork11.jpg', 'ourwork12.jpg',
      'ourwork13.jpg', 'ourwork14.jpg', 'ourwork15.jpg', 'ourwork16.jpg',
      'ourwork17.jpg', 'ourwork18.jpg', 'ourwork19.jpg', 'ourwork20.jpg',
      'ourwork21.jpg', 'ourwork22.jpg', 'ourwork23.jpg', 'ourwork24.jpg',
      'ourwork25.jpg', 'ourwork26.jpg', 'ourwork27.jpg', 'ourwork28.jpg',
      'ourwork29.jpg', 'ourwork30.jpg', 'ourwork31.jpg', 'ourwork32.jpg',
      'ourwork33.jpg', 'ourwork34.jpg', 'ourwork35.jpg', 'ourwork36.jpg',
      'ourwork37.jpg', 'ourwork38.jpg', 'ourwork39.jpg', 'ourwork40.jpg'
    ])

    // Lightbox state
    const lightboxOpen = ref(false)
    const currentImageIndex = ref(0)

    // Grid span helper for masonry effect
    const getGridSpan = (index) => {
      // Make every 7th and 13th image larger
      if (index % 13 === 0) return 'md:col-span-2 md:row-span-2'
      if (index % 7 === 0) return 'md:col-span-2'
      return ''
    }

    const getImagePath = (imageName) => {
      try {
        return new URL(`../assets/${imageName}`, import.meta.url).href
      } catch (e) {
        console.warn(`Image not found: ${imageName}`)
        return ''
      }
    }

    const openLightbox = (index) => {
      currentImageIndex.value = index
      lightboxOpen.value = true
      document.body.style.overflow = 'hidden'
    }

    const closeLightbox = () => {
      lightboxOpen.value = false
      document.body.style.overflow = ''
    }

    const nextImage = () => {
      currentImageIndex.value = (currentImageIndex.value + 1) % allImages.value.length
    }

    const previousImage = () => {
      currentImageIndex.value = (currentImageIndex.value - 1 + allImages.value.length) % allImages.value.length
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
    })

    onUnmounted(() => {
      window.removeEventListener('keydown', handleKeydown)
      document.body.style.overflow = ''
    })

    return {
      allImages,
      lightboxOpen,
      currentImageIndex,
      getGridSpan,
      getImagePath,
      openLightbox,
      closeLightbox,
      nextImage,
      previousImage
    }
  }
}
</script>

<style scoped>
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

/* Enhanced hover effects */
.group:hover img {
  transform: scale(1.1);
}
</style>
