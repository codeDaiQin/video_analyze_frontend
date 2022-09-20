<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import Header from './components/Header.vue'
import 'video.js/dist/video-js.css'
import { onMounted } from 'vue';
import { store } from './store';
import { User } from "./interface/user";
import { reqUser } from "./service/user";

onMounted(async ()=>{
  let res = await reqUser()
  store.commit('setUser',res)
})

</script>

<template>
  <el-container>
    <el-header height="80px">
      <Header/>
    </el-header>
    <el-container>
      <el-container>
        <el-main height="">
          <router-view></router-view>
        </el-main>
        <el-footer height="">
          <!-- Footer content -->
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
