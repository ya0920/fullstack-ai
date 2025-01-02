<template>
    <van-tabbar route v-model="active" active-color="rgb(54, 167, 98)">
        <van-tabbar-item to="/home" icon="bill">明细</van-tabbar-item>
        <van-tabbar-item to="/data" icon="clock">统计</van-tabbar-item>
        <van-tabbar-item to="/setting" icon="setting">设置</van-tabbar-item>
    </van-tabbar>
</template>

<script setup>
import { ref } from 'vue';
const active = ref(0);

</script>

<style lang="less" scoped></style>