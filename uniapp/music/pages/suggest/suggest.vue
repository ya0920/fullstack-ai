<template>
	<view class="suggest">
		<wyHeaderVue>
			<template v-slot:content>
				<uni-search-bar radius="100" placeholder="歌曲"></uni-search-bar>
			</template>
		</wyHeaderVue>

		<menuVue />

		<!-- banner -->
		<view class="banner">
			<swiper circular :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">

				<swiper-item v-for="item in state.banners" :key="item.encodeId">
					<view class="swiper-item">
						<image :src="item.imageUrl" mode="aspectFill"></image>
					</view>
				</swiper-item>


			</swiper>
		</view>
		
		<!-- balls -->
		<view class="balls">
			<view class="ball-item" v-for="item in state.balls" :key="item.id">
				<view class="icon">
					<image :src="item.iconUrl"></image>
				</view>
				<text>{{item.name}}</text>
			</view>
		</view>
		
		<!-- 歌曲推荐 -->
		<newSongsVue :list="state.newSongs"/>

	</view>
	
	<playerVue />
</template>

<script setup>
import wyHeaderVue from '../../components/wyHeader/wyHeader.vue';
import menuVue from '../../components/menu/menu.vue';
import newSongsVue from '../../components/newSongs/newSongs.vue';
import playerVue from '../../components/player/player.vue';
import { onLoad } from '@dcloudio/uni-app';
import { apiGetBanner, apiGetBall, apiGetNewSongs } from '@/api/index.js'
import { reactive } from 'vue';

const state = reactive({
	banners: [],
	balls: [],
	newSongs: []
})

onLoad(() => {
	getBanner()
	getBall()
	getNewSongs()
})

const getBanner = async() => {
	const res = await apiGetBanner()
	// console.log(res.data.banners);
	state.banners = res.data.banners
}

const getBall = async() => {
	const res = await apiGetBall()
	state.balls = res.data.data
}

const getNewSongs = async () => {
	const res = await apiGetNewSongs()
	state.newSongs = res.data.data.dailySongs
	console.log(res.data.data.dailySongs);
}

</script>

<style lang="scss">
.suggest{
	padding: 0 20rpx;
	.banner {
		.swiper-item {
			width: 100%;
			height: 100%;
			border-radius: 10px;
			overflow: hidden;
	
			image {
				width: 100%;
				height: 100%;
			}
		}
	}
	.balls {
		display: flex;
		overflow-x: scroll;
		margin: 30rpx 0;
		.ball-item {
			flex: 0 0 20%;
			font-size: 20rpx;
			text-align: center;
			.icon {
				width: 70rpx;
				height: 70rpx;
				margin: 0 auto;
				margin-bottom: 14rpx;
				background-color: $uni-primary-color;
				border-radius: 50%;
				image {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
}
</style>