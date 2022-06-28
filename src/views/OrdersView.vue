<template>
  <div class="shadow-sm p-3 mt-2 bg-body rounded">
    <div class="d-flex justify-content-between px-3">
      <p class="fs-3">訂單管理表</p>
    </div>

    <table class="table mt-2 align-middle">
      <thead>
        <tr>
          <th class="text-center">購買時間</th>
          <th>訂單編號</th>
          <th>購買款項</th>
          <th class="text-center">應付金額</th>
          <th width="120" class="text-center">是否付款</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id">
          <td class="text-center">{{ $filters.date(order.create_at) }}</td>
          <td><span v-text="order.id"></span></td>
          <td>
            <ul
              class="list-unstyled itemContain_text"
              v-for="item in order.products"
              :key="item.id"
            >
              <li>{{ item.product.title }}</li>
              <li>
                <span class="me-4">數量：{{ item.qty }}</span>
                <span>尺寸：{{ item.size }}</span>
              </li>
            </ul>
          </td>
          <td class="text-center" v-if="order.user.originalTotal < 1000">
            {{ $filters.currency(order.total + shippingFee) }}
          </td>
          <td class="text-center" v-else>
            {{ $filters.currency(order.total) }}
          </td>
          <td>
            <div class="form-check form-switch ps-5">
              <input
                class="form-check-input"
                type="checkbox"
                id="paidSwitch"
                v-model="order.is_paid"
                @change="updatePaid(order)"
              />
              <label class="form-check-label" for="paidSwitch">
                <span v-if="order.is_paid">已付款</span>
                <span v-else>未付款</span>
              </label>
            </div>
          </td>
          <td>
            <div class="btn-group">
              <button
                class="btn btn-outline-primary btn-sm"
                @click="openModal(false, order)"
              >
                檢視
              </button>
              <button
                class="btn btn-outline-danger btn-sm"
                @click="deleteOrderModal(order)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <OrderModal ref="orderModal" :order="tempOrder" />
  <DeleteOrderModal
    ref="deleteModal"
    :delOrder="tempOrder"
    @emit-deleteOrder="deleteOrder"
  />
  <PagiNation
    :pages="pagination"
    @emit-Page="getOrder"
    @emit-Pre="getOrder"
    @emit-Next="getOrder"
  />
</template>

<script>
import OrderModal from '@/components/OrderModal.vue'
import DeleteOrderModal from '@/components/DeleteOrderModal.vue'
import PagiNation from '@/components/PagiNation.vue'

export default {
  data() {
    return {
      orders: [],
      pagination: {},
      tempOrder: {},
      isNew: false,
      isLoading: false,
      shippingFee: 80 // 運費
    }
  },
  components: { OrderModal, DeleteOrderModal, PagiNation },
  methods: {
    // 取得訂單列表
    getOrder(page = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`
      this.$http
        .get(url)
        .then((res) => {
          this.orders = res.data.orders
          this.pagination = res.data.pagination
          // console.log(res.data)
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    // 打開檢視 Modal
    openModal(isNew, item) {
      if (isNew === false) {
        this.tempOrder = { ...item }
        this.$refs.orderModal.showModel()
      }
    },
    // 更新付款狀態
    updatePaid(order) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${order.id}`
      const paid = {
        is_paid: order.is_paid,
        total: order.total
      }
      this.$http
        .put(url, { data: paid })
        .then((res) => {
          this.getOrder()
          this.$httpMessageState(res, '更新付款狀態')
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    // 打開刪除訂單 Modal
    deleteOrderModal(order) {
      this.tempOrder = { ...order }
      this.$refs.deleteModal.showModel()
    },
    // 刪除訂單
    deleteOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`
      this.$http
        .delete(url)
        .then((res) => {
          // console.log(res)
          this.$refs.deleteModal.hideModal()
          this.getOrder()
          this.$httpMessageState(res, '刪除訂單')
        })
        .catch((err) => {
          console.log(err.response)
        })
    }
  },
  created() {
    this.getOrder()
  }
}
</script>

<style lang="scss">
.itemContain_text {
  font-size: 0.9rem;
}
</style>
