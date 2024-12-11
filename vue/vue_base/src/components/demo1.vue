<template>
  <div>
    <button v-on:click="add">{{state.count}}</button>
    <button @click="add2">{{num}}</button>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const state = reactive({
  count: 0
})
const num = ref(100)


const add = () => {
  state.count++;
}
const add2 = () => {
  num.value++;
}
</script>

<style lang="css" scoped>

</style>