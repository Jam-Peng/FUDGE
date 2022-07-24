<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>商品資料</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <!-- 左側資料區 -->
            <div class="col-3">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  placeholder="請輸入標題"
                  v-model.trim="tempProduct.title"
                />
              </div>

              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label">分類</label>
                  <input
                    type="text"
                    class="form-control"
                    id="category"
                    placeholder="請輸入分類"
                    v-model.trim="tempProduct.category"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">單位</label>
                  <input
                    type="text"
                    class="form-control"
                    id="unit"
                    placeholder="請輸入單位"
                    v-model.trim="tempProduct.unit"
                  />
                </div>
              </div>
              <!-- 設定 size -->
              <div class="row gx-2">
                <div class="mb-3">
                  <label for="size" class="form-label">尺寸</label>
                  <input
                    type="text"
                    class="form-control"
                    id="size"
                    placeholder="請輸入尺寸"
                    v-model.trim="tempProduct.size"
                  />
                </div>
                <!-- <div class="mb-3 col-md-6">
                  <label for="pre_size" class="form-label">預購尺寸</label>
                  <input
                    type="text"
                    class="form-control"
                    id="pre_size"
                    placeholder="輸入尺寸+(預）"
                    v-model.trim="tempProduct.preSize"
                  />
                </div> -->
              </div>

              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label">原價</label>
                  <input
                    type="number"
                    class="form-control"
                    id="origin_price"
                    placeholder="請輸入原價"
                    v-model.Number="tempProduct.origin_price"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">售價</label>
                  <input
                    type="number"
                    class="form-control"
                    id="price"
                    placeholder="請輸入售價"
                    v-model.Number="tempProduct.price"
                  />
                </div>
              </div>
              <hr />

              <div class="mb-3">
                <label for="description" class="form-label">產品描述</label>
                <textarea
                  type="text"
                  rows="3"
                  class="form-control"
                  id="description"
                  placeholder="請輸入產品描述"
                  v-model.trim="tempProduct.description"
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">說明內容</label>
                <textarea
                  type="text"
                  rows="5"
                  class="form-control"
                  id="content"
                  placeholder="請輸入產品說明內容"
                  v-model.trim="tempProduct.content"
                ></textarea>
              </div>
              <div class="mb-3 col-md-12">
                <label class="col-md-12 form-label">尺寸指南</label>
                <label for="small-Guide" class="form-label sizeGuide_text mb-0"
                  >S尺寸</label
                >
                <input
                  type="text"
                  class="form-control mb-2"
                  id="small-Guide"
                  placeholder="請輸入Ｓ尺寸資料"
                  v-model.trim="tempProduct.smallGuide"
                />
                <label for="middle-Guide" class="form-label sizeGuide_text mb-0"
                  >M尺寸</label
                >
                <input
                  type="text"
                  class="form-control mb-2"
                  id="middle-Guide"
                  placeholder="請輸入M尺寸資料"
                  v-model.trim="tempProduct.middleGuide"
                />
                <label for="large-Guide" class="form-label sizeGuide_text mb-0"
                  >L尺寸</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="large-Guide"
                  placeholder="請輸入L尺寸資料"
                  v-model.trim="tempProduct.largeGuide"
                />
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                    id="is_enabled"
                    v-model="tempProduct.is_enabled"
                  />
                  <label class="form-check-label" for="is_enabled">
                    是否啟用
                  </label>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-outline-secondary"
                  data-bs-dismiss="modal"
                >
                  取消
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="$emit('updat-Product', tempProduct)"
                >
                  確認
                </button>
              </div>
            </div>
            <!-- 右側上傳圖片 -->
            <div class="col-9">
              <div class="row">
                <div class="mb-3">
                  <label for="customFile" class="form-label">上傳圖片 </label>
                  <input
                    type="file"
                    id="customFile"
                    class="form-control"
                    @change="uploadFile"
                    ref="fileInput"
                    multiple
                  />
                </div>
                <div
                  class="col-4 g-3 mt-2"
                  v-for="item in tempProduct.images"
                  :key="item"
                >
                  <img class="img-fluid" alt="" :src="item" />

                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm mt-2 col-4"
                    @click="removeImage(item)"
                  >
                    <font-awesome-icon
                      class="icons icon-trash-can me-2"
                      :icon="['fas', 'trash-can']"
                    />移除
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Modal from 'bootstrap/js/dist/modal'
import modalMixin from '@/mixins/modalMixin'
export default {
  data() {
    return {
      modal: {},
      tempProduct: {}
    }
  },
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  emits: ['updat-Product'],
  watch: {
    product() {
      this.tempProduct = { ...this.product }
      // 多圖範例 使用url建立多圖時，先在物件裡新增一個images屬性
      if (!this.tempProduct.images) {
        this.tempProduct.images = []
        // 新增size資料
        this.tempProduct.size = []
        this.tempProduct.preSize = []
        // 新增尺寸指南
        this.tempProduct.smallGuide = []
        this.tempProduct.middleGuide = []
        this.tempProduct.largeGuide = []
      }
    }
  },
  methods: {
    // 改寫成多圖上傳
    uploadFile() {
      if (
        // 限制圖片張數
        Array.from(this.$refs.fileInput.files).length +
          this.tempProduct.images.length >
        9
      ) {
        alert('照片多餘9張')
      } else {
        // console.dir(this.$refs.fileInput)
        // 抓取Ｄom元素，為了清空input的value
        const select = this.$refs.fileInput.id
        Array.from(this.$refs.fileInput.files).forEach((item) => {
          const uploadFile = item
          const formData = new FormData()
          formData.append('file-to-upload', uploadFile)
          const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`
          this.$http
            .post(url, formData)
            .then((res) => {
              // console.log(res)
              document.getElementById(select).value = ''
              if (res.data.success) {
                this.tempProduct.images.push(res.data.imageUrl)
              }
            })
            .catch((err) => {
              console.log(err.response)
            })
        })
      }
    },
    // 移除照片
    removeImage(item) {
      const index = this.tempProduct.images.indexOf(item)
      this.tempProduct.images.splice(index, 1)
    }
  },
  mixins: [modalMixin]
}
</script>
