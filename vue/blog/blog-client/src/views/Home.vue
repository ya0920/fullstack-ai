<template>
    <div class="blog-home">
        <div class="home-content_left">
            <div class="user-info">
                <div class="avatar">
                    <img src="@/assets/vue.svg" alt="">
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
                    <div class="article-item">
                        <div class="article-pic">
                            <img src="https://img95.699pic.com/photo/40041/5325.jpg_wh860.jpg" alt="">
                        </div>
                        <div class="article-desc">
                            <div class="name">深入理解React Hooks的原理与实践</div>
                            <div class="introduce">探讨React Hooks的工作原理，以及在实际项目中的最佳
                                实践方案...</div>
                            <div class="time">
                                <span>2025-01-01</span>
                                <router-link to="/detail">阅读更多</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="article-item">
                        <div class="article-pic">
                            <img src="https://img95.699pic.com/photo/40041/5325.jpg_wh860.jpg" alt="">
                        </div>
                        <div class="article-desc">
                            <div class="name">深入理解React Hooks的原理与实践</div>
                            <div class="introduce">探讨React Hooks的工作原理，以及在实际项目中的最佳
                                实践方案...</div>
                            <div class="time">
                                <span>2025-01-01</span>
                                <router-link to="/detail">阅读更多</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="article-item">
                        <div class="article-pic">
                            <img src="https://img95.699pic.com/photo/40041/5325.jpg_wh860.jpg" alt="">
                        </div>
                        <div class="article-desc">
                            <div class="name">深入理解React Hooks的原理与实践</div>
                            <div class="introduce">探讨React Hooks的工作原理，以及在实际项目中的最佳
                                实践方案...</div>
                            <div class="time">
                                <span>2025-01-01</span>
                                <router-link to="/detail">阅读更多</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="article-item">
                        <div class="article-pic">
                            <img src="https://img95.699pic.com/photo/40041/5325.jpg_wh860.jpg" alt="">
                        </div>
                        <div class="article-desc">
                            <div class="name">深入理解React Hooks的原理与实践</div>
                            <div class="introduce">探讨React Hooks的工作原理，以及在实际项目中的最佳
                                实践方案...</div>
                            <div class="time">
                                <span>2025-01-01</span>
                                <router-link to="/detail">阅读更多</router-link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="home-model_right">

        </div>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.blog-home {
    padding: 26px 104px 48px 104px;
    background-color: #F9FAFB;
    display: flex;

    .home-content_left {
        flex: 1; // flex: 1表示占据剩余空间
        margin-right: 32px;

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

    .home-model_right {
        flex: 0 0 390px; // 0 0 390px表示不伸缩，宽度为390px
    }
}
</style>