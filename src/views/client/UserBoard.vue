<template>
  <div class="container">
    <div class="row px-lg-3">
      <NavBar />
    </div>
  </div>

  <div class="container mt-4 position-relative px-4">
    <div class="row ms-auto">
      <div class="col col-lg-2 col-md-3 col-sm-12 mb-3">
        <ul class="list-group">
          <li class="list-group-item active">全部商品</li>
          <li class="list-group-item">上半身</li>
          <li class="list-group-item">下半身</li>
          <li class="list-group-item">鞋子</li>
          <li class="list-group-item">飾品</li>
        </ul>
      </div>

      <div class="col col-lg-10 col-md-9 col-sm-12">
        <div class="container">
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
            <div class="col" v-for="item in products" :key="item.id">
              <div class="card">
                <div>
                  <img :src="item.imageUrl" class="card-img-top" alt="..." />
                </div>
                <div class="favorite position-absolute top-0 end-0 pe-3 pt-2">
                  <a href="">最愛</a>
                </div>
                <div class="card-body py-2">
                  <p class="card-title fs-5 mb-0">{{ item.title }}</p>
                  <div class="d-flex align-items-baseline">
                    <p
                      class="card-text text-secondary text-decoration-line-through mb-2"
                    >
                      <!-- <del>$250</del> -->
                      ${{ $filters.currency(item.origin_price) }}
                    </p>
                    <p class="card-text fs-5 text-danger ms-auto">
                      NT ${{ $filters.currency(item.price) }}
                    </p>
                  </div>
                  <div class="product-more fs-6">
                    <a href="" @click.prevent="intoProduct(item.id)">查看更多</a
                    >|

                    <a href="">加到購物車</a>
                  </div>
                </div>
              </div>
            </div>

            <!--  -->
            <!-- <div class="col-md-12">
              <table class="table align-middle">
                <thead>
                  <tr>
                    <th>圖片</th>
                    <th>商品名稱</th>
                    <th>價格</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in products" :key="item.id">
                    <td style="width: 200px">
                      <div
                        style="
                          height: 100px;
                          background-size: cover;
                          background-position: center;
                        "
                        :style="{ backgroundImage: `url(${item.imageUrl})` }"
                      ></div>
                    </td>
                    <td>
                      <a href="#" class="text-dark">{{ item.title }}</a>
                    </td>
                    <td>
                      <div class="h5" v-if="!item.price">
                        {{ item.origin_price }} 元
                      </div>
                      <del class="h6" v-if="item.price"
                        >原價 {{ item.origin_price }} 元</del
                      >
                      <div class="h5" v-if="item.price">
                        現在只要 {{ item.price }} 元
                      </div>
                    </td>
                    <td>
                      <div class="btn-group btn-group-sm">
                        <button type="button" class="btn btn-outline-secondary">
                          查看更多
                        </button>
                        <button type="button" class="btn btn-outline-danger">
                          加到購物車
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div> -->
            <!-- 購物車列表 -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <ToastMessages />
</template>

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
            // console.log(res.data)
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
