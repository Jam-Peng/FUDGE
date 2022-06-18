<template>
  <div class="container-fluid">
    <div class="row">
      <NavBar />
    </div>
  </div>
  <div class="container mt-4">
    <div class="row">
      <!-- Check out步驟 -->
      <div class="col-lg-12 mb-2">
        <ul class="row row-cols-md-4 justify-content-center">
          <li
            class="col bg-light d-flex justify-content-star align-items-center rounded py-2"
          >
            <div class="d-flex align-self-center fs-2 fw-semibold ps-2">01</div>
            <div class="d-flex flex-column px-3">
              <span class="step_text">確認清單及付款方式</span>
              <span class="step_text">Check & Payment </span>
            </div>
          </li>
          <li
            class="col bg-light d-flex justify-content-star align-items-center rounded mx-4"
          >
            <div class="d-flex align-self-center fs-2 fw-semibold ps-2">02</div>
            <div class="d-flex flex-column px-3">
              <span class="step_text">填寫訂購資料</span>
              <span class="step_text">Shipping info</span>
            </div>
          </li>
          <li
            class="col bg-light d-flex justify-content-star align-items-center rounded"
          >
            <div class="d-flex align-self-center fs-2 fw-semibold ps-2">03</div>
            <div class="d-flex flex-column step_text px-3">
              <span>完成購物</span>
              <span>Order completed</span>
            </div>
          </li>
        </ul>
      </div>

      <div class="row justify-content-evenly">
        <!-- 左邊購物車列表 -->
        <div class="col-lg-6 mb-3 px-2">
          <div class="row fs-3 fw-semibold px-5 py-3 bg-light">
            Shopping Cart
          </div>

          <div
            class="row pt-2 border-bottom justify-content-center bg-light"
            v-for="item in cart.carts"
            :key="item.id"
          >
            <div class="col-md-2">
              <img
                class="img-fluid cart_img p-2 mb-2"
                :src="item.product.images[0]"
                alt=""
              />
            </div>

            <div class="col-md-6 d-flex flex-column step_text p-2">
              <div class="mb-3 mt-1">
                <span class="me-2">商品</span>
                <span class="text-secondary">{{ item.size }}</span>
              </div>
              <span class="price_text mt-1"
                >單價 NT.{{ $filters.currency(item.product.price) }}</span
              >
              <span class="price_text"
                >小計 NT.{{ $filters.currency(item.total) }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/user/UserNavBar.vue'

export default {
  components: { NavBar },
  data() {
    return {
      cart: {},
      total: 0,
      paymentMethod: '', // 選擇付費方式
      deliverMethod: '宅配', // 預設選擇運送方式
      loaction: '', // 取貨門市
      shippingFee: 80, // 預設運費
      finalPayTotal: '' // 最後應付金額
    }
  },
  watch: {
    total() {
      if (this.total >= 1000) {
        this.shippingFee = 0
        this.finalPayTotal = this.total
      }
      this.finalPayTotal = this.total + this.shippingFee
    }
  },
  methods: {
    // 取得購物車列表
    getCheckOut() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http
        .get(url)
        .then((res) => {
          // console.log(res)
          if (res.data.success) {
            this.cart = res.data.data
            this.total = this.cart.total
            // 判斷運費的計算
            if (this.total < 1000) {
              this.shippingFee = 80
            }
          }
          // console.log(this.cart)
        })
        .catch((err) => {
          console.log(err.response)
        })
    }
  },
  created() {
    this.getCheckOut()
  }
}
</script>
