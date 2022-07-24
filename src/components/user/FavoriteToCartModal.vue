<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-md" role="document">
      <div class="modal-content border-0 p-3">
        <div class="modal_header row position-relative pt-3">
          <div id="exampleModalLabel">
            <button
              type="button"
              class="btn btn-outline-danger d-flex justify-content-center align-items-center favorite_delModal"
              @click="hideModal"
            >
              <i class="bi bi-x-lg"></i>
            </button>
          </div>
        </div>

        <div class="modal-body">
          <div class="col-md-12 mb-1">
            <div class="row pt-2 justify-content-center">
              <div class="col-md-3">
                <img
                  class="img-fluid cart_img p-1 mb-2"
                  :src="favoriteImages[0]"
                  alt=""
                />
              </div>

              <div
                class="col-md-9 d-flex flex-column justify-content-between favorite_text p-2"
              >
                <div>
                  <span class="">{{ favoriteProduct.title }}</span>
                  <div>
                    <span
                      class="text-secondary text-decoration-line-through me-2"
                      v-if="
                        favoriteProduct.origin_price !== favoriteProduct.price
                      "
                      >NT.{{
                        $filters.currency(favoriteProduct.origin_price)
                      }}</span
                    >
                    <span class="text-danger"
                      >NT.{{ $filters.currency(favoriteProduct.price) }}</span
                    >
                  </div>
                </div>

                <div class="row px-2 mb-1">
                  <div class="col-5 col-md-6 px-0">
                    <select
                      class="form-select form-select-sm text-center border-secondary size_select"
                      v-model="favorite.likeSelectSize"
                    >
                      <option selected disabled value="">SIZE</option>
                      <option v-for="(item, index) in sizes" :key="index">
                        {{ item }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="modal_footer d-flex justify-content-around">
          <div
            class="col-5 col-md-4 px-2 favoriteCount rounded-1 d-flex align-items-center border-secondary"
          >
            <div class="col d-flex align-items-center justify-content-between">
              <font-awesome-icon
                class="icons icon_minus"
                :icon="['fas', 'minus']"
                @click="dashQty"
              />
              <span class="favorite_text">{{ favorite.qtyNumber }}</span>
              <font-awesome-icon
                class="icons icon_plus"
                :icon="['fas', 'plus']"
                @click="plusQty"
              />
            </div>
          </div>

          <button
            type="button"
            class="col-5 col-md-4 btn btn-secondary btn-sm"
            v-if="favorite.likeSelectSize === ''"
          >
            請選擇尺寸
          </button>
          <button
            type="button"
            class="col-5 col-md-4 btn btn-secondary btn-sm"
            v-else
            @click="sendFavorite"
          >
            Add to Cart
          </button>
          <!-- @click="addToCart(favoriteProduct.id)" -->
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
      favoriteProduct: {},
      favoriteImages: [],
      sizes: [],
      favorite: {
        likeSelectSize: '',
        qtyNumber: 1
      }
    }
  },
  props: ['product'],
  emits: ['add-toCart'],
  watch: {
    product() {
      this.favoriteProduct = this.product
      this.favoriteImages = this.favoriteProduct.images
      this.sizes = []
      this.sizes.push(...this.product.size.split(' '))
    }
  },
  methods: {
    plusQty() {
      this.favorite.qtyNumber += 1
    },
    dashQty() {
      if (this.favorite.qtyNumber > 1) {
        this.favorite.qtyNumber -= 1
      }
    },
    sendFavorite() {
      this.$emit('add-toCart', this.favorite)
      this.hideModal()
      this.favorite.likeSelectSize = ''
      this.favorite.qtyNumber = 1
    }
  },
  mixins: [modalMixin],
  created() {}
}
</script>
