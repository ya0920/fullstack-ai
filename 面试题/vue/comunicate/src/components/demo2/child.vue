<template>
    <div class="body">
        <ul>
            <li v-for="(item, index) in list" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
    list: {
        type: Array,
        required: true
    }
});
</script>

<style lang="css" scoped>

</style>