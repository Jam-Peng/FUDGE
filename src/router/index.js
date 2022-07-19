import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/front/HomeView.vue'

const routes = [
  // 前台
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: 'zh-tw',
        component: () => import('../views/front/BrandHome.vue')
      },
      {
        path: 'userlogin',
        component: () => import('../views/front/UserLogin.vue')
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/front/AboutView.vue')
      },
      {
        path: 'productList',
        component: () => import('../views/front/UserBoard.vue')
      },
      {
        path: 'productList/:productId',
        component: () => import('../views/front/UserProducts.vue')
      },
      {
        path: 'checkout',
        component: () => import('../views/front/CheckOut.vue')
      },
      {
        path: 'checkout/step2',
        component: () => import('../views/front/CheckOutStepTwo.vue')
      },
      {
        path: 'checkout/:orderId',
        component: () => import('../views/front/CheckOutStepThree.vue')
      },
      // 客戶訂單列表查詢
      {
        path: 'checkOrder',
        component: () => import('../views/front/CheckOrdersView.vue')
      },
      // 客戶單一訂單檢視
      {
        path: 'checkOrder/:checkOrderId',
        component: () => import('../views/front/CheckOneOrder.vue')
      },
      // 我的最愛
      {
        path: 'favorite',
        component: () => import('../views/front/UserFavorite.vue')
      },
      {
        path: 'lookbook',
        component: () => import('../views/front/UserLookbooks.vue')
      },
      {
        path: 'lookbook/:lookbookId',
        component: () => import('../views/front/UserOneLookbook.vue')
      }
    ]
  },

  // 後台管理系統
  {
    path: '/login',
    component: () => import('../views/back/LoginView.vue')
  },
  {
    path: '/dashboard',
    component: () => import('../views/back/DashBoard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/back/ProductsView.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/back/OrdersView.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/back/CouponsView.vue')
      },
      {
        path: 'lookbooks',
        component: () => import('../views/back/LookbooksView.vue')
      },
      {
        path: 'lookbooks/:lookbooksId',
        component: () => import('../views/back/OneLookbookView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
  scrollBehavior(to) {
    if (to.fullPath) {
      return {
        top: 0
      }
    }
    return {}
  }
})

export default router
