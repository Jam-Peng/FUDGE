<template>
  <OverLoading :active="isLoading"></OverLoading>
  <div class="shadow-sm p-3 mt-2 bg-body rounded">
    <div>
      <div class="d-flex justify-content-between px-3">
        <p class="fs-3">商品管理表</p>
        <span
          ><button
            class="btn btn-primary mt-1"
            type="button"
            @click="openModal(true)"
          >
            新增商品
          </button></span
        >
      </div>

      <table class="table mt-2 align-middle">
        <thead>
          <tr>
            <th width="70" class="text-center">品項</th>
            <th width="120">分類</th>
            <th width="150">商品名稱</th>
            <th width="120" class="text-center">原價</th>
            <th width="120" class="text-center">售價</th>
            <th width="120" class="text-center">是否啟用</th>
            <th width="200">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in products" :key="product.id">
            <td class="text-center">{{ index + 1 }}</td>
            <td>{{ product.category }}</td>
            <td>{{ product.title }}</td>
            <td class="text-center">
              {{ $filters.currency(product.origin_price) }}
            </td>
            <td class="text-center">{{ $filters.currency(product.price) }}</td>
            <td class="text-center">
              <span class="text-success" v-if="product.is_enabled">啟用</span>
              <span class="text-muted" v-else>未啟用</span>
            </td>
            <td>
              <div class="btn-group">
                <button
                  class="btn btn-outline-primary btn-sm"
                  @click="openModal(false, product)"
                >
                  編輯
                </button>
                <button
                  class="btn btn-outline-danger btn-sm"
                  @click="openDeleteModal(product)"
                >
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <ProductModal
    ref="ProductModal"
    :product="tempProduct"
    @updat-Product="updatProduct"
  />
  <DeleteModal
    ref="DeleteProductModal"
    :del-Product="tempProduct"
    @emit-delete="deleteProductModal"
  />
  <PagiNation
    :pages="pagination"
    @emit-Page="getProudcts"
    @emit-Pre="getProudcts"
    @emit-Next="getProudcts"
  />
</template>

<script>
import ProductModal from '../components/ProductModal.vue'
import DeleteModal from '../components/DeleteModal.vue'
import PagiNation from '@/components/PagiNation.vue'

export default {
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false
    }
  },
  components: { ProductModal, DeleteModal, PagiNation },
  inject: ['emitter'],
  methods: {
    // 取得商品列表
    getProudcts(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`
      this.isLoading = true
      this.$http
        .get(api)
        .then((res) => {
          // console.log(res)
          // this.isLoading = false  改成使用 setTimeout
          setTimeout(() => {
            this.isLoading = false
          }, 500)
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
    // 打開新增或編輯 Modal
    openModal(isNew, item) {
      // console.log(isNew, item)
      if (isNew) {
        this.tempProduct = {}
      } else {
        this.tempProduct = { ...item }
      }
      this.isNew = isNew
      const modalComponent = this.$refs.ProductModal
      modalComponent.showModel()
    },
    // 新增商品與更新商品、傳遞吐司元件資料
    updatProduct(data) {
      this.tempProduct = data
      // 新增狀態
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`
      let httpMethod = 'post'
      // 編輯狀態
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${data.id}`
        httpMethod = 'put'
      }
      // 發送API
      this.$http[httpMethod](api, { data: this.tempProduct })
        .then((res) => {
          // console.log(res)
          this.$refs.ProductModal.hideModal()
          this.getProudcts()
          // 全域屬性發送吐司訊息
          this.$httpMessageState(res)
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    // 打開刪除商品Ｍodal
    openDeleteModal(item) {
      this.tempProduct = item
      // console.log(this.$refs.DeleteProductModal)
      const delProductModal = this.$refs.DeleteProductModal
      delProductModal.showModel()
    },
    // 刪除商品
    deleteProductModal() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`
      this.$http
        .delete(url)
        .then((res) => {
          this.$refs.DeleteProductModal.hideModal()
          this.getProudcts()
          // 全域屬性發送吐司訊息
          this.$httpMessageState(res, '刪除商品成功')
        })
        .catch((err) => {
          console.log(err.response)
        })
    }
  },
  created() {
    this.getProudcts()
  }
}
</script>
