import { createApp } from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import router from './router'
import '../public/styles/fonts.scss'
import '../public/styles/global.scss'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia= createPinia()

pinia.use(piniaPluginPersistedstate)
const app = createApp(App)
app.use(pinia).use(router).mount('#app')
