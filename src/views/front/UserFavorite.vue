<template>
  <OverLoading :active="isLoading"></OverLoading>
  <ToastMessages class="top-10 end-0 me-3" />

  <div class="p-4 d-flex justify-content-center">
    <!-- 桌機、平板 -->
    <div
      class="col-lg-7 col-md-10 mb-3 px-2 d-none d-md-block d-lg-block"
      style="height: 100vh"
    >
      <div class="row px-5 py-3 bg-light align-items-center">
        <span class="col-md-3 fs-3 fw-semibold px-0 pb-1">Favorite </span>
        <span class="col text-secondary">我的收藏</span>
      </div>
      <div
        class="row d-flex justify-content-center p-5 bg-light"
        v-if="favoriteItems.length === 0"
      >
        目前尚無收藏
      </div>

      <div
        class="row pt-2 justify-content-center bg-light favorite_text"
        v-for="item in favoriteItems"
        :key="item.id"
      >
        <div class="col-md-2 pe-0">
          <img
            class="img-fluid favorite_img p-2 mb-2"
            :src="item.images[0]"
            alt=""
            @click="intoProduct(item.id)"
          />
        </div>

        <div class="col-md-6 d-flex flex-column p-2 ps-0">
          <div class="mb-1 mt-1">
            <span class="me-2">{{ item.title }}</span>
          </div>
          <span class="">單價 NT.{{ $filters.currency(item.price) }}</span>
        </div>

        <div class="col-md-3 p-2">
          <div class="col d-flex justify-content-between">
            <button
              class="btn btn-outline-secondary btn-sm"
              @click="openCartModal(item)"
            >
              Add to Cart
            </button>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              @click="deleteFavorite(item.id)"
            >
              <i class="bi bi-trash3"></i>
            </button>
          </div>
        </div>
        <hr class="col-md-11 mx-auto mt-1" />
      </div>

      <div class="d-flex justify-content-center mt-4">
        <button class="btn btn-secondary btn-sm" @click="goShopping">
          Continu Shopping
        </button>
      </div>
    </div>

    <!-- 手機顯示 -->
    <div class="col-12 mb-3 px-2 d-block d-sm-none" style="height: 100vh">
      <div class="row px-2 py-3 bg-light align-items-center">
        <span class="col-4 fs-3 fw-semibold pb-1">Favorite </span>
        <span class="col text-secondary">我的收藏</span>
      </div>
      <div
        class="row d-flex justify-content-center p-5 bg-light"
        v-if="favoriteItems.length === 0"
      >
        目前尚無收藏
      </div>

      <div
        class="row pt-2 justify-content-center bg-light favorite_text"
        v-for="item in favoriteItems"
        :key="item.id"
      >
        <div class="col-3 pe-0">
          <img
            class="img-fluid favorite_img p-2 mb-2"
            :src="item.images[0]"
            alt=""
            @click="intoProduct(item.id)"
          />
        </div>

        <div class="col-9 d-flex flex-column p-2 ps-2">
          <div class="mb-1 mt-1">
            <span class="me-2">{{ item.title }}</span>
          </div>
          <span class="">單價 NT.{{ $filters.currency(item.price) }}</span>
        </div>

        <div class="col-12 p-2 pt-0">
          <div class="col d-flex justify-content-end">
            <button
              class="btn btn-outline-secondary btn-sm me-3"
              @click="openCartModal(item)"
            >
              Add to Cart
            </button>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm me-2"
              @click="deleteFavorite(item.id)"
            >
              <i class="bi bi-trash3"></i>
            </button>
          </div>
        </div>
        <hr class="col-md-11 mx-auto mt-1" />
      </div>

      <div class="d-flex justify-content-center mt-4">
        <button class="btn btn-secondary btn-sm" @click="goShopping">
          Continu Shopping
        </button>
      </div>
    </div>
  </div>
  <Footer />
  <CartModal ref="cartModal" :product="product" @add-toCart="addToCart" />
</template>

<script>
import favoriteLocalStorage from '@/mixins/userFavoriteMethod'
import CartModal from '@/components/user/FavoriteToCartModal.vue'
import ToastMessages from '@/components/ToastMessages.vue'
import Footer from '@/components/user/UserFooter.vue'

export default {
  components: { CartModal, ToastMessages, Footer },
  inject: ['emitter'],
  data() {
    return {
      favoriteId: [], // 取得儲存LocalStorage裡的ID
      favoriteItems: [], // 儲存api回應的商品資料
      isLoading: false,
      product: {} // 單一產品
    }
  },
  methods: {
    // 取得我的最愛
    getFavorite() {
      // 先執行取得LocalStorage裡的ID
      this.favoriteId = this.getLocalStorage()
      this.favoriteItems = [] // 設定favoriteItems為空陣列
      if (this.favoriteId.length) {
        // 取得每一筆ID商品的資料 (這裡的item＝ID)
        this.favoriteId.forEach((item) => {
          const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${item}`
          this.isLoading = true
          this.$http
            .get(url)
            .then((res) => {
              // console.log(res)
              setTimeout(() => {
                this.isLoading = false
              }, 500)
              if (res.data.success) {
                this.favoriteItems.push(res.data.product)
                this.product = res.data.product
                // console.log(this.favoriteItems)
              }
            })
            .catch((err) => {
              console.log(err.response)
            })
        })
      }
    },
    // 刪除我的最愛
    deleteFavorite(itemId) {
      const num = this.favoriteId.indexOf(itemId)
      this.favoriteId.splice(num, 1)
      // 根據前面刪除favoriteId[]裡的ID後，再刪除LocalStorage
      this.deleteLocalStorage(this.favoriteId)
      // 重新取的最愛列表
      this.getFavorite()
    },
    // 進入指定商品頁
    intoProduct(productId) {
      this.$router.push(`/productList/${productId}`)
    },
    goShopping() {
      this.$router.push('/productList')
    },
    // 開啟加入購物車 Modal
    openCartModal(item) {
      this.product = { ...item }
      this.$refs.cartModal.showModel()
    },
    // 加入購物車server
    addToCart(favorite, qty, size) {
      qty = favorite.qtyNumber
      size = favorite.likeSelectSize
      const cart = { product_id: this.product.id, qty, size }
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http
        .post(url, { data: cart })
        .then((res) => {
          // console.log(res)
          this.$httpMessageState(res, '加入購物車')
          // this.$refs.cartModal.hideModal()
        })
        .catch((err) => {
          console.log(err.response)
        })
    }

    // 取得回傳從localStorage裡取出來的ID
    // getLocalStorage() {
    //   return JSON.parse(localStorage.getItem('favorites'))
    // },
    // 刪除後更新localStorage裡資料
    // deleteLocalStorage(itemsId) {
    //   const favoritesId = JSON.stringify(itemsId)
    //   localStorage.setItem('favorites', favoritesId)
    // }
  },
  mixins: [favoriteLocalStorage],
  created() {
    this.getFavorite()
  }
}
</script>

<style lang="scss">
.favorite_text {
  font-size: 0.9rem;
}
.favorite_img {
  max-width: 80px;
  cursor: pointer;
}
</style>
