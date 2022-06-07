import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
// 匯入 vue3-loading-overlay 元件
import Loading from 'vue3-loading-overlay'
// 匯入 vue3-loading-overlay stylesheet樣式
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
import App from './App.vue'
import router from './router'
import { currency, date } from '@/methods/filters'
import $httpMessageState from '@/methods/pushMessagesState'
// font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUser,
  faCartShopping,
  faMagnifyingGlass,
  faTrashCan,
  faPlus,
  faMinus,
  faAngleDown
} from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import {
  faFacebookSquare,
  faInstagramSquare,
  faYoutubeSquare,
  faLine
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(
  faStar,
  faUser,
  faCartShopping,
  faMagnifyingGlass,
  faFacebookSquare,
  faInstagramSquare,
  faYoutubeSquare,
  faLine,
  faTrashCan,
  faPlus,
  faMinus,
  faAngleDown
)

const app = createApp(App)
app.config.globalProperties.$filters = { currency, date }
app.config.globalProperties.$httpMessageState = $httpMessageState
app.use(VueAxios, axios)
app.use(router)
app.component('OverLoading', Loading)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
