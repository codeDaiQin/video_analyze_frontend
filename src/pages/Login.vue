<template>
    <div>
        <div class="container">
            <el-tabs type="card" class="elLoginTabs" @click="removeMssage">
                <el-tab-pane label="密码">
                    <div>
                        <el-input type="text" placeholder="请输入邮箱" v-model="user.email" @change="testReg"></el-input>
                    </div>
                    <div class="passwordContainer">
                        <el-input type="password" placeholder="密码" v-model="user.password"></el-input>
                        <el-button @click="forget">忘记密码</el-button>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="验证码">
                    <div>
                        <el-input type="text" placeholder="请输入邮箱" v-model="user.email" @change="testReg"></el-input>
                    </div>
                    <div class="passwordContainer">
                        <el-input type="code" placeholder="验证码" v-model="user.code"></el-input>
                        <el-button @click="getCode">获取验证码</el-button>
                    </div>
                </el-tab-pane>
            </el-tabs>
            <div class="buttons">
                <el-button class="button-login" @click="login">登录</el-button>
                <el-button class="button-login" @click="register">注册</el-button>
                <p>{{emailErr}}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import { store } from "../store";
import { reqLogin, reqRegister, reqCode, reqforgetPassWord, UserInfo } from "../interface/auth";

let route = useRoute()
let emailCheck = ref<boolean>(false)
let emailErr = ref<string>('')

let user: UserInfo = reactive({
    email: route.query.userAccount ? route.query.userAccount as string : '',
    code: null,
    uid: null,
    password: null,
    name: null
})

//测试邮箱合法性
function testReg() {
    emailErr.value = ''
    //验证邮箱的正则表达式（重点掌握）
    let emailReg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
    //邮箱未填写，或者不合法时终止方法
    if (!user.email || !emailReg.test(user.email)) {
        emailErr.value = '请输入合法邮箱'
        return emailCheck.value = false
    }
    return emailCheck.value = true
}

//移除错误信息
function removeMssage() {
    emailErr.value = ''
}

//提取用户登录信息
function assignUserInfo(res: Promise<UserInfo>) {

}

//请求
async function register() {
    //核验信息代码段
    if (testReg()) {
        await reqRegister(user).then(
            res => {
                Object.assign(user, res)
            }
        ).catch(
            async err => {
                if (err.response.data.message === '用户已存在') {
                    let reslogin = await reqLogin(user)
                    Object.assign(user, reslogin.user)
                    sessionStorage.setItem('token', reslogin.token)
                    store.commit('setToken', reslogin.token)
                }
            }
        )
    }
}

async function login() {
    //核验信息代码段
    if (testReg()) {
        let res = await reqLogin(user)
        Object.assign(user, res.user)
        sessionStorage.setItem('token', res.token)
        store.commit('setToken', res.token)
    }
}

async function getCode() {
    if (testReg()) {
        let res = await reqCode(user)
        user.code = res.code;
    }
}

async function forget() {
    if (testReg()) {
        let res = await reqforgetPassWord(user)
    }
}

</script>

<style scoped>
    .container {
        position: relative;
        max-width: 400px;
        max-height: 300px;
        border-radius: 10px;
        background-color: aquamarine;
        border: 1px solid black;
        margin: auto;
        
    }
</style>