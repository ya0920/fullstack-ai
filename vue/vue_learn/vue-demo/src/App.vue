<template>
  <div>
    <h2>{{ state.title }}</h2>
    <h3 v-bind:class="{ 'red': state.isActive }">{{ state.count }}</h3>
    <!-- :class -->
    <button v-on:click="decrement">-1</button>
    <!-- 绑定事件 -->
    <button @click="increment">+1</button>
  </div>

  <ul>
    <li v-for="(item, index) in state.arr">{{ item }}</li>
  </ul>

</template>

<script setup>
import { reactive } from 'vue'
let state = reactive({
  title: 'Hello Vue 3',
  count: 0,
  isActive: false,
  arr: ['html', 'css', 'js', 'vue']
})

const increment = () => {
  state.count++
  if (state.count < -5) {
    state.isActive = true
  } else {
    state.isActive = false
  }
}

const decrement = () => {
  state.count--
  if (state.count < -5) {
    state.isActive = true
  } else {
    state.isActive = false
  }
}
</script>

<style scoped>
.red {
  color: red;
}
</style>
