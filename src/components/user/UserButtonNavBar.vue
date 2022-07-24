<template>
  <!-- RWD 手機 -->
  <div
    class="col d-sm-flex flex-column align-items-center d-md-none d-sm-block pt-2 pb-1 bg-light"
  >
    <ul
      class="navbar-nav d-flex flex-row justify-content-evenly align-items-center text-secondary"
    >
      <li
        class="nav-item"
        data-bs-toggle="offcanvas"
        data-bs-target="#staticBackdrop"
        aria-controls="staticBackdrop"
      >
        <a class="nav-link p-0"
          ><font-awesome-icon
            class="icons icons_user"
            :icon="['fas', 'user']"
          />
        </a>
      </li>
      <li class="nav-item position-relative">
        <a class="nav-link p-0"
          ><font-awesome-icon
            class="icons icons_star"
            :icon="['far', 'star']"
            @click.prevent="toFavorite"
          />
        </a>
        <span
          class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger box_badge"
        >
          {{ favoriteId.length }}
        </span>
      </li>
      <li class="nav-item position-relative">
        <a class="nav-link p-0"
          ><font-awesome-icon
            class="icons icons_cart"
            :icon="['fas', 'cart-shopping']"
            @click.prevent="toCheckOut"
          />
        </a>
        <span
          class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger box_badge"
        >
          {{ productsArr.length }}
        </span>
      </li>
    </ul>
  </div>
  <!-- 登入offcanvas -->
  <div
    class="offcanvas offcanvas-bottom text-secondary"
    data-bs-backdrop="static"
    tabindex="-1"
    id="staticBackdrop"
    aria-labelledby="staticBackdropLabel"
  >
    <div class="offcanvas-header pb-2">
      <span class="offcanvas-title offcanvas_text" id="staticBackdropLabel"
        >會員中心</span
      >
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body pt-0">
      <div
        class="mb-2 offcanvas_text"
        @click="userLogin"
        v-if="userTestSignin.testAccount === ''"
      >
        <span>會員登入</span>
      </div>
      <div class="mb-2 offcanvas_text" @click="checkOrders">
        <span>訂單查詢</span>
      </div>
      <div
        class="mb-2 offcanvas_text"
        @click="userLogout"
        v-if="userTestSignin.testAccount !== ''"
      >
        <span>登出</span>
      </div>
    </div>
  </div>
</template>

<script>
// 為了讓Bootstrap的 Navbar 可以正常收合
import 'bootstrap/dist/js/bootstrap.bundle'
import favoriteLocalStorage from '@/mixins/userFavoriteMethod'

export default {
  data() {
    return {
      keyword: '',
      cartBag: {},
      // userTestSignin: {
      //   userAccount: '',
      //   userPassword: ''
      // },
      userTestSignin: {
        testAccount: '',
        testPassword: ''
      },
      productsArr: [],
      favoriteId: [] // 取得儲存LocalStorage裡的ID
    }
  },
  inject: ['emitter'],
  methods: {
    // 購物車購買流程
    toCheckOut() {
      this.$router.push('/checkout')
    },
    // 取得購物車列表
    getCartOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.cartBag = res.data.data
            this.productsArr = this.cartBag.carts // 設定購物車還沒有商品時的判斷
          }
          // console.log(this.cartBag)
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    // 取得我的最愛Id
    getFavorite() {
      this.favoriteId = this.getLocalStorage()
    },

    // 進入登入頁面
    userLogin() {
      this.$router.push('/userlogin')
    },
    // 登出帳號
    userLogout() {
      this.userTestSignin.testAccount = ''
      this.userTestSignin.testPassword = ''
    },
    // 查詢訂單列表
    checkOrders() {
      this.$router.push('/checkOrder')
    },
    // 我的收藏
    toFavorite() {
      this.$router.push('/favorite')
    }
  },
  mixins: [favoriteLocalStorage],
  mounted() {
    this.emitter.on('sendSignIn', (data) => {
      this.userTestSignin = { ...data }
    })
    // 重新觸發加到購物車改變navBar的badge數量
    this.emitter.on('update_cart', this.getCartOrder)
    // 重新觸發刪除購物車改變navBar的badge數量
    this.emitter.on('delete-cart', this.getCartOrder)
    // 重新觸發新增更新navBar的“我的最愛”badge數量
    this.emitter.on('update_favorite', this.getFavorite)
    // 重新觸發刪除更新navBar的“我的最愛”badge數量
    this.emitter.on('delete_favorite', this.getFavorite)
  },
  created() {
    this.getCartOrder()
    this.getFavorite()
  }
}
</script>

//
<style lang="scss">
// .icons_user,
// .icons_star,
// .icons_cart {
//   font-size: 1.1rem;
//   cursor: pointer;
// }
// .offcanvas_text {
//   font-size: 0.9rem;
// }
// .box_badge {
//   font-size: 0.55rem;
// }
//
</style>
