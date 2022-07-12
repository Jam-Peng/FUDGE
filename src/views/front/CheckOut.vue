<template>
  <ToastMessages class="top-10 end-0 me-3" />
  <div class="container mt-4">
    <!-- Check out步驟 -->
    <!-- 桌機、平板 -->
    <div class="row mb-2 d-none d-md-block d-lg-block">
      <ul class="d-flex justify-content-evenly ps-0">
        <li
          class="col-lg-3 bg-warning d-flex justify-content-star align-items-center rounded py-2"
        >
          <div class="d-flex align-self-center fs-2 fw-semibold ps-2">01</div>
          <div class="d-flex flex-column px-3">
            <span class="step_text">確認清單及付款方式</span>
            <span class="step_text">Check & Payment </span>
          </div>
        </li>

        <li
          class="col-lg-3 bg-light d-flex justify-content-star align-items-center rounded py-2"
        >
          <div class="d-flex align-self-center fs-2 fw-semibold ps-2">02</div>
          <div class="d-flex flex-column px-3">
            <span class="step_text">填寫訂購資料</span>
            <span class="step_text">Shipping info </span>
          </div>
        </li>

        <li
          class="col-lg-3 bg-light d-flex justify-content-star align-items-center rounded"
        >
          <div class="d-flex align-self-center fs-2 fw-semibold ps-2">03</div>
          <div class="d-flex flex-column step_text px-3">
            <span>完成購物</span>
            <span>Order completed</span>
          </div>
        </li>
      </ul>
    </div>
    <!-- 手機顯示 -->
    <div class="row mb-2 d-block d-sm-none">
      <ul class="d-flex justify-content-center px-0">
        <li
          class="col-9 bg-warning d-flex justify-content-star align-items-center rounded py-2"
        >
          <div class="d-flex align-self-center fs-2 fw-semibold ps-2">01</div>
          <div class="d-flex flex-column px-3">
            <span class="step_text">確認清單及付款方式</span>
            <span class="step_text">Check & Payment </span>
          </div>
        </li>
      </ul>
    </div>

    <div class="row justify-content-evenly">
      <!-- 左邊購物車列表 -->
      <!-- 桌機、平板 -->
      <div class="col-lg-6 col-md-11 mb-3 px-2 d-none d-md-block d-lg-block">
        <div class="row fs-3 fw-semibold px-5 py-3 bg-light">Shopping Cart</div>
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
              >單價 NT.{{ $filters.currency(item.product.price) }}</span
            >
            <span class="price_text"
              >小計 NT.{{ $filters.currency(item.total) }}</span
            >
          </div>

          <div class="col-md-3 p-2">
            <select
              class="form-select mb-2 mt-2"
              v-model.number="item.qty"
              @change="updateCart(item)"
            >
              <!-- <option value="" disabled selected>1</option> -->
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
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
      <!-- 手機 -->
      <div class="row mb-3 px-2 d-block d-sm-none">
        <div class="col-12 fs-3 fw-semibold py-3 text-center bg-light">
          Shopping Cart
        </div>
        <div
          class="col-12 cartNullMessage d-flex justify-content-center pt-5 bg-light"
          v-if="!cart.total"
        >
          購物車目前尚無商品
        </div>

        <div
          class="col-12 pt-2 border-bottom bg-light"
          v-for="item in cart.carts"
          :key="item.id"
        >
          <div class="col-12 d-flex">
            <img
              class="img-fluid cart_img p-2 mb-2"
              :src="item.product.images[0]"
              alt=""
            />
            <div class="d-flex flex-column smStep_text p-2">
              <div class="mb-3 mt-1">
                <span class="me-2">{{ item.product.title }}</span>
                <span class="text-secondary">{{ item.size }}</span>
              </div>
              <span class="smPrice_text mt-1"
                >單價 NT.{{ $filters.currency(item.product.price) }}</span
              >
              <span class="smPrice_text"
                >小計 NT.{{ $filters.currency(item.total) }}</span
              >
            </div>
          </div>

          <div class="col-6 d-flex p-2">
            <select
              class="col-6 form-select p-1 ps-3"
              v-model.number="item.qty"
              @change="updateCart(item)"
            >
              <!-- <option value="" disabled selected>1</option> -->
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <div class="col-12 d-flex justify-content-end align-items-center">
              <button class="btn btn-outline-secondary btn-sm me-3">
                下次買
              </button>
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
      <div class="col-lg-5 col-md-12 px-3">
        <div class="fs-3 fw-semibold py-3 px-4 bg-light">Payment Method</div>

        <div class="px-4 py-2 bg-light">
          <div class="d-flex align-items-center p-2 mb-4">
            <span>
              <a
                class="couponLink me-3"
                href=""
                @click.prevent="openCouponModal"
                >折價卷代碼</a
              >
            </span>
            <button
              type="button"
              class="btn btn-outline-danger coupon_delete d-flex justify-content-center align-items-center"
              @click="useCouponCode(originalCoupon)"
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
              class="form-select mb-1 mt-2 step_text"
              v-if="paymentMethod === '' || paymentMethod === '信用卡線上刷卡'"
              v-model="deliverMethod"
              @change="resetUpdateCart"
            >
              <option value="請選擇運送方式" disabled selected>
                請選擇運送方式
              </option>
              <option value="宅配">宅配</option>
              <option value="7-11超商取貨">7-11超商取貨</option>
              <option value="全家超商取貨">全家超商取貨</option>
            </select>

            <select
              class="form-select mb-1 mt-2 step_text"
              v-if="paymentMethod === '貨到付款(宅配)'"
              v-model="deliverMethod"
              @change="resetUpdateCart"
            >
              <option value="請選擇運送方式" disabled selected>
                請選擇運送方式
              </option>
              <option value="宅配">宅配</option>
            </select>

            <select
              class="form-select mb-1 mt-2 step_text"
              v-if="paymentMethod === '貨到付款(超商)'"
              v-model="deliverMethod"
              @change="resetUpdateCart"
            >
              <option value="請選擇運送方式" disabled selected>
                請選擇運送方式
              </option>
              <option value="7-11超商取貨">7-11超商取貨</option>
              <option value="全家超商取貨">全家超商取貨</option>
            </select>

            <!-- 運送方式提醒訊息 -->
            <div class="row deliverWarn ps-1 text-danger" ref="deliverWarn">
              <span v-if="deliverMethod === '請選擇運送方式'"
                >※請先確認您的運送方式</span
              >
            </div>

            <div
              class="row px-3 mt-4"
              v-if="
                paymentMethod === '貨到付款(超商)' || deliverMethod !== '宅配'
              "
            >
              <input
                class="col-md-12 p-1 mb-2 border rounded-1 border-secondary search_location"
                type="text"
                placeholder="尚未選擇門市"
                v-model="location.name"
              />

              <div class="col-md-12 d-flex justify-content-between px-0">
                <div
                  class="col-md-6 locationWarn ps-1 text-danger"
                  ref="locationWarn"
                >
                  <span v-if="location === ''">※請確認您的門市位置</span>
                </div>

                <button
                  class="col-md-3 btn btn-outline-secondary btn-sm ms-auto"
                  @click="openLocationModal"
                >
                  選擇門市
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- 總金額計算 -->
        <div class="row p-4 pt-2">
          <div class="col-12 step_text text-secondary py-1">
            <div class="row mb-4 px-1">
              <span
                class="col-md-3 badge text-bg-warning d-flex justify-content-center align-items-center"
                >免運費</span
              >
              <span class="col-md-9" v-if="total < 1000"
                >商品金額只差 NT$ {{ $filters.currency(1000 - total) }} 可享滿
                NT$ 1,000免運</span
              >
              <span class="col-md-9" v-else>可享免運</span>
            </div>

            <div class="row mb-1">
              <span class="col">商品總金額</span>
              <span class="col text-end">{{
                $filters.currency(cart.total)
              }}</span>
            </div>

            <div class="row mb-1">
              <div class="col d-flex justify-content-start">
                <span class="col-lg-5 col-md-3 me-1">電子折價卷</span>
                <span
                  class="col-4 badge text-bg-success d-flex justify-content-center align-items-center"
                  v-if="cart.final_total !== cart.total"
                  >使用中</span
                >
              </div>

              <span class="col text-end" v-if="cart.final_total !== cart.total"
                >-{{ $filters.currency(cart.total - cart.final_total) }}</span
              >
              <span class="col text-end" v-else>-0</span>
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

              <span class="fs-2" v-if="cart.final_total !== cart.total"
                >NT.{{
                  $filters.currency(cart.final_total + shippingFee)
                }}</span
              >
              <span class="fs-2" v-else
                >NT.{{ $filters.currency(finalPayTotal) }}</span
              >
            </div>
          </div>

          <div>
            <button
              class="col-12 col-md-12 btn btn-secondary btn-sm px-2"
              @click="checkStepTwo"
            >
              Continue <i class="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <CouponModal
    ref="CouponModal"
    :couponCode="couponCode"
    @useCoupon="useCouponCode"
  />
  <UserLocationModal
    ref="LocationModal"
    :loaction="location"
    @useloaction="uselocation"
  />
  <NoCartModal ref="noCartModal" />
  <NoPayMethodModal ref="NoPayModal" />
</template>

<script>
import CouponModal from '@/components/user/UserCouponModal.vue'
import UserLocationModal from '@/components/user/UserLocationModal.vue'
import NoCartModal from '@/components/user/NoCartModal.vue'
import NoPayMethodModal from '@/components/user/NoPayMethodModal.vue'
import ToastMessages from '@/components/ToastMessages.vue'

export default {
  components: {
    CouponModal,
    UserLocationModal,
    NoCartModal,
    NoPayMethodModal,
    ToastMessages
  },
  inject: ['emitter'],
  data() {
    return {
      cart: {},
      total: 0,
      paymentMethod: '', // 選擇付費方式
      deliverMethod: '請選擇運送方式', // 預設選擇運送方式
      location: '', // 取貨門市
      shippingFee: 80, // 預設運費
      finalPayTotal: '', // 最後應付金額
      couponCode: '', // 建立空優惠卷代碼
      originalCoupon: 'test100' // 建立一個原價的折價卷code，當取消使用折價卷用
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
    },
    // 刪除特定一筆購物車資料
    deleteCartItem(id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.$http
        .delete(url)
        .then((res) => {
          // 重新觸發刪除navBar元件的badge數量
          this.emitter.emit('delete-cart')
          this.getCheckOut()
          this.$httpMessageState(res, '刪除商品')
        })
        .catch((err) => {
          console.log(err.response)
        })
    },

    // 更新購物車 在商品資料結構裡 product_id 是商品 id;另外一個 id 是購物車該品項的 id
    updateCart(item) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      const cart = {
        product_id: item.product_id,
        qty: item.qty,
        location: this.location,
        paymentMethod: this.paymentMethod,
        deliverMethod: this.deliverMethod
      }
      this.$http
        .put(url, { data: cart })
        .then((res) => {
          // console.log(res)
          if (res.data.success) {
            this.getCheckOut()
          }
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    // 打開折價卷Modal
    openCouponModal() {
      this.couponCode = ''
      this.$refs.CouponModal.showModel()
    },
    // 使用折價卷
    useCouponCode(data) {
      this.couponCode = data
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
      const coupon = {
        code: this.couponCode
      }
      this.$http
        .post(url, { data: coupon })
        .then((res) => {
          // console.log(res)
          if (res.data.success) {
            this.getCheckOut()
          }
          this.$refs.CouponModal.hideModal()
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    // 打開選擇門市Modal
    openLocationModal() {
      this.loaction = ''
      this.$refs.LocationModal.showModel()
    },
    // 將選擇的門市資訊傳回
    uselocation(data) {
      this.location = { ...data }
      const item = this.cart.carts[0]
      this.updateCart(item)
      this.$refs.LocationModal.hideModal()
    },
    // 挑整當更改運送方式時，再次觸發更新購物車API，後面的表單才能正常運作
    resetUpdateCart() {
      const item = this.cart.carts[0]
      this.updateCart(item)
    },
    // 轉跳CheckOut第二步驟
    checkStepTwo() {
      if (this.cart.carts.length === 0) {
        this.$refs.noCartModal.showModel()
      } else if (this.paymentMethod === '') {
        this.$refs.NoPayModal.showModel()
      } else if (this.deliverMethod === '請選擇運送方式') {
        this.$refs.deliverWarn.classList.add('openDeliverWarn')
      } else if (this.deliverMethod !== '宅配' && this.location === '') {
        this.$refs.locationWarn.classList.add('openLocationWarn')
      } else {
        this.$router.push('/checkout/step2')
      }
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
.step_text,
.couponModal_text {
  font-size: 0.9rem;
}
.price_text {
  font-size: 0.85rem;
}
.cart_img {
  max-width: 80px;
  cursor: default;
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
.coupon_Modal {
  height: 25px;
  width: 25px;
  position: absolute;
  right: 0;
  top: -12px;
}
.couponInput,
.search_location {
  outline: none;
}
.selectShop {
  margin-top: -5px;
}
.deliverWarn,
.locationWarn {
  font-size: 0.7rem;
  display: none;
}
.openDeliverWarn,
.openLocationWarn {
  display: block;
}
// 手機
.smStep_text {
  font-size: 0.85rem;
}
.smPrice_text {
  font-size: 0.8rem;
}
</style>
