<template>

    <div class="head">
        <input type="text" v-model="msg" />
        <button @click="add">添加</button>
    </div>

    <child :data='data'/>
</template>

<script setup>
import { ref } from 'vue'
import child from './child.vue';
const data = ref('')
const msg = ref('')

const add = () => {
    data.value = msg.value
    console.log(data.value)
}
</script>

<style lang="css" scoped></style>