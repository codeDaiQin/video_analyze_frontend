<script setup lang="ts">
import Header from "./Header.vue";
</script>

<template>
  <el-container class="layout-container">
    <Header />
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<style scoped lang="less">
.layout-container {
  flex-direction: column;
}
</style>
