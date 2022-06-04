<template>
  <div class="container-fluid">
    <div class="row">
      <NavBar v-model:search="productSearch" />
    </div>
  </div>

  <div class="container-fluid mt-4 position-relative px-4">
    <div class="row ms-auto">
      <div class="col-lg-2 col-md-3 col-sm-12 mb-3">
        <ul class="list-group">
          <a
            href="#"
            class="list-group-item list-group-item-action"
            @click.prevent="filterProductAll"
          >
            全部商品
          </a>
          <a
            href="#"
            class="list-group-item list-group-item-action"
            @click.prevent="filterProductCloth"
          >
            上身類
          </a>
          <a
            href="#"
            class="list-group-item list-group-item-action"
            @click.prevent="filterProductPants"
          >
            下身類
          </a>
          <a
            href="#"
            class="list-group-item list-group-item-action"
            @click.prevent="filterProductHats"
          >
            帽子
          </a>
          <a
            href="#"
            class="list-group-item list-group-item-action"
            @click.prevent="filterProductPack"
          >
            包包
          </a>
          <a
            href="#"
            class="list-group-item list-group-item-action"
            @click.prevent="filterProductShoes"
          >
            鞋 / 襪
          </a>
        </ul>
      </div>

      <div class="col-lg-10 col-md-9 col-sm-12 mb-4">
        <div class="container">
          <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="link-dark">首頁</router-link>
              </li>
              <li class="breadcrumb-item active">產品列表</li>
              <li class="breadcrumb-item active" aria-current="page">
                全部商品
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
                    @click.prevent="intoProduct(item.id)"
                  />
                </div>
                <!-- <div class="favorite position-absolute top-0 end-0 pe-3 pt-2">
                  <a href="">最愛</a>
                </div> -->
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
                  <div class="product-more">
                    <a href="" class="link-dark"
                      ><font-awesome-icon
                        class="icons icons-cart me-2"
                        :icon="['fas', 'cart-shopping']"
                      />
                      加到購物車</a
                    >
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
  <ToastMessages />
</template>

<script>
import NavBar from '@/components/user/UserNavBar.vue'
import emitter from '@/methods/emitter'
import ToastMessages from '@/components/ToastMessages.vue'
// 將側邊商品的篩選功能匯入並加到 mixins裡
import userFilterProduct from '@/mixins/userFilterProduct'

export default {
  components: { NavBar, ToastMessages },
  data() {
    return {
      products: [],
      productSearch: '',
      filterProducts: []
    }
  },
  provide() {
    return {
      emitter
    }
  },
  watch: {
    productSearch() {
      this.filterProducts = this.products.filter((item) => {
        return item.title.match(this.productSearch)
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
            console.log(res.data)
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
      this.$router.push(`/ProductList/${id}`)
    }
  },
  mixins: [userFilterProduct], // 將側邊商品的篩選功能
  created() {
    this.getProduct()
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
