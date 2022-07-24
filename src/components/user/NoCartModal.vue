<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-sm p-2" role="document">
      <div class="modal-content border-0 p-4">
        <div class="modal_header row position-relative">
          <!-- <div
            class="modal-title col-sm-12 d-flex justify-content-center"
            id="exampleModalLabel"
            >
            <span class="fs-5">已完成付款</span>
          </div> -->

          <button
            type="button"
            class="btn btn-outline-danger d-flex justify-content-center align-items-center noCart_Modal"
            @click="hideModal"
          >
            <i class="bi bi-x-lg"></i>
          </button>
        </div>

        <div class="modal-body">
          <div class="row noCart_text">
            <div
              class="col-sm-12 d-flex justify-content-center align-items-center mb-2"
            >
              <span class="">購物車目前沒有商品</span>
            </div>
          </div>
        </div>

        <div class="modal_footer d-flex justify-content-center">
          <button
            type="button"
            class="col-sm-6 btn btn-secondary btn-sm"
            @click="goProductList"
          >
            來去逛逛
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
      modal: {}
    }
  },
  methods: {
    goProductList() {
      this.$router.push('/productList')
      this.modal.hide()
    }
  },
  mixins: [modalMixin]
}
</script>
