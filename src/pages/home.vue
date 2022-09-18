<template>
    <el-container class="firstContainer">
        <el-carousel :interval="2000" arrow="always">
            <el-carousel-item>Slide 1</el-carousel-item>
            <el-carousel-item>Slide 2</el-carousel-item>
            <el-carousel-item>Slide 3</el-carousel-item>
        </el-carousel>
        <div class="recommend-item-box" v-for="item in recommendList" @click="showDetail">
            <div class="video-prepics"></div>
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
import { Ref, ref } from 'vue';
import { router } from '../router';
import Card from '../pages/Card.vue'
let cards = ref(['1','2'])

function showDetail() {
    let location = {
        name: "Detail",
        //data: params,  //传入播放资源的url
        method: 'get'
    }
    router.push(location)
}


const recommendList: Ref<Array<string>> = ref(['1', '2', '3', '4', '5', '6', '7', '8'])
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
        border: 1px solid black;
        text-align: center;

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
    }

    .otherContainer {
        padding: 0px;
        margin-bottom: 50px;
    }

}
</style>