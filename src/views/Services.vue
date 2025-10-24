<template>
  <div class="min-h-screen bg-slate-900">
    <!-- Hero Section -->
    <div class="relative h-[60vh] min-h-[500px] overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img 
          src="../assets/clientspagebg.jpg" 
          alt="Manufacturing Machinery" 
          class="w-full h-full object-cover object-center"
        />
        <!-- Gradient Overlay -->
        <div class="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-800/85 to-cyan-900/85"></div>
      </div>

      <!-- Hero Content -->
      <div class="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div class="max-w-4xl">
          <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Our Services
          </h1>
          <p class="text-xl sm:text-2xl md:text-3xl text-slate-300 font-light">
            Engineering Excellence for Every Industrial Need
          </p>
        </div>
      </div>
    </div>

    <!-- Introductory Section -->
    <section class="py-16 md:py-20 bg-slate-900">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-400 mb-4 md:mb-6">A Comprehensive Approach to Industrial Solutions</h2>
          <p class="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed">
            At Barzel Engineering, we offer a comprehensive suite of industrial services, built on a foundation of precision engineering, advanced technology, and unwavering commitment to quality. From concept to completion, we deliver innovative solutions tailored to your specific requirements.
          </p>
        </div>
      </div>
    </section>

    <!-- Modular Solutions Grid -->
    <section class="py-16 md:py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10 md:mb-12 text-center">Explore Our Core Capabilities</h2>
          
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <!-- Card 1 -->
            <div 
              @click="scrollToSection('automotive')"
              class="group cursor-pointer bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 md:p-8 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div class="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-400 group-hover:to-blue-400 rounded-lg flex items-center justify-center mb-4 md:mb-6 transition-all shadow-lg shadow-cyan-500/30">
                <svg class="w-7 h-7 md:w-8 md:h-8 text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"/>
                </svg>
              </div>
              <h3 class="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 transition-colors">
                Customized Automotive Solutions
              </h3>
              <p class="text-sm md:text-base text-slate-300 group-hover:text-slate-200 transition-colors">
                Tailored pallets, skids, and transportation solutions for the automotive industry.
              </p>
            </div>

            <!-- Card 2 -->
            <div 
              @click="scrollToSection('utility')"
              class="group cursor-pointer bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 md:p-8 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div class="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-indigo-500 group-hover:from-blue-400 group-hover:to-indigo-400 rounded-lg flex items-center justify-center mb-4 md:mb-6 transition-all shadow-lg shadow-blue-500/30">
                <svg class="w-7 h-7 md:w-8 md:h-8 text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 transition-colors">
                Installation & Utility Systems
              </h3>
              <p class="text-sm md:text-base text-slate-300 group-hover:text-slate-200 transition-colors">
                Expert installation of fuel pipelines, compressed air lines, and utility systems.
              </p>
            </div>

            <!-- Card 3 -->
            <div 
              @click="scrollToSection('fabrication')"
              class="group cursor-pointer bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 md:p-8 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div class="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-400 group-hover:to-blue-400 rounded-lg flex items-center justify-center mb-4 md:mb-6 transition-all shadow-lg shadow-cyan-500/30">
                <svg class="w-7 h-7 md:w-8 md:h-8 text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 transition-colors">
                Design, Manufacture & Fabrication
              </h3>
              <p class="text-sm md:text-base text-slate-300 group-hover:text-slate-200 transition-colors">
                High-quality SS & MS fabrications, trolleys, and industrial structures.
              </p>
            </div>

            <!-- Card 4 -->
            <div 
              @click="scrollToSection('spm')"
              class="group cursor-pointer bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 md:p-8 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div class="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-indigo-500 group-hover:from-blue-400 group-hover:to-indigo-400 rounded-lg flex items-center justify-center mb-4 md:mb-6 transition-all shadow-lg shadow-blue-500/30">
                <svg class="w-7 h-7 md:w-8 md:h-8 text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 transition-colors">
                Special Purpose Machines (SPMs)
              </h3>
              <p class="text-sm md:text-base text-slate-300 group-hover:text-slate-200 transition-colors">
                Custom machines, jigs, and fixtures designed for specific operations.
              </p>
            </div>

            <!-- Card 5 -->
            <div 
              @click="scrollToSection('plants')"
              class="group cursor-pointer bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 md:p-8 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-2 sm:col-span-2 lg:col-span-1"
            >
              <div class="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-400 group-hover:to-blue-400 rounded-lg flex items-center justify-center mb-4 md:mb-6 transition-all shadow-lg shadow-cyan-500/30">
                <svg class="w-7 h-7 md:w-8 md:h-8 text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 transition-colors">
                Industrial Plants & Shop Support
              </h3>
              <p class="text-sm md:text-base text-slate-300 group-hover:text-slate-200 transition-colors">
                Plant setup, commissioning, and comprehensive production support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 1: Customized Automotive Solutions -->
    <section id="automotive" class="py-16 md:py-20 bg-slate-900 scroll-mt-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div class="order-2 md:order-1">
              <img 
                src="../assets/ourwork1.jpg" 
                alt="Automotive Solutions" 
                class="w-full h-auto rounded-xl md:rounded-2xl shadow-2xl shadow-cyan-500/20"
              />
            </div>
            <div class="order-1 md:order-2">
              <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-400 mb-4 md:mb-6">Customized Automotive Solutions</h2>
              <p class="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-4 md:mb-6">
                We specialize in crafting tailored pallets, skids, and transportation solutions designed to optimize logistics and safety within the automotive industry. Our custom designs ensure precise handling and protection for your components.
              </p>
              <h3 class="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">Key Offerings:</h3>
              <ul class="space-y-3">
                <li class="flex items-start gap-3">
                  <span class="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mt-1">
                    <svg class="w-2.5 h-2.5 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                  </span>
                  <span class="text-sm md:text-base text-slate-300">Automotive Pallets</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mt-1">
                    <svg class="w-2.5 h-2.5 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                  </span>
                  <span class="text-sm md:text-base text-slate-300">Stillages</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mt-1">
                    <svg class="w-2.5 h-2.5 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                  </span>
                  <span class="text-sm md:text-base text-slate-300">Skids</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mt-1">
                    <svg class="w-2.5 h-2.5 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                  </span>
                  <span class="text-sm md:text-base text-slate-300">Transport Cages</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2: Installation & Utility Systems -->
    <section id="utility" class="py-16 md:py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 scroll-mt-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-400 mb-4 md:mb-6 text-center">Installation & Utility Systems</h2>
          <p class="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-8 md:mb-12 text-center max-w-3xl mx-auto">
            Our expertise extends to the expert installation of critical utility systems, ensuring seamless and safe operations. This includes fuel pipelines, compressed air lines, and water pipelines, all executed to the highest standards.
          </p>
          
          <div class="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12">
            <div class="grid md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <h3 class="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Utility Systems & DG Rooms</h3>
                <p class="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed">
                  We provide expert installation and commissioning services for comprehensive utility systems and Diesel Generator (DG) rooms, guaranteeing reliable power and infrastructure for your facility.
                </p>
              </div>
              <div class="flex items-center justify-center">
                <div class="grid grid-cols-2 gap-3 md:gap-4 w-full">
                  <div class="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-lg p-3 md:p-4 shadow-lg text-center hover:border-cyan-500/50 transition-colors">
                    <div class="text-2xl md:text-3xl mb-2">⛽</div>
                    <p class="text-xs md:text-sm font-semibold text-slate-300">Fuel Pipelines</p>
                  </div>
                  <div class="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-lg p-3 md:p-4 shadow-lg text-center hover:border-blue-500/50 transition-colors">
                    <div class="text-2xl md:text-3xl mb-2">💨</div>
                    <p class="text-xs md:text-sm font-semibold text-slate-300">Compressed Air</p>
                  </div>
                  <div class="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-lg p-3 md:p-4 shadow-lg text-center hover:border-cyan-500/50 transition-colors">
                    <div class="text-2xl md:text-3xl mb-2">💧</div>
                    <p class="text-xs md:text-sm font-semibold text-slate-300">Water Pipelines</p>
                  </div>
                  <div class="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-lg p-3 md:p-4 shadow-lg text-center hover:border-blue-500/50 transition-colors">
                    <div class="text-2xl md:text-3xl mb-2">⚡</div>
                    <p class="text-xs md:text-sm font-semibold text-slate-300">DG Rooms</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: Design, Manufacture & Fabrication -->
    <section id="fabrication" class="py-16 md:py-20 bg-slate-900 scroll-mt-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-400 mb-4 md:mb-6 text-center">Design, Manufacture & Fabrication</h2>
          <p class="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-8 md:mb-12 text-center max-w-3xl mx-auto">
            From conceptual design to robust manufacturing, we excel in producing a wide range of fabrications. This includes high-quality SS & MS trolleys, pallets, and skids, as well as complex heavy fabrication equipment and industrial structurals for various applications.
          </p>
          
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div class="relative h-48 md:h-64 rounded-lg md:rounded-xl overflow-hidden shadow-lg group">
              <img src="../assets/ourwork13.jpg" alt="Fabrication 1" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"/>
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-800/50 to-transparent flex items-end p-4 md:p-6">
                <h3 class="text-white font-bold text-base md:text-lg">SS & MS Trolleys</h3>
              </div>
            </div>
            <div class="relative h-48 md:h-64 rounded-lg md:rounded-xl overflow-hidden shadow-lg group">
              <img src="../assets/ourwork14.jpg" alt="Fabrication 2" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"/>
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-800/50 to-transparent flex items-end p-4 md:p-6">
                <h3 class="text-white font-bold text-base md:text-lg">Heavy Equipment</h3>
              </div>
            </div>
            <div class="relative h-48 md:h-64 rounded-lg md:rounded-xl overflow-hidden shadow-lg group sm:col-span-2 lg:col-span-1">
              <img src="../assets/ourwork15.jpg" alt="Fabrication 3" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"/>
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-800/50 to-transparent flex items-end p-4 md:p-6">
                <h3 class="text-white font-bold text-base md:text-lg">Industrial Structurals</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 4: Special Purpose Machines -->
    <section id="spm" class="py-16 md:py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 scroll-mt-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-400 mb-4 md:mb-6">Special Purpose Machines (SPMs) & Equipment</h2>
              <p class="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-4 md:mb-6">
                Our team designs and manufactures custom machines, equipment, jigs, and fixtures, including Special Purpose Machines (SPMs), engineered to optimize specific operational processes, enhance efficiency, and solve unique production challenges.
              </p>
              <div class="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg md:rounded-xl p-4 md:p-6">
                <h3 class="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">Our SPM Capabilities:</h3>
                <ul class="space-y-2 md:space-y-3 text-sm md:text-base text-slate-300">
                  <li class="flex items-center gap-2">
                    <span class="text-cyan-400">▸</span> Custom Machine Design
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="text-cyan-400">▸</span> Jigs & Fixtures
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="text-cyan-400">▸</span> Process Automation
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="text-cyan-400">▸</span> Efficiency Optimization
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <img 
                src="../assets/ourwork25.jpg" 
                alt="Special Purpose Machines" 
                class="w-full h-auto rounded-xl md:rounded-2xl shadow-2xl shadow-blue-500/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 5: Industrial Plants & Shop Support -->
    <section id="plants" class="py-16 md:py-20 bg-slate-900 scroll-mt-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-400 mb-8 md:mb-12 text-center">Industrial Plants & Shop Support</h2>
          
          <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
            <div class="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg md:rounded-xl p-6 md:p-8 shadow-lg hover:border-cyan-500/50 transition-colors">
              <div class="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 md:mb-6 shadow-lg shadow-cyan-500/30">
                <svg class="w-7 h-7 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Plant Setup & Commissioning</h3>
              <p class="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed">
                We provide expertise in setting up and commissioning industrial plants, including specialized facilities such as Liquid Paint Booths and Powder Coating Plants, ensuring full operational readiness.
              </p>
            </div>

            <div class="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg md:rounded-xl p-6 md:p-8 shadow-lg hover:border-blue-500/50 transition-colors">
              <div class="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4 md:mb-6 shadow-lg shadow-blue-500/30">
                <svg class="w-7 h-7 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Production Support</h3>
              <p class="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed">
                Our capabilities extend to comprehensive machine shop and press shop production works, offering reliable support for your ongoing manufacturing needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 md:py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-5">
        <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" stroke-width="1"/>
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
          <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white leading-tight">
            Ready to Innovate Your <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Operations?</span>
          </h2>
          <p class="text-lg sm:text-xl md:text-2xl mb-8 md:mb-10 text-slate-300">
            Partner with Barzel Engineering for tailored solutions that drive efficiency and quality.
          </p>
          <router-link 
            to="/contact" 
            class="inline-flex items-center gap-2 px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-105 text-base md:text-lg shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50"
          >
            <span>Discuss Your Project</span>
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
