<template>

    <div class="head">
        <input type="text" v-model="msg" />
        <button @click="add">添加</button>
    </div>

    <child :list="list"/>
</template>

<script setup>
import { ref } from 'vue'
import child from './child.vue';


const list = ref([1,2,3]);
const msg = ref('');

const add = () => {
    list.value.push(msg.value);
}


</script>

<style lang="css" scoped></style>