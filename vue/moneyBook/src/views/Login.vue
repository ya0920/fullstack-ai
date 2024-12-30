<template>
    <div class="login-register">
        <div class="logo">
            <img src="@/assets/logo.png" alt="">
        </div>
        <div class="tab">
            <span class="active">登录</span>
            <span>注册</span>
        </div>
        <div class="login">
            <van-form @submit="onSubmit">
                <van-cell-group inset>
                    <van-field v-model="username" name="username" label="用户名" placeholder="用户名"
                        :rules="[{ required: true, message: '请填写用户名' }]" />

                    <van-field v-model="password" type="password" name="password" label="密码" placeholder="密码"
                        :rules="[{ required: true, message: '请填写密码' }]" />
                </van-cell-group>
                <div style="margin: 16px;">
                    <van-button round block type="primary" native-type="submit">
                        登录
                    </van-button>
                </div>
            </van-form>

        </div>

        <div class="register">
            <van-form @submit="onSubmit">
                <van-cell-group inset>
                    <van-field v-model="username" name="username" label="用户名" placeholder="用户名"
                        :rules="[{ required: true, message: '请填写用户名' }]" />
                    <van-field v-model="password" type="password" name="password" label="密码" placeholder="密码"
                        :rules="[{ required: true, message: '请填写密码' }]" />
                    <van-field v-model="verifyCode" type="text" name="verifyCode" label="验证码" placeholder="验证码"
                        :rules="[{ required: true, message: '请填写验证码' }]" />
                </van-cell-group>
                <div style="margin: 16px;">
                    <van-button round block type="primary" native-type="submit">
                        注册
                    </van-button>
                </div>
            </van-form>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';

const username = ref('');
const password = ref('');
const verifyCode = ref('');


const onSubmit = (values) => {
    console.log('submit', values);
};

</script>

<style lang="less" scoped>
.logo {
    img {
        margin: 0 auto;
        display: block;
    }
}

.tab {
    display: flex;
    padding: 0.5rem 0.7rem;
    color: rgb(54, 169, 58);
    font-size: 0.5rem;
    font-weight: bold;

    span {
        margin-right: 0.6rem;
        padding: 5px 0;

        &.active {
            border-bottom: 3px solid rgb(54, 169, 58);
            font-size: 0.55rem;
        }
    }
}
</style>