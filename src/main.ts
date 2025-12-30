import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './views/App.vue'
import router from './router'

import '@/assets/styles/main.css'
import animateOnScroll from './directives/animateOnScroll'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.directive('animate-on-scroll', animateOnScroll)

app.mount('#app')
