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
      <div class="modal-content p-4 bg-light">
        <div class="modal_header row position-relative">
          <button
            type="button"
            class="btn btn-outline-danger d-flex justify-content-center align-items-center newsLetter_Modal"
            @click="hideModal"
          >
            <i class="bi bi-x-lg"></i>
          </button>
        </div>

        <div class="modal-body">
          <div class="row newsLetter_text">
            <div
              class="col-sm-12 d-flex flex-column justify-content-center align-items-center mb-2"
            >
              <span class="pb-2">已訂閱成功</span>
              <span class="">FUDGE 將提供最新活動訊息至 </span>
              <span class="">E-mail：{{ tempEmail }} </span>
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
  props: ['tempEmail'],
  mixins: [modalMixin]
}
</script>
