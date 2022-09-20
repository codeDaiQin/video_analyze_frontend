<template>
    <el-container class="firstContainer">
        <el-carousel :interval="2000" arrow="always">
            <el-carousel-item>Slide 1</el-carousel-item>
            <el-carousel-item>Slide 2</el-carousel-item>
            <el-carousel-item>Slide 3</el-carousel-item>
        </el-carousel>
        <div class="recommend-item-box" v-for="item in recommendList" @click="showDetail">
            <div class="video-prepics" :style="{backgroundImage: 'url(' + item.poster + ')'}" >
                <div class="miniVideoContainer"  @mouseleave="closeVideo" @mouseenter="playVideo(item.id)" >
                    <video
                        :style="{zIndex: videoLevel}"
                        class="video-player" 
                        ref="videoPlayers" preload="auto"                        
                        type="video/mp4"
                        muted>
                        <source>
                    </video>
                </div>
            </div>
            <div class="video-Info">
                <div class="title"><span>{{item.id}}</span></div>
                <div class="number"><span>60</span></div>
            </div>
        </div>

    </el-container>
    <div height="" v-for="card in cards" class="otherContainer">
        <Card :cardName="card" />
    </div>
</template>

<script setup lang="ts">
import { reactive, Ref, ref, toRef } from 'vue';
import { router } from '../router';
import Card from '../pages/Card.vue'
import videojs, { VideoJsPlayer } from 'video.js';


let cards = ref(['1', '2'])
//一组播放器集合
let videoPlayers = ref(null)
//单个播放器buff
let videoPlayer = ref<VideoJsPlayer | null>(null)
let videoLevel = ref(0)


function showDetail() {
    let location = {
        name: "Detail",
        //data: params,  //传入播放资源的url
        method: 'get'
    }
    router.push(location)
}

//推荐区的卡片
const recommendList = reactive([
    {
        id: 0,
        poster: '/src/assets/o_1db27qbc54a091of0ur0d1dos8o.jpg',
        videoUrl: 'http://kefuzhihua-1300902972.cos.ap-nanjing.myqcloud.com/1642488976180-c6883103-0bbc-4a0a-97b8-b598add8b943_material%20%281%29.mp4',
    },
    {
        id: 1,
        poster: '/src/assets/o_1db27qbc54a091of0ur0d1dos8o.jpg',
        videoUrl: 'http://kefuzhihua-1300902972.cos.ap-nanjing.myqcloud.com/1642488976180-c6883103-0bbc-4a0a-97b8-b598add8b943_material%20%281%29.mp4',
    },
    {
        id: 2,
        poster: '/src/assets/o_1db27qbc54a091of0ur0d1dos8o.jpg',
        videoUrl: 'http://kefuzhihua-1300902972.cos.ap-nanjing.myqcloud.com/1642488976180-c6883103-0bbc-4a0a-97b8-b598add8b943_material%20%281%29.mp4',
    },
    {
        id: 3,
        poster: '/src/assets/o_1db27qbc54a091of0ur0d1dos8o.jpg',
        videoUrl: 'http://kefuzhihua-1300902972.cos.ap-nanjing.myqcloud.com/1642488976180-c6883103-0bbc-4a0a-97b8-b598add8b943_material%20%281%29.mp4',
    },
    {
        id: 4,
        poster: '/src/assets/o_1db27qbc54a091of0ur0d1dos8o.jpg',
        videoUrl: 'http://kefuzhihua-1300902972.cos.ap-nanjing.myqcloud.com/1642488976180-c6883103-0bbc-4a0a-97b8-b598add8b943_material%20%281%29.mp4',
    },
    {
        id: 5,
        poster: '/src/assets/o_1db27qbc54a091of0ur0d1dos8o.jpg',
        videoUrl: 'http://kefuzhihua-1300902972.cos.ap-nanjing.myqcloud.com/1642488976180-c6883103-0bbc-4a0a-97b8-b598add8b943_material%20%281%29.mp4',
    },
    {
        id: 6,
        poster: '/src/assets/o_1db27qbc54a091of0ur0d1dos8o.jpg',
        videoUrl: 'http://kefuzhihua-1300902972.cos.ap-nanjing.myqcloud.com/1642488976180-c6883103-0bbc-4a0a-97b8-b598add8b943_material%20%281%29.mp4',
    }
])


// 用于用户鼠标悬停时播放器自动播放
function playVideo(id: string | number) {
    console.log(id);    
    console.log(videoPlayers.value);
    videoLevel.value = 2
    videoPlayer.value = videojs(videoPlayers.value![id], {
        aspectRatio: "16:9",
        sources: [{
            src: recommendList[id as any].videoUrl,
        }],
        width: 1,
    })
    videoPlayer.value.load()
    videoPlayer.value.play()
}
//鼠标离开时清除播放器
function closeVideo() {
    //清空buff
    videoLevel.value = 0
    videoPlayer.value?.pause()
    videoPlayer = ref(null)
}





</script>

<style lang="less" scoped>
.firstContainer {
    margin: 10px auto;
    justify-content: left;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 15px;

    .el-carousel {
        border: 1px solid black;
        grid-row: 1 / span 2;
        grid-column: 1 / span 2;
    }

    .recommend-item-box {
        aspect-ratio: 1.2/1;
        border-radius: 10px;
        border: 1px solid black;
        overflow: hidden;

        .video-prepics {
            aspect-ratio: 16/9;
            width: 100%;
            display: flex;
            background-size: cover;
            z-index: 1;



            .miniVideoContainer {
                aspect-ratio: 16/9;
                width: 100%;
                transform: translate(0, 0%);

                .video-player {
                    aspect-ratio: 16/9;
                    width: 100%;

                    video {
                        width: 100%;
                    }

                }

            }
        }

        .video-Info {
            flex: 1;
            display: flex;
            flex-direction: row;
            justify-content: space-between;

        }
    }

    .otherContainer {
        padding: 0px;
        margin-bottom: 50px;
    }

}

.vjs-fluid:not(.vjs-audio-only-mode) {
    padding-top: 0%;
    width: 100%;
}

.video-js.vjs-fluid,
.video-js.vjs-16-9,
.video-js.vjs-4-3 {

    width: 100%;
    background-color: #161616;

}
</style>