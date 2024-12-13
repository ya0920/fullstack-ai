<template>
    <div class="head">
        <div class="logo">AI翻译器</div>
        <div class="help">帮助中心</div>
    </div>
    <section class="main">
        <div class="box">
            <div class="title">
                <div class="lang">
                    <span class="text">{{ state.from }}</span>
                    <div class="iconfont icon-jiantou"></div>
                </div>
                <i class="iconfont icon-zhuanhuan" @click="change"></i>
                <div class="lang">
                    <span class="text">{{ state.to }}</span>
                    <div class="iconfont icon-jiantou"></div>
                </div>
            </div>
            <div class="content">
                <div class="input item">
                    <textarea @keydown.enter="handle" v-model="state.inputText" placeholder="请输入要翻译的文本"></textarea>
                </div>
                <div class="output item">
                    <textarea disabled placeholder="翻译结果">{{ state.outputText }}</textarea>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { reactive } from 'vue'
import axios from 'axios'

const state = reactive({
    from: 'English',
    to: '中文',
    inputText: '',
    outputText: ''
})

const change = () => {
    [state.from, state.to] = [state.to, state.from]
}

const handle = () => {
    //console.log(state.inputText)
    //将用户输入的文本发送给后端
    axios.get(`http://localhost:3000?inputText=${state.inputText}`)
        .then(response => {
            console.log(response.data)
            state.outputText = response.data
        })
}

</script>

<style lang="css" scoped>
.head {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
    border-radius: 0px 0px 0px 0px;
}

.logo {
    margin-left: 80px;
    font-family: Pacifico, Pacifico;
    font-weight: 400;
    font-size: 24px;
    color: #8E6FF7;
    line-height: 32px;
    text-align: left;
    padding: 16px;
}

.help {
    margin-right: 80px;
    padding: 20px 16px 20px 0;

    font-family: Roboto, Roboto;
    font-weight: 400;
    font-size: 16px;
    color: #4B5563;
    line-height: 24px;
    text-align: left;

}

.main {
    overflow: hidden;
    /*不会受margin影响父容器位置*/
    ;
}

.box {
    width: 896px;
    height: 296px;
    background-color: #FFFFFF;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1);
    border-radius: 8px 8px 8px 8px;
    margin: 0 auto;
    margin-top: 32px;
    padding: 24px;
    box-sizing: border-box;
}

.title {
    display: flex;
    align-items: center;
}

.lang {
    width: 86px;
    height: 40px;
    background: #F3F4F6;
    border-radius: 8px 8px 8px 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.icon-zhuanhuan {
    margin: 0 16px;
    font-weight: 700;
    cursor: pointer;
}

.content{
    margin-top: 16px;
    display: flex;
}

.content .item{
    flex: 1;
    height: 192px;
     
}
.content .item:last-child{
    margin-left: 16px;
}
.content .item textarea{
    width: 100%;
    height: 100%;
    border-radius: 8px;
    padding: 10px 6px;
    box-sizing: border-box;
    font-size: 18px; 
}

</style>