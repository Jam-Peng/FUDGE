import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  // 前台
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: 'zh-tw',
        component: () => import('../views/client/BrandHome.vue')
      },
      {
        path: 'userlogin',
        component: () => import('../views/client/UserLogin.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/client/AboutView.vue')
  },
  {
    path: '/productList',
    component: () => import('../views/client/UserBoard.vue')
  },
  {
    path: '/productList/:productId',
    component: () => import('../views/client/UserProducts.vue')
  },
  {
    path: '/checkout',
    component: () => import('../views/client/CheckOut.vue')
  },
  {
    path: '/checkout/step2',
    component: () => import('../views/client/CheckOutStepTwo.vue')
  },
  {
    path: '/checkout/:orderId',
    component: () => import('../views/client/CheckOutStepThree.vue')
  },
  // 客戶訂單列表查詢
  {
    path: '/checkOrder',
    component: () => import('../views/client/CheckOrdersView.vue')
  },
  // 客戶單一訂單檢視
  {
    path: '/checkOrder/:checkOrderId',
    component: () => import('../views/client/CheckOneOrder.vue')
  },
  // 我的最愛
  {
    path: '/favorite',
    component: () => import('../views/client/UserFavorite.vue')
  },
  // 搜尋關鍵字功能
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/client/SearchView.vue')
  },

  // 後台管理系統
  {
    path: '/login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/dashboard',
    component: () => import('../views/DashBoard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/ProductsView.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/OrdersView.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/CouponsView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
