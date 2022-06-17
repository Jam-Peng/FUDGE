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
            class="row cartNullMessage d-flex justify-content-center pt-5 bg-light"
            v-if="!cart.total"
          >
            購物車目前尚無商品
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
                <span class="me-2">{{ item.product.title }}</span>
                <span class="text-secondary">{{ item.size }}</span>
              </div>
              <span class="price_text mt-1"
                >單價 NT.{{ item.product.price }}</span
              >
              <span class="price_text">小計 NT.{{ item.total }}</span>
            </div>

            <div class="col-md-3 p-2">
              <select class="form-select mb-2 mt-2">
                <option value="" disabled selected>1</option>
                <option :value="item.qty">{{ item.qty }}</option>
              </select>

              <div class="col d-flex justify-content-between">
                <button class="btn btn-outline-secondary btn-sm">下次買</button>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click="deleteCartItem(item.id)"
                >
                  <i class="bi bi-trash3"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- 右側付款方式 -->
        <div class="col-lg-5 px-3">
          <div class="fs-3 fw-semibold py-3 px-4 bg-light">Payment Method</div>

          <div class="px-4 py-2 bg-light">
            <div class="d-flex align-items-center p-2 mb-4">
              <span><a class="couponLink me-3" href="">折價卷代碼</a></span>
              <button
                type="button"
                class="btn btn-outline-danger coupon_delete d-flex justify-content-center align-items-center"
              >
                <i class="bi bi-x-lg"></i>
              </button>
            </div>

            <!-- 付款方式 -->
            <div class="border rounded border-secondary p-3 mb-4 payment_list">
              <div class="payment_title">
                <span class="bg-light px-1">付款方式</span>
              </div>
              <div class="form-check pt-1">
                <input
                  type="radio"
                  class="form-check-input"
                  id="creditCard"
                  value="信用卡線上刷卡"
                  v-model="paymentMethod"
                />
                <label class="form-check-label" for="creditCard"
                  >信用卡線上刷卡</label
                >
              </div>
              <div class="form-check">
                <input
                  type="radio"
                  class="form-check-input"
                  id="home_delivery"
                  value="貨到付款(宅配)"
                  v-model="paymentMethod"
                />
                <label class="form-check-label" for="home_delivery"
                  >貨到付款(宅配)</label
                >
              </div>
              <div class="form-check">
                <input
                  type="radio"
                  class="form-check-input"
                  id="market_store"
                  value="貨到付款(超商)"
                  v-model="paymentMethod"
                />
                <label class="form-check-label" for="market_store"
                  >貨到付款(超商)</label
                >
              </div>
            </div>

            <!-- 運送方式 -->
            <div class="border rounded border-secondary p-3 mb-4 payment_list">
              <div class="payment_title">
                <span class="bg-light px-1">運送方式</span>
              </div>

              <select
                class="form-select mb-4 mt-2 step_text"
                v-if="
                  paymentMethod === '' || paymentMethod === '信用卡線上刷卡'
                "
                v-model="deliverMethod"
              >
                <option value="宅配">宅配</option>
                <option value="7-11超商取貨">7-11超商取貨</option>
                <option value="全家超商取貨">全家超商取貨</option>
              </select>

              <select
                class="form-select mb-4 mt-2 step_text"
                v-if="paymentMethod === '貨到付款(宅配)'"
                v-model="deliverMethod"
              >
                <option value="宅配">宅配</option>
              </select>

              <select
                class="form-select mb-4 mt-2 step_text"
                v-if="paymentMethod === '貨到付款(超商)'"
                v-model="deliverMethod"
              >
                <option value="7-11超商取貨">7-11超商取貨</option>
                <option value="全家超商取貨">全家超商取貨</option>
              </select>

              <div
                class="row px-3"
                v-if="
                  paymentMethod === '貨到付款(超商)' || deliverMethod !== '宅配'
                "
              >
                <input
                  class="col-md-12 p-1 mb-2 border rounded-1 border-secondary"
                  type="text"
                  placeholder="尚未選擇門市"
                  v-model="loaction"
                />
                <button
                  class="col-md-3 btn btn-outline-secondary btn-sm ms-auto"
                >
                  選擇門市
                </button>
              </div>
            </div>
          </div>

          <!-- 總金額計算 -->
          <div class="row p-4 pt-2">
            <div class="col-12 step_text text-secondary py-1">
              <div class="row mb-4 px-2">
                <span
                  class="col-md-3 badge text-bg-warning d-flex justify-content-center align-items-center"
                  >免運費</span
                >
                <span class="col-md-9" v-if="total < 1000"
                  >商品金額只差 NT$ {{ 1000 - total }} 可享滿 NT$ 1000免運</span
                >
                <span class="col-md-9" v-else>可享免運</span>
              </div>
              <div class="row mb-1">
                <span class="col">商品總金額</span>
                <span class="col text-end">{{ cart.total }}</span>
              </div>

              <div class="row mb-1">
                <span class="col">電子折價卷</span>
                <span class="col text-end">-0</span>
              </div>

              <div class="row mb-1">
                <span class="col">運費</span>
                <!-- 這裡只是顯示價錢，要在刪除一筆商品後重新取得購物車列表時重新判斷運費 -->
                <span class="col text-end" v-if="total < 1000">{{
                  shippingFee
                }}</span>
                <span class="col text-end" v-else>0</span>
              </div>

              <div class="row mb-2">
                <span class="col">購物金</span>
                <span class="col text-end">-0</span>
              </div>

              <div class="text-end mb-4">
                <span class="me-2"> 總金額:</span>
                <span class="fs-2">NT.{{ finalPayTotal }}</span>
              </div>
            </div>

            <div>
              <button class="col-md-12 btn btn-secondary btn-sm px-2">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 參考範例 -->
  <div class="">
    <div class="sticky-top">
      <table class="table align-middle">
        <thead>
          <tr>
            <th></th>
            <th>品名</th>
            <th style="width: 110px">數量</th>
            <th>單價</th>
          </tr>
        </thead>

        <tbody>
          <template v-if="cart.carts">
            <tr v-for="item in cart.carts" :key="item.id">
              <td>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click="removeCartItem(item.id)"
                >
                  刪除
                </button>
              </td>
              <td>
                {{ item.product.title }}
                <div class="text-success">v-if="item.coupon"已套用優惠券</div>
              </td>
              <td>
                <div class="input-group input-group-sm">
                  <input
                    type="number"
                    class="form-control"
                    v-model.number="item.qty"
                  />
                  <div class="input-group-text">{{ item.product.unit }}</div>
                </div>
              </td>
              <td class="text-end">
                <small class="text-success">
                  v-if="cart.final_total !== cart.total"折扣價：</small
                >
                {{ $filters.currency(item.final_total) }}
              </td>
            </tr>
          </template>
        </tbody>

        <tfoot>
          <tr>
            <td colspan="3" class="text-end">總計</td>
            <td class="text-end">{{ $filters.currency(cart.total) }}</td>
          </tr>
          <tr v-if="cart.final_total !== cart.total">
            <td colspan="3" class="text-end text-success">折扣價</td>
            <td class="text-end text-success">
              {{ $filters.currency(cart.final_total) }}
            </td>
          </tr>
        </tfoot>
      </table>
      <div class="input-group mb-3 input-group-sm">
        <input type="text" class="form-control" placeholder="請輸入優惠碼" />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="addCouponCode"
          >
            套用優惠碼
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- 參考範例 end -->
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
          // console.log(this.total)
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    // 刪除特定一筆購物車資料
    deleteCartItem(id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.$http.delete(url).then((res) => {
        if (res.data.success) {
          this.getCheckOut()
        }
      })
    }
  },
  created() {
    this.getCheckOut()
  }
}
</script>

<style lang="scss">
ul {
  list-style-type: none;
}
.step_text {
  font-size: 0.9rem;
}
.price_text {
  font-size: 0.85rem;
}
.cart_img {
  max-width: 80px;
}
.cartNullMessage {
  height: 150px;
  font-size: 0.95rem;
}
.couponLink {
  text-decoration: none;
  font-size: 0.9rem;
}
.coupon_delete {
  height: 25px;
  width: 25px;
}
.payment_list {
  position: relative;
  font-size: 0.9rem;
  .payment_title {
    position: absolute;
    top: -15px;
  }
}
</style>
