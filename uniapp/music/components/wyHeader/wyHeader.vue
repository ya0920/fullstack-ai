<template>
	<view class="header-box"></view>
	<view class="header">
		<uni-icons type="bars" size="22" @click="showMenu"></uni-icons>

		<view class="content">
			<slot name="content"></slot>
		</view>
		
		<uni-icons :type="icon" size="22"></uni-icons>
	</view>
</template>

<script setup>
import { useStore } from 'vuex'

defineProps({
	icon: {
		type: String,
		default: 'mic'
	},
	fontColor: {
		type: String,
		default: '#000'
	}
})

const store = useStore()
const showMenu = () => {
	store.commit('chageIsShowMenu', true)
}
</script>

<style lang="scss" scoped>
.header-box{
	// #ifdef H5
	height: 100rpx;
	// #endif
	
	// #ifndef H5
	height: 180rpx;
	// #endif
}
.header{
	display: flex;
	height: 100rpx;
	justify-content: space-between;
	align-items: center;
	padding: 0 20rpx;
	position: fixed;
	// #ifdef H5
	top: 0;
	// #endif
	
	// #ifndef H5
	top: 80rpx;
	// #endif
	
	width: 100%;
	box-sizing: border-box;
	z-index: 999;
	color: v-bind(fontColor);
	:deep(.uni-icons){
		color: v-bind(fontColor) !important;
	}
	.content{
		flex: 1;
		text-align: center;
	}
}
</style>