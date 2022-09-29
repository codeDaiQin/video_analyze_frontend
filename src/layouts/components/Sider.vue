<script setup lang="ts">
import {
  House,
  Document,
  Menu as IconMenu,
  Setting,
  User,
  ArrowLeftBold,
  ChatDotSquare
} from "@element-plus/icons-vue";
import { inject } from "vue";
import { router } from "../../router";

// const {displaySide, showSide} = inject('displaySide')

function toAuth() {
  router.push('Auth')
}



</script>

<template>
  <el-menu class="layout-menu" collapse>
    <div>
      <el-menu-item index="1">
        <el-icon @click="router.go(-1)">
          <ArrowLeftBold />
        </el-icon>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon @click="router.push('Home')">
          <House />
        </el-icon>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon>
          <icon-menu />
        </el-icon>
      </el-menu-item>
      <el-menu-item index="4" disabled>
        <el-icon>
          <Document />
        </el-icon>
      </el-menu-item>
      <el-menu-item index="5">
        <el-icon>
          <Setting />
        </el-icon>
      </el-menu-item>
    </div>
    <div>
      <el-menu-item class="layout-menu-item-last" index="6">
        <el-icon>
          <ChatDotSquare/>
        </el-icon>
      </el-menu-item>
      <el-menu-item class="layout-menu-item-last" index="7">
        <el-icon>
          <Setting />
        </el-icon>
      </el-menu-item>
      <el-menu-item class="layout-menu-item-last" index="8">
        <el-icon>
          <User @click="toAuth" />
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
