import { createRouter, createWebHashHistory } from "vue-router";
import Helloworld from "../components/Helloworld.vue";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";

//配置路由区域
const routes = [
    {
        path: "/",
        component: Helloworld
    },
    {
        path: "/Login",
        component: Login
    },
    {
        path: "/Register",
        component: Register
    },
]

//声明路由器并暴露
export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

