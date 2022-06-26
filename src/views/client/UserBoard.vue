<template>
  <div class="container-fluid">
    <div class="row">
      <NavBar />
    </div>
  </div>
  <ToastMessages class="top-10 end-0 me-3" />
  <div class="container-fluid mt-4 position-relative px-4">
    <div class="row">
      <div class="col-lg-2 col-md-3 col-sm-12 mb-3">
        <!-- 側邊sideBar -->
        <SideBar
          @emit-All="filterProductAll"
          @emit-Clothes="filterCategory"
          @emit-Pants="filterCategory"
          @emit-Hats="filterCategory"
          @emit-Pack="filterCategory"
          @emit-Shoes="filterCategory"
          :breadcrumb="breadcrumb"
        />
      </div>

      <div class="col-lg-10 col-md-9 col-sm-12 mb-4">
        <div class="container">
          <nav style="--bs-breadcrumb-divider: '/'" aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="link-dark">首頁</router-link>
              </li>

              <li class="breadcrumb-item active">產品列表</li>

              <li class="breadcrumb-item active" aria-current="page">
                {{ breadcrumb }}
              </li>
            </ol>
          </nav>
        </div>

        <div class="container">
          <div class="row row-cols-2 row-cols-md-2 row-cols-lg-4">
            <div class="col" v-for="item in filterProducts" :key="item.id">
              <div class="position-relative">
                <div>
                  <div
                    class="position-absolute text-white fw-semibold d-flex align-items-center justify-content-center"
                    style="
                      top: 0;
                      bottom: 0;
                      left: 0;
                      right: 0;
                      background-color: rgba(0, 0, 0, 0.5);
                      z-index: 100;
                    "
                    v-if="!item.size"
                  >
                    SOLD OUT
                  </div>
                  <img
                    :src="item.images[0]"
                    class="card-img-top"
                    alt="..."
                    @click="intoProduct(item.id)"
                  />
                </div>

                <div class="card-body py-2 mb-5">
                  <p class="card-title mb-1">{{ item.title }}</p>
                  <div class="d-flex align-items-baseline">
                    <p class="card-text mb-1 text-secondary">
                      {{ item.size }}
                    </p>
                  </div>

                  <div class="d-flex align-items-baseline">
                    <p
                      class="card-text text-secondary text-decoration-line-through mb-1 me-2"
                      v-if="item.origin_price !== item.price"
                    >
                      <!-- <del>$250</del> -->
                      NT.{{ $filters.currency(item.origin_price) }}
                    </p>
                    <p class="card-text text-danger">
                      NT.{{ $filters.currency(item.price) }}
                    </p>
                  </div>
                  <!-- 刪除加到購物車功能 -->
                  <!-- <div class="product-cart">
                    <a
                      href=""
                      class="link-dark"
                      @click.prevent="addToCart(item.id)"
                      :disabled="this.status.loadingItem === item.id"
                      ><font-awesome-icon
                        class="icons icons-cart me-2"
                        :icon="['fas', 'cart-shopping']"
                      />
                      加到購物車
                    </a> -->
                  <!--單一讀取效果 Spinner -->
                  <!-- <div
                      class="spinner-grow spinner-grow-sm text-success ms-2"
                      role="status"
                      v-if="this.status.loadingItem === item.id"
                    >
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </div> -->
                </div>
              </div>
            </div>
            <!-- 購物車區塊 -->
          </div>
        </div>
      </div>
      <!-- 購物車底 -->
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/user/UserNavBar.vue'
import emitter from '@/methods/emitter'
import ToastMessages from '@/components/ToastMessages.vue'
// 將側邊商品的篩選功能匯入並加到 mixins裡
import userFilterProduct from '@/mixins/userFilterProduct'
import SideBar from '@/components/user/SideBar.vue'

export default {
  components: { NavBar, ToastMessages, SideBar },
  data() {
    return {
      products: [],
      // productSearch: '',
      filterProducts: [],
      breadcrumb: '全部商品',
      category: '',
      status: {
        loadingItem: '' // 狀態對應品項的 id
      }
    }
  },
  provide() {
    return {
      emitter
    }
  },
  watch: {
    // 渲染篩選的商品類別 這個判斷是為了讓全部商品的active可以正常運作
    categoryProduct() {
      this.filterProducts = this.categoryProduct
      if (this.category !== undefined) {
        this.breadcrumb = this.category
      }
    }
  },
  computed: {
    // 單一指定商品的麵包屑類別點選進來時，篩選對應的類別商品
    categoryProduct() {
      return this.products.filter((item) => {
        return item.category.match(this.category)
      })
    }
  },
  methods: {
    // 取得商品列表
    getProduct() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            // console.log(res.data)
            this.products = res.data.products
            // 將原本的資料放到另一個陣列中 filterProducts 方便做篩選功能
            this.filterProducts = this.products
          }
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    // 進入特定商品詳細頁面
    intoProduct(id) {
      this.$router.push(`/productList/${id}`)
    }
    // 加入購物車serve
    // addToCart(id, qty = 1) {
    //   const cart = { product_id: id, qty }
    //   const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
    //   this.status.loadingItem = id
    //   this.$http
    //     .post(url, { data: cart })
    //     .then((res) => {
    //       // console.log(res)
    //       this.status.loadingItem = ''
    //       this.$httpMessageState(res, '加入購物車')
    //     })
    //     .catch((err) => {
    //       console.log(err.response)
    //     })
    // }
  },
  mixins: [userFilterProduct], // 將側邊商品的篩選功能
  created() {
    this.getProduct()
    // 從單一指定商品的類別中將類別的參數經路由搜尋參數過來
    this.category = this.$route.query.category
  }
}
</script>

<style lang="scss">
img {
  cursor: pointer;
}
p {
  font-size: 0.9rem;
}
a {
  text-decoration: none;
  font-size: 0.9rem;
  cursor: pointer;
  .icons-cart {
    font-size: 0.9rem;
  }
}
.breadcrumb-item {
  font-size: 0.9rem;
}
</style>
