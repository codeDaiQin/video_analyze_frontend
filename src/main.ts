import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import { router } from "./router";//引入路由器
import { store } from "./store";



createApp(App).use(router).use(ElementPlus).use(store).mount('#app')
