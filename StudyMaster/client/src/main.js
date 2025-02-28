import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia' // 状态管理


const app = createApp(App)
app.use(ElementPlus)
app.use(router)

app.use(createPinia())
app.mount('#app')
