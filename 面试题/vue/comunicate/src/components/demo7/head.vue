<template>
    <div class="head">
        <input type="text" v-model="msg" />
        <button @click="add">添加</button>
    </div>

</template>

<script setup>
import { ref } from 'vue';
import list from './bus';

const msg = ref('');

const add = () => {
    list.value.push(msg.value);
}

</script>

<style lang="css" scoped></style>