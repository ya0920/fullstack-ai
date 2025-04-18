async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return 100
}


import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      count: 0
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    setCount(state, num) {
      state.count = num
    }
  },
  actions: {
    actionSetCount(context) {
      getData().then(res => {
        context.commit('setCount', res)
      })
    }
  },
  getters: {  // 相当于vue的计算属性
    doubleCount(state) {
      return state.count * 2
    }
  }
})

export default store