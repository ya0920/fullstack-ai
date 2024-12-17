<template>
    <div class="hd">
        <input type="text" v-model="inputValue">
        <button @click="add">添加</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const inputValue = ref('')

const emit = defineEmits(['adds'])  // 定义一个事件

const add = (() => {
    // 希望将 inputValue 的值添加到父组件的 list 中
    // console.log(inputValue.value)
    emit('adds', inputValue.value) // 发射事件，并传递参数
    inputValue.value = ''
})



</script>

<style lang="css" scoped></style>