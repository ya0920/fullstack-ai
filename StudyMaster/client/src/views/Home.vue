<template>
    <div class="home-page">
        <!-- 顶部标题区域 -->
        <header class="app-header">
            <img src="@/assets/logo.png" class="logo" alt="logo" />
            <span class="title">学习报告</span>
        </header>
        <!-- 内容容器，用于包裹主要内容区域 -->
        <div class="content-container">
            <!-- 统计卡片 -->
            <section class="stats-cards">
                <div class="stat-card">
                    <div class="stat-title">本周错题</div>
                    <div class="stat-content">
                        <span class="main-value">15</span>
                        <span class="sub-value">↑1.5%</span>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-title">复习进度</div>
                    <div class="stat-content">
                        <span class="main-value">60%</span>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-title">掌握率</div>
                    <div class="main-value">75%</div>
                </div>
            </section>

            <!-- 章节分布 -->
            <section class="chart-section">
                <h3 class="section-title">各章节错误分布</h3>
                <HeatmapChart :data="chapterData" />
                <!-- 操作按钮 -->
                <div class="action-buttons">
                    <button class="btn">
                        <i class="iconfont icon-paizhao"></i>
                        <p>抽题录入</p>
                    </button>
                    <button class="btn">
                        <i class="iconfont icon-shijuanguanli"></i>
                        <pp>生成试卷</pp>
                    </button>
                </div>
            </section>

            <!-- 最近错题 -->
            <section class="recent-errors">
                <h3 class="section-title">最近错题</h3>
                <div class="error-list">
                    <div v-for="(error, index) in recentErrors" :key="index" class="error-item">
                        <div class="subject">{{ error.subject }}</div>
                        <div class="topic">{{ error.topic }}</div>
                        <div class="time">{{ error.time }}</div>
                    </div>
                </div>
            </section>

        </div>
        <!-- 底部导航 -->
        <TabBar />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import TabBar from '@/components/TabBar.vue'
import HeatmapChart from '@/components/HeatmapChart.vue'

// 章节数据
const chapterData = ref([
    { value: 85, name: '数学' },
    { value: 65, name: '语文' },
    { value: 75, name: '英语' },
    { value: 55, name: '物理' },
    { value: 40, name: '化学' },
    { value: 30, name: '生物' },
    { value: 20, name: '历史' },
    { value: 10, name: '地理' }
])

// 最近错题
const recentErrors = ref([
    { subject: '数学', topic: '二次函数', time: '3天前' },
    { subject: '物理', topic: '牛顿定律', time: '2天前' },
    { subject: '化学', topic: '化学平衡', time: '1天前' }
])
</script>

<style lang="less" scoped>
@primary-color: #2196F3;
@secondary-color: #4CAF50;
@text-color: #333;
@border-color: #E5E7EB;

.app-header {
    background: white;
    height: 54px;
    display: flex;
    align-items: center;
    padding: 10px 16px;
    border-bottom: 2px solid @border-color;

    .logo {
        width: 32px;
        height: 32px;
        margin-right: 12px;
    }

    .title {
        font-size: 18px;
        color: @text-color;
    }
}

.content-container {
    background-color: #F9FAFB;
    padding: 16px 16px 90px 16px;

}

.stats-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    margin-bottom: 24px;

    .stat-card {
        background: white;
        border-radius: 8px;
        padding: 16px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        text-align: center;

        .stat-title {
            color: #666;
            font-size: 14px;
            margin-bottom: 8px;
        }

        .main-value {
            font-size: 24px;
            font-weight: 600;
            color: @text-color;
        }

        .sub-value {
            font-size: 12px;
            color: @secondary-color;
            margin-left: 8px;
        }
    }
}

.chart-section {
    background: white;
    border-radius: 8px;
    padding: 30px 16px;
    margin-bottom: 24px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    .section-title {
        font-size: 16px;
        color: @text-color;
        text-align: center;
        margin-bottom: 16px;
    }

    .bar-chart {
        display: flex;
        height: 200px;
        align-items: flex-end;
        justify-content: space-between;
        margin: 20px 0 50px 0;

        .bar-item {
            width: 12%;
            background: @primary-color;
            border-radius: 4px 4px 0 0;
            position: relative;

            .percentage {
                position: absolute;
                top: -24px;
                width: 100%;
                text-align: center;
                font-size: 12px;
                color: @text-color;
            }

            .chapter-name {
                position: absolute;
                bottom: -24px;
                width: 100%;
                text-align: center;
                font-size: 12px;
                color: #666;
            }
        }
    }
}

.recent-errors {

    .error-item {
        display: flex;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        border-radius: 8px;

        background-color: #fff;
        align-items: center;
        margin: 16px 0;
        padding: 16px 16px;
        border-bottom: 1px solid @border-color;

        &:last-child {
            border-bottom: none;
        }

        .subject {
            margin-right: 16px;
            font-size: 14px;
            color: @primary-color;
            font-weight: 500;
        }

        .topic {
            flex: 1;
            font-weight: 400;
            font-size: 14px;
            color: @text-color;
        }

        .time {
            color: #999;
            font-size: 12px;
        }
    }
}

.action-buttons {
    display: flex;
    gap: 12px;
    margin-top: 24px;
    padding: 0 16px;

    .btn {
        flex: 1;
        padding: 16px 0;
        border-radius: 8px;
        border: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;
        background-color: #F9FAFB;

        .iconfont {
            font-size: 18px;
            color: @primary-color;
        }

        .p {
            font-size: 12px;
        }
    }
}
</style>