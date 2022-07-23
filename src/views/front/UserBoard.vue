<template>
  <div class="container-fluid mt-4 position-relative px-4">
    <div class="row">
      <div class="col-lg-2 col-md-3 col-sm-12 mb-3 position-relative">
        <!-- 側邊sideBar -->
        <div class="sticky_SideBar">
          <ul class="ps-3">
            <li>
              <a
                href="#"
                class="text-secondary"
                @click.prevent="changeCategory('全部商品')"
                >全部商品</a
              >
            </li>
            <li v-for="item in productsCategory" :key="item">
              <a
                href="#"
                class="text-secondary"
                @click.prevent="changeCategory(item)"
                >{{ item }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="col-lg-10 col-md-9 col-sm-12 mb-4">
        <div class="container">
          <nav style="--bs-breadcrumb-divider: '/'" aria-label="breadcrumb">
            <!-- 搜尋結果的顯示 -->
            <ol class="breadcrumb" v-if="keyWord !== ''">
              <li class="breadcrumb-item text-secondary">
                WE FOUND {{ filterData.length }} RESULTS FOR " {{ keyWord }} "
              </li>
            </ol>

            <ol class="breadcrumb" v-else>
              <li class="breadcrumb-item">
                <router-link to="/zh-tw" class="link-dark">首頁</router-link>
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
              <div>
                <div class="position-relative">
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
  <Footer />
</template>

<script>
import Footer from '@/components/user/UserFooter.vue'
import statusStore from '@/stores/statusStores'
import { mapActions } from 'pinia'

export default {
  components: { Footer },
  inject: ['emitter'],
  data() {
    return {
      products: [],
      filterProducts: [],
      breadcrumb: this.$route.query.category || '全部商品',
      category: '',
      keyWord: '', // 搜尋的關鍵字
      productsCategory: [] // 側邊產品類別選項 sideBar
    }
  },
  watch: {
    $route() {
      this.category = this.$route.query.category || ''
      this.keyWord = this.$route.query.keyword || ''
    },
    filterData() {
      this.filterProducts = this.filterData
    }
  },
  computed: {
    filterData() {
      let tempData = []
      const filterProduct = []
      // 依照分類按鈕篩選所有商品
      if (this.category && this.category !== '全部商品') {
        tempData = this.products.filter((item) =>
          item.category?.match(this.category)
        )
      } else if (this.keyWord && this.keyWord !== '') {
        tempData = this.products.filter((item) =>
          item.title?.match(this.keyWord)
        )
      } else {
        tempData = this.products
      }
      tempData.forEach((item) => {
        filterProduct.push(item)
      })
      return filterProduct
    }
  },
  methods: {
    ...mapActions(statusStore, ['pushMessage']),
    // 取得商品列表
    getProduct() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products
            // 將原本的資料放到另一個陣列中 filterProducts 方便做篩選功能
            this.filterProducts = this.products
            this.createCategory()
          }
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    // 進入特定商品詳細頁面
    intoProduct(id) {
      this.$router.push(`/productList/${id}`)
    },
    // 取得側邊產品類別選項
    createCategory() {
      this.products.forEach((item) => {
        if (!this.productsCategory.includes(item.category)) {
          this.productsCategory.push(item.category)
        }
      })
    },
    // 側邊產品類別選項觸發事件取得商品
    changeCategory(selCategory) {
      this.$router.push(`/productList?category=${selCategory}`)
      this.category = selCategory
      this.breadcrumb = selCategory
    }
  },

  mounted() {
    this.category = this.$route.query.category || ''
    // 取得 UserNavBar中的 search關鍵字
    this.keyWord = this.$route.query.keyword || ''
  },

  created() {
    this.getProduct()
  }
}
</script>

//
<style lang="scss">
// .sticky_SideBar {
//   position: sticky;
//   top: 7.6rem;
// }
// img {
//   cursor: pointer;
// }
// p {
//   font-size: 0.9rem;
// }
// ul li {
//   list-style-type: none;
//   padding-bottom: 0.5rem;

//   a {
//     text-decoration: none;
//     font-size: 0.9rem;
//     cursor: pointer;
//   }
// }

// .breadcrumb-item {
//   font-size: 0.9rem;
// }
//
</style>
