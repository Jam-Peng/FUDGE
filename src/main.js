import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
// 匯入 vue3-loading-overlay 元件
import Loading from 'vue3-loading-overlay'
// 匯入 vue3-loading-overlay stylesheet樣式
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
// 匯入 Bootstrap Icon
import 'bootstrap-icons/font/bootstrap-icons.css'
// 匯入vee-validate套件
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate'
import AllRules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
import App from './App.vue'
import router from './router'
import { currency, date, isodate, endate } from '@/methods/filters'
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
// 使用vee-validate規則和語系
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true // 當輸入任何內容直接進行驗證
})
// 設定預設語系
setLocale('zh_TW')

const app = createApp(App)
app.config.globalProperties.$filters = { currency, date, isodate, endate }
app.config.globalProperties.$httpMessageState = $httpMessageState
app.use(VueAxios, axios)
app.use(router)
app.component('OverLoading', Loading)
app.component('font-awesome-icon', FontAwesomeIcon)
// 全域載入vee-validate元件
app.component('VForm', Form)
app.component('VField', Field)
app.component('ErrorMessage', ErrorMessage)
app.mount('#app')
