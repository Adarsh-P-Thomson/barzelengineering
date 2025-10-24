<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-16">
      <h1 class="text-4xl font-bold text-center mb-4 text-gray-800">Contact Us</h1>
      <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Get in touch with us to discuss your project requirements. We're here to help!
      </p>
      
      <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Contact Form -->
        <div class="bg-white rounded-lg shadow-lg p-8">
          <h2 class="text-2xl font-bold mb-6 text-primary-600">Send Us a Message</h2>
          <form @submit.prevent="handleSubmit">
            <div class="mb-4">
              <label for="name" class="block text-gray-700 font-semibold mb-2">Name *</label>
              <input
                id="name"
                v-model="formData.name"
                type="text"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                placeholder="Your Name"
              />
            </div>
            
            <div class="mb-4">
              <label for="email" class="block text-gray-700 font-semibold mb-2">Email *</label>
              <input
                id="email"
                v-model="formData.email"
                type="email"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div class="mb-4">
              <label for="phone" class="block text-gray-700 font-semibold mb-2">Phone</label>
              <input
                id="phone"
                v-model="formData.phone"
                type="tel"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                placeholder="+1 (555) 123-4567"
              />
            </div>
            
            <div class="mb-4">
              <label for="subject" class="block text-gray-700 font-semibold mb-2">Subject *</label>
              <input
                id="subject"
                v-model="formData.subject"
                type="text"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                placeholder="Project Inquiry"
              />
            </div>
            
            <div class="mb-6">
              <label for="message" class="block text-gray-700 font-semibold mb-2">Message *</label>
              <textarea
                id="message"
                v-model="formData.message"
                required
                rows="4"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              class="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Send Message
            </button>
          </form>
          
          <div v-if="submitMessage" class="mt-4 p-4 rounded-lg" :class="submitSuccess ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'">
            {{ submitMessage }}
          </div>
        </div>

        <!-- Contact Information -->
        <div>
          <div class="bg-white rounded-lg shadow-lg p-8 mb-6">
            <h2 class="text-2xl font-bold mb-6 text-primary-600">Contact Information</h2>
            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <span class="text-primary-600 text-2xl">📍</span>
                <div>
                  <h3 class="font-bold text-gray-800">Address</h3>
                  <p class="text-gray-600">123 Engineering Plaza<br>Suite 500<br>City, State 12345</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <span class="text-primary-600 text-2xl">📧</span>
                <div>
                  <h3 class="font-bold text-gray-800">Email</h3>
                  <p class="text-gray-600">info@barzelengineering.com</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <span class="text-primary-600 text-2xl">📞</span>
                <div>
                  <h3 class="font-bold text-gray-800">Phone</h3>
                  <p class="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <span class="text-primary-600 text-2xl">🕐</span>
                <div>
                  <h3 class="font-bold text-gray-800">Business Hours</h3>
                  <p class="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM<br>Saturday: 10:00 AM - 2:00 PM<br>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-primary-600 rounded-lg shadow-lg p-8 text-white">
            <h2 class="text-2xl font-bold mb-4">Quick Response</h2>
            <p class="mb-4">
              We typically respond to all inquiries within 24 hours during business days.
            </p>
            <p>
              For urgent matters, please call us directly at +1 (555) 123-4567.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'ContactUs',
  setup() {
    const formData = ref({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
    
    const submitMessage = ref('')
    const submitSuccess = ref(false)
    
    const handleSubmit = () => {
      // In a real application, this would send the data to a backend
      submitSuccess.value = true
      submitMessage.value = 'Thank you for your message! We will get back to you soon.'
      
      // Reset form
      formData.value = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      }
      
      // Clear message after 5 seconds
      setTimeout(() => {
        submitMessage.value = ''
      }, 5000)
    }
    
    return {
      formData,
      submitMessage,
      submitSuccess,
      handleSubmit
    }
  }
}
</script>
