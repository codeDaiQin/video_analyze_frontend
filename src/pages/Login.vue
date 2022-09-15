<template>
    <div class="login">
        <div class="userDetail"></div>

        <div class="userInfo">
            <div v-if="show">
                <div>
                    <input type="text" placeholder="请输入邮箱" v-model="user.email">
                </div>
                <div>
                    <input type="password" placeholder="密码/验证码" v-model="user.code">
                    <button id="getCode" @click="getCode">获码</button>
                </div>
                <div class="buttons">
                    <button class="button-login" @click="login">登录</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { inject, reactive } from 'vue';
import { useRoute } from 'vue-router';
import { store } from "../store";
import { router } from '../router';
import { reqLogin, reqRegister, reqCode, UserInfo } from "../interface/userInfo";

let show = inject('show')
let route = useRoute()

let user: UserInfo = reactive({
    email: route.query.userAccount ? route.query.userAccount as string : '',
    code: null,
    uid: null,
    password: null,
    name: null
})

async function login() {
    //核验信息代码段
    await reqRegister(user).then( 
        res=> {
            Object.assign(user,res)           
        }
    ).catch( 
        async err => {
            if(err.response.data.message === '存在了哦') {
                let reslogin = await reqLogin(user)
                Object.assign(user,reslogin.user)   
                sessionStorage.setItem('token',reslogin.token) 
                store.commit('setToken',reslogin.token)
            }
        }        
    )        
}

async function getCode() {
    //验证邮箱的正则表达式（重点掌握）
    let emailReg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
    //邮箱未填写，或者不合法时终止方法
    if (!user.email || !emailReg.test(user.email)) {
        return alert('请输入合法邮箱')
    }
    let res = await reqCode(user.email)
    user.code = res.code;    
}

</script>

<style lang="less" scoped>
.login {
    margin: 10px auto;
    background-color: white;
    max-width: 1280px;
    border-radius: 8px;
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    .userDetail {
        flex: .8;
        height: 2000px;
    }

    .userInfo {
        flex: .2;
        margin: 10px auto;
        max-width: 400px;
        background-color: pink;
        border-radius: 20px;
        font-weight: lighter;
        border: 1px black solid;
        align-content: center;

        >div {
            margin: 3px 3px 0px 3px;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;

            >div {
                margin: 3px 3px 0px 3px;
                height: 30px;
                width: 100%;
                font-size: 20px;
                display: flex;
                flex-wrap: wrap;
                flex-direction: row;
                justify-content: space-between;

                #getCode {
                    flex: 1;
                    margin: 3px 3px 0px 3px;
                    border: 1px solid black;
                    height: 100%;
                    font-size: 15px;
                    inline-size: 30px;
                }

                input {
                    flex: 1;
                    width: 100px;
                    margin: 3px 3px 0px 3px;
                    border: 0px;
                    height: 100%;
                    font-size: 20px;
                    padding: 0px;
                    background-color: skyblue;
                }

            }
        }



        .buttons {
            .button-login {
                margin: 10px auto;
                background-color: skyblue;
            }
        }

    }

}
</style>