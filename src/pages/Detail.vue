<template>
    <div class="video-container">
        <div class="left-container"></div>
        <div class="middle-container">
            <video id="video-player" preload="auto" controls>
                <source
                    src="http://kefuzhihua-1300902972.cos.ap-nanjing.myqcloud.com/1642488976180-c6883103-0bbc-4a0a-97b8-b598add8b943_material%20%281%29.mp4"
                    type="video/mp4">
            </video>
        </div>
        <div class="right-container"></div>
    </div>
</template>

<script setup lang="ts">
import Videojs from 'video.js/dist/video'
import { onMounted } from 'vue';

onMounted(()=> {
    Videojs('#video-player', {
            autoplay: 'muted',
            controls: true,
            aspectRatio: "16:9",
            techOrder: ['html5'],
        })
})

</script>

<style scoped>
.video-container {
    max-width: 1280px;
    height: 600px;
    margin: auto;
    display: flex;
    flex-direction: row;
}

.middle-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

#video-player {
    padding: 0;
    margin: auto;
}

</style>