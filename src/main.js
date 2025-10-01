import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import './style.css'

const app = createApp(App)
if (router) app.use(router)
app.use(i18n)
app.mount('#app')
