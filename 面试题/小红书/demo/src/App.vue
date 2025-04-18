<template>
  <div class="flex">
    <Menu />
    <Content />
  </div>
</template>

<script setup>
import Menu from './components/menu.vue'
import Content from './components/content.vue'
</script>

<style lang="css" scoped>
.flex {
  display: flex;
  justify-content: space-around;
  font-size: 30px;
}
</style>