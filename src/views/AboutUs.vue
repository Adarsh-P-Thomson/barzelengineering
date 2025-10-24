<template>
  <div class="min-h-screen bg-slate-50">
    <!-- Hero Section -->
    <div class="relative h-[60vh] min-h-[500px] overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img 
          src="../assets/manufacturingunit.jpg" 
          alt="Barzel Engineering Facility" 
          class="w-full h-full object-cover object-center"
        />
        <!-- Dark Overlay with gradient -->
        <div class="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-cyan-900/80"></div>
        
        <!-- Animated Grid Pattern -->
        <div class="absolute inset-0 opacity-10">
          <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>
      </div>

      <!-- Hero Content -->
      <div class="relative container mx-auto px-4 h-full flex items-center z-10">
        <div class="max-w-4xl">
          <div class="inline-block px-4 py-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full mb-6">
            <span class="text-cyan-400 font-semibold text-sm tracking-wider uppercase">Our Story</span>
          </div>
          <h1 class="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            About <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Barzel Engineering</span>
          </h1>
          <p class="text-2xl md:text-3xl text-slate-300 font-light">
            Precision. Innovation. Partnership.
          </p>
        </div>
      </div>
    </div>

    <!-- Our Story Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-12">
            <div class="inline-block px-4 py-2 bg-cyan-50 rounded-full mb-4">
              <span class="text-cyan-600 font-semibold text-sm tracking-wider uppercase">Who We Are</span>
            </div>
            <h2 class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 mb-8">Our Story</h2>
          </div>
          
          <div class="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p>
              Barzel Engineering specializes in creating custom pallet solutions for the automotive industry, focusing on the installation of various equipment and utility systems. Our dedication to precision and quality has made us a trusted partner for leading automotive manufacturers across India.
            </p>
            
            <p>
              Our expertise extends to designing, manufacturing, installing, and commissioning a comprehensive range of industrial solutions, including special purpose machines (SPM), jigs, fixtures, and heavy fabrication equipment. We bring decades of combined experience and cutting-edge technology to every project we undertake.
            </p>
            
            <p>
              At Barzel Engineering, we are committed to innovation, quality, and sustainable practices. We continuously invest in advanced technology and our talented team to deliver cutting-edge solutions that exceed client expectations and contribute to a greener future.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Strengths Section -->
    <section class="py-20 bg-gradient-to-br from-slate-50 to-cyan-50/30">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <div class="inline-block px-4 py-2 bg-cyan-50 rounded-full mb-4">
              <span class="text-cyan-600 font-semibold text-sm tracking-wider uppercase">Why Choose Us</span>
            </div>
            <h2 class="text-4xl font-bold text-slate-800 mb-4">Our Strengths</h2>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
            <!-- Strength 1 -->
            <div class="bg-white rounded-2xl p-8 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2 border border-slate-200">
              <div class="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/30">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-slate-800 mb-3">In-House Design Team</h3>
              <p class="text-slate-600 leading-relaxed">
                Leveraging advanced CAD software to bring your concepts to life with precision.
              </p>
            </div>

            <!-- Strength 2 -->
            <div class="bg-white rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2 border border-slate-200">
              <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-slate-800 mb-3">Collaborative Product Development</h3>
              <p class="text-slate-600 leading-relaxed">
                Working closely with clients from concept to delivery, ensuring solutions are perfectly aligned with their needs.
              </p>
            </div>

            <!-- Strength 3 -->
            <div class="bg-white rounded-2xl p-8 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2 border border-slate-200">
              <div class="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/30">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-slate-800 mb-3">Industry-Leading Software</h3>
              <p class="text-slate-600 leading-relaxed">
                Utilizing cutting-edge tools for design, analysis, and production to guarantee superior quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Philosophy Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <div class="inline-block px-4 py-2 bg-cyan-50 rounded-full mb-4">
              <span class="text-cyan-600 font-semibold text-sm tracking-wider uppercase">How We Operate</span>
            </div>
            <h2 class="text-4xl font-bold text-slate-800 mb-4">Our Commitment to Excellence</h2>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <!-- Quality Assurance -->
            <div class="flex items-start gap-4 bg-gradient-to-br from-slate-50 to-cyan-50 rounded-2xl p-6 border border-slate-200 hover:shadow-xl transition-all">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                </div>
              </div>
              <div>
                <h4 class="text-xl font-bold text-slate-800 mb-2">Quality Assurance</h4>
                <p class="text-slate-600">
                  Rigorous checks at every stage to ensure products meet the highest industry standards.
                </p>
              </div>
            </div>

            <!-- On-time Delivery -->
            <div class="flex items-start gap-4 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 border border-slate-200 hover:shadow-xl transition-all">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                  </svg>
                </div>
              </div>
              <div>
                <h4 class="text-xl font-bold text-slate-800 mb-2">On-time Delivery</h4>
                <p class="text-slate-600">
                  Streamlined processes and efficient project management guarantee timely completion of every project.
                </p>
              </div>
            </div>

            <!-- Value For Money -->
            <div class="flex items-start gap-4 bg-gradient-to-br from-slate-50 to-cyan-50 rounded-2xl p-6 border border-slate-200 hover:shadow-xl transition-all">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"/>
                  </svg>
                </div>
              </div>
              <div>
                <h4 class="text-xl font-bold text-slate-800 mb-2">Value For Money</h4>
                <p class="text-slate-600">
                  Providing cost-effective solutions without compromising on quality or performance.
                </p>
              </div>
            </div>

            <!-- Customer Satisfaction -->
            <div class="flex items-start gap-4 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 border border-slate-200 hover:shadow-xl transition-all">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"/>
                  </svg>
                </div>
              </div>
              <div>
                <h4 class="text-xl font-bold text-slate-800 mb-2">100% Customer Satisfaction</h4>
                <p class="text-slate-600">
                  Our ultimate goal is to build lasting relationships through exceptional service and reliable products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Resources Section -->
    <section class="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 text-white relative overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-5">
        <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="resource-dots" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="white"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#resource-dots)" />
        </svg>
      </div>

      <!-- Gradient Orbs -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <div class="inline-block px-4 py-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full mb-4">
              <span class="text-cyan-400 font-semibold text-sm tracking-wider uppercase">Our Scale</span>
            </div>
            <h2 class="text-4xl font-bold mb-4">Capabilities at a <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Glance</span></h2>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
            <!-- Manpower -->
            <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/20 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all">
              <div class="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-500/30">
                <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                </svg>
              </div>
              <h3 class="text-4xl font-bold mb-2 text-white">80+</h3>
              <h4 class="text-xl font-semibold mb-3 text-cyan-300">Manpower</h4>
              <p class="text-slate-300">
                A dedicated team of skilled professionals, including engineers, technicians, and fabricators.
              </p>
            </div>

            <!-- Infrastructure -->
            <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/20 hover:shadow-2xl hover:shadow-blue-500/20 transition-all">
              <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/30">
                <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-4xl font-bold mb-2 text-white">25K sqft</h3>
              <h4 class="text-xl font-semibold mb-3 text-blue-300">Infrastructure</h4>
              <p class="text-slate-300">
                A sprawling state-of-the-art manufacturing facility.
              </p>
            </div>

            <!-- Power -->
            <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/20 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all">
              <div class="w-20 h-20 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-500/30">
                <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-4xl font-bold mb-2 text-white">125hp+</h3>
              <h4 class="text-xl font-semibold mb-3 text-cyan-300">Power</h4>
              <p class="text-slate-300">
                Reliable power supply with grid connection and generator for uninterrupted operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gradient-to-br from-slate-50 to-cyan-50/30">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Ready to Partner with <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Barzel Engineering?</span>
          </h2>
          <p class="text-xl text-slate-600 mb-8">
            Let's discuss how we can bring your vision to life with precision and excellence.
          </p>
          <router-link 
            to="/contact" 
            class="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-105 text-lg shadow-xl shadow-cyan-500/30"
          >
            <span>Get in Touch</span>
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
  name: 'AboutUs'
}
</script>
