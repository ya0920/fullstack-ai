<template>
    <div class="head">
        <input type="text" v-model="msg" />
        <button @click="add">添加</button>
    </div>

</template>

<script setup>
import { ref } from 'vue';

const msg = ref('');

const props= defineProps(['list']);
// const emit = defineEmits(['updata:list']);

const add = () => {
    const arr = props.list;
    arr.push(msg.value);

    // emit('updata:list');
}

</script>

<style lang="css" scoped>

</style>