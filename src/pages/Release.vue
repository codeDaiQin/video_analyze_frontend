<template>
    <div>
        <input type="file" name="file-name" ref="file" @change="onChange($event)">
        <button @click="releaseMyVideo">上传作品</button>
    </div>
</template>


<script setup lang="ts">
    
//页面用于上传文件
import { reactive } from 'vue';
import { reqReleaseVideo } from "../interface/videoRelease";

let files : File[] = reactive([])


function onChange(e : Event) {
    if (e.target) {
        files.push((e.target as HTMLInputElement).files![0]);    //这里采用了非空断言（！），必须确保目标对象里确实是有文件的
    }
}

function releaseMyVideo() {
    reqReleaseVideo(files)
}

</script>

<style scoped>

</style>