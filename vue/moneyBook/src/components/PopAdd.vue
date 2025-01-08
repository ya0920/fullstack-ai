<template>
    <van-popup v-model:show="show" position="bottom" round closeable>
        <div class="add-wrap">
            <div class="head">
                <div class="left">
                    <span @click="changeType('expense')" :class="{ 'active': state.payType === 'expense' }">支出</span>
                    <span @click="changeType('income')" :class="{ 'active': state.payType === 'income' }">收入</span>
                </div>
                <div class="right" @click="showTime = true">
                    <span>{{ state.date[1] }}月{{ state.date[2] }}日
                        <van-icon name="play" style="transform: rotate(90deg);" />
                    </span>
                </div>
            </div>
            <div class="money">
                <span class="icon">￥</span>
                <span class="amount">{{ state.amount }}</span>
            </div>
            <div class="type-wrap">
                <div class="expense grid" v-if="state.payType === 'expense'">
                    <div class="item" v-for="item in state.expense" :key="item.id" @click="selectType(item)">
                        <i class="iconfont"
                            :class="[icons[item.name], state.currentType.id === item.id ? 'is-active' : '']"></i>
                        <p>{{ item.name }}</p>
                    </div>
                </div>
                <div class="income grid" v-else>
                    <div class="item" v-for="item in state.income" :key="item.id">
                        <i class="iconfont"
                            :class="[icons[item.name], state.currentType.id === item.id ? 'is-active' : '']"
                            @click="selectType(item)"></i>
                        <p>{{ item.name }}</p>
                    </div>
                </div>
            </div>
            <div class="remark">
                <input type="text" placeholder="添加备注" v-model="state.remark" />
            </div>
            <div class="keyboard">
                <van-number-keyboard show theme="custom" extra-key="." close-button-text="确定" @input="onInput"
                    @delete="onDelete" @close="addBill" />
            </div>
        </div>
    </van-popup>

    <van-popup v-model:show="showTime" position="bottom" round>
        <van-date-picker v-model="state.currentDate" title="选择日期" :min-date="new Date(2020, 0, 1)"
            :max-date="new Date()" @cancel="() => showTime = false" @confirm="selectTime" />
    </van-popup>
</template>

<script setup>
import { ref, toRef, onMounted, reactive, defineEmits, watch } from 'vue';
import axios from '@/api/index';
import icons from '@/utils/icons';
import { formatDate } from '@/utils/date';
import { showToast } from 'vant';

const props = defineProps({
    billDetail: {             // 可以直接在html使用，不能直接在js中使用
        type: Object,
        default: () => ({})
    }
})

const show = ref(false);
const showTime = ref(false);
const state = reactive({
    expense: [],
    income: [],
    payType: 'expense',                // 类型
    currentDate: formatDate(new Date()), // 当前日期
    date: formatDate(new Date()),      // 日期
    currentType: '',  // 当前类型
    remark: '',                        // 备注
    amount: ''                         // 金额
})
watch(() => props.billDetail, (newVal) => {
    if (newVal.id) {              // watch监听到billDetail有值，watch后行
        state.payType = newVal.pay_type === 2 ? 'income' : 'expense';
        state.currentType = newVal.pay_type === 2 ? state.income.find(item => item.id === newVal.type_id) : state.expense.find(item => item.id === newVal.type_id);
        state.remark = newVal.remark;
        state.amount = newVal.amount;
        state.date = formatDate(new Date(Number(newVal.date)));
        console.log(newVal.date);
    }
})


const emit = defineEmits(['updateBill']);

onMounted(async () => {
    const res = await axios.get('/api/type/list')
    console.log(res.data.list);
    state.expense = res.data.list.filter(item => item.type === '1')
    state.income = res.data.list.filter(item => item.type === '2')
    state.currentType = state.expense[0];
})

const changeType = (type) => {
    state.payType = type;
}

const selectTime = () => {
    // console.log(state.currentDate);
    state.date = state.currentDate;
    showTime.value = false;
}

const selectType = (item) => {
    // console.log(item);
    state.currentType = item;
}

const onInput = (value) => {
    if (value === '.' && state.amount.includes('.')) return;
    // 小数点后只能有两位
    if (state.amount.includes('.') && state.amount.split('.')[1].length >= 2) return;
    state.amount += value;
}

const onDelete = () => {
    console.log('delete');
    state.amount = state.amount.slice(0, -1);
}

const addBill = async () => {
    if (isNaN(Number(state.amount)) || state.amount === '') {
        showToast('请输入正确的金额');
        return;
    }
    // 需要给后端的数据
    const params = {
        amount: Number(state.amount).toFixed(2),
        type_id: state.currentType.id,
        type_name: state.currentType.name,
        date: new Date(state.date.join('-')).getTime(),
        pay_type: state.payType === 'expense' ? 1 : 2,
        remark: state.remark,
        id: props.billDetail.id
    }

    if (props.billDetail.id) {
        // 编辑
        await axios.post('/api/bill/update', params)
    }
    else {
        // 新增
        await axios.post('/api/bill/add', params)
        // 清空数据
        state.amount = '';
        state.remark = '';
        state.currentType = state.expense[0];
        state.date = formatDate(new Date());
        state.payType = 'expense';
    }
    show.value = false;

    // 促使父组件重新请求数据
    emit('updateBill');

}

defineExpose({
    show
})
</script>

<style lang="less" scoped>
.add-wrap {
    padding: 60px 20px 0;

    .head {
        display: flex;
        justify-content: space-between;

        span {
            padding: 5px 10px;
            background-color: rgb(245, 245, 245);
            margin-right: 10px;
            border-radius: 4px;
            color: #666;
        }
    }

    .money {
        padding: 30px 0;
        font-size: 30px;
        font-weight: bold;
        border-bottom: 1px solid #f0f0f0;

        .amount {
            margin-left: 10px;
        }
    }

    .type-wrap {
        margin: 10px 0;
        height: 110px;
        overflow-y: scroll;

        .grid {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            text-align: center;
            grid-column-gap: 20px;
            grid-row-gap: 10px;

            .iconfont {
                width: 30px;
                height: 30px;
                display: inline-block;
                line-height: 30px;
                border-radius: 50%;
                text-align: center;
                background-color: #f0f0f0;
                color: #999;
                margin-bottom: 5px;

                &.is-active {
                    background-color: rgb(54, 169, 98);
                    color: #fff;
                }
            }
        }
    }

    .remark {
        margin: 15px 0;

        input {
            width: 100%;
            border-radius: 4px;
            border: none;
            padding: 5px 10px;
            font-size: 16px;
        }
    }

    .keyboard {
        height: 244px;
    }
}

.active {
    background-color: rgb(230, 247, 238) !important;
    color: rgb(54, 169, 98) !important;
}
</style>