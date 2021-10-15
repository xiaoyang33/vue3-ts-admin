import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store, { setupStore } from './store'

import 'normalize.css'
import './assets/css/index.scss'

import register from './global'

const app = createApp(App)

// 全局引用
app.use(register)

setupStore()
app.use(router).use(store).mount('#app')
