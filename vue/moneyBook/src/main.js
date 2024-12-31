import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Button, Form, Field, CellGroup } from 'vant'
import 'vant/lib/index.css'
import 'lib-flexible/flexible'
import router from '@/router/index'

const app = createApp(App)
app.use(Button)
app.use(router)
app.use(Form)
app.use(Field)
app.use(CellGroup)
app.mount('#app')
