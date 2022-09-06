<template>
    <div class="login">
        请输入账户信息
        <div class="userInfo">
            <div>
                <span>账号</span> |
                <input type="text" placeholder="请输入账号" v-model="user.account">
            </div>
            <div>
                <span>密码</span> |
                <input type="password" placeholder="请输入密码" v-model="user.password">
            </div>
        </div>
        <div class="buttons">
            <button class="button-register" @click="jumpRegister">注册</button>
            <button class="button-login" @click="login">登录</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
import { router } from '../router';

let route = useRoute()

interface User {
    account : string,
    password : string
}

let user : User = reactive({
    account :  route.query.userAccount? route.query.userAccount as string : '',
    password : '',
}) 

function jumpRegister() {
    let location = {
        name: "Register",
        params: { userAccout: user.account },
    }
    router.push(location)
}
function login() {
    //核验信息代码段

    //根据结果返回登录结果或返回错误信息

    //登陆成功保存Token代码段，并登录跳转
    console.log("请求服务器核验信息，登陆成功")
}

</script>

<style scoped>
.login {
    margin: auto;
    background-color: white;
    width: 420px;
    border-radius: 8px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}

.userInfo {
    margin: 10px auto;
    width: 60%;
    height: 100px;
    text-align: center;
    background-color: pink;
    border-radius: 20px;
    font-weight: lighter;
}

.userInfo div{
    height: 50%;
    margin: 0px auto;
    text-align: center;
    font-size: 24px;
}

.userInfo input{
    width: 150px;
    margin: auto;
    border: 0px;
    height: 100%;
    text-align: left;
    font-size: 20px;
    padding: 0px;
    background-color: pink;
    outline: 0px;
}

.buttons {
    height: 50px;
}

.button-login{
    background-color: skyblue;
}
</style>