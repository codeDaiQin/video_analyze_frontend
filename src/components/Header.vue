<template>
    <div class="header">
        <div class="left-entry">
            <button @click="router.push('Home')" class="entry-item">首页</button>
            <button @click="router.push('HelloWorld')" class="entry-item">HelloWorld</button>
        </div>
        <div class="center-search-container">
            <div class="center-search-bar">
                <el-form>
                    <el-input type="text" v-model="searchInput">
                    </el-input>
                    <el-button class="sereach-btn" @click.prevent="goResearch">
                        <img src="../assets/heart-love-like.svg">
                    </el-button>
                </el-form>
            </div>

        </div>
        <div class="right-entry">
            <button @click="router.push('Auth')" v-if="showEntry && store.state.user.uid">用户头像</button>
            <button @click="userExit" v-if="showExit && store.state.user.uid">退出登录</button>
            <div @mouseenter="showLogin" @mouseleave="isLogin=false">
                <button @click="router.push('Auth');isLogin=false" v-if="showEntry && !store.state.user.uid">登录</button>
                <keep-alive>
                    <Login v-if="isLogin" class="Login" />
                </keep-alive>
            </div>

            <button @click="router.push('Upload')">发布</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { store } from "../store";
import { onMounted, provide, ref, watch } from 'vue';
import { router } from '../router';
import { useRoute } from 'vue-router'
import Login from "../pages/Login.vue";

const route = useRoute()
const searchInput = ref('')
const showEntry = ref(true)
provide('show', showEntry)
let isLogin = ref(false)
let showExit = ref(true)

function showLogin() {
    if (!store.state.user.uid) {
        isLogin.value = true
    }
}

function userExit() {
    localStorage.removeItem('token')
    showExit.value = false
    isLogin.value = true
    store.commit('removeUserInfo')
    router.push('Login')
}

function goResearch() {
    let location = {
        name: 'Research',
        query: {
            searchInput: searchInput.value
        }
    }
    router.push(location)
}

watch(route, () => {
    showEntry.value = !(route.path.indexOf('Auth') === 1)
    showExit.value = (route.path.indexOf('Auth') === 1)
})


</script>

<style lang="less" scoped>
.header {
    margin: 10px auto;
    top: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    border: 1px solid black;
    color: grey;
    background-color: white;
    opacity: 1;
}

.left-entry {
    background-color: skyblue;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    margin: auto;
    margin-left: 1px;
    padding: 2px;
}

.center-search-container {
    flex: 1 auto;
    height: 38px;
}

.center-search-bar {
    position: relative;
    margin: auto;
    min-width: 181px;
    max-width: 500px;
}

.center-search-container{
    margin: auto;
    height: 100%;
    
    .el-form {
        margin: auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        .el-input {
            width: 400px;
        }
        
    }
}


.right-entry {
    background-color: white;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: right;
    margin: auto;
    margin-right: 1px;
    padding: 2px;
}

.right-entry button {
    background-color: pink;
    margin: 1px;
    border: 1px black solid;
}

.Login {
    position: absolute;
    transform: translate(-80%, 0);
    z-index: 999;
}
</style>