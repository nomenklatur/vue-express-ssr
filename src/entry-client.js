import { createApp } from 'vue'
import { createPinia } from 'pinia'
import createRouter from './router.js'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()
const router = createRouter(false)

app.use(router)
app.use(pinia)

router.isReady().then(() => {
console.log('run')
  app.mount('#app', true)
})