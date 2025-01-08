<template>
    <div class="data">
        <div class="head">
            <div class="title">
                <div class="date">2025年1月 <van-icon name="calendar-o" /></div>
                <div class="type">
                    <span class="active">支出</span>
                    <span>入账</span>
                </div>
            </div>
            <div class="total">
                <p class="title">共支出</p>
                <p class="num">¥3131231</p>
            </div>
        </div>
        <div class="content">
            <div class="structure">
                <p class="title">支出构成</p>
                <div class="echarts" ref="echartsRef"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';
import * as echarts from 'echarts/core';
import { PieChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import axios from '@/api/index.js';
import { formatDate } from '../utils/date';

echarts.use([
    PieChart,
    CanvasRenderer,
]);
const echartsRef = ref(null);

onMounted(() => {
    // 获取数据
    getData()
})

const state = reactive({
    totalExpense: 0,
    totalIncome: 0,
    expenseList: [],
    incomeList: []
})

const getData = async () => {
    const res = await axios.get(`/api/bill/data?date=${formatDate(new Date()).slice(0, -1).join('-')}`)
    state.totalExpense = res.data.total_expense
    state.totalIncome = res.data.total_income
    state.expenseList = res.data.total_data.filter(item => item.pay_type === 1)
    state.incomeList = res.data.total_data.filter(item => item.pay_type === 2)

    console.log(state.expenseList);

    const data = []
    state.expenseList.forEach(item => {
        data.push({
            value: item.number,
            name: item.type_name
        })
    })
    loadPie(data.sort((a, b) => b.value - a.value))
}

const loadPie = (data) => {
    // 加载图表
    const myChart = echarts.init(echartsRef.value);
    const option = {
        series: [
            {
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    color: (obj) => {
                        let len = data.length
                        return `rgba(54, 169, 98, ${(len + 3 - obj.dataIndex) / (len + 3).toFixed(1)})`
                    },

                    borderRadius: 4,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: true,
                    position: 'outside',
                },
                labelLine: {
                    show: true,
                    lineStyle: {
                        color: '#666'
                    }

                },
                data: data || [
                    { value: 1048, name: 'Search Engine' },
                    { value: 735, name: 'Direct' },
                    { value: 580, name: 'Email' },
                    { value: 484, name: 'Union Ads' },
                    { value: 300, name: 'Video Ads' }
                ]
            }
        ]
    };
    myChart.setOption(option);
}
</script>

<style lang="less" scoped>
.data {
    .head {
        padding: 50px 20px;
        background-color: #37a762;
        color: #fff;
        font-size: 16px;
        font-weight: 300;

        .title {
            display: flex;
            justify-content: space-between;

            .type {
                span {
                    margin-left: 10px;
                }

                span.active {
                    padding: 5px 10px;
                    border-radius: 5px;
                    background-color: rgb(69, 178, 113);
                }
            }
        }

        .total {
            margin-top: 30px;

            .title {
                font-weight: 100;
            }

            .num {
                font-size: 30px;
                font-weight: 500;
                margin-top: 20px;
            }
        }
    }

    .content {
        padding: 30px 20px;

        .structure {
            .title {
                font-size: 16px;
            }

            .echarts {
                width: 100%;
                height: 200px;
                margin-top: 20px;
            }
        }
    }
}
</style>