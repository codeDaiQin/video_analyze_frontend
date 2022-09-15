<template>
    <div class="form">
        <form action="" method="get" @click="eraseErr">
            <div>
                <span>邮箱：</span>
                <div class="email-box">
                    <input type="text" name="email" id="userEmail" v-model="userInfo.email" @change="findUser">
                    <button @click.prevent="reqEmailCode">发送验证码</button>
                </div>

            </div>
            <div>
                <span>密码：</span>
                <input type="password" name="password" id="userPassword" v-model="userInfo.password">
            </div>
            <div>
                <span>密码确认：</span>
                <input type="password" name="passwordConfirm" id="userPasswordConfirm"
                    v-model="passwordConfirm">
            </div>
            <div>
                <span>验证码：</span>
                <input type="text" name="code" id="code" v-model="userInfo.code">
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
import { UserInfo, reqRegister, UserInfoRequest, reqCode, UserRegisterRequest} from '../interface/userInfo'
import { ElResult } from 'element-plus';


const route = useRoute()
//限定userinfo的属性
enum translate {
    email = '账号',
    password = '密码',
    code = '验证码',
}

//声明一个proxy实例并附初始值
let userInfo = reactive<UserInfo>({
    email: route.params.userAccout as string,
    password: '',
    uid: '',
    code: '',
    name:''
})

let passwordConfirm = ref<string>('')
let alertMessage = ref<string>('')
let check = ref<boolean>(false)
let errInfo = ref<string>('')

//用户填写用户邮箱时进行检查用户名的注册情况（可注册/已注册/书写规范）
function findUser() {
    //先检查书写规范合理性
    let emailReg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
    if (emailReg.test(userInfo.email)) {
        //查找是否有相同email，有则登录
    } else {
        return alertMessage.value = "邮箱格式不正确";
    }

}

//发送验证码---此处应该封装请求，处理返回结果
async function reqEmailCode() {
    let result = await reqCode(userInfo.email)      
    userInfo.code = result.code
    
}

//注册的主体程序
function register() {
    //校验缺项
    let keys: Array<string> = Object.keys(translate)
    for (let key in keys) {
        if (!userInfo[keys[key] as keyof typeof userInfo]) {
            return errInfo.value = translate[keys[key] as keyof typeof translate] as string + '不能为空'
        }
    }

    //校验重复密码是否填写
    if (!passwordConfirm.value) {
        return errInfo.value = '密码确认不能为空'
    }

    //校验密码一致
    if (userInfo.password !== passwordConfirm.value) {
        return errInfo.value = '两次密码输入不相同'
    }

    //校验用户协议
    if (!check.value) {
        return errInfo.value = '请勾选用户协议'
    }

    //向后端发送请求，传递参数注册此账户，并根据响应展示注册结果（成功/失败）（未实现）
    let config:  UserRegisterRequest = { email: userInfo.email, code: userInfo.code}
    reqRegister(config)
    //如果响应成功，返回登录界面,并将账号返回到输入栏里
    // router.push({
    //     name: 'Login',
    //     query: {
    //         userAccount: userInfo.email
    //     }
    // })
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

.handin div {
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

.email-box {
    font-family: "宋体";
    font-size: 24px;
    margin: auto;
    width: 400px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
}
.email-box button{
    font-family: "宋体";
    font-size: 10px;
    height: 24px;
    margin: auto;
    width: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
}
</style>