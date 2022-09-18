<template>
    <div class="title">
        <div class="titleName">
            {{props.cardName}}
        </div>
    </div>
    <div class="otherContainerItem">
        <div class="recommend-item-box" v-for="item in recommendList" @click="showDetail">
            <div class="video-prepics"></div>
            <div class="video-Info">
                <div class="title"><span>内容</span></div>
                <div class="number"><span>60</span></div>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';
import { router } from '../router';
const props = defineProps(['cardName'])


function showDetail() {
    let location = {
        name: "Detail",
        //data: params,  //传入播放资源的url
        method: 'get'
    }
    router.push(location)
}


const recommendList: Ref<Array<string>> = ref(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'])

</script>

<style lang="less" scoped>
.title {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 20px;
    justify-content: left;

    div {
        flex: 1;
        height: 45px;
        border-bottom: 1px solid grey;
    }

    .titleName {
        text-align: left;
        font-size: 45px;
        font-family: "微软雅黑";
    }
}

.otherContainerItem {
    margin: 10px auto;
    justify-content: left;
    display: grid;
    grid-template-columns: repeat(5,1fr) ;
    grid-template-rows: repeat(3,1fr) ;
    grid-gap: 15px;


    .recommend-item-box {
        aspect-ratio: 1.2/1;
        border: 1px solid black;

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
}
</style>