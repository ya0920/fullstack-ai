<template>
  <div>
    <Head v-if="isShow" />
    <router-view></router-view>
    <Foot v-if="isShow" />
  </div>
</template>

<script setup>
import Head from './components/Head.vue';
import Foot from './components/Foot.vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

// 不需要head
const router = useRouter();
const isShow = ref(true);
const whiteList = ['/login', '/register']
router.beforeEach((to, from, next) => {
  if (whiteList.includes(to.path)) {
    isShow.value = false;
    next()
  } else {
    isShow.value = true;
    next()
  }
})

</script>


<style lang="scss" scoped>
</style>