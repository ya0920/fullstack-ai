<template>
    <child v-model:list="list" />
    <div class="body">
        <ul>
            <li v-for="(item, index) in list" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import child from './child.vue';

const list = ref([1,2,3,4]); // 创建响应式数据

setTimeout(() => {
    console.log(list.value);
}, 5000);

</script>

<style lang="css" scoped></style>