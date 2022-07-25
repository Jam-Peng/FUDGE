<template>
  <nav class="navbar navbar-expand-lg bg-light p-4">
    <div class="container-fluid">
      <router-link
        to="/"
        class="navbar-brand me-0 logo_title order-2 order-sm-2 order-md-2 order-lg-0"
        >FUDGE
      </router-link>

      <button
        class="navbar-toggler order-1 order-sm-1 order-md-1 me-3"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- 平板顯示 -->
      <div class="d-none d-md-block d-lg-none order-3 order-sm-3 order-md-3">
        <ul class="navbar-nav d-flex flex-row justify-content-start">
          <!-- 會員中心offcanvas -->
          <li
            class="nav-item ps-0"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
          >
            <a class="nav-link p-0"
              ><font-awesome-icon
                class="icons icons_user"
                :icon="['fas', 'user']"
              />
            </a>
          </li>
          <li class="nav-item ps-4 position-relative">
            <a class="nav-link p-0" href="/"
              ><font-awesome-icon
                class="icons icons_star"
                :icon="['far', 'star']"
                @click.prevent="toFavorite"
              />
            </a>
            <!-- badge -->
            <span
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger box_badge"
            >
              {{ favoriteId.length }}
            </span>
          </li>
          <li class="nav-item ps-4 position-relative">
            <a class="nav-link p-0" href="/"
              ><font-awesome-icon
                class="icons icons_cart"
                :icon="['fas', 'cart-shopping']"
                @click.prevent="toCheckOut"
              />
            </a>
            <!-- badge -->
            <span
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger box_badge"
            >
              {{ productsArr.length }}
            </span>
          </li>
        </ul>
      </div>
      <!-- 登入offcanvas 平板顯示 -->
      <div
        class="offcanvas offcanvas-start text-secondary d-none d-md-block d-lg-none"
        data-bs-scroll="true"
        tabindex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div class="offcanvas-header pb-3 pt-4">
          <span class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            會員中心
          </span>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body pt-0">
          <div
            class="mb-3"
            @click="userLogin"
            v-if="userTestSignin.testAccount === ''"
          >
            <span>會員登入</span>
          </div>
          <div class="mb-3" @click="checkOrders">
            <span>訂單查詢</span>
          </div>
          <div
            class="mb-3"
            @click="userLogout"
            v-if="userTestSignin.testAccount !== ''"
          >
            <span>登出</span>
          </div>
        </div>
      </div>

      <!-- 桌機Navbar -->
      <div
        class="collapse navbar-collapse order-4 order-md-4 order-lg-1 ms-lg-5 justify-content-between"
        id="navbarNav"
      >
        <ul class="navbar-nav">
          <li class="nav-item me-1 pb-0">
            <div @="{mouseenter: aboutDisplay,mouseleave: aboutNone}">
              <router-link to="/about" class="nav-link" v-show="aboutIsable">
                <span class="border-bottom border-secondary">關於我們</span>
              </router-link>
              <router-link
                to="/about"
                class="nav-link"
                v-if="aboutIsable === false"
                >About Us
              </router-link>
            </div>
          </li>
          <li class="nav-item me-1 pb-0">
            <div @="{mouseenter: productsDisplay,mouseleave: productsNone}">
              <router-link
                to="/productList"
                class="nav-link"
                v-show="productsIsable"
              >
                <span class="border-bottom border-secondary">產品列表</span>
              </router-link>
              <router-link
                to="/productList"
                class="nav-link"
                v-if="productsIsable === false"
                >Products
              </router-link>
            </div>
          </li>
          <li class="nav-item">
            <div @="{mouseenter: lookbookDisplay,mouseleave: lookbookNone}">
              <router-link
                to="/lookbook"
                class="nav-link"
                v-show="lookbookIsable"
              >
                <span class="border-bottom border-secondary">小雜誌+</span>
              </router-link>
              <router-link
                to="/lookbook"
                class="nav-link"
                v-if="lookbookIsable === false"
                >LookBooks
              </router-link>
            </div>
          </li>
        </ul>
        <div class="me-2">
          <div class="d-flex align-items-center">
            <div
              class="d-flex flex-column align-items-center position-relative"
              role="search"
            >
              <input
                id="search"
                class="search me-0 ps-1 pe-4"
                type="search"
                placeholder="Search"
                aria-label="Search"
                @keyup.enter="getSearch"
                v-model.trim="this.searchKeyword"
              />
              <a href="#" @click.prevent="getSearch">
                <font-awesome-icon
                  class="icons icons-search position-absolute"
                  :icon="['fas', 'magnifying-glass']"
                />
              </a>
            </div>
            <div class="d-none d-lg-block">
              <ul class="navbar-nav d-flex flex-row justify-content-start">
                <!-- 登入清單 -->
                <li
                  class="nav-item ps-4 position-relative"
                  @="{mouseenter: loginDisplay,mouseleave: loginNone}"
                >
                  <a class="nav-link p-0" @click.prevent="userLogin"
                    ><font-awesome-icon
                      class="icons icons_user"
                      :icon="['fas', 'user']"
                    />
                  </a>
                  <!-- 登入 mouse事件    -->
                  <div class="d-flex flex-column cart_login">
                    <div
                      class="text-end pb-2 pt-1"
                      v-show="loginIsable"
                      v-if="
                        userTestSignin.testAccount !== '' &&
                        userTestSignin.testPassword !== ''
                      "
                    >
                      <span class="cart_bagTitle">我的帳戶 </span>
                    </div>

                    <div class="text-end pb-2 pt-1" v-show="loginIsable" v-else>
                      <span class="cart_bagTitle">登入</span>
                    </div>

                    <div
                      class="border border-secondary p-2 bg-white text-secondary"
                      v-show="loginIsable"
                    >
                      <div class="d-flex p-1 searchOrder">
                        <div
                          class="col-lg-12 d-flex flex-column"
                          @click="checkOrders"
                        >
                          <span>MY ORDER</span>
                          <span>訂單查詢</span>
                        </div>
                      </div>
                      <hr class="my-2" />
                      <div
                        class="pb-1 p-1 d-flex flex-column userLogout"
                        @click="userLogout"
                      >
                        <span>LOGOUT</span>
                        <span>登出</span>
                      </div>
                    </div>
                  </div>
                </li>
                <!-- 收藏清單 -->
                <li
                  class="nav-item ps-4 position-relative"
                  @="{mouseenter: favoriteDisplay,mouseleave: favoriteNone}"
                >
                  <a class="nav-link p-0"
                    ><font-awesome-icon
                      class="icons icons_star"
                      :icon="['far', 'star']"
                      @click.prevent="toFavorite"
                    />
                  </a>
                  <!-- badge -->
                  <span
                    class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger box_badge"
                  >
                    {{ favoriteId.length }}
                  </span>
                  <!-- 收藏清單 mouse事件 -->
                  <div class="d-flex flex-column cart_favorite">
                    <span
                      class="text-end cart_bagTitle pb-2 pt-1"
                      v-show="favoriteIsable"
                      >收藏清單</span
                    >
                  </div>
                </li>
                <!-- 購物車 -->
                <li
                  class="nav-item ps-4 position-relative"
                  @="{mouseenter: cartDisplay,mouseleave: cartNone}"
                >
                  <a class="nav-link p-0"
                    ><font-awesome-icon
                      class="icons icons_cart"
                      :icon="['fas', 'cart-shopping']"
                      @click.prevent="toCheckOut"
                    />
                  </a>
                  <!-- badge -->
                  <span
                    class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger box_badge"
                  >
                    {{ productsArr.length }}
                  </span>
                  <!-- 購物車 mouse事件 -->
                  <div class="d-flex flex-column cart_bag">
                    <span
                      class="text-end cart_bagTitle pb-2 pt-1"
                      v-show="cartIsable"
                      >購物車</span
                    >
                    <!-- 購物車無商品時 -->
                    <div
                      class="border border-secondary p-2 bg-white text-center"
                      v-show="cartIsable"
                      v-if="productsArr.length === 0"
                    >
                      <span class="cart_bagContain">目前尚無商品</span>
                      <hr class="mb-0 mt-2" />
                      <div class="pt-3 pb-2 text-center cart_bagCheckOut">
                        CHECK OUT
                      </div>
                    </div>
                    <!-- 購物車有商品時 -->
                    <div
                      class="border border-secondary p-2 bg-white"
                      v-show="cartIsable"
                      v-else
                    >
                      <div
                        class="d-flex"
                        v-for="item in cartBag.carts"
                        :key="item.id"
                      >
                        <div class="col-lg-3">
                          <img
                            class="img-fluid cart_bagImg p-2 pe-0"
                            :src="item.product.images[0]"
                            alt=""
                          />
                        </div>
                        <div
                          class="col-lg-9 d-flex flex-column justify-content-center"
                        >
                          <div class="py-2 cart_bagContain d-flex flex-column">
                            <span class="mb-2">{{ item.product.title }}</span>
                            <span class="">尺寸：{{ item.size }}</span>
                            <span class="">數量：{{ item.qty }}</span>
                          </div>
                        </div>
                      </div>
                      <hr class="mb-0 mt-2" />
                      <div
                        class="pt-3 pb-2 text-center cart_bagCheckOut"
                        @click="toCheckOut"
                      >
                        CHECK OUT
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
// 為了讓Bootstrap的 Navbar 可以正常收合
import 'bootstrap/dist/js/bootstrap.bundle'
import favoriteLocalStorage from '@/mixins/userFavoriteMethod'

export default {
  data() {
    return {
      searchKeyword: '',
      cartBag: {},
      cartIsable: false,
      favoriteIsable: false,
      loginIsable: false,
      aboutIsable: false,
      productsIsable: false,
      lookbookIsable: false,
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
    getSearch() {
      this.$router.replace(`/productList?keyword=${this.searchKeyword}`)
      this.searchKeyword = ''
    },
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
    },
    // mouseenter 顯示購物車列表
    cartDisplay() {
      this.cartIsable = true
      this.getCartOrder()
    },
    // mouseleave 隱藏購物車列表
    cartNone() {
      this.cartIsable = false
    },
    // 顯示收藏清單
    favoriteDisplay() {
      this.favoriteIsable = true
    },
    // 隱藏收藏清單
    favoriteNone() {
      this.favoriteIsable = false
    },
    // 顯示登入資訊
    loginDisplay() {
      this.loginIsable = true
    },
    // 隱藏登入資訊
    loginNone() {
      this.loginIsable = false
    },
    // 關於我中英文字更換
    aboutDisplay() {
      this.aboutIsable = true
    },
    aboutNone() {
      this.aboutIsable = false
    },
    // 產品列表中英文字更換
    productsDisplay() {
      this.productsIsable = true
    },
    productsNone() {
      this.productsIsable = false
    },
    // 小雜誌中英文字更換
    lookbookDisplay() {
      this.lookbookIsable = true
    },
    lookbookNone() {
      this.lookbookIsable = false
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
    this.getFavorite()
  },
  // 不知道為何要加 unmounted 生命週期
  // unmounted() {
  //   this.emitter.off('update_cart', this.getCartOrder)
  // },
  created() {
    this.getCartOrder()
    // this.getFavorite()
  }
}
</script>
