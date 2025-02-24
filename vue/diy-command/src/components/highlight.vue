<template>
  <div>
    <input type="text" v-model="inputVal">
    <h3 v-HighLight="inputVal">{{inputVal}}</h3>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const inputVal = ref('hello')

</script>

<style lang="css" scoped>

</style>