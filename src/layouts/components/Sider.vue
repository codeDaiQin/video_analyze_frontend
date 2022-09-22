<script setup lang="ts">
import {
  House,
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  User,
} from "@element-plus/icons-vue";
import { router } from "../../router";

function toAuth() {
  router.push('Auth')
}



</script>

<template>
  <el-menu class="layout-menu" collapse>
    <div>
      <el-menu-item index="1">
        <el-icon @click="router.push('Home')">
          <House />
        </el-icon>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon>
          <icon-menu />
        </el-icon>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon>
          <Document />
        </el-icon>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon>
          <Setting />
        </el-icon>
      </el-menu-item>
    </div>
    <div>
      <el-menu-item class="layout-menu-item-last" index="5">
        <el-icon>
          <User @click="toAuth"/>
        </el-icon>
      </el-menu-item>
      <el-menu-item class="layout-menu-item-last" index="6">
        <el-icon>
          <Setting />
        </el-icon>
      </el-menu-item>
    </div>

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
