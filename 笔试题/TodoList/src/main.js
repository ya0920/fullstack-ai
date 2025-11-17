import { createApp } from 'vue';
import App from './App.vue';
import { notification } from './utils/notification';
import './style.css';

const app = createApp(App);

notification.provide();

app.mount('#app');