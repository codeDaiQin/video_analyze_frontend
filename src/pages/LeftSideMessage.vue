<script setup lang="ts">
import { computed, inject, ref, watch, ComputedRef} from 'vue';
let {displaySide, showSide} = inject('displaySide')
let show : ComputedRef<boolean> = computed(()=>{
    return displaySide as boolean
})

</script>
    
<template>
    <el-container class="layout-container" v-if="!show">
        <el-aside class="layout-container-aside">

        </el-aside>
        <el-main class="layout-container-main">

        </el-main>
    </el-container>
</template>
    
<style scoped lang="less">
.layout-container {
    position: fixed;
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    z-index: 998;
    flex-direction: row;

    &-aside {
        width: 400px;
        height: 100vh;
        border-radius: 0px 25px 0px 0px;
        background-color: azure;
        opacity: 1;
        z-index: 999;
    }

    &-main {
        width: 100%;
        height: 100%;
        opacity: .7;
        position: absolute;
    }
}
</style>
    