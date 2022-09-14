<template>
    <div class="header">
        <div class="left-entry">
            <router-link to="/Home" class="entry-item">首页</router-link>
            <router-link to="/HelloWorld" class="entry-item">HelloWorld</router-link>
        </div>
        <div class="center-search-container">
            <div class="center-search-bar">
                <form class="center-search-form">
                    <div class="center-search-content">
                        <input class="center-search-input" type="text" v-model="searchInput">
                    </div>
                    <div class="center-search-btn">
                        <button class="sereach-btn" @click.prevent="goResearch">
                            <img src="../assets/heart-love-like.svg">
                        </button>
                    </div>

                </form>
            </div>

        </div>
        <div class="right-entry">
            <router-link to="/Login" class="entry-item">登录</router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { router } from '../router';

const searchInput = ref('')

function goResearch() {
    let location = {
        name: 'Research',
        query: {
            searchInput: searchInput.value
        } 
    }
    router.push(location)
}
</script>

<style scoped>
.header {
    top: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    border: 1px solid black;
    color: grey;
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

.center-search-form {
    display: flex;
    align-items: center;
    padding: 0 48px 0 4px;
    position: relative;
    z-index: 1;
    overflow: hidden;
    line-height: 38px;
    border: 1px solid grey;
    height: 40px;
    background-color: aliceblue;
    opacity: .9;
    transition: background-color .3s;
}

.center-search-content {
    display: flex;
    align-self: center;
    justify-content: space-between;
    position: relative;
    padding: 0 8px;
    width: 100%;
    height: 32px;
    border: 2px solid transparent;
    border-radius: 6px;
}

.center-search-input {
    flex: 1;
    overflow: hidden;
    padding-left: 8px;
    border: none;
    background-color: transparent;
    box-shadow: none;
    color: rgb(54, 54, 54);
    font-size: 14px;
    line-height: 20px;
}

.center-search-btn {
    position: absolute;
    top: 3px;
    right: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    width: 32px;
    height: 32px;
    border: none;
    border-right: 6px;
    color:  rgb(54, 54, 54);
    line-height: 32px;
    cursor: pointer;
    transition: background-color .3s;
}

.search-btn {

    width: 32px;
    height: 32px;

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

.entry-item {
    margin: 5px;
}
</style>