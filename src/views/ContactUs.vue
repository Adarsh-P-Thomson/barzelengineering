<template>
  <div class="min-h-screen bg-slate-900">
    <!-- Hero Section -->
    <div class="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 py-16 md:py-20 lg:py-32">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-5">
        <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <!-- Gradient Orbs -->
      <div class="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <div class="inline-block mb-4 md:mb-6">
            <span class="text-cyan-400 text-xs md:text-sm font-bold tracking-widest uppercase bg-cyan-400/10 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-cyan-400/30">
              Get in Touch
            </span>
          </div>
          <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Let's <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Connect</span>
          </h1>
          <p class="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8 md:mb-10 leading-relaxed font-light px-4">
            Your precision engineering partner is just a call or email away. We're ready to bring your vision to life.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 px-4">
            <a href="tel:+919940016330" class="group inline-flex items-center justify-center gap-2 md:gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 shadow-xl">
              <svg class="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              Call Now
            </a>
            <a href="mailto:info@barzelengineering.com" class="group inline-flex items-center justify-center gap-2 md:gap-3 bg-slate-800/50 backdrop-blur-sm border-2 border-cyan-500 text-cyan-400 px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-slate-700/50 transition-all transform hover:scale-105 shadow-xl">
              <svg class="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              Send Email
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Cards Section -->
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 -mt-12 md:-mt-20 relative z-20 pb-12 md:pb-16">
      <!-- Phone Card -->
      <div class="max-w-2xl mx-auto mb-12 md:mb-16">
        <div class="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-8 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
          <div class="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full -mr-12 md:-mr-16 -mt-12 md:-mt-16"></div>
          <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 relative z-10">
            <div class="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/30">
              <svg class="w-7 h-7 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
            </div>
            <div class="flex-1 text-center sm:text-left">
              <h3 class="text-sm font-bold text-cyan-400 mb-2 uppercase tracking-wide">Contact Us Directly</h3>
              <a href="tel:+919940016330" class="text-2xl sm:text-3xl md:text-4xl font-bold text-white hover:text-cyan-400 transition-colors block mb-1 group-hover:text-cyan-400">
                +91 99400 16330
              </a>
              <p class="text-slate-300 text-sm md:text-base">Available during business hours</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Email Card -->
      <div class="relative rounded-2xl md:rounded-3xl shadow-2xl p-8 md:p-10 lg:p-16 mb-12 md:mb-16 overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 border border-slate-700/50">
        <div class="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-48 md:w-80 h-48 md:h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div class="absolute inset-0 opacity-30">
          <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="email-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="0.5" opacity="0.1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#email-grid)" />
          </svg>
        </div>
        
        <div class="relative z-10 max-w-4xl mx-auto text-center">
          <div class="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl md:rounded-3xl mb-4 md:mb-6 shadow-xl shadow-cyan-500/30">
            <svg class="w-10 h-10 md:w-12 md:h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
            </svg>
          </div>
          <h3 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">Email Us</h3>
          <a href="mailto:info@barzelengineering.com" class="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 transition-all break-all">
            info@barzelengineering.com
          </a>
          <p class="text-slate-400 mt-4 md:mt-6 text-base md:text-lg">We typically respond within 24 hours</p>
        </div>
      </div>

      <!-- Locations Section -->
      <div class="mb-12 md:mb-16">
        <div class="text-center mb-8 md:mb-12">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 md:mt-6">
            Our <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Locations</span>
          </h2>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <!-- Manufacturing Facility -->
          <div class="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl md:rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300">
            <div class="bg-gradient-to-r from-slate-800 to-slate-900 p-6 md:p-8 relative overflow-hidden">
              <div class="absolute top-0 right-0 w-32 md:w-40 h-32 md:h-40 bg-cyan-500/20 rounded-full blur-2xl"></div>
              <div class="flex items-center gap-3 md:gap-4 relative z-10">
                <div class="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
                  <svg class="w-6 h-6 md:w-7 md:h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl md:text-2xl font-bold text-white">Manufacturing Facility</h3>
                  <p class="text-cyan-300 text-sm font-medium">Main Operations</p>
                </div>
              </div>
            </div>
            <div class="p-6 md:p-8">
              <div class="flex items-start gap-3 mb-4 md:mb-6">
                <svg class="w-5 h-5 md:w-6 md:h-6 text-cyan-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                </svg>
                <p class="text-slate-300 text-sm md:text-base leading-relaxed">
                  Plot No. D Patta No.2103, Janakiammal Garden, Banruti Kandigai Village, Sriperumbadur Taluk, Kanchipuram District, Tamil Nadu, 602105
                </p>
              </div>
              <div class="bg-cyan-500/10 backdrop-blur-sm border border-cyan-400/30 rounded-xl md:rounded-2xl p-3 md:p-4">
                <p class="text-white font-semibold flex items-center gap-2">
                  <span class="text-xl md:text-2xl">⭐</span>
                  <span class="text-sm md:text-base">Primary site of operations</span>
                </p>
              </div>
            </div>
          </div>

          <!-- Registered Office -->
          <div class="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl md:rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
            <div class="bg-gradient-to-r from-slate-700 via-slate-800 to-blue-900 p-6 md:p-8 relative overflow-hidden">
              <div class="absolute top-0 right-0 w-32 md:w-40 h-32 md:h-40 bg-blue-500/20 rounded-full blur-2xl"></div>
              <div class="flex items-center gap-3 md:gap-4 relative z-10">
                <div class="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <svg class="w-6 h-6 md:w-7 md:h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"/>
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl md:text-2xl font-bold text-white">Registered Office</h3>
                  <p class="text-blue-200 text-sm font-medium">Corporate HQ</p>
                </div>
              </div>
            </div>
            <div class="p-6 md:p-8">
              <div class="flex items-start gap-3 mb-4 md:mb-6">
                <svg class="w-5 h-5 md:w-6 md:h-6 text-blue-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                </svg>
                <p class="text-slate-300 text-sm md:text-base leading-relaxed">
                  15/1 –185/2 –185/A, Jayanagar 9th Block, 18th Main Road, Nagananda Commercial Complex, Bengaluru, Karnataka, 560041
                </p>
              </div>
              <div class="bg-blue-500/10 backdrop-blur-sm border border-blue-400/30 rounded-xl md:rounded-2xl p-3 md:p-4">
                <p class="text-white font-semibold flex items-center gap-2">
                  <span class="text-xl md:text-2xl">📋</span>
                  <span class="text-sm md:text-base">Corporate headquarters</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Map Section -->
      <div class="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl md:rounded-3xl shadow-xl overflow-hidden">
        <div class="bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 p-6 md:p-8 lg:p-10 relative overflow-hidden">
          <div class="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
          <div class="absolute bottom-0 left-0 w-48 md:w-80 h-48 md:h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTAgMGgyMHYyMEgwVjB6bTIwIDIwaDIwdjIwSDIwVjIweiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
          
          <div class="relative z-10 text-center">
            <div class="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl md:rounded-2xl mb-3 md:mb-4 shadow-lg shadow-cyan-500/30">
              <svg class="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
              Visit Our Manufacturing Facility
            </h2>
            <p class="text-slate-300 text-sm md:text-lg">Your precision engineering partner</p>
          </div>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <!-- Address Section -->
          <div class="p-6 md:p-8 lg:p-12 bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col justify-center">
            <div class="space-y-4 md:space-y-6">
              <div>
                <div class="flex items-center gap-3 mb-3 md:mb-4">
                  <div class="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg md:rounded-xl flex items-center justify-center shadow-lg">
                    <svg class="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <h3 class="text-xl md:text-2xl font-bold text-white">Location</h3>
                </div>
                <p class="text-slate-300 text-sm md:text-lg leading-relaxed ml-13 md:ml-15">
                  Plot No. D Patta No.2103, Janakiammal Garden, Banruti Kandigai Village, Sriperumbadur Taluk, Kanchipuram District, Tamil Nadu, 602105
                </p>
              </div>

              <div class="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg">
                <div class="flex items-start gap-3 mb-3 md:mb-4">
                  <svg class="w-5 h-5 md:w-6 md:h-6 text-cyan-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd"/>
                  </svg>
                  <div>
                    <h4 class="font-bold text-white mb-1 text-sm md:text-base">Main Operations Center</h4>
                    <p class="text-slate-300 text-xs md:text-sm">Primary manufacturing and assembly facility</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 md:w-6 md:h-6 text-blue-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <div>
                    <h4 class="font-bold text-white mb-1 text-sm md:text-base">Contact Number</h4>
                    <p class="text-slate-300 text-xs md:text-sm">+91 99400 16330</p>
                  </div>
                </div>
              </div>

              <a 
                href="https://www.google.com/maps/search/?api=1&query=Plot+No.+D+Patta+No.2103+Janakiammal+Garden+Banruti+Kandigai+Village+Sriperumbadur+Taluk+Kanchipuram+District+Tamil+Nadu+602105"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-slate-700 to-slate-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl font-bold hover:from-slate-600 hover:to-slate-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl group w-full text-sm md:text-base"
              >
                <svg class="w-5 h-5 md:w-6 md:h-6 text-cyan-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/>
                </svg>
                Get Directions on Google Maps
              </a>
            </div>
          </div>

          <!-- Map Section -->
          <div class="relative h-64 md:h-96 lg:h-[600px] bg-slate-700 order-first lg:order-last">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2!2d80.0!3d12.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzAwLjAiTiA4MMKwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>

      <!-- Footer CTA -->
      <div class="mt-12 md:mt-16 text-center">
        <div class="relative bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 rounded-2xl md:rounded-3xl p-8 md:p-10 lg:p-16 shadow-2xl overflow-hidden border border-slate-700/50">
          <div class="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div class="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTAgMGgyMHYyMEgwVjB6bTIwIDIwaDIwdjIwSDIwVjIweiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
          
          <div class="relative z-10">
            <span class="inline-block text-cyan-400 text-xs sm:text-sm font-bold tracking-widest uppercase bg-cyan-400/10 px-3 md:px-4 py-2 rounded-full border border-cyan-400/30 mb-4 md:mb-6">
              Start Your Project
            </span>
            <h3 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 px-4">
              Ready to Build Something <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Extraordinary?</span>
            </h3>
            <p class="text-lg md:text-xl text-slate-300 mb-8 md:mb-10 max-w-2xl mx-auto font-light px-4">
              Contact us today and experience precision engineering excellence
            </p>
            <div class="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 px-4">
              <a href="tel:+919940016330" class="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl font-bold text-base md:text-lg hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/50">
                <svg class="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <span class="break-all sm:break-normal">+91 99400 16330</span>
              </a>
              <a href="mailto:info@barzelengineering.com" class="inline-flex items-center justify-center gap-2 bg-white text-slate-800 px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl font-bold text-base md:text-lg hover:bg-slate-100 transition-all transform hover:scale-105 shadow-xl">
                <svg class="w-5 h-5 md:w-6 md:h-6 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span class="break-all sm:break-normal">info@barzelengineering.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactUs'
}
</script>

<style scoped>
@keyframes pulse {
  0%, 100% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.2;
  }
}

.animate-pulse {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Custom scrollbar for webkit browsers */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #06b6d4, #3b82f6);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #0891b2, #2563eb);
}
</style>
