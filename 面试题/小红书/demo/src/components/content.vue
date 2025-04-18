<template>
  <div>
    <h3 class="h3" ref="h3Ref">content</h3>
    <h4>{{store.state.count}}</h4>
    <h4>{{store.getters.doubleCount}}</h4>
  </div>
</template>

<!-- <script setup>
function nextTick(cb) {
  const observer = new MutationObserver(cb)
  observer.observe(document.body, {
    childList: true,
    subtree: true  // 监听所有子元素
  })
}
nextTick(() => {
  console.log('页面渲染完成');
})
</script> -->
<script setup>
import { useStore } from 'vuex'
const store = useStore()

// let h3 = document.querySelector('.h3')

import { ref, onMounted } from 'vue'

const h3Ref = ref(null)

function nextTick(cb) {
  const observer = new MutationObserver(cb)
  observer.observe(document.body, {
    childList: true,
    subtree: true  // 监听所有子元素
  })
}
nextTick(() => {
  console.log('页面渲染完成');
})
nextTick(() => {  // nextTick 是异步的 在页面渲染完成后执行
  console.log(h3Ref.value);
})
onMounted(() => {
  console.log('onMounted');
})

</script>

<style lang="css" scoped>

</style>