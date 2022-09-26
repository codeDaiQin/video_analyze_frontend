import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Helloworld from "../components/Helloworld.vue";
import Auth from "../pages/Auth/index.vue";
import userDetail from "../pages/userDetail.vue";
import Search from "../pages/Search.vue";
import Detail from "../pages/Detail.vue"
import Upload from "../pages/Upload.vue"
import Login from "../pages/Login.vue"
import Components from "../pages/Auth/components/index.vue";
import LeftSideMessage from "../pages/LeftSideMessage.vue"


//子路由组件
const routeUserDetail =     {
    path: "/userDetail/:userAccout?",
    name: "userDetail",
    component: userDetail,
    props: true
}

const routeAuthComponents =     {
    path: "/Components",
    name: "Components",
    component: Components,
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
        redirect: "/Components",
        props: true,
        children: [
            routeUserDetail,
            routeAuthComponents
        ]
    },

    {
        path: "/Search",
        name: "Search",
        component: Search,
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

    {
        path: "/Login",
        name: "Login",
        component: Login,
        props: true
    },
    {
        path:'/LeftSideMessage',
        name: "LeftSideMessage",
        components: {
            default: LeftSideMessage,
            
        },
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

router.beforeEach((to, from, next)=>{
    const pushLogin = ['/Auth']
    console.log(to.path,from.path);
    
    if (!pushLogin.indexOf(to.path)) {        
        console.log(11);        
        if(!localStorage.getItem('token')) {      
            next({name:'Login'})
        }
    }
    next()
})

