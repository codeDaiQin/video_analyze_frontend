<template>
    <el-upload class="upload-demo" 
    drag 
    action="http://localhost:3000/api/v1/upload"  
    :data="{
        type:'video'
    }"
    :headers="header"
    :auto-upload="true">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传视频文件</div>
    </el-upload>
</template>


<script setup lang="ts">

//页面用于上传文件
import { reactive } from 'vue';

let files: File[] = reactive([])



let header = reactive(
    {
        token: localStorage.getItem('token')
    }
)
</script>

<style scoped>

</style>