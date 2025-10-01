import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home/Home.vue'
import About from '../pages/about/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
