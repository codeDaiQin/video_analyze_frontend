import {createRouter, createWebHistory} from "vue-router";
import Helloworld from "../components/Helloworld.vue";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
import Home from "../pages/Home.vue";
import Research from "../pages/Research.vue";

//配置路由区域
const routes = [
    {
        path: "/Home",
        component: Home
    },    
    {
        path: "/Helloworld",
        component: Helloworld
    },
    {
        name: "Login",
        path: "/Login",
        component: Login,
        props: true
    },
    {
        path: "/Register/:userAccout?",
        name: "Register",
        component: Register,
        props: true
    },
    {
        path: "/Research",
        name: "Research",
        component: Research,
        props: true
    },

    //重定向，默认进入主页
    {
        path:'/',
        redirect:"/Home"
    }
]

//声明路由器并暴露
export const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

