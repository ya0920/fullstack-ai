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
                <span class="expense">总支出¥1000</span>
                <span class="income">总收入¥100000</span>
            </div>
        </div>
        <div class="content">
            <van-pull-refresh v-model="refreshLoading" @refresh="onRefresh">
                <van-list v-model:loading="loadingMore" finished-text="没有更多了" @load="onLoad">
                    <cardItem class="card-item" v-for="item in 4" />
                </van-list>
            </van-pull-refresh>

        </div>
        <div class="save">
            <van-icon name="records-o" size="20" />
            <span>记一笔</span>
        </div>
    </div>

    <PopType ref="PopTypeRef" @updateType="updateType" />
    <PopTime ref="PopTimeRef" @updateDate="updateTime" />
</template>

<script setup>
import { ref } from 'vue';
import PopType from '@/components/PopType.vue';
import PopTime from '@/components/PopTime.vue';
import formatDate from '../utils/date';
import cardItem from '../components/cardItem.vue';
import axios from '@/api/index';
import { get } from 'vant/lib/utils';

const PopTypeRef = ref(null);                    // 类型弹出框 changeType
const selectedType = ref({});                    // 选择类型 updateType
const PopTimeRef = ref(null);                    // 时间弹出框 changeTime
const selectedTime = ref(formatDate(new Date()));// 选择时间 updateTime
const refreshLoading = ref(false);                      // 控制“下拉刷新”展示
const loadingMore = ref(false);                         // 控制“加载更多”展示

// list 列表加载时
const onLoad = () => {
    getBillList()
}
// 请求账单数据
const getBillList = async () => {
    const { data } = await axios.get(`/api/bill/list?date=${selectedTime.value.join('-')}&type_id=${selectedType.value.id || 'all'}&page=1&size=5`)
    console.log(data)
    // 正确的渲染页面
    // 实现下拉刷新
    // 实现上拉加载更多
    // 收入和支出在页面上的颜色不同
    
}

const changeType = () => {
    PopTypeRef.value.show = true;
}

const updateType = (newType) => {
    selectedType.value = newType;
};

const changeTime = () => {
    PopTimeRef.value.show = true;
}

const updateTime = (newTime) => {
    selectedTime.value = newTime;
}

const onRefresh = () => {
    console.log('refresh')
    refreshLoading.value = true;
    // 请求数据
    setTimeout(() => {
        refreshLoading.value = false;
    }, 2000);
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