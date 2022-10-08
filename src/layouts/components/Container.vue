<script setup lang="ts">
import Header from "./Header.vue";
import LeftSideMessage from "../../pages/LeftSideMessage.vue";
</script>

<template>
  <el-container class="layout-container">
    <Header />
      <el-main>
        <LeftSideMessage/>
        <div class="layout-containe-main-view">
          <router-view ></router-view>
        </div>
      </el-main>
  </el-container>
</template>

<style scoped lang="less">
.layout-container {
  flex-direction: column;
  .el-main {
    padding: 0px;
  }
}

.layout-containe-main-view {
      padding: 20px;
  }
</style>
