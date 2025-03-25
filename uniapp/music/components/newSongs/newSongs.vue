<template>
    <view class="new-songs">
        <view class="new-hd">
            <view class="title">新歌推荐</view>
            <view class="more">
                <uni-icons type="right" size="16"></uni-icons>
            </view>
        </view>

        <swiper class="swiper-wrap">
            <swiper-item v-for="item in swiperList">
                <view class="swiper-item">
                    <view class="song-item" @click="play(song)" v-for="song in item">
                        <view class="song-detail">
                            <view class="pic">
                                <image :src="song.al.picUrl" mode="aspectFit"></image>
                            </view>
                            <view class="desc">
                                <view class="name">{{song.al.name}}</view>
                                <view class="author">
                                    {{song.ar[0].name}}
                                </view>
                            </view>
                        </view>
                        
                        <uni-icons custom-prefix="iconfont" type="icon-bofang" size="22"></uni-icons>
                    </view>
                </view>
            </swiper-item>
        </swiper>
    </view>
</template>

<script setup>
import { computed, ref } from 'vue';
import { apiGetSongUrl } from '@/api/index.js'

const props = defineProps({
    list: Array
})

const swiperList = computed(() => {
    let newArr = []
    let arr = []
    props.list.forEach((item, i) => {
        if (arr.length === 3) {
            newArr.push(arr)
            arr = []
        }
        arr.push(item)
    })
    console.log(swiperList);
    return newArr
})

const play = async (song) => {
	const res = await apiGetSongUrl(song.al.id)
	console.log(res);
}


</script>

<style lang="scss">
.new-songs {
    margin: 30rpx 0;
    .new-hd {
        display: flex;
        justify-content: space-between;
        font-size: 30rpx;
        font-weight: bold;
    }
    .swiper-item {
        padding-right: 30rpx;
        overflow: hidden;
        .song-item {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            margin: 20rpx 0;
            .song-detail {
                display: flex;
                .pic {
                    width: 100rpx;
                    height: 100rpx;
                    image {
                        width: 100%;
                        height: 100%;
                        border-radius: 10px;
                    }
                }
                .desc {
                    margin-left: 26rpx;
                    line-height: 1.5;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    .author {
                        font-size: 24rpx;
                        color: #666;
                        .reason {
                            font-size: 20rpx;
                            color: $uni-primary-color;
                            background-color: #f5e7e9;
                            padding: 0 4rpx;
                            border: 1rpx solid #f5e7e9;
                            border-radius: 4px;
                        }
                    }
                }
            }
        }
    }
    :deep(.uni-swiper-slide-frame) {
        width: 95% !important;
    }
}
.swiper-wrap {
    height: 370rpx;
}
</style>