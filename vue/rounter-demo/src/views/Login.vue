<template>
    <div class="login">
        <h2>旅梦的后台管理系统</h2>
        <div class="login-box">
            <input type="text" v-model="username">
            <input type="text" v-model="password">
            <button @click="login">登录</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('admin')
const password = ref('123')
const router = useRouter()

const login = () => {
    if (username.value == 'admin' && password.value == '123') {
        //修改 url 地址栏为 /home
        router.push({path: '/home', query: {name: username.value}})
        //router.push({name: 'Home', params: {name: username.value}})    
    }
}
</script>

<style lang="css" scoped>
.login {
    width: 400px;
    border: 1px solid #000;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.login-box {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.login-box input {
    margin: 10px 0;
    padding: 5px 10px;
}

.login-box button {
    padding: 5px 20px;
}
</style>