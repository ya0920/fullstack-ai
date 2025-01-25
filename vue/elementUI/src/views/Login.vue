<template>
  <div class="login">
    <h4>旅梦后台管理</h4>
    <div class="username">
      <label for="username">用户名：</label>
      <el-input
        id="username"
        v-model="username"
        placeholder="请输入账号"
        :prefix-icon="'User'"
      />
    </div>
    <div class="password">
      <label for="password">密码：</label>
      <el-input
        id="password"
        v-model="password"
        placeholder="请输入密码"
        :prefix-icon="'Lock'"
      />
    </div>
    <div class="submit">
      <el-button @click="login" round="true" type="primary">登录</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const router = useRouter();

const login = () => {
  if (username.value === '' || password.value === '') {
    ElMessage.error('用户名或密码不能为空');
    return;
  }

  router.push('/layout');
  localStorage.setItem('username', username.value);
}

</script>

<style lang="css" scoped>
.login{
  width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px #ccc;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.login div{
  margin-top: 10px;
}
.el-button--primary{
  width: 100%;
}
</style>