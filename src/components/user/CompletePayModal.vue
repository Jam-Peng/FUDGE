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
            class="modal-title col-sm-12 d-flex justify-content-center"
            id="exampleModalLabel"
          >
            <span class="fs-5">已完成付款</span>
          </div>

          <button
            type="button"
            class="btn btn-outline-danger d-flex justify-content-center align-items-center completePay_Modal"
            @click="hideModal"
          >
            <i class="bi bi-x-lg"></i>
          </button>
        </div>

        <div class="modal-body">
          <div class="row orderPay_text">
            <div
              class="col-sm-12 d-flex justify-content-center align-items-center mb-4"
            >
              <label for="title" class="form-label mb-0"
                ><i class="bi bi-tags-fill"></i> 訂單編號：</label
              >

              <span class="">{{ orderCode }}</span>
            </div>
          </div>
        </div>

        <div class="modal_footer d-flex justify-content-evenly">
          <button
            type="button"
            class="col-sm-3 btn btn-secondary btn-sm"
            @click="intoIndex"
          >
            繼續購物
          </button>
          <button
            type="button"
            class="col-sm-3 btn btn-outline-secondary btn-sm"
            @click="goCheckOrder"
          >
            訂單查詢
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
      orderCode: ''
    }
  },
  props: ['orderId'],
  watch: {
    orderId() {
      this.orderCode = this.orderId
    }
  },
  methods: {
    intoIndex() {
      this.$router.push('/')
      this.modal.hide()
    },
    goCheckOrder() {
      this.$router.push(`/checkOrder/${this.orderCode}`)
      this.modal.hide()
    }
  },
  mixins: [modalMixin]
}
</script>

<style lang="scss">
.completePay_Modal {
  height: 25px;
  width: 25px;
  position: absolute;
  right: 0;
  top: -12px;
}
.orderPay_text {
  font-size: 0.9rem;
}
</style>
