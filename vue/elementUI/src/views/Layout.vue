<template>
  <div>
    <el-container>
      <el-header>
        <h3>旅梦后台管理</h3>
        <span>Welcome {{ user }}</span>
      </el-header>

      <el-container class="content">
        <el-aside width="200px">
          <el-menu router unique-opened  default-active="/aima" class="el-menu-vertical-demo">
            <el-sub-menu index="1">
              <template #title>
                <el-icon><Document /></el-icon>
                <span>班级情况</span>
              </template>
              <el-menu-item index="/aima">爱码班</el-menu-item>
              <el-menu-item index="/longma">龙码班</el-menu-item>
            </el-sub-menu>
            
            <el-sub-menu index="2">
              <template #title>
                <el-icon><DocumentChecked /></el-icon>
                <span>就业情况</span>
              </template>
              <el-menu-item index="2-1">top20</el-menu-item>
              <el-menu-item index="2-2">top50</el-menu-item>
              <el-menu-item index="2-3">top100</el-menu-item>
            </el-sub-menu>

          </el-menu>
        </el-aside>

        <el-main>
          <!-- 路由配置在了layout 的二级中的组件会在这里加载 -->
          <router-view />
        </el-main>
      </el-container>

    </el-container>
  </div>
</template>

<script setup>
const user = localStorage.getItem('username')
</script>

<style lang="css" scoped>
.el-header {
  background-color: #c6e2ff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.content{
  height: calc(100vh - 60px);
}
.el-menu.el-menu--vertical{
  height: 100%;
  background-color: aliceblue;
}
</style>