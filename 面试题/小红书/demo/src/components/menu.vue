<template>
  <div>
    <h3>menu</h3>
    <button @click="add">add</button>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
const store = useStore()

const add = () => {
  // store.commit('increment')
  store.dispatch('actionSetCount')
}
</script>

<style lang="css" scoped>

</style>