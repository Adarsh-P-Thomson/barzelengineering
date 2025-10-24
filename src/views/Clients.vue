<template>
  <div class="min-h-screen bg-slate-900">
    <!-- Hero Section -->
    <div class="relative h-[70vh] min-h-[500px] overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img 
          src="../assets/clientspagebg2.png" 
          alt="Manufacturing Facility" 
          class="w-full h-full object-cover object-center"
        />
        <!-- Dark Overlay -->
        <div class="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-cyan-900/80"></div>
      </div>

      <!-- Hero Content -->
      <div class="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div class="max-w-4xl">
          <div class="inline-block px-4 py-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full mb-4 md:mb-6">
            <span class="text-cyan-400 font-semibold text-sm tracking-wider uppercase">Global Partnerships</span>
          </div>
          <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Our <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Customers</span>
          </h1>
          <p class="text-lg sm:text-xl md:text-2xl text-slate-300 leading-relaxed">
            Trusted by Multinational Leaders and Fortune 100 Companies
          </p>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>

    <!-- Introduction Section -->
    <section class="py-16 md:py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-10 md:mb-12">
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
              Serving <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Excellence</span> Worldwide
            </h2>
          </div>

          <div class="grid md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-12">
            <div class="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl md:rounded-2xl p-6 md:p-8 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300">
              <div class="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 md:mb-6 shadow-lg shadow-cyan-500/30">
                <svg class="w-7 h-7 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd"/>
                </svg>
              </div>
              <p class="text-slate-300 leading-relaxed text-base md:text-lg">
                Today, Barzel Engineering's products have a <span class="font-semibold text-cyan-400">global reach</span>, satisfying the needs of multinational and Fortune 100 companies alike. Our offerings are regularly supplied to various regions across India, including <span class="font-semibold text-white">Hyderabad, Kolkata, Pune, Gujarat, Bangalore, and Kerala</span>, among others.
              </p>
            </div>

            <div class="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl md:rounded-2xl p-6 md:p-8 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
              <div class="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4 md:mb-6 shadow-lg shadow-blue-500/30">
                <svg class="w-7 h-7 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"/>
                </svg>
              </div>
              <p class="text-slate-300 leading-relaxed text-base md:text-lg">
                Barzel Engineering has become a <span class="font-semibold text-blue-400">key provider of automobile pallets and steel stillages</span> to the Indian automobile industry, delivering precision-engineered solutions that power manufacturing excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Client List Section -->
    <section class="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-5">
        <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="white"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div class="container mx-auto px-4 relative">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <div class="inline-block px-4 py-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full mb-4">
              <span class="text-cyan-400 font-semibold text-sm tracking-wider uppercase">Trusted Partners</span>
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
              Proudly Supplying Major <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Automobile OEMs</span>
            </h2>
            <p class="text-slate-300 text-lg max-w-3xl mx-auto">
              We proudly supply a range of products to major automobile OEMs, delivering excellence and precision in every project.
            </p>
          </div>

          <!-- Client Grid -->
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            <div v-for="client in clients" :key="client" 
                 class="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg md:rounded-xl p-4 md:p-6 hover:bg-gradient-to-br hover:from-cyan-500/10 hover:to-blue-500/10 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-1">
              <div class="flex items-center justify-center h-16 md:h-20">
                <h3 class="text-base md:text-xl font-bold text-slate-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all text-center leading-tight">
                  {{ client }}
                </h3>
              </div>
            </div>
          </div>

          <!-- Stats Section -->
          <div class="grid sm:grid-cols-3 gap-4 md:gap-8 mt-12 md:mt-16">
            <div class="text-center p-4 md:p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700">
              <div class="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-1 md:mb-2">13+</div>
              <div class="text-slate-400 font-medium text-sm md:text-base">Major OEM Partners</div>
            </div>
            <div class="text-center p-4 md:p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700">
              <div class="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-1 md:mb-2">100%</div>
              <div class="text-slate-400 font-medium text-sm md:text-base">Client Satisfaction</div>
            </div>
            <div class="text-center p-4 md:p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700 sm:col-span-3 md:col-span-1">
              <div class="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-1 md:mb-2">Pan-India</div>
              <div class="text-slate-400 font-medium text-sm md:text-base">Service Coverage</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Strategic Growth Banner -->
    <section class="py-12 md:py-16 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 border-y border-slate-700">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <!-- Icon Section -->
            <div class="flex-shrink-0">
              <div class="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/50 transform hover:scale-110 transition-transform">
                <svg class="w-10 h-10 md:w-12 md:h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"/>
                </svg>
              </div>
            </div>

            <!-- Content Section -->
            <div class="flex-1 text-center md:text-left">
              <div class="inline-block px-3 py-1 md:px-4 md:py-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full mb-3 md:mb-4">
                <span class="text-cyan-400 font-semibold text-xs md:text-sm tracking-wider uppercase">Strategic Expansion</span>
              </div>
              <h3 class="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
                Expanding into <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Railway & Mining</span> Sectors
              </h3>
              <p class="text-slate-300 text-base md:text-lg leading-relaxed">
                Aligned with our strategic vision for growth and diversification, we have recently expanded our portfolio to include the fabrication of <span class="font-semibold text-cyan-400">heavy MS and SS equipment</span> for the Railway and Mining Industry sectors in India.
              </p>
            </div>

            <!-- CTA Button -->
            <div class="flex-shrink-0 mt-4 md:mt-0">
              <router-link 
                to="/contact" 
                class="group inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-400 transform hover:scale-105 transition-all duration-300 shadow-xl shadow-cyan-500/30 text-sm md:text-base"
              >
                <span>Inquire About a Project</span>
                <svg class="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                </svg>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Regional Presence Section -->
    <section class="py-16 md:py-20 bg-slate-900">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-10 md:mb-12">
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
              Serving <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">India</span> Coast to Coast
            </h2>
          </div>

          <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <div v-for="region in regions" :key="region.name" 
                 class="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl md:rounded-2xl p-4 md:p-6 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all hover:-translate-y-2">
              <div class="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/30">
                <svg class="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{{ region.name }}</h3>
              <p class="text-slate-300 text-sm md:text-base">{{ region.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
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
          <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Ready to <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Partner</span> with Us?
          </h2>
          <p class="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8 md:mb-10 leading-relaxed">
            Join the ranks of Fortune 100 companies and industry leaders who trust Barzel Engineering for their precision fabrication needs.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link 
              to="/contact" 
              class="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-xl shadow-cyan-500/30 text-sm md:text-base"
            >
              <span>Get in Touch</span>
              <svg class="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
            </router-link>
            <router-link 
              to="/our-work" 
              class="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-slate-800/50 backdrop-blur-sm border-2 border-cyan-500 text-cyan-400 font-semibold rounded-xl hover:bg-slate-700/50 transform hover:scale-105 transition-all duration-300 text-sm md:text-base"
            >
              <span>View Our Work</span>
              <svg class="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Clients',
  setup() {
    const clients = [
      'Ford',
      'Gestamp',
      'GE',
      'Apollo',
      'Heat and Control',
      'Tenneco',
      'MRF',
      'Nissan',
      'JAI',
      'Salcomp',
      'Reep Industries',
      'Unipres',
      'Force Motors'
    ]

    const regions = [
      { name: 'Hyderabad', description: 'Major manufacturing hub in South India' },
      { name: 'Kolkata', description: 'Eastern region industrial corridor' },
      { name: 'Pune', description: 'Automobile manufacturing capital' },
      { name: 'Gujarat', description: 'Western India industrial powerhouse' },
      { name: 'Bangalore', description: 'Technology and innovation center' },
      { name: 'Kerala', description: 'Southern coastal manufacturing base' }
    ]

    return {
      clients,
      regions
    }
  }
}
</script>

<style scoped>
@keyframes bounce {
  0%, 100% {
    transform: translateY(0) translateX(-50%);
  }
  50% {
    transform: translateY(-10px) translateX(-50%);
  }
}

.animate-bounce {
  animation: bounce 2s infinite;
}
</style>
