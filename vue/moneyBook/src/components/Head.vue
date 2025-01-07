<template>
    <van-nav-bar :title="title" left-arrow @click-left="goBack" />
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
    router.back();
}

defineProps({
    title: String,
    default: ''
})

</script>

<style lang="less" scoped></style>