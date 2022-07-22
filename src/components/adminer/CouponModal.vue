<template>
  <div
    class="modal fade"
    id="couponModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-md" role="document">
      <div class="modal-content">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>優惠卷資料</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="title">標題</label>
            <input
              type="text"
              class="form-control"
              id="title"
              placeholder="請輸入標題"
              v-model.trim="tempCoupon.title"
            />
          </div>
          <div class="mb-3">
            <label for="coupon_code">優惠碼</label>
            <input
              type="text"
              class="form-control"
              id="coupon_code"
              placeholder="請輸入優惠碼"
              v-model.trim="tempCoupon.code"
            />
          </div>
          <div class="mb-3">
            <label for="due_date">到期日</label>
            <input
              type="date"
              class="form-control"
              id="due_date"
              v-model="due_date"
            />
          </div>
          <div class="mb-3">
            <label for="price">折扣百分比</label>
            <input
              type="number"
              class="form-control"
              id="price"
              placeholder="請輸入折扣百分比"
              v-model.Number="tempCoupon.percent"
            />
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="is_enabled"
                :true-value="1"
                :false-value="0"
                v-model="tempCoupon.is_enabled"
              />
              <label class="form-check-label" for="is_enabled">
                是否啟用
              </label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="$emit('updateCoupon', tempCoupon)"
          >
            更新優惠券
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
      tempCoupon: {},
      due_date: ''
    }
  },
  props: {
    coupon: {}
  },
  emits: ['updateCoupon'],
  watch: {
    coupon() {
      this.tempCoupon = { ...this.coupon }
      // 轉換時間戳為 Js時間形式 格式改為 YYYY-MM-DD
      const dateTime = new Date((this.tempCoupon.due_date + 8 * 3600) * 1000)
        .toISOString()
        .split('T')
      ;[this.due_date] = dateTime
    },
    //  Js時間形式 轉換為時間戳
    due_date() {
      this.tempCoupon.due_date = Math.floor(new Date(this.due_date) / 1000)
    }
  },
  mixins: [modalMixin]
}
</script>
