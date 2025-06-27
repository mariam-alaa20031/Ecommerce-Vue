import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../public/styles/fonts.scss'
import '../public/styles/global.scss'


createApp(App).use(store).use(router).mount('#app')
