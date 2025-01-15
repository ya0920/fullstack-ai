<template>
    <div class="blog-home">
        <LayoutLeftRight>
            <template v-slot:left>
                <div class="home-content_left">
                    <div class="user-info">
                        <div class="avatar">
                            <img src="@/assets/avatar.png" alt="">
                        </div>
                        <div class="user-desc">
                            <p class="name">青青奇犽</p>
                            <div class="describle">全栈开发工程师，专注于Web开发和人工智能技术，热爱分享技术经验和学习心得。</div>
                            <div class="tag">
                                <span>前端开发</span>
                                <span>人工智能</span>
                                <span>Python</span>
                            </div>
                        </div>
                    </div>
                    <div class="news-article">
                        <div class="title">最新文章</div>
                        <div class="article-list">
                            <div class="article-item" v-for="item in newsArticleList" :key="item.id">
                                <div class="article-pic">
                                    <img :src="item.article_cover_pic" alt="">
                                </div>
                                <div class="article-desc">
                                    <div class="name">{{ item.title }}</div>
                                    <div class="introduce">{{ item.article_desc }}</div>
                                    <div class="time">
                                        <span>{{ formateDate(item.create_time) }}</span>
                                        <router-link to="/detail">阅读更多</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>

            <template v-slot:right>
                <div class="home-model_right">
                    <Category />
                    <Callme class="mt32" />
                </div>
            </template>

        </LayoutLeftRight>

    </div>
</template>

<script setup>
import LayoutLeftRight from '../components/LayoutLeftRight.vue';
import Category from '../components/Category.vue';
import Callme from '../components/Callme.vue';
import { getNewsArticlesList } from '@/api/index.js';
import { onMounted } from 'vue';
import { ref } from 'vue';
import { formateDate } from '../utils/formateDate.js';

const newsArticleList = ref([]);

onMounted(async () => {
    const res = await getNewsArticlesList();
    console.log(res);
    newsArticleList.value = res.data;
});



</script>

<style lang="less" scoped>
.blog-home {
    .home-content_left {

        .user-info {
            padding: 24px;
            background-color: #fff;
            border-radius: 8px;
            display: flex;
            align-items: center;

            .avatar {
                width: 80px;
                height: 80px;
                border-radius: 50%;
                overflow: hidden;
                margin-right: 16px;

                img {
                    width: 100%;
                }
            }

            .user-desc {
                .name {
                    font-weight: 600;
                    font-size: 20px;
                    line-height: 28px;
                    margin-bottom: 8px;
                }

                .describle {
                    font-weight: 400;
                    font-size: 16px;
                    margin-bottom: 12px;
                    color: #4B5563;
                    line-height: 24px;
                }

                .tag {

                    span {
                        font-weight: 400;
                        font-size: 14px;
                        line-height: 20px;
                        padding: 4px 12px;
                        background-color: #F3F4F6;
                        border-radius: 100px;
                        margin-right: 8px;
                        color: #4B5563;
                        display: inline-block; // 使标签在一行显示
                    }
                }

            }

        }

        .news-article {
            margin-top: 32px;

            .title {
                font-weight: 600;
                font-size: 20px;
                color: #000;
                line-height: 28px;
                margin-bottom: 24px;
            }

            .article-list {
                display: grid;
                grid-template-columns: repeat(2, 1fr); // repeat(2, 1fr)表示两列，每列宽度相等
                gap: 24px; // 设置列间距

                .article-item {
                    border-radius: 8px;
                    overflow: hidden;

                    .article-pic {
                        width: 100%;
                        height: 192px;
                        overflow: hidden;

                        img {
                            height: 100%;
                            width: 100%;
                        }
                    }

                    .article-desc {
                        padding: 24px;
                        background-color: #fff;

                        .name {
                            font-weight: 600;
                            font-size: 18px;
                            color: #000000;
                            line-height: 28px;
                            margin-bottom: 8px;
                        }

                        .introduce {
                            font-weight: 400;
                            font-size: 14px;
                            color: #4B5563;
                            line-height: 20px;
                            margin-bottom: 16px;
                        }

                        .time {
                            font-weight: 400;
                            font-size: 14px;
                            color: #6B7280;
                            line-height: 20px;
                            display: flex;
                            justify-content: space-between;

                            a {
                                color: #8E6FF7;
                            }
                        }
                    }
                }

            }

        }
    }

    @media screen and (max-width: 1200px) {
        .home-model_right {
            display: none;
        }
    }
}
</style>