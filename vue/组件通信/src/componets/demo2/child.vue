<template>
    <div class="bd">
        <ul>
            <li v-for="item in props.list" :key="item">{{ item }}</li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    list: {
        type: Array,
        default: []
    }
})

</script>

<style lang="css" scoped>
</style>