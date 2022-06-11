<template>
  <div class="container-fluid">
    <div class="row">
      <NavBar />
    </div>
  </div>

  <div class="container-fluid mt-4 position-relative px-4">
    <div class="row ms-auto">
      <div class="col-lg-2 col-md-3 col-sm-12 mb-3">
        <!-- 側邊sideBar -->
        <SideBar
          @emit-All="filterProductAll"
          @emit-Clothes="filterProductCloth"
          @emit-Pants="filterProductPants"
          @emit-Hats="filterProductHats"
          @emit-Pack="filterProductPack"
          @emit-Shoes="filterProductShoes"
          :category="category"
        />
      </div>

      <div class="col-lg-10 col-md-9 col-sm-12 mb-4">
        <div class="container">
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
              <li class="breadcrumb-item active" aria-current="page">
                {{ category }}
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
                    <!--單一讀取效果 Spinner -->
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
import SideBar from '@/components/user/SideBar.vue'
import userFilterProduct from '@/mixins/userFilterProduct'

export default {
  components: { NavBar, SideBar },
  data() {
    return {
      products: [],
      productSearch: '',
      filterProducts: [],
      breadcrumb: '全部商品',
      size: '',
      category: ''
    }
  },
  provide() {
    return {
      emitter
    }
  },
  watch: {
    categoryProduct() {
      this.filterProducts = this.categoryProduct
    }
  },
  computed: {
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
    // 傳遞分類的參數
    // productCategory() {
    //   emitter.emit('sendCategory', this.category)
    //   this.$router.push('/productList')
    // }
  },
  mixins: [userFilterProduct],
  created() {
    this.getProduct()
    // 從單一指定商品的類別中將類別的參數經路由搜尋參數過來
    this.category = this.$route.query.category
    // console.log(this.category)
  }
}
</script>
