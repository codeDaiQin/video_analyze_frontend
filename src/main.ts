import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from "./router";//引入路由器


createApp(App).use(router).mount('#app')
