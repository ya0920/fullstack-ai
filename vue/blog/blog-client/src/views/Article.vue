<template>
    <div class="article">
        <div class="title">最新文章</div>
        <LayoutLeftRight>

            <template v-slot:left>
                <div class="article-card">
                    <div class="name">深入理解 JavaScript 闭包</div>
                    <div class="desc">闭包是 JavaScript 中一个强大而复杂的特性。本文将深入探讨闭包的概念、用途以及潜在的陷阱，帮助你更好地理解和运用这一重要的编程技巧。闭包是
                        JavaScript 中一个强大而复杂的特性。本文将深入探讨闭包的概念、用途以及潜在的陷阱，帮助你更好地理解和运用这一重要的编程技巧。
                    </div>
                    <div class="data">
                        <div class="data-left">
                            <div class="item">
                                <i class="iconfont icon-rili"></i>
                                <span>2023-06-15</span>
                            </div>
                            <div class="item">
                                <i class="iconfont icon-yueduliang"></i>
                                <span>3245 阅读 </span>
                            </div>
                            <div class="item">
                                <i class="iconfont icon-dianzan"></i>
                                <span>325 点赞</span>
                            </div>
                        </div>
                        <div class="data-right">
                            <div class="tag" :style="{ background: randomColor(150, 250), color: randomColor(0, 100) }">
                                JavaScript</div>
                            <div class="tag" :style="{ background: randomColor(150, 250), color: randomColor(0, 100) }">
                                前端开发</div>
                        </div>
                    </div>
                </div>
            </template>

            <template v-slot:right>
                <Category />
                <Callme class="mt32" />
            </template>

        </LayoutLeftRight>
    </div>
</template>

<script setup>
import LayoutLeftRight from '../components/LayoutLeftRight.vue';
import Category from '../components/Category.vue';
import Callme from '../components/Callme.vue';
import { randomColor } from '../utils/randomColor';

</script>

<style lang="less" scoped>
.article {
    background-color: #F9FAFB;

    .title {
        font-weight: 700;
        font-size: 36px;
        color: #1F2937;
        line-height: 40px;

        padding: 32px 104px 0 104px;

    }

    .article-card {
        width: 100%;
        background-color: #fff;
        padding: 24px;
        box-sizing: border-box;
        border-radius: 16px;
        box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.1);

        .name {
            font-weight: 700;
            font-size: 30px;
            color: #1F2937;
            line-height: 36px;
            margin-bottom: 16px;
        }

        .desc {
            font-weight: 400;
            font-size: 18px;
            color: #4B5563;
            line-height: 28px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            margin-bottom: 24px;
        }

        .data {
            display: flex;
            justify-content: space-between;

            .data-left {
                display: flex;
                font-weight: 400;
                font-size: 14px;
                color: #6B7280;
                line-height: 20px;
                align-items: center;

                .item {
                    margin-right: 16px;

                    .iconfont {
                        color: #8E6FF7;
                        margin-right: 4px;
                    }
                }
            }

            .data-right {
                display: flex;
                align-items: center;

                .tag {
                    border-radius: 100px;
                    padding: 4px 12px;
                    margin-left: 8px;
                    font-weight: 400;
                    font-size: 14px;
                }
            }
        }
    }
}
</style>