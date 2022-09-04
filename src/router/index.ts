import { createRouter, createWebHistory } from "vue-router";
import Helloworld from "../components/Helloworld.vue";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
import Home from "../pages/Home.vue";

//配置路由区域
const routes = [
  {
    path: "/Home",
    component: Home,
  },
  {
    path: "/Helloworld",
    component: Helloworld,
  },
  {
    path: "/Login",
    component: Login,
  },
  {
    path: "/Register",
    component: Register,
  },
];

//声明路由器并暴露
export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
