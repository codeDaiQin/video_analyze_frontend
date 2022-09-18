import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Helloworld from "../components/Helloworld.vue";
import Auth from "../pages/Auth.vue";
import Register from "../pages/Register.vue";
import Research from "../pages/Research.vue";
import Detail from "../pages/Detail.vue"
import Upload from "../pages/Upload.vue"
import Login from "../pages/Login.vue"

//子路由组件
const routeLogin = {
    path: "/Login",
    name: "Login",
    component: Login,
    props: true
}

//配置路由区域
const routes = [
    {
        name:'Home',
        path: "/Home",
        component: Home
    },
    {
        path: "/Helloworld",
        component: Helloworld
    },
    {
        name: "Auth",
        path: "/Auth",
        component: Auth,
        props: true,
        children: [
            routeLogin 
        ]
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

    {
        path: "/Detail",
        name: "Detail",
        component: Detail,
        props: true
    },

    {
        path: "/Upload",
        name: "Upload",
        component: Upload,
        props: true
    },

    //重定向，默认进入主页
    {
        path: '/',
        redirect: "/Home"
    }
]



//声明路由器并暴露
export const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

