<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content border-0 p-4">
        <div class="modal_header row position-relative pt-3 pb-2">
          <div
            class="modal-title col-12 col-lg-12 d-flex flex-column justify-content-center align-items-center"
            id="exampleModalLabel"
          >
            <span class="fs-2">Store</span>
            <span class="selectShop border-top border-dark">選擇門市</span>
          </div>

          <button
            type="button"
            class="btn btn-outline-danger d-flex justify-content-center align-items-center coupon_Modal"
            @click="hideModal"
          >
            <i class="bi bi-x-lg"></i>
          </button>
        </div>

        <div class="modal-body">
          <div class="row couponModal_text mb-2 d-flex justify-content-between">
            <div
              class="col-6 col-md-4 d-flex justify-content-center mb-4 ps-0"
              v-for="item in locations"
              :key="item"
            >
              <label
                for="locationTitle"
                class="col-4 col-lg-2 col-md-3 form-label mb-0 text-center"
                ><i class="bi bi-geo-fill fs-5"></i>
              </label>
              <input
                type="button"
                class="col-8 col-lg-9 col-md-8 px-2 couponInput btn btn-outline-secondary btn-sm"
                id="locationTitle"
                :value="item.name"
                @click="userloaction = item"
              />
            </div>
          </div>
        </div>

        <div class="modal_footer d-flex justify-content-center">
          <button
            type="button"
            class="col-sm-6 btn btn-warning btn-sm"
            @click="$emit('useloaction', userloaction)"
          >
            確定門市
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
      userloaction: '',
      locations: [
        { name: '中正店', dress: '台北市中正區中山北路一段100號' },
        { name: '大同店', dress: '台北市大同區中山北路三段88號' },
        { name: '忠孝店', dress: '台北市大安區忠孝東路四段335巷2號' },
        { name: '仁愛店', dress: '台北市大安區仁愛路二段82號' },
        { name: '信義店', dress: '台北市信義區基隆路一段50號' },
        { name: '和平店', dress: '台北市大安區和平西路280號' },
        { name: '民權店', dress: '台北市松山區民生東路五段168號' },
        { name: '松山店', dress: '台北市松山區市民大道五段200號' },
        { name: '南港店', dress: '台北市南港區南港路一段290號' }
      ]
    }
  },
  props: ['loaction'],
  watch: {
    couponCode() {
      this.userloaction = this.loaction
    }
  },
  mixins: [modalMixin]
}
</script>
