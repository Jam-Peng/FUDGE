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
          <button
            type="button"
            class="btn btn-outline-danger d-flex justify-content-center align-items-center nolocation_Modal"
            @click="hideModal"
          >
            <i class="bi bi-x-lg"></i>
          </button>
        </div>

        <div class="modal-body pb-0 mb-2">
          <div class="row noLocation_text">
            <div
              class="col-sm-12 d-flex justify-content-center align-items-center"
            >
              <span class="fs-5">請確認寄送門市</span>
            </div>
          </div>
        </div>

        <div class="px-2 mb-4 orderItem_text">
          <div
            class="col-md-12 d-flex align-item-center justify-content-center"
          >
            <span class="me-3"
              ><i class="bi bi-geo-fill fs-5"></i> 門市資訊：
              {{ location.name }} - {{ location.dress }}
            </span>
          </div>
        </div>

        <div class="modal_footer d-flex justify-content-center">
          <button
            type="button"
            class="col-sm-3 btn btn-secondary btn-sm"
            @click="$emit('confirmLocation')"
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
  props: ['location'],

  mixins: [modalMixin]
}
</script>
