import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'

export default function (isServer) {
  return createRouter({
    history: isServer ? createMemoryHistory() : createWebHistory(),
    routes: [
      { path: '/home', component: Home },
      { path: '/about', component: About },
    ],
  })
}