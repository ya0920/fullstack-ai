<template>
    <div class="hd">
        <input type="text" v-model="inputValue">
        <button @click="add">添加</button>
    </div>
    <child :msg="data" />
</template>

<script setup>
import child from './child.vue'
import { ref } from 'vue'

const inputValue = ref('')
const data = ref('')

const add = () => {
    data.value = inputValue.value
    inputValue.value = ''
}

</script>

<style lang="css" scoped></style>