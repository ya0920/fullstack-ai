<template>
    <div class="detail">
        <div class="head">

            <Head title="账单详情" />
        </div>
        <div class="content">
            <div class="card">
                <div class="title">
                    <i class="iconfont"
                        :class="[icons[billDetail.type_name], { 'income': billDetail.pay_type === 2 }]"></i>
                    <p>{{ billDetail.type_name }}</p>
                    <van-icon name="arrow" style="padding: 0 8px;" />
                </div>
                <div class="money">{{ billDetail.pay_type === 1 ? '-' : '+' }}{{ billDetail.amount }}</div>
                <div class="data">
                    <div class="date">
                        <i>记录时间</i>
                        <span>{{ formattedDate(billDetail.date) }}</span>
                    </div>
                    <div class="from">
                        <i>来源</i>
                        <span>支付宝</span>
                    </div>
                    <div class="remark">
                        <i>备注</i>
                        <span>{{ billDetail.remark }}</span>
                    </div>
                </div>
                <div class="bottom">
                    <div class="delete" @click="deleteBill">
                        <i class="iconfont icon-ziyuanxhdpi"></i>
                        <span>删除</span>
                    </div>
                    <div class="edit" @click="editBill">
                        <i class="iconfont icon-bianji"></i>
                        <span>编辑</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <PopEdit ref="PopAddRef" :billDetail="billDetail" @updateBill="updateBill" />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from '@/api/index';
import Head from '../components/Head.vue';
import { formattedDate } from '../utils/date';
import icons from '../utils/icons';
import { showSuccessToast, showConfirmDialog } from 'vant';
import PopEdit from '../components/PopAdd.vue';

// 获取账单详情  /api/bill/detail?id=xxx

// 点击删除，弹出确认框，点击确认，删除该条账单    post    /api/bill/delete   id=xxx


const route = useRoute();
const router = useRouter();
const billDetail = ref({});
const PopAddRef = ref(null);

const fetchBillDetail = async () => {
    const id = route.query.id;
    if (!id) {
        router.push('/'); // 如果没有 id，重定向到首页或其他页面
        return;
    }
    const res = await axios.get(`/api/bill/detail?id=${id}`);
    billDetail.value = res.data;
};

const deleteBill = async () => {
    showConfirmDialog({
        message:
            '是否删除该条账单？',
    })
        .then(() => {
            // on confirm
            const id = route.query.id;
            axios.post('/api/bill/delete', { id });
            showSuccessToast('删除成功');
            router.push('/'); // 删除后重定向到首页或其他页面
        })
        .catch(() => {
            // on cancel
        });


};

const editBill = () => {
    PopAddRef.value.show = true;
    PopAddRef.value.state.currentType = billDetail.value.pay_type;
};

onMounted(() => {
    fetchBillDetail();
});

const updateBill = () => {
    fetchBillDetail();
    showSuccessToast('修改成功');
};

</script>

<style lang="less">
.detail {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #f5f5f5;

    .head {
        background-color: #fff;
        margin-bottom: 16px;
    }

    .content {
        flex: 1;
        background-color: #f5f5f5;

        .card {
            background: #fff;
            border-radius: 10px;
            padding: 16px;
            margin: 16px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

            .title {
                display: flex;
                align-items: center;
                justify-content: center;

                .iconfont {
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    margin-right: 8px;
                    display: inline-block;
                    text-align: center;
                    line-height: 24px;
                    background-color: #4caf50;
                    color: #fff;
                }

                .income {
                    background-color: #f2b63b !important;
                }

                p {
                    font-size: 14px;
                    font-weight: bold;
                    color: #333;
                }
            }

            .money {
                font-size: 28px;
                font-weight: bold;
                text-align: center;
                padding: 22px 0;
            }

            .data {
                border-bottom: 1px solid #f0f0f0;
                padding-bottom: 40px;

                .date,
                .from,
                .remark {
                    display: flex;
                    align-items: center;
                    margin-top: 20px;

                    i {
                        font-size: 14px;
                        color: #999;
                        width: 80px;
                        /* 保持固定宽度，保证对齐 */
                    }

                    span {
                        font-size: 14px;
                        color: #333;
                        margin-left: 8px;
                        text-align: left;
                    }
                }
            }

            .bottom {
                display: flex;
                justify-content: space-between;
                margin-top: 16px;

                .delete,
                .edit {
                    display: flex;
                    flex: 1;
                    align-items: center;
                    justify-content: center;
                    font-size: 14px;
                    cursor: pointer;

                    .iconfont {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 24px;
                        height: 24px;
                        border-radius: 50%;
                        margin-right: 6px;
                    }

                    &.delete {
                        color: #e53935;
                    }
                }
            }
        }
    }
}
</style>
