<template>
  <h2 @click="add">hello -- {{nums}}</h2>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const nums = ref(0)
    const add = () => {
      nums.value++
    }
    
    return {
      nums,
      add
    }
  }
}
</script>

<style scoped>
h2{
  color: red;
}
</style>
