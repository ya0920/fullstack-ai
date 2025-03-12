<template>
    <div class="head">
        <input type="text" v-model="msg" />
        <button @click="add">添加</button>
    </div>

</template>

<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue';

const msg = ref('');
const list = ref([1, 2, 3, 4]); // 创建响应式数据
const data = ref('')
const add = () => {
    list.value.push(msg.value);
}

// 暴露数据
defineExpose({
    list
})

</script>

<style lang="css" scoped>

</style>