<template>
    <div>
        <div class="container">
            <el-tabs type="card" class="elLoginTabs" @click="removeMssage">
                <el-tab-pane label="密码">
                    <el-form action="" :rules="rules" :model="user" ref="userForm">
                        <el-form-item prop="email">
                            <el-input type="text" placeholder="请输入邮箱" v-model="user.email"></el-input>
                        </el-form-item>
                        <el-form-item class="passwordContainer" prop="password">
                            <el-input type="password" placeholder="密码" v-model="user.password"></el-input>
                            <el-button @click.prevent="forget">忘记密码</el-button>
                        </el-form-item>
                        <el-form-item>
                            <el-button class="button-login" @click="login">登录</el-button>
                            <el-button class="button-login" @click="register">注册</el-button>
                        </el-form-item>
                    </el-form>

                </el-tab-pane>
                <el-tab-pane label="验证码">
                    <el-form action="" :rules="rules" :model="user" ref="userForm">
                        <el-form-item prop="email">
                            <el-input type="text" placeholder="请输入邮箱" v-model="user.email"></el-input>
                        </el-form-item>
                        <el-form-item class="passwordContainer" prop="code">
                            <el-input type="code" placeholder="验证码" v-model="user.code"></el-input>
                            <el-button @click.prevent="getCode">获取验证码</el-button>
                        </el-form-item>
                        <el-form-item>
                            <el-button class="button-login" @click="login">登录</el-button>
                            <el-button type="primary" class="button-login" @click="register">注册</el-button>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import { store } from "../store";
import { UserInfo } from "../interface/auth";
import { reqLogin, reqRegister, reqCode, reqforgetPassWord } from "../service/auth";
import { router } from '../router';

let route = useRoute()
let emailErr = ref('')
let userForm = ref<any>(null)//用于el表单验证的实例，获取ref的dom对象，并使用.validate方法验证el-form上的各个内容

let user: UserInfo = reactive({
    email: route.query.userAccount ? route.query.userAccount as string : '',
    code: '',
    uid: '',
    password: null,
    name: ''
})

//表单验证

let rules = reactive({
    code: [
        { required: true, message: '请输入验证码', trigger: 'blur' },
        { min: 4, max: 4, message: '长度在 4 个字符', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 8, max: 16, message: '长度在 8 - 16 个字符', trigger: 'blur' }
    ],
    email: [
        { required: true, message: '请输入邮箱', trigger: 'blur' },
        {
            validator: (rule: any, value: string, callback: Function) => {
                //验证邮箱的正则表达式（重点掌握）
                let emailReg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
                if (!emailReg.test(user.email)) {
                    callback(new Error('邮箱格式不正确'));
                } else {
                    callback();
                }
            },
            trigger: 'blur'
        },

        {
            validator: (rule: any, value: string, callback: Function) => {
                if (emailErr.value) {
                    callback(new Error(emailErr.value));
                } else {
                    console.log(1);

                    callback();
                }
            },
            trigger: 'blur'
        }
    ],
})


//移除错误信息
function removeMssage() {
    emailErr.value = ''
}

//提取用户登录信息
function assignUserInfo(res: Promise<UserInfo>) {

}

//请求
async function register() {
    userForm.value.validate((valid: any) => {
        if (valid) {
            (async () => {
                let res = await reqRegister(user)
                //返回注册成功信息
                if (typeof (res) === typeof (Object)) {
                    store.commit('setUser',res)
                } else {
                    emailErr.value = res
                    return false;
                }
            })()
        } else {
            console.log('error submit!!');
            return false;
        }
    })
}

async function login() {
    //核验信息代码段
    if (user.password) {
            let res = await reqLogin({ email: user.email, password: user.password })
            if (res.token) {
                store.commit('setUser', res)
                localStorage.setItem('token', res.token)
                router.push('Auth')
            } else {
                emailErr.value = res
                return false;
            }
        }
    if (user.code) {
        let res = await reqLogin({ email: user.email, code: user.code})
        //本机运行版本为达成password非null值得code登录方式，需要拉取最新后端测试代码
        if (res.token) {
            store.commit('setUser', res)
            localStorage.setItem('token', res.token)
            router.push('Auth')
        } else {
            emailErr.value = res
            return false;
        }
    }
}

async function getCode() {
    let res = await reqCode(user)
    user.code = res.code;
}

async function forget() {
    let res = await reqforgetPassWord(user)
}

</script>

<style lang="less" scoped>
.container {
    position: relative;
    width: 500px;
    height: 250px;
    border-radius: 10px;
    background-color: aquamarine;
    border: 1px solid black;
    margin: auto;

    .el-form-item {
        margin: 20px;
    }


    .passwordContainer {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;

        .el-input {
            flex: 1;
        }

    }

}
</style>