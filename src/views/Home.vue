<template>
  <div class="min-h-screen">
    <!-- Hero Section: The Hook -->
    <section class="relative h-screen min-h-[700px] overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img 
          src="../assets/homebg.jpg" 
          alt="Barzel Engineering Manufacturing" 
          class="w-full h-full object-cover object-center"
        />
        <!-- Dark Overlay with gradient -->
        <div class="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-cyan-900/80"></div>
        
        <!-- Animated Grid Pattern -->
        <div class="absolute inset-0 opacity-10">
          <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" stroke-width="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>

        <!-- Gradient Orbs -->
        <div class="absolute top-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <!-- Hero Content -->
      <div class="relative container mx-auto px-4 h-full flex items-center justify-center z-10">
        <div class="max-w-5xl text-center">
          <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-4 leading-tight tracking-tight">
            BARZEL ENGINEERING
          </h1>
          <p class="text-xl sm:text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-bold mb-6">
            Customize & Creative Packaging Solution
          </p>
          <p class="text-lg sm:text-xl md:text-2xl text-slate-300 mb-6 leading-relaxed max-w-3xl mx-auto">
            Precision Fabrication for the Automotive, Railway, and Mining Industries.
          </p>
          <p class="text-base sm:text-lg text-slate-400 mb-10 leading-relaxed max-w-3xl mx-auto">
            From concept to completion, we transform your toughest engineering challenges into reliable, high-performance solutions. With 25,000 sqft of advanced manufacturing capability and decades of industry expertise, we're the partner that delivers.
          </p>
          
          <!-- Quick Contact Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <!-- Mobile: Show only Call and Contact Us -->
            <div class="flex flex-col sm:hidden gap-4">
              <a 
                href="tel:+919845065065" 
                class="inline-flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-lg rounded-xl hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-green-500/50"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <span>Call Now</span>
              </a>
              <router-link 
                to="/contact" 
                class="inline-flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg rounded-xl hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-cyan-500/50"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                </svg>
                <span>Get Free Quote</span>
              </router-link>
            </div>

            <!-- Desktop: Show all three buttons -->
            <div class="hidden sm:flex flex-row gap-4">
              <a 
                href="tel:+919845065065" 
                class="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-base sm:text-lg rounded-xl hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-green-500/50"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <span>Call Now</span>
              </a>
              <a 
                href="mailto:info@barzelengineering.com" 
                class="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-base sm:text-lg rounded-xl hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-blue-500/50"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span>Email Us</span>
              </a>
              <router-link 
                to="/contact" 
                class="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold text-base sm:text-lg rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 shadow-xl"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                </svg>
                <span>Contact Us</span>
              </router-link>
            </div>
          </div>

          <!-- Secondary Action Buttons -->
          <div class="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center">
            <button 
              @click="scrollToSection('services')"
              class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-white text-white font-semibold text-base rounded-xl hover:bg-white hover:text-slate-900 transition-all duration-300 shadow-xl"
            >
              <span>Our Services</span>
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </button>
            <!-- Desktop only: Our Work button -->
            <button 
              @click="scrollToSection('our-work')"
              class="hidden sm:inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-slate-400 text-slate-300 font-semibold text-base rounded-xl hover:border-white hover:text-white transition-all duration-300 shadow-xl"
            >
              <span>Our Work</span>
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>

    <!-- Core Services Section -->
    <section id="services" class="py-20 bg-slate-900 relative overflow-hidden">
      <!-- Background Decoration -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-16">
          <div class="inline-block px-4 py-2 bg-cyan-500/10 rounded-full mb-4">
            <span class="text-cyan-400 font-semibold text-sm tracking-wider uppercase">What We Do</span>
          </div>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Core <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Capabilities</span>
          </h2>
          <p class="text-base md:text-lg text-slate-300 max-w-2xl mx-auto px-4">
            Comprehensive solutions designed to solve your most complex manufacturing challenges with precision and reliability.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          <!-- Service Card 1 -->
          <div class="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/50">
            <div class="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/30">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Custom Automotive Solutions</h3>
            <p class="text-slate-300 leading-relaxed">
              Tailored pallets, skids, and transport solutions.
            </p>
          </div>

          <!-- Service Card 2 -->
          <div class="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/30">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">SS & MS Fabrication</h3>
            <p class="text-slate-300 leading-relaxed">
              High-quality trolleys, heavy equipment, and structurals.
            </p>
          </div>

          <!-- Service Card 3 -->
          <div class="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/50">
            <div class="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/30">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Utility & Plant Installation</h3>
            <p class="text-slate-300 leading-relaxed">
              Expert installation of pipelines, DG rooms, and paint booths.
            </p>
          </div>

          <!-- Service Card 4 -->
          <div class="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/30">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Special Purpose Machines</h3>
            <p class="text-slate-300 leading-relaxed">
              Custom-designed jigs, fixtures, and equipment.
            </p>
          </div>
        </div>

        <div class="text-center">
          <router-link 
            to="/services"
            class="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg rounded-xl hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-xl shadow-cyan-500/30"
          >
            <span>View All Services</span>
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
            </svg>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Why Partner With Us Section -->
    <section class="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 text-white relative overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-5">
        <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="partner-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="white"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#partner-grid)" />
        </svg>
      </div>

      <!-- Gradient Orbs -->
      <div class="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-16">
          <div class="inline-block px-4 py-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full mb-4">
            <span class="text-cyan-400 font-semibold text-sm tracking-wider uppercase">Partnership Value</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            Why Industry Leaders <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Choose Us</span>
          </h2>
          <p class="text-xl text-slate-300 max-w-3xl mx-auto">
            We don't just manufacture—we become an extension of your engineering team, committed to your success.
          </p>
        </div>

        <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <!-- Value 1 -->
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all hover:transform hover:-translate-y-2">
            <div class="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/50">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4">Custom Engineering</h3>
            <p class="text-slate-300 leading-relaxed mb-4">
              Every project is unique. Our in-house design team collaborates with you from concept to completion, ensuring solutions that perfectly match your specifications.
            </p>
            <div class="flex items-center text-cyan-400 font-semibold">
              <span>Tailored to your needs</span>
              <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </div>
          </div>

          <!-- Value 2 -->
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all hover:transform hover:-translate-y-2">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/50">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4">Quality Assurance</h3>
            <p class="text-slate-300 leading-relaxed mb-4">
              ISO-grade precision with rigorous quality control at every stage. We deliver solutions that meet the highest industry standards and exceed expectations.
            </p>
            <div class="flex items-center text-cyan-400 font-semibold">
              <span>Zero-compromise quality</span>
              <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </div>
          </div>

          <!-- Value 3 -->
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all hover:transform hover:-translate-y-2">
            <div class="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/50">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4">On-Time Delivery</h3>
            <p class="text-slate-300 leading-relaxed mb-4">
              Your timelines are our priority. With optimized workflows and efficient project management, we ensure your projects stay on schedule without sacrificing quality.
            </p>
            <div class="flex items-center text-cyan-400 font-semibold">
              <span>Reliable partnerships</span>
              <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </div>
          </div>
        </div>

        <!-- Stats Bar -->
        <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div class="text-center">
            <div class="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-2">25K+</div>
            <div class="text-slate-300 font-semibold">sqft Facility</div>
          </div>
          <div class="text-center">
            <div class="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-2">500+</div>
            <div class="text-slate-300 font-semibold">Projects Delivered</div>
          </div>
          <div class="text-center">
            <div class="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-2">15+</div>
            <div class="text-slate-300 font-semibold">Industry Leaders</div>
          </div>
          <div class="text-center">
            <div class="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-2">100%</div>
            <div class="text-slate-300 font-semibold">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Us Snippet Section -->
    <section id="about" class="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <!-- Left Column: Image -->
            <div class="order-2 md:order-1">
              <div class="relative group">
                <div class="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl transform rotate-3 opacity-20 group-hover:rotate-6 transition-transform"></div>
                <img 
                  src="../assets/manufacturingunit.jpg" 
                  alt="Barzel Engineering Facility" 
                  class="relative w-full h-auto rounded-2xl shadow-2xl"
                />
                <div class="absolute -bottom-6 -right-6 bg-gradient-to-br from-cyan-500 to-blue-500 text-white p-8 rounded-2xl shadow-2xl">
                  <div class="text-5xl font-bold">25K</div>
                  <div class="text-sm">sqft Facility</div>
                </div>
              </div>
            </div>

            <!-- Right Column: Content -->
            <div class="order-1 md:order-2 text-center md:text-left">
              <div class="inline-block px-4 py-2 bg-cyan-500/10 rounded-full mb-4">
                <span class="text-cyan-400 font-semibold text-sm tracking-wider uppercase">Who We Are</span>
              </div>
              <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Engineering Excellence.<br/>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Trusted Partnership.</span>
              </h2>
              <p class="text-base md:text-lg text-slate-300 leading-relaxed mb-6 px-4 md:px-0">
                Barzel Engineering specializes in designing, manufacturing, and fabricating specialized equipment and custom pallet solutions for the automotive industry and beyond.
              </p>
              <p class="text-base md:text-lg text-slate-300 leading-relaxed mb-8 px-4 md:px-0">
                With a dedicated in-house design team and a 25,000 sqft facility, we are committed to innovation and collaborative product development to meet our clients' exact needs.
              </p>
              <div class="flex justify-center md:justify-start">
                <router-link 
                  to="/about" 
                  class="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-slate-800 to-slate-900 text-white font-semibold text-base md:text-lg rounded-xl hover:from-slate-700 hover:to-slate-800 transition-all transform hover:scale-105 shadow-xl"
                >
                  <span>Learn More About Us</span>
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                  </svg>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Advanced Machinery & Technology Section -->
    <section id="technology" class="py-20 bg-slate-900 relative overflow-hidden">
      <!-- Background Decoration -->
      <div class="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-12">
          <div class="inline-block px-4 py-2 bg-cyan-500/10 rounded-full mb-4">
            <span class="text-cyan-400 font-semibold text-sm tracking-wider uppercase">Our Technology</span>
          </div>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            State-of-the-Art <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Manufacturing</span>
          </h2>
          <p class="text-base md:text-lg text-slate-300 max-w-3xl mx-auto px-4">
            Equipped with cutting-edge machinery and technology to deliver precision, efficiency, and excellence.
          </p>
        </div>

        <div class="max-w-7xl mx-auto">
          <!-- Machine Grid - All 4 machines in one row -->
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Machine Card 1 - Laser Cutting -->
            <div class="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2">
              <div class="relative h-48 overflow-hidden">
                <img 
                  src="../assets/lasercutting.png" 
                  alt="Laser Cutting Machine" 
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-4">
                  <h3 class="text-lg font-bold text-white">Laser Cutting</h3>
                </div>
              </div>
              <div class="p-4">
                <p class="text-slate-300 text-sm mb-3">
                  Micron-level precision for complex geometries and intricate designs.
                </p>
                <div class="flex items-center text-cyan-400 font-semibold text-xs">
                  <span>Precision Technology</span>
                </div>
              </div>
            </div>

            <!-- Machine Card 2 - Welding -->
            <div class="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2">
              <div class="relative h-48 overflow-hidden">
                <img 
                  src="../assets/weldingmachine.jpg" 
                  alt="Welding Equipment" 
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-4">
                  <h3 class="text-lg font-bold text-white">Advanced Welding</h3>
                </div>
              </div>
              <div class="p-4">
                <p class="text-slate-300 text-sm mb-3">
                  TIG, MIG, and ARC welding capabilities for robust, high-strength joints.
                </p>
                <div class="flex items-center text-cyan-400 font-semibold text-xs">
                  <span>Multi-process capability</span>
                </div>
              </div>
            </div>

            <!-- Machine Card 3 - CNC Drilling -->
            <div class="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2">
              <div class="relative h-48 overflow-hidden">
                <img 
                  src="../assets/drillingmachine.png" 
                  alt="CNC Drilling Machine" 
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-4">
                  <h3 class="text-lg font-bold text-white">CNC Drilling</h3>
                </div>
              </div>
              <div class="p-4">
                <p class="text-slate-300 text-sm mb-3">
                  Computer-controlled precision drilling for accurate hole placement.
                </p>
                <div class="flex items-center text-blue-400 font-semibold text-xs">
                  <span>Automated precision</span>
                </div>
              </div>
            </div>

            <!-- Machine Card 4 - Powder Coating -->
            <div class="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2">
              <div class="relative h-48 overflow-hidden">
                <img 
                  src="../assets/powdercoatingbooth.jpg" 
                  alt="Powder Coating Booth" 
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-4">
                  <h3 class="text-lg font-bold text-white">Powder Coating</h3>
                </div>
              </div>
              <div class="p-4">
                <p class="text-slate-300 text-sm mb-3">
                  Professional finishing with durable, corrosion-resistant coatings.
                </p>
                <div class="flex items-center text-cyan-400 font-semibold text-xs">
                  <span>Superior finishes</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Know More CTA -->
          <div class="mt-12 text-center">
            <router-link 
              to="/services"
              class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg rounded-xl hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-xl shadow-cyan-500/50"
            >
              <span>Know More About Our Technology</span>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Work Showcase Section -->
    <section id="our-work" class="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 text-white relative overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-5">
        <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="work-dots" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="white"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#work-dots)" />
        </svg>
      </div>

      <!-- Gradient Orbs -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-16">
          <div class="inline-block px-4 py-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full mb-4">
            <span class="text-cyan-400 font-semibold text-sm tracking-wider uppercase">Visual Proof</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold mb-4">
            A Showcase of <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Precision</span>
          </h2>
        </div>

        <div class="max-w-6xl mx-auto">
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Gallery Item 1 -->
            <div class="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer border border-slate-700 hover:border-cyan-500/50 transition-all">
              <img 
                src="../assets/ourwork1.jpg" 
                alt="Automotive Pallets" 
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-cyan-900/90 via-cyan-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                <h3 class="text-lg font-bold text-white">Automotive Pallets</h3>
              </div>
            </div>

            <!-- Gallery Item 2 -->
            <div class="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer border border-slate-700 hover:border-blue-500/50 transition-all">
              <img 
                src="../assets/ourwork13.jpg" 
                alt="Heavy Fabrication" 
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                <h3 class="text-lg font-bold text-white">Heavy Fabrication</h3>
              </div>
            </div>

            <!-- Gallery Item 3 -->
            <div class="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer border border-slate-700 hover:border-cyan-500/50 transition-all">
              <img 
                src="../assets/ourwork25.jpg" 
                alt="Special Purpose Machines" 
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-cyan-800/90 via-cyan-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                <h3 class="text-lg font-bold text-white">Special Purpose Machines</h3>
              </div>
            </div>

            <!-- Gallery Item 4 -->
            <div class="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer border border-slate-700 hover:border-blue-500/50 transition-all">
              <img 
                src="../assets/ourwork5.jpg" 
                alt="Industrial Solutions" 
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-blue-800/90 via-blue-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                <h3 class="text-lg font-bold text-white">Industrial Solutions</h3>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <router-link 
            to="/our-work"
            class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg rounded-xl hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-xl shadow-cyan-500/50"
          >
            <span>Explore Our Full Gallery</span>
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
            </svg>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Client Trust Wall Section -->
    <section id="clients" class="py-16 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
      <div class="container mx-auto px-4">
        <div class="text-center mb-10">
          <div class="inline-block px-4 py-2 bg-cyan-500/10 rounded-full mb-4">
            <span class="text-cyan-400 font-semibold text-sm tracking-wider uppercase">Social Proof</span>
          </div>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Trusted by <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Industry Leaders</span>
          </h2>
        </div>

        <!-- Client Logos Marquee -->
        <div class="relative overflow-hidden bg-slate-700/50 backdrop-blur-sm rounded-3xl shadow-xl p-6 border border-slate-600">
          <div class="flex animate-scroll">
            <div v-for="i in 2" :key="i" class="flex gap-8 px-4">
              <div v-for="client in clients" :key="`${i}-${client.name}`" class="flex-shrink-0 bg-slate-700/50 backdrop-blur-sm rounded-xl p-4 border border-slate-600 hover:shadow-xl hover:border-cyan-500/50 transition-all w-40 h-24 flex items-center justify-center group">
                <img 
                  :src="client.src" 
                  :alt="client.name + ' Logo'"
                  class="max-w-full max-h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-8">
          <router-link 
            to="/clients"
            class="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-base md:text-lg group"
          >
            <span>See Full Client List</span>
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
            </svg>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Final CTA Banner -->
    <section id="contact" class="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 text-white relative overflow-hidden">
      <!-- Animated Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-dots" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="white"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-dots)" />
        </svg>
      </div>

      <!-- Gradient Orbs -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-5xl mx-auto text-center">
          <div class="inline-block p-4 bg-cyan-500/20 backdrop-blur-sm rounded-full mb-6 border border-cyan-400/30">
            <svg class="w-16 h-16 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
            </svg>
          </div>
          <h2 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Turn Your Vision Into <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Reality</span>
          </h2>
          <p class="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            Whether you need custom automotive solutions, heavy fabrication, or specialized equipment—we have the expertise, technology, and dedication to deliver exceptional results.
          </p>
          
          <!-- Value Props -->
          <div class="grid md:grid-cols-3 gap-6 mb-10 text-left">
            <div class="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div class="flex-shrink-0 w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <h4 class="font-bold text-white mb-1">Free Consultation</h4>
                <p class="text-sm text-slate-300">Expert guidance at no cost</p>
              </div>
            </div>
            <div class="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div class="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <h4 class="font-bold text-white mb-1">Fast Turnaround</h4>
                <p class="text-sm text-slate-300">Quick quotes & delivery</p>
              </div>
            </div>
            <div class="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div class="flex-shrink-0 w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <h4 class="font-bold text-white mb-1">Quality Guaranteed</h4>
                <p class="text-sm text-slate-300">100% satisfaction promise</p>
              </div>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link 
              to="/contact" 
              class="inline-flex items-center justify-center gap-3 px-12 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-xl rounded-xl hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-cyan-500/50"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              <span>Get Your Free Quote</span>
            </router-link>
            <router-link 
              to="/our-work" 
              class="inline-flex items-center justify-center gap-3 px-12 py-5 bg-white text-slate-900 font-bold text-xl rounded-xl hover:bg-slate-100 transition-all shadow-xl"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"/>
              </svg>
              <span>View Our Portfolio</span>
            </router-link>
          </div>

          <p class="text-slate-400 mt-8 text-sm">
            Join 15+ industry leaders who trust Barzel Engineering for their critical manufacturing needs
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// Import all client logos statically
import fordLogo from '../assets/ford.jpg'
import gestampLogo from '../assets/Gestamp.svg'
import geLogo from '../assets/general-electric.png'
import apolloLogo from '../assets/ApolloLogo.jpg'
import heatControlLogo from '../assets/HeatAndControlLogo.png'
import tennecoLogo from '../assets/tenneco.png'
import mrfLogo from '../assets/mrf.png'
import nissanLogo from '../assets/nissan.jpg'
import jaiLogo from '../assets/JAI Logo.png'
import salcompLogo from '../assets/salcomp logo.png'
import reepLogo from '../assets/REEP-MOTORS-LOGO.png'
import unipresLogo from '../assets/unipres-logo.png'
import forceMotorsLogo from '../assets/forcemotors.jpg'

export default {
  name: 'Home',
  data() {
    return {
      clients: [
        { name: 'Ford', src: fordLogo },
        { name: 'Gestamp', src: gestampLogo },
        { name: 'GE', src: geLogo },
        { name: 'Apollo', src: apolloLogo },
        { name: 'Nissan', src: nissanLogo },
        { name: 'MRF', src: mrfLogo },
        { name: 'Tenneco', src: tennecoLogo },
        { name: 'Heat & Control', src: heatControlLogo },
        { name: 'JAI', src: jaiLogo },
        { name: 'Salcomp', src: salcompLogo },
        { name: 'Reep Industries', src: reepLogo },
        { name: 'Unipres', src: unipresLogo },
        { name: 'Force Motors', src: forceMotorsLogo }
      ]
    }
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  }
}
</script>

<style scoped>
/* Animations */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out;
}

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

/* Client Logo Marquee Animation */
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll 30s linear infinite;
}

.animate-scroll:hover {
  animation-play-state: paused;
}
</style>
