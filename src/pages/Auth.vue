<template>
    <div class="auth">
        <el-main class="userDetail">

        </el-main>
        <el-aside class="userInfo">

        </el-aside>
    </div>
    <router-view class="Login"></router-view>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { router } from '../router';
import { store } from '../store';

watch(()=>store.state.token,(newStore) => {
    if(newStore) {
        router.push('Auth')
    }
})

onMounted(()=>{
    if (!store.state.token) {
        router.push('Login')
    }
})

</script>

<style lang="less" scoped>
.auth {
    margin: 10px auto;
    min-height: 100vh;
    background-color: white;
    max-width: 1280px;
    border-radius: 8px;
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow: hidden;

    .userDetail {
        background-color: skyblue;
    }

    .userInfo {
        background-color: pink;
    }

}

.Login {
    margin: 0px auto;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    align-content: center;
    background-color: grey;
    opacity: .8;
    display: flex;
    flex-wrap: wrap;
}
</style>