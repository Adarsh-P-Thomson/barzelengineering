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
      <div class="relative container mx-auto px-4 h-full flex items-center z-10">
        <div class="max-w-5xl">
          <div class="inline-block mb-6">
            <span class="text-cyan-400 text-sm font-bold tracking-widest uppercase bg-cyan-400/10 px-4 py-2 rounded-full border border-cyan-400/30">
              Engineering Excellence Since Inception
            </span>
          </div>
          <h1 class="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight tracking-tight">
            BARZEL<br/>ENGINEERING
          </h1>
          <p class="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-bold mb-6">
            Customize & Creative Packaging Solution
          </p>
          <p class="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed max-w-3xl">
            Precision Fabrication for the Automotive, Railway, and Mining Industries.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <router-link 
              to="/services" 
              class="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg rounded-xl hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-cyan-500/50"
            >
              <span>Explore Our Services</span>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </router-link>
            <router-link 
              to="/our-work" 
              class="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white hover:text-slate-900 transition-all duration-300 shadow-xl"
            >
              <span>See Our Work</span>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
              </svg>
            </router-link>
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
    <section class="py-20 bg-white relative overflow-hidden">
      <!-- Background Decoration -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-cyan-50 rounded-full blur-3xl opacity-50"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-16">
          <div class="inline-block px-4 py-2 bg-cyan-50 rounded-full mb-4">
            <span class="text-cyan-600 font-semibold text-sm tracking-wider uppercase">What We Do</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Our Core <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Capabilities</span>
          </h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          <!-- Service Card 1 -->
          <div class="group bg-gradient-to-br from-slate-50 to-cyan-50 rounded-2xl p-8 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2 border border-slate-200">
            <div class="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/30">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-slate-800 mb-3">Custom Automotive Solutions</h3>
            <p class="text-slate-600 leading-relaxed">
              Tailored pallets, skids, and transport solutions.
            </p>
          </div>

          <!-- Service Card 2 -->
          <div class="group bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2 border border-slate-200">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/30">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-slate-800 mb-3">SS & MS Fabrication</h3>
            <p class="text-slate-600 leading-relaxed">
              High-quality trolleys, heavy equipment, and structurals.
            </p>
          </div>

          <!-- Service Card 3 -->
          <div class="group bg-gradient-to-br from-slate-50 to-cyan-50 rounded-2xl p-8 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2 border border-slate-200">
            <div class="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/30">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-slate-800 mb-3">Utility & Plant Installation</h3>
            <p class="text-slate-600 leading-relaxed">
              Expert installation of pipelines, DG rooms, and paint booths.
            </p>
          </div>

          <!-- Service Card 4 -->
          <div class="group bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2 border border-slate-200">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/30">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-slate-800 mb-3">Special Purpose Machines</h3>
            <p class="text-slate-600 leading-relaxed">
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

    <!-- About Us Snippet Section -->
    <section class="py-20 bg-gradient-to-br from-slate-50 to-cyan-50/30">
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
            <div class="order-1 md:order-2">
              <div class="inline-block px-4 py-2 bg-cyan-100 rounded-full mb-4">
                <span class="text-cyan-600 font-semibold text-sm tracking-wider uppercase">Who We Are</span>
              </div>
              <h2 class="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
                Engineering Excellence.<br/>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Trusted Partnership.</span>
              </h2>
              <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Barzel Engineering specializes in designing, manufacturing, and fabricating specialized equipment and custom pallet solutions for the automotive industry and beyond.
              </p>
              <p class="text-lg text-slate-600 leading-relaxed mb-8">
                With a dedicated in-house design team and a 25,000 sqft facility, we are committed to innovation and collaborative product development to meet our clients' exact needs.
              </p>
              <router-link 
                to="/about" 
                class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-slate-800 to-slate-900 text-white font-semibold rounded-xl hover:from-slate-700 hover:to-slate-800 transition-all transform hover:scale-105 shadow-xl"
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
    </section>

    <!-- Our Work Showcase Section -->
    <section class="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 text-white relative overflow-hidden">
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
          <div class="grid md:grid-cols-2 gap-6">
            <!-- Gallery Item 1 -->
            <div class="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer border border-slate-700 hover:border-cyan-500/50 transition-all">
              <img 
                src="../assets/ourwork1.jpg" 
                alt="Automotive Pallets" 
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-cyan-900/90 via-cyan-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-8">
                <h3 class="text-2xl font-bold text-white">Automotive Pallets</h3>
              </div>
            </div>

            <!-- Gallery Item 2 -->
            <div class="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer border border-slate-700 hover:border-blue-500/50 transition-all">
              <img 
                src="../assets/ourwork13.jpg" 
                alt="Heavy Fabrication" 
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-8">
                <h3 class="text-2xl font-bold text-white">Heavy Fabrication</h3>
              </div>
            </div>

            <!-- Gallery Item 3 -->
            <div class="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer border border-slate-700 hover:border-cyan-500/50 transition-all">
              <img 
                src="../assets/ourwork25.jpg" 
                alt="Special Purpose Machines" 
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-cyan-800/90 via-cyan-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-8">
                <h3 class="text-2xl font-bold text-white">Special Purpose Machines</h3>
              </div>
            </div>

            <!-- Gallery Item 4 -->
            <div class="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer border border-slate-700 hover:border-blue-500/50 transition-all">
              <img 
                src="../assets/ourwork5.jpg" 
                alt="Industrial Solutions" 
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-blue-800/90 via-blue-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-8">
                <h3 class="text-2xl font-bold text-white">Industrial Solutions</h3>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <router-link 
            to="/our-work" 
            class="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg rounded-xl hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-xl shadow-cyan-500/30"
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
    <section class="py-20 bg-gradient-to-br from-slate-50 to-cyan-50/30">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <div class="inline-block px-4 py-2 bg-cyan-50 rounded-full mb-4">
            <span class="text-cyan-600 font-semibold text-sm tracking-wider uppercase">Social Proof</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Trusted by <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Industry Leaders</span>
          </h2>
        </div>

        <!-- Client Logos Marquee -->
        <div class="relative overflow-hidden bg-white rounded-3xl shadow-xl p-8">
          <div class="flex animate-scroll">
            <div v-for="i in 2" :key="i" class="flex gap-12 px-6">
              <div v-for="client in clients" :key="`${i}-${client}`" class="flex-shrink-0 bg-gradient-to-br from-slate-50 to-cyan-50 rounded-xl p-8 border border-slate-200 hover:shadow-xl hover:border-cyan-200 transition-all w-48 h-32 flex items-center justify-center group">
                <span class="text-xl font-bold text-slate-700 group-hover:text-cyan-600 transition-colors">{{ client }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <router-link 
            to="/clients" 
            class="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-semibold text-lg group"
          >
            <span>See Our Full Client List</span>
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
            </svg>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Final CTA Banner -->
    <section class="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 text-white relative overflow-hidden">
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
        <div class="max-w-4xl mx-auto text-center">
          <div class="inline-block p-4 bg-cyan-500/20 backdrop-blur-sm rounded-full mb-6 border border-cyan-400/30">
            <svg class="w-16 h-16 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
            </svg>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            Have a <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Complex Project?</span>
          </h2>
          <p class="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed">
            We have the design expertise and fabrication power to build it.
          </p>
          <router-link 
            to="/contact" 
            class="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-xl rounded-xl hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-cyan-500/50"
          >
            <span>Contact Us for a Quote</span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
            </svg>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      clients: [
        'Ford',
        'Gestamp',
        'GE',
        'Apollo',
        'Nissan',
        'MRF',
        'Tenneco',
        'Heat & Control',
        'JAI',
        'Salcomp',
        'Reep Industries',
        'Unipres',
        'Force Motors'
      ]
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
