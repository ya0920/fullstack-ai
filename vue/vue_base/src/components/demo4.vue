<template>
  <div>
    <input type="text" v-model="data">
    <button @click="add">添加</button>
    
    <ul>
      <li v-for="(item, i) in list">{{i+1}} -- {{item}}</li>
    </ul>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const list = ref(['html', 'css', 'js', 'vue'])
const data = ref('')
 
const add = () => {
  // 获取用户在 input中输入的内容，再 push 进list
  list.value.push(data.value)
}
</script>

<style lang="css" scoped>

</style>