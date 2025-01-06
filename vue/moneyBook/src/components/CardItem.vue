<template>
  <van-cell-group>
    <div class="head">
      <div class="date">{{billItem.date.split('-')[1]}}月{{billItem.date.split('-')[2]}}日</div>
      <div class="money">
        <span><i>出</i>{{expense}}</span>
        <span><i>入</i>{{income}}</span>
      </div>
    </div>
    <van-cell 
      v-for="item in billItem.bills" 
      :key="item.id" 
      :title="item.type_name" 
      :value="`${item.pay_type === 1 ? '-' : '+'}${item.amount}`" 
      :label="`${formatHour(+item.date)} ${item.remark}`"
      :value-class="`${item.pay_type === 1? 'expense' : 'cart-income'}`"
    >
      <template #icon>
        <div class="icon" :class="{'income': item.pay_type === 2}">
          <i class="iconfont icon-shouye"></i>
        </div>
      </template>
    </van-cell>
  </van-cell-group>

</template>

<script setup>
import { ref, defineProps, computed } from 'vue'
import { formatHour } from '@/utils/date.js'

const props = defineProps({
  billItem: {
    type: Object,
    default: () => ({})
  }
})

// 当computed中使用的响应式数据值发生变更，会重新执行computed中的函数
const expense = computed(() => {
  let res = 0
  props.billItem.bills.forEach(item => {
    if (item.pay_type === 1) {
      res += (+item.amount)
    }
  })
  return res.toFixed(2)
})
const income = computed(() => {
  let res = 0
  props.billItem.bills.forEach(item => {
    if (item.pay_type === 2) {
      res += (+item.amount)
    }
  })
  return res.toFixed(2)
})


</script>

<style lang="less" scoped>
.head{
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  align-items: center;
  background-color: #f9f9f9;
  .date{
    font-size: 16px;
  }
 .money{
    font-size: 14px;
    span{
      margin-left: 15px;
      i{
        display: inline-block;
        margin-right: 5px;
        font-weight: 200;
        width: 20px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        background-color: rgb(240, 240, 240);
      }
    }
  }
}
.icon{
  width: 30px;
  height: 30px;
  background-color: #37a762;
  border-radius: 50%;
  margin: auto 0;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  .iconfont{
    color: #fff;
  }
  &.income{
    background-color: #f2b63b;
  }
}
:deep(.cart-income){
  color: #f2b63b!important;
}
</style>