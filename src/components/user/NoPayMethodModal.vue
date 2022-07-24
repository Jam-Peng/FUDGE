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
          <button
            type="button"
            class="btn btn-outline-danger d-flex justify-content-center align-items-center noPay_Modal"
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
              <span class="">請確認您的付款方式</span>
            </div>
          </div>
        </div>

        <div class="modal_footer d-flex justify-content-center">
          <button
            type="button"
            class="col-sm-6 btn btn-secondary btn-sm"
            @click="hideModal"
          >
            確定
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
  mixins: [modalMixin]
}
</script>
