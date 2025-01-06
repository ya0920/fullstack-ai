<template>
    <div class="home">
        <div class="header">
            <div class="type-wrap" @click="changeType">
                <span class="title">{{ selectedType.name || "全部类型" }}</span>
                <van-icon name="list-switching" size="20" />
            </div>
            <div class="data-wrap">
                <span class="time" @click="changeTime">
                    {{ selectedTime[0] }}年{{ selectedTime[1] }}月
                    <van-icon class="arrow" name="play" />
                </span>
                <span class="expense">总支出¥{{ bill.totalExpense }}</span>
                <span class="income">总收入¥{{ bill.totalIncome }}</span>
            </div>
        </div>
        <div class="content">
            <van-pull-refresh v-model="refreshLoading" @refresh="onRefresh">
                <van-list v-model:loading="loadingMore" :finished="finished" finished-text="没有更多了" @load="onLoad"
                    offset="0">
                    <CardItem class="card-item" v-for="(item, index) in bill.list" :key="index" :billItem="item" />
                </van-list>
            </van-pull-refresh>

        </div>
        <div class="save" @click="()=>{}">
            <van-icon name="records-o" size="20" />
            <span>记一笔</span>
        </div>
    </div>

    <PopType ref="PopTypeRef" @updateType="updateType" />
    <PopTime ref="PopTimeRef" @updateDate="updateTime" />

</template>

<script setup>
import { ref, reactive } from 'vue';
import PopType from '@/components/PopType.vue';
import PopTime from '@/components/PopTime.vue';
import PopAdd from '@/components/PopAdd.vue';
import { formatDate } from '../utils/date';
import CardItem from '../components/cardItem.vue';
import axios from '@/api/index';



const PopTypeRef = ref(null);                    // 类型弹出框 changeType
const selectedType = ref({});                    // 选择类型 updateType
const PopTimeRef = ref(null);                    // 时间弹出框 changeTime
const selectedTime = ref(formatDate(new Date()));// 选择时间 updateTime
const refreshLoading = ref(false);                      // 控制“下拉刷新”展示
const loadingMore = ref(false);                         // 控制“加载更多”展示

const bill = reactive({
    list: [],                                   // 账单列表
    totalExpense: 0,                            // 总支出
    totalIncome: 0,                             // 总收入
    totalPage: 0,                               // 总页数
});                           // 账单

const finished = ref(false);                    // 控制“没有更多了”展示，列表数据是否加载完毕
const page = ref(1);                             // 当前页数


// list 列表加载时
const onLoad = async () => {
    await getBillList()
    if (page.value > bill.totalPage) {   // 如果当前页数大于总页数，说明数据加载完毕
        finished.value = true;           // 显示“没有更多了”
    }
    loadingMore.value = false;
}
// 请求账单数据
const getBillList = async () => {
    const { data } = await axios.get(`/api/bill/list?date=${selectedTime.value.join('-')}&type_id=${selectedType.value.id || 'all'}&page=${page.value}&size=5`)
    // await xxx  当 xxx 执行完毕后，await 会修改 async的状态
    console.log(data)
    bill.list = bill.list.concat(data.list);
    bill.totalExpense = data.totalExpense;
    bill.totalIncome = data.totalIncome;
    bill.totalPage = data.totalPage;
    page.value++;
}

const changeType = () => {
    PopTypeRef.value.show = true;
}

const updateType = async (newType) => {
    selectedType.value = newType;
    page.value = 1;
    bill.list = [];
    await getBillList();
    finished.value = false;
};

const changeTime = () => {
    PopTimeRef.value.show = true;
}

const updateTime = async (newTime) => {
    selectedTime.value = newTime;
    page.value = 1;
    bill.list = [];
    await getBillList();
    finished.value = false;
}

const onRefresh = async () => {
    refreshLoading.value = true;
    // 请求完成后，关闭下拉刷新
    getBillList().then(() => {
        refreshLoading.value = false;
    });
}

</script>

<style lang="less" scoped>
.home {
    .header {
        background-color: rgb(55, 167, 98);
        height: 100px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        font-size: 16px;
        color: #fff;

        .type-wrap {
            background-color: rgb(70, 177, 113);
            padding: 10px;
            border-radius: 4px;
            display: flex;
            align-items: center;

            .title {
                padding-right: 10px;
                margin-right: 10px;
                border-right: 1px solid rgb(94, 196, 136);
            }
        }

        .data-wrap {
            margin-top: 15px;
            font-size: 14px;

            .time {
                margin-right: 10px;

                .arrow {
                    transform: rotate(90deg);
                }
            }

            .expense {
                margin-right: 10px;
            }
        }
    }

    .content {
        height: calc(100vh - 190px);
        overflow-y: scroll;
        padding: 10px;
        background-color: rgb(235, 235, 235);

        .card-item {
            margin-top: 10px;
            border-radius: 10px;
            overflow: hidden;

            &:first-child {
                margin-top: 0;
            }
        }

    }

    .save {
        position: fixed;
        width: 80px;
        height: 40px;
        bottom: 80px;
        right: 30px;
        border-radius: 80px;
        background-color: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        color: #37a762;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>