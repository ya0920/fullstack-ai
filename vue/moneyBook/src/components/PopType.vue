<template>
    <div>
        <van-popup v-model:show="show" round position="bottom" closeable>
            <div class="pop">
                <div class="content">
                    <div class="all" :class="{ active: selectedType === 'all' }" @click="chooseType({ id: 'all' })">全部类型
                    </div>
                    <div class="list">
                        <div class="title">支出</div>
                        <div class="expense-wrap item">
                            <p :class="{ active: selectedType === item.id }" v-for="item in expense" :key="item.id"
                                @click="chooseType(item)">{{ item.name }}</p>
                        </div>
                        <div class="title">收入</div>
                        <div class="income-wrap item">
                            <p :class="{ active: selectedType === item.id }" v-for="item in income" :key="item.id"
                                @click="chooseType(item)">{{ item.name }}</p>
                        </div>
                    </div>

                </div>
            </div>
        </van-popup>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from '@/api/index';

const show = ref(false);
const expense = ref([])
const income = ref([])
const selectedType = ref('all'); // 默认选中

// 获取所有的类型
onMounted(async () => { // 编译完成后执行
    const res = await axios.get('/api/type/list')
    //console.log(res.data.list);
    expense.value = res.data.list.filter(item => {
        return item.type === '1'
    })
    income.value = res.data.list.filter(item => {
        return item.type === '2'
    })

})

// 定义事件
const emit = defineEmits(['updateType']);

const chooseType = (item) => {
    // 设置选中的类型
    selectedType.value = item.id;
    console.log(item);

    // 关闭弹框
    show.value = false;

    // 父组件要展示这个 item.name，发射事件
    emit('updateType', item);
}

defineExpose({
    show,
})
</script>

<style lang="less" scoped>
.pop {
    max-height: 80vh;
    background-color: #f5f5f5;

    .content {
        padding: 20px;
        font-size: 16px;

        .all {
            display: inline-block;
            padding: 14px 20px;
            background-color: #fff;
            border-radius: 5px;
        }

        .list {
            margin-top: 10px;

            .title {
                font-size: 14px;
                color: #999;
                margin: 10px 0;
            }

            .item {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 10px;

                p {
                    text-align: center;
                    padding: 14px 0;
                    background-color: #fff;
                    border-radius: 5px;
                }
            }
        }
    }
}

.active {
    background-color: rgb(54, 169, 98) !important;
    color: #fff !important;
}
</style>