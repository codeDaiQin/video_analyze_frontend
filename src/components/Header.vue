<template>
  <div class="header">
    <div class="left-entry">
      <router-link to="/Home" class="entry-item">首页</router-link>
      <router-link to="/HelloWorld" class="entry-item">HelloWorld</router-link>
    </div>
    <div class="right-entry">
      <router-link to="/Login" class="entry-item">登录</router-link>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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
