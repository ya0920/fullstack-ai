<template>
  <div>
    <h2 v-bind:class="[flag ? 'yellow' : 'red']" @click="handle">Hello World</h2>
    
    <h3 :class="{'green': isGreen}" @mousedown="down" @mouseup="up">子俊有点帅</h3>

    <h4 :style="{color: state.color}">阿炜有点帅</h4>

  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const flag = ref(false)
const handle = () => {
  flag.value = !flag.value
}

const isGreen = ref(false)
const down = () => {
  isGreen.value = true
}
const up = () => {
  isGreen.value = false
}

const state = reactive({
  color: 'blue'
})

</script>

<style lang="css" scoped>
.red{
  color: red;
}
.yellow{
  color: yellow;
}
.green{
  color: green;
}
</style>