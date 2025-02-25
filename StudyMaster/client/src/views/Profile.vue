<template>
    <div class="profile-page">
      <!-- 头部 -->
      <header class="profile-header">
        <h1>个人中心</h1>
      </header>
  
      <!-- 用户信息 -->
      <section class="user-info">
        <div class="avatar">
          <img src="@/assets/vue.svg" alt="用户头像">
        </div>
        <div class="info">
          <h2 class="name">张雨晨</h2>
          <p class="meta">初二 · 北京一中</p>
          <div class="badges">
            <span class="badge study-days">连续学习7天</span>
            <span class="badge honor">优秀学员</span>
          </div>
        </div>
      </section>
  
      <!-- 本周数据 -->
      <section class="week-data">
        <div class="data-card">
          <div class="data-content">
            <h3>本周错题</h3>
            <div class="data-main">
              <span class="number">15</span>
              <span class="unit">道</span>
            </div>
            <div class="data-compare">
              <i class="iconfont icon-rise"></i>
              <span>较上周提升5%</span>
            </div>
          </div>
        </div>
      </section>
  
      <!-- 功能卡片 -->
      <section class="feature-cards">
        <div class="card-grid">
          <div 
            class="feature-card"
            @click="$router.push('/wrong-questions')"
          >
            <i class="iconfont icon-cuotiben"></i>
            <div class="card-content">
              <h4>错题本</h4>
              <p>15道待复习</p>
            </div>
          </div>
  
          <div 
            class="feature-card"
            @click="$router.push('/parent-control')"
          >
            <i class="iconfont icon-jiazhang"></i>
            <div class="card-content">
              <h4>家长监护</h4>
              <p>已绑定</p>
            </div>
          </div>
  
          <div 
            class="feature-card"
            @click="toggleTheme"
          >
            <i class="iconfont icon-moshi"></i>
            <div class="card-content">
              <h4>主题切换</h4>
            </div>
          </div>
        </div>
      </section>
  
      <!-- 其他功能 -->
      <section class="other-features">
        <div class="feature-item" @click="$router.push('/help')">
          <i class="iconfont icon-help"></i>
          <span>帮助中心</span>
          <i class="iconfont icon-arrow"></i>
        </div>
        <div class="feature-item" @click="logout">
          <i class="iconfont icon-logout"></i>
          <span>退出登录</span>
          <i class="iconfont icon-arrow"></i>
        </div>
      </section>
  
      <!-- 底部导航 -->
      <TabBar />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import TabBar from '@/components/TabBar.vue'
  
  const router = useRouter()
  const theme = ref('light')
  
  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', theme.value)
  }
  
  const logout = () => {
    localStorage.removeItem('token')
    router.push('/login')
  }
  </script>
  
  <style lang="less" scoped>
  @primary-color: #2196F3;
  @card-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  
  /* 图标字体定义 */
  @font-face {
    font-family: 'iconfont';
    src: url('//at.alicdn.com/t/your-font-path.woff2') format('woff2'),
         url('//at.alicdn.com/t/your-font-path.woff') format('woff');
  }
  
  .iconfont {
    font-family: "iconfont" !important;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
  }
  
  .icon-cuotiben:before { content: "\e601"; }
  .icon-jiazhang:before { content: "\e602"; }
  .icon-moshi:before { content: "\e603"; }
  .icon-help:before { content: "\e604"; }
  .icon-logout:before { content: "\e605"; }
  .icon-arrow:before { content: "\e606"; }
  .icon-rise:before { content: "\e607"; }
  
  /* 页面样式 */
  .profile-page {
    padding: 20px 16px 80px;
    background: #f8fafc;
    min-height: 100vh;
  
    [data-theme="dark"] & {
      background: #1a1a1a;
      color: white;
      
      .user-info,
      .data-card,
      .feature-card,
      .other-features {
        background: #333;
        color: white;
      }
    }
  }
  
  .profile-header {
    text-align: center;
    margin-bottom: 24px;
    
    h1 {
      font-size: 20px;
      color: @primary-color;
      font-weight: 600;
    }
  }
  
  .user-info {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    padding: 16px;
    background: white;
    border-radius: 12px;
    box-shadow: @card-shadow;
  
    .avatar {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 16px;
      border: 2px solid @primary-color;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  
    .info {
      flex: 1;
      
      .name {
        font-size: 18px;
        color: #333;
        margin-bottom: 4px;
      }
  
      .meta {
        color: #666;
        font-size: 14px;
        margin-bottom: 8px;
      }
  
      .badges {
        display: flex;
        gap: 8px;
  
        .badge {
          padding: 4px 10px;
          border-radius: 16px;
          font-size: 12px;
          font-weight: 500;
  
          &.study-days {
            background: rgba(@primary-color, 0.1);
            color: @primary-color;
          }
  
          &.honor {
            background: rgba(#4CAF50, 0.1);
            color: #4CAF50;
          }
        }
      }
    }
  }
  
  .week-data {
    margin-bottom: 24px;
  
    .data-card {
      background: white;
      border-radius: 12px;
      padding: 16px;
      box-shadow: @card-shadow;
  
      .data-content {
        h3 {
          color: #666;
          font-size: 14px;
          margin-bottom: 12px;
        }
  
        .data-main {
          display: flex;
          align-items: baseline;
          margin-bottom: 8px;
  
          .number {
            font-size: 28px;
            font-weight: 600;
            color: @primary-color;
            margin-right: 8px;
          }
  
          .unit {
            color: #999;
            font-size: 14px;
          }
        }
  
        .data-compare {
          display: flex;
          align-items: center;
          color: #4CAF50;
          font-size: 12px;
  
          .icon-rise {
            font-size: 14px;
            margin-right: 4px;
          }
        }
      }
    }
  }
  
  .feature-cards {
    margin-bottom: 24px;
  
    .card-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
  
      .feature-card {
        background: white;
        border-radius: 12px;
        padding: 16px;
        text-align: center;
        box-shadow: @card-shadow;
        transition: transform 0.2s;
        cursor: pointer;
  
        &:active {
          transform: scale(0.98);
        }
  
        .iconfont {
          font-size: 28px;
          color: @primary-color;
          margin-bottom: 8px;
          display: block;
        }
  
        h4 {
          font-size: 14px;
          color: #333;
          margin-bottom: 4px;
        }
  
        p {
          font-size: 12px;
          color: #666;
        }
      }
    }
  }
  
  .other-features {
    background: white;
    border-radius: 12px;
    box-shadow: @card-shadow;
  
    .feature-item {
      display: flex;
      align-items: center;
      padding: 16px;
      color: #333;
      border-bottom: 1px solid #eee;
      cursor: pointer;
  
      &:active {
        background: #f8f8f8;
      }
  
      &:last-child {
        border-bottom: none;
      }
  
      .iconfont {
        font-size: 20px;
        color: @primary-color;
        margin-right: 12px;
      }
  
      .icon-arrow {
        margin-left: auto;
        color: #999;
        font-size: 16px;
      }
    }
  }
  </style>