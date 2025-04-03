<template>
  <div class="flex">

    <menu></menu>
    <content></content>
  </div>
</template>

<script setup>
import menu from './components/menu.vue';
import content from './components/content.vue';


</script>

<style lang="css" scoped>
.flex {
  display: flex;
  justify-content: space-between;
}
</style>