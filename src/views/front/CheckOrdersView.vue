<template>
  <!-- 桌機 -->
  <div class="container-fluid d-none d-lg-block">
    <div class="row p-4 pb-1 justify-content-center">
      <div class="col-lg-10 col-md-12 bg-light mb-2">
        <table class="table mt-2 align-middle checkOrder_text">
          <thead>
            <tr>
              <td class="text-center">購買時間</td>
              <td>訂單編號</td>
              <td>購買款項</td>
              <td class="text-center">總金額</td>
              <td width="120" class="text-center">是否付款</td>
              <td class="text-center">查詢訂單</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in orders" :key="order.id">
              <td class="text-center">{{ $filters.date(order.create_at) }}</td>
              <td><span></span>{{ order.id }}</td>
              <td>
                <ul
                  class="list-unstyled"
                  v-for="item in order.products"
                  :key="item.id"
                >
                  <li>{{ item.product.title }}</li>
                  <li class="me-4">數量：{{ item.qty }}</li>
                </ul>
              </td>
              <td class="text-center" v-if="order.user.originalTotal < 1000">
                NT.{{ $filters.currency(order.total + shippingFee) }}
              </td>
              <td class="text-center" v-else>
                NT.{{ $filters.currency(order.total) }}
              </td>

              <td>
                <div class="text-center">
                  <label class="form-check-label">
                    <span v-if="order.is_paid">已付款</span>
                    <span class="text-danger" v-else>未付款</span>
                  </label>
                </div>
              </td>
              <td class="text-center">
                <div class="btn-group">
                  <button
                    class="btn btn-outline-secondary btn-sm"
                    @click="checkOneOrder(order.id)"
                  >
                    CHECK
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <!-- 平板 -->
  <div class="container-fluid d-none d-md-block d-lg-none">
    <div class="row p-4 pb-1 justify-content-center">
      <div class="col-lg-10 col-md-12 bg-light mb-2">
        <table class="table mt-2 align-middle checkOrder_text">
          <thead>
            <tr>
              <td class="text-center">購買時間</td>
              <td>訂單編號</td>
              <td>購買款項</td>
              <td width="120" class="text-center">是否付款</td>
              <td class="text-center">查詢訂單</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in orders" :key="order.id">
              <td class="text-center">{{ $filters.date(order.create_at) }}</td>
              <td><span></span>{{ order.id }}</td>
              <td>
                <ul
                  class="list-unstyled"
                  v-for="item in order.products"
                  :key="item.id"
                >
                  <li>{{ item.product.title }}</li>
                  <li class="me-4">數量：{{ item.qty }}</li>
                </ul>
              </td>

              <td>
                <div class="text-center">
                  <label class="form-check-label">
                    <span v-if="order.is_paid">已付款</span>
                    <span class="text-danger" v-else>未付款</span>
                  </label>
                </div>
              </td>
              <td class="text-center">
                <div class="btn-group">
                  <button
                    class="btn btn-outline-secondary btn-sm"
                    @click="checkOneOrder(order.id)"
                  >
                    CHECK
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <!-- 手機顯示 -->
  <div class="container-fluid d-block d-sm-none">
    <div class="row p-3 pb-1 justify-content-center">
      <div class="col-lg-10 col-md-12 bg-light mb-2">
        <table class="table mt-2 align-middle smCheckOrder_text">
          <thead>
            <tr>
              <td class="text-center">購買時間</td>
              <td class="text-center">訂單編號</td>

              <td width="100" class="text-center">是否付款</td>
              <td class="text-center">查詢訂單</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in orders" :key="order.id">
              <td class="text-center">{{ $filters.date(order.create_at) }}</td>
              <td class="text-center">
                <span></span>{{ order.id.slice(1, 9) }}
              </td>

              <td>
                <div class="text-center">
                  <label class="form-check-label">
                    <span v-if="order.is_paid">已付款</span>
                    <span class="text-danger" v-else>未付款</span>
                  </label>
                </div>
              </td>
              <td class="text-center">
                <div class="btn-group">
                  <button
                    class="btn btn-outline-secondary btn-sm"
                    @click="checkOneOrder(order.id)"
                  >
                    CHECK
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <PagiNation
    class="px-0"
    :pages="pagination"
    @emit-Page="getCheckOrder"
    @emit-Pre="getCheckOrder"
    @emit-Next="getCheckOrder"
  />
  <Footer />
</template>

<script>
import PagiNation from '@/components/user/UserPagiNation.vue'
import Footer from '@/components/user/UserFooter.vue'
import statusStore from '@/stores/statusStores'
import { mapActions } from 'pinia'

export default {
  components: { PagiNation, Footer },
  data() {
    return {
      orders: [],
      pagination: {},
      shippingFee: 80
    }
  },
  methods: {
    ...mapActions(statusStore, ['pushMessage']),
    // 取得訂單列表
    getCheckOrder(page = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/orders?page=${page}`
      this.$http
        .get(url)
        .then((res) => {
          // console.log(res)
          this.orders = res.data.orders
          this.pagination = res.data.pagination
        })
        .catch(() => {
          this.pushMessage(false, '讀取', '發生錯誤，請重新整理頁面再試一次')
        })
    },
    // 檢視單一訂單
    checkOneOrder(id) {
      this.$router.push(`/checkOrder/${id}`)
    }
  },
  created() {
    this.getCheckOrder()
  }
}
</script>

<style lang="scss">
body {
  height: 100vh;
}
.checkOrder_text {
  font-size: 0.9rem;
}
.smCheckOrder_text {
  font-size: 0.7rem;
  height: 100vh;
}
</style>
