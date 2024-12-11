<template>
  <div>
    <h2>当前温度：{{ state.temp }} 建议穿衣：{{ state.suggest }}</h2>
    <button @click="() => state.temp -= 5">-5</button>
    <button @click="() => state.temp += 5">+5</button>
  </div>
</template>

<script setup>
import { reactive, computed, watch } from "vue";

const state = reactive({
  temp: 9,
  suggest: '羽绒服'
})

// const suggest = computed(() => { // 内部依赖的变量值发生变更，计算属性就会重新执行
//   if (state.temp > 30) {
//     return '短袖'
//   } else if (state.temp > 20) {
//     return '夹克'
//   } else if (state.temp > 10) {
//     return '棉服'
//   } else {
//     return '羽绒服'
//   }

// })

watch(
  () => state.temp,
  (newVal, oldVal) => {
    if (newVal > 30) {
      state.suggest = '短袖'
    } else if (newVal > 20) {
      state.suggest = '夹克'
    } else if (newVal > 10) {
      state.suggest = '棉服'
    } else {
      state.suggest = '羽绒服'
    }

  }
)

</script>

<style lang="css" scoped></style>