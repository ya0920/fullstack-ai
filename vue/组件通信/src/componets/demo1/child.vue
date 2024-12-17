<template>
    <div class="bd">
        <ul>
            <li v-for="item in list" :key="item">{{ item }}</li>
        </ul>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const list = ref(['html', 'css', 'js'])

const props = defineProps({
    msg: {
        type: String,
        default: ''
    }
})

watch(() => props.msg, (newVal, oldVal) => { // 没打括号，说明返回 props.msg
    list.value.push(newVal)
})

</script>

<style lang="css" scoped>
</style>