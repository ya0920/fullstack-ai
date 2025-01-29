<template>
  <div id="box" ref="boxRef">
    <div v-for="item in list">{{item.name}}</div>
    <button @click="add">Add - {{count}}</button>
    
    <Child v-show="showChild"></Child>
    <button @click="showChild = !showChild">hide child</button>
  </div>
</template>

<script>
import { onMounted, onBeforeMount, ref, onBeforeUpdate, onUpdated } from 'vue'
import axios from 'axios'
import Child from './components/Child.vue'

export default {
  components: {
    Child
  },
  setup() {  // 入口函数
    const list = ref([])
    const boxRef = ref(null)
    const count = ref(0)
    const showChild = ref(true)

    // // 发请求
    // axios.get('https://mock.mengxuegu.com/mock/66585c4db462b81cb3916d3e/songer/songer#!method=get')
    //   .then(res => {
    //     console.log(boxRef.value)
    //     list.value = res.data.data
    //   })

    // onMounted(() => {
    //   console.log('onMounted', boxRef.value)
    // })
    // onBeforeMount(() => {
    //   console.log('onBeforeMount', boxRef.value)
    // })


    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    })
    onUpdated(() => {
      console.log('onUpdated')
    })




    const add = () => {
      count.value++
    }
    return {
      list,
      boxRef,
      count,
      add,
      showChild
    }
  }
}
</script>

<style lang="scss" scoped>

</style>