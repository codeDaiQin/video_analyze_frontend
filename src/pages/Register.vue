<template>
    <div class="form">
        <form action="" method="get" @click="eraseErr">
            <div>
                <span>账号：</span>
                <input type="text" name="account" id="userAccout" v-model="userInfo.account">
            </div>
            <div>
                <span>密码：</span>
                <input type="password" name="password" id="userPassword" v-model="userInfo.userPassword">
            </div>
            <div>
                <span>密码确认：</span>
                <input type="password" name="passwordConfirm" id="userPasswordConfirm"
                    v-model="userInfo.passwordConfirm">
            </div>
            <div>
                <span>验证码：</span>
                <input type="text" name="sercurityCode" id="sercurityCode" v-model="userInfo.sercurityCode">
            </div>
            <div>
                <div id="userAgreementLink">
                    <input type="checkbox" name="userAgreement" id="userAgreement" v-model="check">
                    阅读<a href="#">《用户协议》</a>，同意并完成注册
                </div>
            </div>
            <div>
                <div class="handin">
                    <button @click.stop.prevent="register">注册</button>
                    <div v-if="errInfo">{{ errInfo }}</div>
                </div>
            </div>

        </form>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import { router } from '../router'
const route = useRoute()
//限定userinfo的属性
enum translate {
    account = '账号',
    userPassword = '密码',
    passwordConfirm = '密码确认',
    sercurityCode = '验证码',
}

//声明一个proxy实例并附初始值
let userInfo = reactive({
    account: route.params.userAccout,
    userPassword: '',
    passwordConfirm: '',
    sercurityCode: '',
})

let check = ref<boolean>(false)
let errInfo = ref<string>('')


function register() {
    //校验缺项
    let keys: Array<string> = Object.keys(userInfo)
    for (let key in keys) {
        if (!userInfo[keys[key] as keyof typeof userInfo]) {
            return errInfo.value = translate[keys[key] as keyof typeof translate] as string + '不能为空'
        }
    }

    //校验密码一致
    if (userInfo.userPassword !== userInfo.passwordConfirm) {
        return errInfo.value = '两次密码输入不相同'
    }

    //校验用户协议
    if (!check.value) {       
        return errInfo.value = '请勾选用户协议'
    }

    //向后端发送请求，传递参数注册此账户，并根据响应展示注册结果（成功/失败）（未实现）

    //如果响应成功，返回登录界面,并将账号返回到输入栏里
    router.push({
        name: 'Login',
        query: {
            userAccount: userInfo.account
        }
    })
}

function eraseErr() {
    errInfo.value = ''  
}

</script>

<style scoped>
.form {
    width: 100vh;
    margin: auto;
}

.form form {
    background-color: skyblue;
    border: 1px black solid;
    border-radius: 25px;
    margin: 1px auto;
    width: 680px;
    height: 600px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
}


.form form>div {
    font-family: "宋体";
    font-size: 24px;
    margin: auto;
    width: 400px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

#userAgreementLink {
    font-size: 20px;
}

.handin {
    font-family: "宋体";
    font-size: 24px;
    margin: auto;
    width: 400px;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.handin div{
    color: red;
    font-family: "宋体";
    font-size: 16px;
}

button {
    bottom: 0px;
    margin: 1px auto;
    width: 50%;
    height: 60px;
}
</style>