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
import list from './bus';


</script>

<style lang="css" scoped></style>