import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AboutUs from '../views/AboutUs.vue'
import Services from '../views/Services.vue'
import OurWork from '../views/OurWork.vue'
import Clients from '../views/Clients.vue'
import ContactUs from '../views/ContactUs.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/our-work',
    name: 'OurWork',
    component: OurWork
  },
  {
    path: '/clients',
    name: 'Clients',
    component: Clients
  },
  {
    path: '/contact',
    name: 'ContactUs',
    component: ContactUs
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
