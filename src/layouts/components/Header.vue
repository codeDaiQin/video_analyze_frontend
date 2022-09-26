<template>
  <el-header class="layout-header">
    <el-menu mode="horizontal" class="layout-header-menu">
      <el-menu-item index="1">Processing Center</el-menu-item>
        <el-menu-item index="2">Processing</el-menu-item>
        <div class="layout-header-input">
          <el-input></el-input>
          <el-button class="layout-header-input-button" @click.prevent="goSearch">
            <el-icon>
              <Search />
            </el-icon>
          </el-button>
        </div>
    </el-menu>

  </el-header>
</template>

<script setup lang="ts">
import {
  Search
} from "@element-plus/icons-vue";



import { router } from '../../router';

function goSearch() {
  router.push('Search')
}

</script>



<style scoped lang="less">
.layout-header {
  padding: 0;
  height: 75px;

  &-menu {
    height: 100%;
  }

  &-input {
    height: 50%;
    max-width: 300px;
    margin: auto;
    display: flex;
    flex-direction: row;

    &-button {
      height: 100%;
    }
  }
}

</style>
