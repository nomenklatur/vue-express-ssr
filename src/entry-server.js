import { createSSRApp } from 'vue'
import { createPinia } from 'pinia'
import createRouter from './router.js'
import App from './App.vue'

export function createApp() {
  const app = createSSRApp(App)
  const pinia = createPinia()
  const router = createRouter(true)
  app.use(router)
  app.use(pinia)
  return { app, router, pinia }
}