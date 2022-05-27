import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
// 匯入 vue3-loading-overlay 元件
import Loading from 'vue3-loading-overlay'
// 匯入 vue3-loading-overlay stylesheet樣式
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(VueAxios, axios)
app.use(router)
app.component('OverLoading', Loading)
app.mount('#app')
