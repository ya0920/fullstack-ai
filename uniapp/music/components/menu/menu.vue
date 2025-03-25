<template>
	<view class="menu">
		
		<view class="menu-contnet" :class="isShow ? 'show' : 'hide'">
			菜单
		</view>
		
		<view class="mask" v-show="isShow" @click="hideMenu"></view>
	</view>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex'

const store = useStore()

const isShow = computed(() => store.state.isShowMenu)

const hideMenu = () => {
	store.commit('chageIsShowMenu', false)
}

</script>

<style lang="scss" scoped>
.menu{
	.menu-contnet{
		position: fixed;
		top: 80rpx;
		z-index: 9999;
		width: 620rpx;
		height: 100%;
		padding: 30rpx;
		box-sizing: border-box;
		background-color: #fff;
		transition: all 0.5s ease-in-out;
		&.show{
			left: 0;
		}
		&.hide{
			left: -620rpx;
		}
	}
	.mask{
		content: '';
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 1000;
	}
}
</style>