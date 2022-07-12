<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-md p-2" role="document">
      <div class="modal-content border-0 p-4">
        <div class="modal_header row position-relative">
          <div
            class="modal-title col-sm-12 d-flex justify-content-center align-items-baseline"
            id="exampleModalLabel"
          >
            <span class="fs-2 me-2">Coupon</span>
            <span class="">折價卷</span>
          </div>

          <button
            type="button"
            class="btn btn-outline-danger d-flex justify-content-center align-items-center coupon_Modal"
            @click="hideModal"
          >
            <i class="bi bi-x-lg"></i>
          </button>
        </div>

        <div class="modal-body mb-4">
          <div class="row couponModal_text">
            <div class="col-sm-12 d-flex justify-content-start mb-4">
              <label
                for="title"
                class="col-2 col-md-1 form-label mb-0 text-center"
                ><i class="bi bi-tags-fill fs-5"></i
              ></label>
              <input
                type="text"
                class="col-sm-9 px-2 couponInput"
                id="title"
                placeholder="請輸入折價卷代碼"
                v-model="userCouponCode"
                @keyup.enter="$emit('useCoupon', userCouponCode)"
              />
            </div>

            <div class="row">
              <span class="col-sm-12 text-secondary mb-2 test_couponCode"
                >代碼測試：test50</span
              >
              <span class="col-sm-12 text-danger mb-2"
                >單筆訂單限抵一張折價券。</span
              >
              <span class="col-sm-12">
                取消訂單、整筆退貨或退貨後之保留商品未符合折價券使用條件時，
                若折價券仍在使用期限內，將歸還至帳戶中。
              </span>
            </div>
          </div>
        </div>

        <div class="modal_footer d-flex justify-content-center">
          <button
            type="button"
            class="col-sm-6 btn btn-warning btn-sm"
            @click="$emit('useCoupon', userCouponCode)"
          >
            使用折價卷
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin'

export default {
  data() {
    return {
      modal: {},
      userCouponCode: ''
    }
  },
  props: ['couponCode'],
  emits: ['useCoupon'],
  watch: {
    couponCode() {
      this.userCouponCode = this.couponCode
    }
  },
  mixins: [modalMixin]
}
</script>

<style lang="scss">
.test_couponCode {
  font-size: 0.8rem;
}
</style>
