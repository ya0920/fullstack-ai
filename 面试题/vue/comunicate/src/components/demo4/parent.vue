<template>
    <child @add = 'handle' />
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


const handle = (msg) => {
    list.value.push(msg);
}

</script>

<style lang="css" scoped></style>