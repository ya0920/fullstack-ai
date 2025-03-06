<template>
  <div>
    <div @click="add">
      hello world -- count:{{ state.count }} -- res:{{ res }} -- like:{{ state.like.a }}
    </div>
  </div>
</template>

<script setup>
import { reactive } from './reactivity/reactive.js'
import { effect } from './reactivity/effect.js'

import { ref } from 'vue'

// reactive
const state = reactive({
  count: 0,
  like: {
    a:1
  }
})

effect(() => {
  console.log('effect1:', state.count)
})

// const add = () => {
//   state.count++
// }

// ref
const res = ref(0)
effect(() => {
  console.log('effect2:', res.value)
})
const add = () => {
  res.value++
}


</script>

<style lang="css" scoped></style>