<template>
  <div>
    <!-- <h2 v-show="isShow">章总萌萌的</h2> -->

    <h2 v-if="isShow">章总萌萌的</h2>
    <h2 v-else>陈总更萌</h2>

    <button @click="toggle">显示隐藏</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isShow = ref(true)
const toggle = () => {
  isShow.value = !isShow.value
}
</script>

<style lang="css" scoped>

</style>