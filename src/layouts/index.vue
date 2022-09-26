<script setup lang="ts">
import Sider from "./components/Sider.vue";
import Container from "./components/Container.vue";
import { onMounted, provide, ref } from "vue";
import { store } from "../store";
import { reqUser } from "../service/user";

// 在这里 自动登录 将用户信息存放到vuex中
onMounted(async () => {
  let res = await reqUser()
  store.commit('setUser', res)

})


//用户侧边栏显示提供参数及修改方法
const displaySide = ref(false)
function showSide() {
  displaySide.value = true
}
provide('displaySide', { displaySide, showSide })


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
