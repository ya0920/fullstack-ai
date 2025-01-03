<template>
    <van-cell-group>
        <div class="head">
            <div class="date"> 12月20日</div>
            <div class="money">
                <span><i>出</i>100.00</span>
                <span><i>入</i>100.00</span>
            </div>
        </div>
        <van-cell title="生活缴费" value="-100.00" label="18:00 燃气公司">
            <template #icon>
                <div class="icon">
                    <i class="iconfont icon-shouye"></i>
                </div>
            </template>
        </van-cell>
    </van-cell-group>
</template>

<script setup>

</script>

<style lang="less" scoped>
.head{
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    background-color: #f9f9f9;
    .date{
        font-size: 16px;
    }
    .money{
        font-size: 14px;
        span{
            margin-left: 15px;
            
            i{
                margin-right: 5px;
                font-weight: 200;
                display: inline-block;
                width: 20px;
                height: 20px;
                text-align: center;
                line-height: 20px;
                background-color: rgb(240,240,240);
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
}
</style>