import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Directives from './command/index.js'

const app = createApp(App)
app.use(Directives) // 全局注册 // 注册指令调用了install 函数
app.mount('#app')
