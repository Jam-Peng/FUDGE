<template>
  <div class="container mt-4 px-4">
    <div class="row position-relative">
      <!-- breadcrumb麵包屑 -->
      <!-- 桌機、平板 -->
      <div class="text-start px-3 d-none d-md-block d-lg-block">
        <nav
          style="--bs-breadcrumb-divider: '>'"
          aria-label="breadcrumb"
          class="col-lg-12 col-md-12 ps-2"
        >
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/" class="link-dark">首頁</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link to="/productList" class="link-dark"
                >產品列表</router-link
              >
            </li>
            <li
              class="breadcrumb-item"
              @click.prevent="CategoryProduct(product.category)"
            >
              <a class="categoryLink link-dark">{{ product.category }}</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              {{ product.title }}
            </li>
          </ol>
        </nav>
      </div>
      <!-- 手機顯示 -->
      <div class="text-start px-4 d-block d-sm-none">
        <nav
          style="--bs-breadcrumb-divider: '>'"
          aria-label="breadcrumb"
          class="col ps-1"
        >
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/" class="link-dark">首頁</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link to="/productList" class="link-dark"
                >產品列表</router-link
              >
            </li>
            <li
              class="breadcrumb-item"
              @click.prevent="CategoryProduct(product.category)"
            >
              <a>{{ product.category }}</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              {{ product.title }}
            </li>
          </ol>
        </nav>
      </div>

      <!-- 左邊照片 -->
      <div class="col-lg-8 mb-3 px-3 order-2 order-sm-2 order-lg-1 order-md-2">
        <div class="" v-for="img in product.images" :key="img">
          <img :src="img" class="img-fluid img-default mb-4" alt="..." />
        </div>
      </div>
      <!-- 右邊 -->
      <div class="col-lg-4 px-3 order-1 order-sm-1 order-lg-2 order-md-1">
        <div class="container sticky_SideInfo">
          <div class="row">
            <div class="col">
              <article>
                <div class="mb-4 d-flex align-items-baseline">
                  <p class="card-title mb-1">{{ product.title }}</p>
                  <span
                    class="icon-star ms-auto"
                    @click="addFavorite(product.id)"
                  >
                    <i
                      class="bi bi-star-fill text-warning"
                      v-if="favoriteItems.includes(product.id)"
                    ></i>
                    <i class="bi bi-star" v-else></i>
                  </span>
                </div>
                <div class="d-flex align-items-baseline">
                  <p
                    class="card-text text-secondary text-decoration-line-through mb-0 me-4"
                    v-if="product.origin_price !== product.price"
                  >
                    NT.{{ $filters.currency(product.origin_price) }}
                  </p>
                  <p class="card-text text-danger">
                    NT.{{ $filters.currency(product.price) }}
                  </p>
                </div>
              </article>
              <hr />
              <!-- 尺寸與數量 -->
              <div>
                <div class="row px-2">
                  <div class="col col-md-6 px-0">
                    <select
                      class="form-select form-select-sm text-center border-secondary size_select"
                      v-model="selectSize"
                    >
                      <option selected disabled value="">SIZE</option>
                      <option v-for="item in sizes" :key="item" :value="item">
                        {{ item }}
                      </option>
                    </select>
                  </div>
                  <div
                    class="col col-md-6 countSelector rounded-1 d-flex align-items-center w-50 border-secondary"
                  >
                    <div
                      class="col d-flex align-items-center justify-content-between"
                    >
                      <font-awesome-icon
                        class="icons icons-minus"
                        :icon="['fas', 'minus']"
                        @click="deleteQty"
                      />
                      <span class="count">{{ qtyNumber }}</span>
                      <font-awesome-icon
                        class="icons icons-plus"
                        :icon="['fas', 'plus']"
                        @click="addQty"
                      />
                    </div>
                  </div>
                  <div class="px-0 my-4" v-if="selectSize === ''">
                    <div
                      class="col-12 size_box border rounded border-secondary text-dark text-center"
                    >
                      請選擇尺寸
                    </div>
                  </div>
                  <div class="px-0 my-4" v-else>
                    <button
                      type="button"
                      class="btn btn-outline-danger btn-sm col-12"
                      :disabled="this.status.loadingItem === product.id"
                      @click="addToCart(product.id)"
                    >
                      加到購物車
                    </button>
                  </div>
                </div>
              </div>
              <!-- 商品資訊 -->
              <div>
                <ProductScript
                  :product="product"
                  :sizeGuideImg="sizeGuideImg"
                />
              </div>
              <!-- 商品資訊 end -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import ProductScript from '@/components/user/ProductScript.vue'
import favoriteLocalStorage from '@/mixins/userFavoriteMethod'
import Footer from '@/components/user/UserFooter.vue'
import statusStore from '@/stores/statusStores'
import { mapActions } from 'pinia'

export default {
  components: { ProductScript, Footer },
  inject: ['emitter'],
  data() {
    return {
      id: '',
      product: {},
      // image: '' // 取得第一張照片
      status: {
        loadingItem: ''
      },
      qtyNumber: 1, // 預設數量為 1
      sizes: [], // 取得所有尺寸
      selectSize: '', // 選擇加到購物車的尺寸
      smallGuide: [],
      middleGuide: [],
      largeGuide: [],
      sizeGuideImg: '', // 取得最後一張尺寸照片
      favoriteItems: this.getLocalStorage() || [] // 我的最愛和LocalStorage
    }
  },
  methods: {
    ...mapActions(statusStore, ['pushMessage']),
    // 取得單一指定商品資料
    getProduct() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`
      this.$http
        .get(url)
        .then((res) => {
          // console.log(res.data)
          if (res.data.success) {
            this.product = res.data.product
            // 分別取出第一張照片和其他照片
            // this.image = res.data.product.images[0]
            // res.data.product.images.shift()
            this.sizeGuideImg = res.data.product.images.pop() // 取最後一張尺寸圖
            this.sizes.push(...this.product.size.split(' '))
            // console.log(this.product)
          }
        })
        .catch(() => {
          // console.log(err.response)
          this.pushMessage(false, '讀取', '發生錯誤，請重新整理頁面再試一次')
        })
    },

    // 加入購物車server 及emitter傳遞觸發事件到UserNavBar
    addToCart(id, qty, size) {
      qty = this.qtyNumber
      size = this.selectSize
      const cart = { product_id: id, qty, size }
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.status.loadingItem = id
      this.$http
        .post(url, { data: cart })
        .then((res) => {
          // console.log(res)
          this.status.loadingItem = ''
          this.qtyNumber = 1
          this.selectSize = ''
          this.pushMessage(res.data.success, '加入購物車', res.data.message)

          // 重新觸發navBar元件的badge數量
          this.emitter.emit('update_cart')
        })
        .catch(() => {
          // console.log(err.response)
          this.pushMessage(false, '加入購物車', '發生錯誤，請重新整理頁面')
        })
    },

    // 增加商品數量
    addQty() {
      this.qtyNumber += 1
    },
    // 減少商品數量
    deleteQty() {
      if (this.qtyNumber > 1) {
        this.qtyNumber -= 1
      }
    },
    // 麵包屑的類別query
    CategoryProduct(category) {
      this.$router.push(`/productList?category=${category}`)
    }

    // 透過Icon將"商品的ID"加入或刪除相同ID到“我的最愛”陣列中，並同時執行更新localstorage
    // addFavorite(productId) {
    //   if (this.favoriteItems.includes(productId)) {
    //     const num = this.favoriteItems.indexOf(productId)
    //     this.favoriteItems.splice(num, 1)
    //   } else {
    //     this.favoriteItems.push(productId)
    //   }
    // 將資料設定到localStorage
    // localStorage.setItem('favorites', JSON.stringify(this.favoriteItems))
    // console.log(this.favoriteItems)
    // },
    // 取得回傳從localStorage裡取出來的ID
    // getLocalStorage() {
    //   return JSON.parse(localStorage.getItem('favorites'))
    // }
  },
  mixins: [favoriteLocalStorage],
  created() {
    this.id = this.$route.params.productId
    this.getProduct()
  }
}
</script>
