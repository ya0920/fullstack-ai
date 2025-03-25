<template>
	<view class="goods">
		<image class="img" :src="imgSrc" mode=""></image>
		<view class="desc">{{title}}</view>
		<view class="flex-box">
			<view class="price">¥{{price}}</view>
			<view class="market-price">¥{{marketPrice}}</view>
		</view>
	</view>
</template>

<script setup>
const props = defineProps({
	imgSrc: {
		type: String,
		default: ''
	},
	title: {
		type: String,
		default: ''
	},
	price: {
		type: String,
		default: ''
	},
	marketPrice: {
		type: String,
		default: ''
	}
})
</script>

<style lang="scss">
.goods {
    position: relative;
    line-height: 34rpx;
    color: #333;
    background: #fff;
    border-radius: 10rpx;
    overflow: hidden;
    font-size: 26rpx;
    padding: 0 20rpx 30rpx;
    .img {
        display: block;
        width: 100%;
        height: 342rpx;
        margin-bottom: 24rpx;
        background: #eee;
        margin: 0 auto;
    }
    .desc {
        height: 64rpx;
        margin-top: 12rpx;
        line-height: 30rpx;
    }
    .flex-box{
        display: flex;
        justify-content: space-between;
    }
    .price {
        color: #ff5000;
    }
    .market-price {
        padding-left: 10px;
        font-size: 24rpx;
        color: #979797;
        text-decoration: line-through;
    }
}
</style>