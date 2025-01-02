<template>
    <div class="home">
        <div class="header">
            <div class="type-wrap" @click="changeType">
                <span class="title">全部类型</span>
                <van-icon name="list-switching" size="20" />
            </div>
            <div class="data-wrap">
                <span class="time">
                    2024年12月
                    <van-icon class="arrow" name="play" />
                </span>
                <span class="expense">总支出¥1000</span>
                <span class="income">总收入¥100000</span>
            </div>
        </div>
        <div class="content"></div>
    </div>

    <PopType ref="PopTypeRef" />
</template>

<script setup>
import { ref } from 'vue';
import PopType from '@/components/PopType.vue';

// 类型弹出框
const PopTypeRef = ref(null);
const changeType = () => {
    PopTypeRef.value.show = true;
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
}
</style>