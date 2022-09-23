<template>
    <div class="auth">
        <el-header class="auth-header">
            <div class="auth-header-userInfo">
                <!-- 头像 -->
                <el-avatar class="auth-header-avatar" size="large" @click="toEditDetail">user</el-avatar>
                <div class="auth-header-textInfo">
                    <div class="auth-header-userName">用户名 {{store.state.user.name}}</div>
                    <div class="auth-header-exp">经验{{store.state.user.exp}}</div>
                </div>
            </div>

            <div class="auth-header-userFavor">
                <div class="auth-header-userFavorList">
                    <div class="auth-header-collection">收藏</div>
                    <div>|</div>
                    <div class="auth-header-history">历史</div>
                    <div>|</div>
                    <div class="auth-header-favorite">关注</div>
                    <div>|</div>
                    <div class="auth-header-circle">动态</div>
                </div>
            </div>
        </el-header>
        <el-main class="userDetail">
            <router-view></router-view>
        </el-main>
    </div>
    <!-- <router-view class="Login"></router-view> -->
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue';
import { router } from '../router';
import { store } from '../store';

function toEditDetail() {
    router.push('userDetail')
}


watch(() => store.state.user, (newStore) => {
    if (newStore) {
        router.push('Auth')
    }
})

onMounted(() => {
    // if (!localStorage.getItem('token')) {
    //     router.push('Login')
    // }
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
    flex-direction: column;
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
    z-index: 999;
}

.auth-header {
    background-color: pink;
    padding: 10px;
    margin: 0px;
    height: 120px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .auth-header-userInfo {
        margin: auto;
        margin-left: 32px;
        display: flex;
        flex-direction: row;
        justify-content: center;

        .auth-header-textInfo {
            margin: auto;
            margin-left: 10px;
            .auth-header-userName {
                border-bottom: 3px solid brown;
            }

        }


    }

    .auth-header-userFavor {
        flex: 1;
        margin: auto;
        margin-right: 32px;
        display: flex;
        flex-direction: row-reverse;

        .auth-header-avatar:hover {
            border: 5px skyblue;
        }



        .auth-header-userFavorList {
            display: flex;
            flex-direction: row-reverse;

            div {
                margin: 10px;
            }

        }
    }


}
</style>