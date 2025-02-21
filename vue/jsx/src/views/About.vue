<template>
    <div>
        <Heading :level="2">hello</Heading>
        <todolist />
        <obutton />
    </div>
</template>

<script setup>
import Heading from '../components/Heading';
import {todolist,obutton} from '../components/todo';


</script>

<style lang="css" scoped></style>