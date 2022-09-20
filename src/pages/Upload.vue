<template>
    <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/"  accept="mp4" multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传mp4文件</div>
    </el-upload>
</template>


<script setup lang="ts">

//页面用于上传文件
import { reactive } from 'vue';
import { reqUploadVideo } from '../service/video';

let files: File[] = reactive([])


// function onChange(e: Event) {
//     if (e.target) {
//         files.push((e.target as HTMLInputElement).files![0]);    //这里采用了非空断言（！），必须确保目标对象里确实是有文件的
//     }
// }

// async function upload() {
//     files
//     await reqUploadVideo()
// }

</script>

<style scoped>

</style>