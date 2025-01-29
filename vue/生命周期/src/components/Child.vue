<template>
  <div>
    <h1>child</h1>
  </div>
</template>

<script setup>
import { onBeforeMount, onBeforeUnmount, onMounted, onUnmounted } from 'vue'

// onBeforeMount(() => {
//   console.log('child - onBeforemount')
// })
// onMounted(() => {
//   console.log('child - onMounted')
// })

onBeforeUnmount(() => {
  console.log('onBeforeUnmount -- 卸载前')
})
onUnmounted(() => {
  console.log('onUnmounted -- 卸载后')
})
</script>

<style lang="scss" scoped>

</style>