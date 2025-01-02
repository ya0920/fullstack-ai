<template>
  <div>
    <router-view></router-view>
    <NavBar v-if="state.show" />
  </div>
</template>

<script setup>
import  {reactive} from 'vue';
import NavBar from '@/components/NavBar.vue';
import { useRouter } from 'vue-router';

const state = reactive({
  menu: ['/home', '/data', '/setting'],
  show: false
})

// 是否显示底部导航栏，取决于当前路由是否在菜单中
const router = useRouter();
router.beforeEach((to, from, next) => {
  state.show = state.menu.includes(to.path);
  next();
})


</script>

<style lang="less" scoped>

</style>