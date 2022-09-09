<template>
    <div>
        <div class="recommend">
            <swiper 
            :slides-per-view="1" 
            :space-between="0" 
            navigation 
            :pagination="{ clickable: true }"
            @swiper="onSwiper" 
            @slideChange="onSlideChange">
                <swiper-slide>Slide 1</swiper-slide>
                <swiper-slide>Slide 2</swiper-slide>
                <swiper-slide>Slide 3</swiper-slide>
            </swiper>
            <div class="recommend-list">
                <div class="recommend-item-box" v-for="item in recommendList">
                    <div class="video-prepics"></div>
                    <div class="video-Info">
                        <div class="title"><span>内容</span></div>
                        <div class="number"><span>60</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const onSwiper = (swiper) => {
    console.log(swiper);
};
const onSlideChange = () => {
    console.log('slide change');
};


const recommendList: Ref<Array<string>> = ref(['1', '2', '3', '4', '5', '6'])
</script>

<style scoped>
.recommend {
    aspect-ratio: 1280/400;
    margin: auto;
    max-width: 1280px;
    max-height: 400px;
    display: flex;
    flex-direction: row; 
    flex-wrap: wrap;    
    justify-content: left;
}

.swiper {
    margin: 10px;
    border: 1px rgb(94, 81, 81) solid;
    border-radius: 25px;
    flex: .4;
    --swiper-theme-color: #ff6600;
    --swiper-pagination-color: #00ff33;

}

.swiper-slide {
    margin: 0 auto;
    width: 100%;
    height: 100%;
}

.recommend-list {
    margin: 5px;
    height: 100%;
    flex: .6;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.recommend-item-box {
    aspect-ratio: 1/1;
    margin: 5px;
    height: 50%;
    flex: 1;
}


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

.title {
    flex: .6;
    text-align: left;
}

.number {
    flex: .15;
    text-align: left;
}
</style>