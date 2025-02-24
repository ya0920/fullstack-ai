<template>
    <div class="login-container">


        <!-- <div>
            <el-radio-group v-model="radio1" size="large">
                <el-radio-button label="New York" value="New York" />
            </el-radio-group>
        </div> -->


        <div class="logo-head">
            <img src="@/assets/logo.png" alt="">
            <p>AI助力高效学习</p>
        </div>
        <div class="type-select">
            <button class="type-btn" :class="{ active: userType === 'student' }"
                @click="userType = 'student'">学生</button>
            <button class="type-btn" :class="{ active: userType === 'parent' }" @click="userType = 'parent'">家长</button>
        </div>
        <div class="input">
            <input type="text" v-model="phone" placeholder="请输入手机号" />
            <input type="password" v-model="password" placeholder="请设置密码" />
            <input type="password" v-model="confirmPassword" placeholder="请确认密码" />
            <div class="verify-code">
                <input type="text" v-model="verifyCode" placeholder="请输入验证码" />
                <button class="get-code-btn" @click="getVerifyCode">获取验证码</button>
            </div>
        </div>
        <button class="login-button" @click="handleRegister">注册</button>
        <div class="login-footer">
            <div class="third-party-login">
                <span class="iconfont icon-weixin" @click="handleWeChatLogin"></span>
                <span class="iconfont icon-QQ" @click="handleQQLogin"></span>
            </div>
            <p class="agreement">
                注册即表示同意
                <a href="#">《用户协议》</a> 和 <a href="#">《隐私政策》</a>
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// 默认学生模式
const radio1 = ref('New York')

// 定义响应式数据
const userType = ref('');
const phone = ref('');
const password = ref('');
const confirmPassword = ref('');
const verifyCode = ref('');

// 定义获取验证码的方法
const getVerifyCode = () => {
    console.log('点击获取验证码，手机号:', phone.value);
    // 这里可以添加实际调用获取验证码 API 的逻辑
};

// 定义注册方法
const handleRegister = () => {
    if (password.value !== confirmPassword.value) {
        console.log('两次输入的密码不一致');
        return;
    }
    console.log('注册信息：', {
        userType: userType.value,
        phone: phone.value,
        password: password.value,
        verifyCode: verifyCode.value,
    });
    // 这里可以添加实际调用注册 API 的逻辑
};

// 定义第三方登录方法
const handleWeChatLogin = () => {
    console.log('点击了微信登录');
};

const handleQQLogin = () => {
    console.log('点击了QQ登录');
};
</script>

<style lang="less" scoped>
.login-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    max-width: calc(300px + 24px * 2);
    margin: 0 auto;
    padding: 24px;
    font-family: Arial, sans-serif;
    box-sizing: border-box;
}

.logo-head {
    text-align: center;
    margin-bottom: 20px;

    img {
        width: 80px;
        height: 80px;
    }

    p {
        font-size: 14px;
        color: #333;
        margin-top: 5px;
    }
}

.type-select {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    .type-btn {
        padding: 8px 16px;
        border: 1px solid #ccc;
        border-radius: 20px;
        margin: 0 10px;
        cursor: pointer;
        background-color: white;
        color: #333;

        &.active {
            background-color: #007bff;
            color: white;
            border-color: #007bff;
        }
    }
}

.input {
    input {
        width: 100%;
        // 调整上下内边距，结合 font-size 使输入框高度为 44px
        padding: 15px 24px;
        margin-bottom: 15px;
        background-color: #F9FAFB;
        border: none;
        border-radius: 5px;
        font-size: 14px;
        line-height: normal;
        box-sizing: border-box;
        outline: none;

        &::placeholder {
            color: #9CA3AF;
        }
    }
}

.verify-code {
    display: flex;

    input {
        flex: 1;
    }

    .get-code-btn {
        // 让按钮高度和输入框一致
        height: 44px;
        padding: 10px 10px;
        font-size: 14px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-left: 10px;
    }
}

.login-button {
    width: 100%;
    padding: 12px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    // 设置顶部外边距为 20px
    margin-top: 20px;
    margin-bottom: 20px;
}

.login-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: auto;
}

.third-party-login {
    display: flex;
    margin-bottom: 15px;

    .iconfont {
        display: inline-block;
        width: 48px;
        height: 48px;
        line-height: 48px;
        border-radius: 50%;
        font-size: 30px;
        margin: 0 10px;
        text-align: center;
        color: white;
        cursor: pointer;
    }

    .icon-weixin {
        background-color: #07C160;
    }

    .icon-QQ {
        background-color: #12B7F5;
    }
}

.agreement {
    text-align: center;
    font-size: 12px;

    a {
        color: #007bff;
        text-decoration: none;
    }
}
</style>