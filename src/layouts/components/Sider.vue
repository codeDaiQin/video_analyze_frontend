<script setup lang="ts">
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
</script>

<template>
  <el-menu class="layout-menu" collapse>
    <div>
      <el-menu-item index="1">
        <el-icon><Location /></el-icon>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon><Document /></el-icon>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><Setting /></el-icon>
      </el-menu-item>
    </div>
    <el-menu-item class="layout-menu-item-last" index="5">
      <el-icon><Setting /></el-icon>
    </el-menu-item>
  </el-menu>
</template>

<style scoped lang="less">
.layout-menu {
  background: rgb(246, 247, 248);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &-item-last {
    justify-self: end;
  }
}
</style>
