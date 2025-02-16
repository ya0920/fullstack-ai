<template>
    <div>
      <div class="hd">deepseek 智能助手</div>
  
      <div class="bd">
        <div class="bot answer">
          ai: 
          <span>您好！我是您的 AI 智能助手。我可以帮助您解答问题、编写代码、进行创作等。请问有什么我可以帮您的吗？</span>
        </div>
  
        <div class="chat" v-for="item in conversation">
          <div class="user question"  v-if="item.role === 'user'">
            me: 
            <span>{{item.content}}</span>
          </div>
          <div class="bot answer" v-if="item.role === 'assistant'">
            ai:
            <span v-html="item.content"></span>
          </div>
        </div>
  
      </div>
  
      <div class="ft">
        <div class="input">
          <input type="text" placeholder="请输入您的问题" v-model="question">
          <button @click="send">发送</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import axios from 'axios'
  import {marked} from 'marked'
  
  const conversation = ref([
    // {
    //   role: "user",
    //   content: "你好"
    // },
    // {
    //   role: "assistant",
    //   content: "您好！我是您的 AI 智能助手。"
    // }
  ])
  const question = ref("")
  const send = async() => {
    if(question.value.trim() === ""){
      return
    }
    conversation.value.push({
      role: "user",
      content: question.value
    })
  
    // 发送请求
    const msg = {
      role: "user",
      content: question.value
    }
    const res = await axios.post('http://localhost:3000/deepseek/chat', msg)
  
    conversation.value.push({
      role: "assistant",
      content: marked(res.data.content)
    })
    question.value = ""
    
  }
  </script>
  
  <style lang="css" scoped>
  .hd{
    height: 60px;
    background: #FFFFFF;
    border-radius: 0px 0px 0px 0px;
    border: 1px solid #E5E7EB;
    line-height: 60px;
    padding: 0 30px;
  }
  .bd{
    height: calc(100vh - 140px);
    background: #F9FAFB;
    overflow-y: auto;
    padding: 30px 20%;
    box-sizing: border-box;
  }
  .bot{
    padding: 10px 20px;
    background: #F3F4F6;
    border-radius: 16px 16px 16px 16px;
    margin-bottom: 20px;
  }
  .user{
    padding: 10px 20px;
    background: #8E6FF7;
    border-radius: 16px 16px 16px 16px;
    color: #fff;
    margin-bottom: 20px;
  }
  .ft{
    height: 80px;
    background: #FFFFFF;
    border-radius: 0px 0px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
    box-sizing: border-box;
  }
  .input{
    width: 700px;
    height: 100%;
    display: flex;
  }
  .input input{
    flex: 1;
    padding: 0 20px;
    font-size: 16px;
  }
  .input button{
    width: 80px;
    margin-left: 20px;
  }
  </style>