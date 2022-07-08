<template>
  <div
    class="container-fluid position-sticky top-0 start-0"
    style="z-index: 1000"
  >
    <div class="row">
      <NavBar />
      <!-- v-model:search="productSearch" -->
    </div>
  </div>

  <div class="container-fluid mt-4 position-relative px-4">
    <div class="row ms-auto">
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
              <li class="breadcrumb-item text-secondary">
                WE FOUND {{ keywordProudct.length }} RESULTS FOR "
                {{ keyWord }} "
              </li>
            </ol>
          </nav>
        </div>

        <div class="container">
          <div class="row row-cols-2 row-cols-md-2 row-cols-lg-4">
            <div class="col" v-for="item in filterProducts" :key="item.id">
              <div class="position-relative">
                <div>
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
                  <div class="product-cart">
                    <a
                      href=""
                      class="link-dark"
                      @click.prevent="addToCart(item.id)"
                      ><font-awesome-icon
                        class="icons icons-cart me-2"
                        :icon="['fas', 'cart-shopping']"
                      />
                      加到購物車
                    </a>
                  </div>
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

// 將側邊商品的篩選功能匯入並加到 mixins裡
import userFilterProduct from '@/mixins/userFilterProduct'
import SideBar from '@/components/user/SideBar.vue'

export default {
  components: { NavBar, SideBar },
  data() {
    return {
      products: [],
      filterProducts: [],
      breadcrumb: '全部商品',
      category: '',
      size: '',
      keyWord: ''
    }
  },
  provide() {
    return {
      emitter
    }
  },
  watch: {
    // 監聽搜尋的值，執行篩選
    keywordProudct() {
      this.filterProducts = this.keywordProudct
    }
  },
  computed: {
    // 執行關鍵字的商品篩選
    keywordProudct() {
      return this.products.filter((item) => {
        return item.title.match(this.keyWord)
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
  },
  mixins: [userFilterProduct], // 將側邊商品的篩選功能

  created() {
    this.getProduct()
    // 取得 UserNavBar中的 search關鍵字
    this.keyWord = this.$route.query.keyword

    // console.log(this.$route)
  }
}
</script>
