<template>
    <div>
        <h1 @click="fn">Hello Vue!</h1>
    </div>
</template>

<script setup>
const fn = () => {
    console.log('你好')
}
</script>

<style lang="css" scoped>
h1 {
    color: red;
}

</style>