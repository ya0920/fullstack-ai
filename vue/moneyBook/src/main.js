import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Button, Form, Field, CellGroup, Tabbar, TabbarItem, Icon, Popup, DatePicker,PullRefresh, List, Cell, NumberKeyboard,NavBar  } from 'vant'
import 'vant/lib/index.css'
import 'lib-flexible/flexible'
import router from '@/router/index'

const app = createApp(App)
app.use(Button)
app.use(router)
app.use(Form)
app.use(Field)
app.use(CellGroup)
app.use(Tabbar)
app.use(TabbarItem)
app.use(Icon)
app.use(Popup)
app.use(DatePicker)
app.use(PullRefresh)
app.use(List)
app.use(Cell)
app.use(NumberKeyboard)
app.use(NavBar)
app.mount('#app')
