<template>
  <div class="container-fluid">
    <div class="row">
      <NavBar />
    </div>
  </div>
  <ToastMessages class="top-10 end-0 me-3" />
  <div class="container mt-4 position-relative px-4">
    <div class="row">
      <!-- breadcrumb麵包屑 -->
      <div class="container px-3">
        <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
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
      <div class="col-lg-8 mb-3 px-3">
        <div class="" v-for="img in product.images" :key="img">
          <img :src="img" class="img-fluid img-default mb-4" alt="..." />
        </div>
      </div>
      <!-- 右邊 -->
      <div class="col-lg-4 px-3">
        <div class="container">
          <div class="row">
            <div class="col">
              <article>
                <div class="mb-4 d-flex">
                  <p class="card-title mb-1">{{ product.title }}</p>
                  <span class="icon-star ms-auto"
                    ><font-awesome-icon class="icons" :icon="['far', 'star']"
                  /></span>
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
                  <div class="col-md-6 px-0">
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
                    class="col-md-6 countSelector rounded-1 d-flex align-items-center w-50 border-secondary"
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
</template>

<script>
import NavBar from '@/components/user/UserNavBar.vue'
import ProductScript from '@/components/user/ProductScript.vue'
import emitter from '@/methods/emitter'
import ToastMessages from '@/components/ToastMessages.vue'

export default {
  components: { NavBar, ProductScript, ToastMessages },
  provide() {
    return { emitter }
  },
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
      sizeGuideImg: '' // 取得最後一張尺寸照片
    }
  },
  methods: {
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
        .catch((err) => {
          console.log(err.response)
        })
    },

    // 加入購物車serve
    addToCart(id, qty, size) {
      qty = this.qtyNumber
      size = this.selectSize
      const cart = { product_id: id, qty, size }
      // const cart = { product_id: id, qty, size }
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.status.loadingItem = id
      this.$http
        .post(url, { data: cart })
        .then((res) => {
          // console.log(res)
          this.status.loadingItem = ''
          this.qtyNumber = 1
          this.selectSize = ''
          this.$httpMessageState(res, '加入購物車')
        })
        .catch((err) => {
          console.log(err.response)
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
    CategoryProduct(category) {
      this.$router.push(`/productList?category=${category}`)
    }
  },
  created() {
    this.id = this.$route.params.productId
    this.getProduct()
  }
}
</script>

<style lang="scss">
.size_select {
  cursor: pointer;
}
.countSelector {
  border: 1px solid #ced4da;
}
.img-default {
  cursor: default;
}
.icons-minus,
.icons-plus,
.skills__header {
  font-size: 1rem;
  cursor: pointer;
}
.icon-star {
  cursor: pointer;
  color: #6f7479;
  :hover {
    color: #ffc107;
  }
}
.size_box {
  font-size: 0.88rem;
  padding: 0.25rem 0.5rem;
}
</style>
