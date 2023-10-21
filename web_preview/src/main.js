import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
import router from './router'
import 'element-plus/es/components/message/style/css'
createApp(App).use(store).use(router).mount('#app')
