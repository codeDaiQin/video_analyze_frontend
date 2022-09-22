<script setup lang="ts">
import Sider from "./components/Sider.vue";
import Container from "./components/Container.vue";
import { onMounted } from "vue";
import { store } from "../store";
import { reqUser } from "../service/user";

// 在这里 自动登录 将用户信息存放到vuex中
onMounted(async ()=>{
  let res = await reqUser()
  store.commit('setUser',res)

})


</script>

<template>
  <el-container class="layout-container">
    <Sider />
    <Container />
  </el-container>
</template>

<style scoped lang="less">
.layout-container {
  height: 100vh;
  overflow: hidden;
}
</style>
