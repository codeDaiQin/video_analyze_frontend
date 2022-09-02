<template>
    <div class="login">
        这里是登录页
        <div class="userInfo">
            <div>
                <div>
                    <span>账号</span>
                    <input type="text" placeholder="请输入账号" v-model="user.account">
                </div>
                <div>
                    <span>密码</span>
                    <input type="password" placeholder="请输入密码" v-model="user.password">
                </div>
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
interface User {
    account : string,
    password : string
}

let user : User = reactive({
    account : '',
    password : '',
}) 

function jumpRegister() {
    //根据已有信息跳转至注册页面
    console.log(user);

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
    background-color: white;
    width: 820px;
    border-radius: 8px;
}
.button-login{
    background-color: skyblue;
}
</style>