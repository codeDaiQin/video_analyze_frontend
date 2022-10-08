<template>
    <el-tabs>
        <el-tab-pane label="动态" name="first">
            <Massage />
        </el-tab-pane>
        <el-tab-pane label="历史" name="second">
            <History />
        </el-tab-pane>
        <el-tab-pane label="收藏" name="third">
            <Favorite />
        </el-tab-pane>
    </el-tabs>
</template>

<script setup lang="ts">
import Massage from "./Massage.vue";
import History from "./History.vue";
import Favorite from "./Favorite.vue";

</script>

<style scoped>

</style>