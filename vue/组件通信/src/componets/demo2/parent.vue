<template>
    <div class="hd">
        <input type="text" v-model="inputValue">
        <button @click="add">添加</button>
    </div>
    <child :list="list" />
</template>

<script setup>
import child from './child.vue'
import { ref } from 'vue'

const inputValue = ref('')
const list = ref(['html', 'css', 'js'])

const add = () => {
    list.value.push(inputValue.value)
    inputValue.value = ''
}

</script>

<style lang="css" scoped></style>