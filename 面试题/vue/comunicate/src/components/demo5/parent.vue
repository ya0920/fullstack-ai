<template>
    <child ref='childRef' />
    <div class="body">
        <ul>
            <li v-for="(item, index) in childRef?.list" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import child from './child.vue';

const childRef = ref(null);



</script>

<style lang="css" scoped></style>