<template>
    <div class="body">
        <ul>
            <li v-for="(item, index) in list" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
    data: {
        type: String,
        default: ''
    }
})

watch(() => props.data, (newVal) => {
    list.value.push(newVal)
})

const list = ref(['html', 'css', 'js'])
</script>

<style lang="css" scoped>

</style>