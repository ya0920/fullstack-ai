<template>
    <div class="home">
        <div class="home-container">
            <div class="content">
                <div class="logo">
                    <img src="../assets/home-logo.png" alt="">
                </div>
                <p class="title">欢迎参与旅梦问卷调查</p>
                <p class="desc">您的每一个想法都很重要</p>
            </div>
            <div class="btn" @click="goItem">开始问卷</div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const goItem = () => {
    router.push('/item');
}
</script>

<style lang="less" scoped>
.home {
    width: 100vw;
    height: 100vh;
    padding: 0 2.1rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;

    &-container {
        flex: 1;
        font-size: 20px;

        .content {
            padding-bottom: 90px;
            box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1);

            .logo {
                width: 24rem;
                height: 24rem;
                margin: 0 auto;

                img {
                    width: 100%;
                }
            }

            .title {
                text-align: center;
                font-size: 2.1rem;
                margin-top: 28px;
            }

            .desc {
                text-align: center;
                font-size: 1.4rem;
                margin-top: 7px;
                color: #4B5563;
            }
        }
        .btn {
            height: 50px;
            box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1);
            margin-top: 14px;
            font-size: 14px;
            text-align: center;
            line-height: 50px;
        }
    }
}
</style>