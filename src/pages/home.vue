<template>
    <el-container class="firstContainer">
        <el-carousel :interval="2000" arrow="always">
            <el-carousel-item>Slide 1</el-carousel-item>
            <el-carousel-item>Slide 2</el-carousel-item>
            <el-carousel-item>Slide 3</el-carousel-item>
        </el-carousel>
        <div class="recommend-item-box" v-for="item in recommendList" @click="showDetail">
            <div class="video-prepics"></div>
            <div class="miniVideoContainer">
                <video id="video-player" ref="videoPlayer" preload="auto" :poster="item.poster" controls @mouseenter="playVideo(item.id)">
                    <source
                    :src="item.videoUrl"
                    type="video/mp4">
                </video>
            </div>

            <div class="video-Info">
                <div class="title"><span>内容</span></div>
                <div class="number"><span>60</span></div>
            </div>
        </div>

    </el-container>
    <div height="" v-for="card in cards" class="otherContainer">
        <Card :cardName="card"/>
    </div>
</template>

<script setup lang="ts">
import { reactive, Ref, ref } from 'vue';
import { router } from '../router';
import Card from '../pages/Card.vue'
import Video from 'video.js';


let cards = ref(['1','2'])
let videoUrl = ref('')
let videoPlayer = ref(null)


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
    {id : 0,
        poster : '../assets/o_1db27qbc54a091of0ur0d1dos8o.jpg',
        videoUrl : 'http://kefuzhihua-1300902972.cos.ap-nanjing.myqcloud.com/1642488976180-c6883103-0bbc-4a0a-97b8-b598add8b943_material%20%281%29.mp4',
    },
    {id : 1,
        poster : '../assets/o_1db27qbc54a091of0ur0d1dos8o.jpg',
        videoUrl : 'http://kefuzhihua-1300902972.cos.ap-nanjing.myqcloud.com/1642488976180-c6883103-0bbc-4a0a-97b8-b598add8b943_material%20%281%29.mp4', 
    },
    {id : 2,
        poster : '../assets/o_1db27qbc54a091of0ur0d1dos8o.jpg',
        videoUrl : 'http://kefuzhihua-1300902972.cos.ap-nanjing.myqcloud.com/1642488976180-c6883103-0bbc-4a0a-97b8-b598add8b943_material%20%281%29.mp4', 
    }
])


// 用于用户鼠标悬停时播放器自动播放
function playVideo(id: string | number) {
    
    console.log(videoPlayer.value![id]);
    
}





</script>

<style lang="less" scoped>
.firstContainer {
    margin: 10px auto;
    justify-content: left;
    display: grid;
    grid-template-columns: repeat(5,1fr) ;
    grid-template-rows: repeat(3,1fr) ;
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
            background-color: aqua;
        }

        .video-Info {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            
        }
        .miniVideoContainer {
            aspect-ratio: 16/9;
            width: 100%;
            top: 0;
            transform: translate(0,-100%);

            video {
                aspect-ratio: 16/9;
                width: 100%;
            }

        }
    }

    .otherContainer {
        padding: 0px;
        margin-bottom: 50px;
    }

}
</style>