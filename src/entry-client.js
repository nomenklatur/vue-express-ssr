import { createSSRApp } from 'vue'
import { createPinia } from 'pinia'
import createRouter from './router.js'
import App from './App.vue'

const app = createSSRApp(App)
const pinia = createPinia()
const router = createRouter(false)

app.use(router)
app.use(pinia)

router.isReady().then(() => {
  app.mount('#app')
})