<template>
  <div>
    <Head />
    <router-view></router-view>
    <Foot />
  </div>
</template>

<script setup>
import Head from './components/Head.vue';
import Foot from './components/Foot.vue';
</script>

<style lang="scss" scoped>
</style>