<template>
  <div class="container-fluid">
    <div class="row">
      <NavBar />
    </div>
  </div>

  <div class="container-fluid mt-4 position-relative px-4">
    <div class="row ms-auto">
      <div class="col-lg-2 col-md-3 mb-3 col-sm-12">
        <ul class="list-group">
          <li class="list-group-item active">全部商品</li>
          <li class="list-group-item">上半身</li>
          <li class="list-group-item">下半身</li>
          <li class="list-group-item">鞋子</li>
          <li class="list-group-item">飾品</li>
        </ul>
      </div>

      <div class="col-lg-10 col-md-9 col-sm-12 mb-4">
        <nav
          style="--bs-breadcrumb-divider: '>'"
          aria-label="breadcrumb"
          class="px-3"
        >
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/" class="link-dark">首頁</router-link>
            </li>
            <li class="breadcrumb-item active">產品列表</li>
            <li class="breadcrumb-item active" aria-current="page">全部商品</li>
          </ol>
        </nav>

        <div class="container">
          <div class="row row-cols-2 row-cols-md-2 row-cols-lg-4 g-3">
            <div class="col" v-for="item in products" :key="item.id">
              <div class="position-relative">
                <div>
                  <img
                    :src="item.imageUrl"
                    class="card-img-top"
                    alt="..."
                    @click.prevent="intoProduct(item.id)"
                  />
                </div>
                <!-- <div class="favorite position-absolute top-0 end-0 pe-3 pt-2">
                  <a href="">最愛</a>
                </div> -->
                <div class="card-body py-2">
                  <p class="card-title mb-1">{{ item.title }}</p>
                  <div class="d-flex align-items-baseline">
                    <p
                      class="card-text text-secondary text-decoration-line-through mb-2 me-2"
                    >
                      <!-- <del>$250</del> -->
                      NT.{{ $filters.currency(item.origin_price) }}
                    </p>
                    <p class="card-text text-danger">
                      NT.{{ $filters.currency(item.price) }}
                    </p>
                  </div>
                  <div class="product-more fs-6">
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

<style lang="scss">
img {
  cursor: pointer;
}
p {
  font-size: 0.9rem;
}
a {
  text-decoration: none;
  .icons-cart {
    font-size: 1rem;
  }
}
.breadcrumb-item {
  font-size: 0.9rem;
}
</style>

<script>
import NavBar from '@/components/user/UserNavBar.vue'
import emitter from '@/methods/emitter'
import ToastMessages from '@/components/ToastMessages.vue'

export default {
  components: { NavBar, ToastMessages },
  data() {
    return {
      products: [],
      pagination: {}
    }
  },
  provide() {
    return {
      emitter
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
            this.pagination = res.data.pagination
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
  created() {
    this.getProduct()
  }
}
</script>
