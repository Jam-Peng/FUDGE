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
            <span>LookBook</span>
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
            <div class="col-6">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  placeholder="請輸入標題"
                  v-model.trim="tempArticle.title"
                />
              </div>
              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="author" class="form-label">編輯人</label>
                  <input
                    type="text"
                    class="form-control"
                    id="author"
                    placeholder="請輸入編輯人"
                    v-model.trim="tempArticle.author"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="create_at" class="form-label">編輯日期</label>
                  <input
                    type="date"
                    class="form-control"
                    id="create_at"
                    v-model="create_at"
                  />
                </div>
              </div>
              <hr />

              <div class="mb-3" v-if="updateArticle">
                <label for="description" class="form-label">文章描述</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="description"
                  placeholder="請輸入文章描述"
                  v-model.trim="tempArticle.description"
                ></textarea>
              </div>

              <!-- 文章內容 -->
              <div class="mb-3">
                <label for="content" class="form-label">文章內容</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="content"
                  placeholder="請輸入文章內容"
                  rows="5"
                  v-model.trim="tempArticle.content"
                ></textarea>
              </div>

              <div class="mb-3">
                <label for="content" class="form-label">文章第二段內容</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="content"
                  placeholder="請輸入第二段文章內容"
                  rows="5"
                  v-model.trim="tempArticle.contentTwo"
                ></textarea>
              </div>

              <div class="mb-3">
                <label for="content" class="form-label">文章第三段內容</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="content"
                  placeholder="請輸入第三段文章內容"
                  rows="5"
                  v-model.trim="tempArticle.contentThree"
                ></textarea>
              </div>

              <div class="mb-3">
                <label for="content" class="form-label">文章第四段內容</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="content"
                  placeholder="請輸入第四段文章內容"
                  rows="5"
                  v-model.trim="tempArticle.contentFour"
                ></textarea>
              </div>

              <div class="mb-3">
                <label for="content" class="form-label">文章第五段內容</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="content"
                  placeholder="請輸入第五段文章內容"
                  rows="5"
                  v-model.trim="tempArticle.contentFive"
                ></textarea>
              </div>

              <div class="mb-3">
                <label for="content" class="form-label">文章第六段內容</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="content"
                  placeholder="請輸入第六段文章內容"
                  rows="5"
                  v-model.trim="tempArticle.contentSix"
                ></textarea>
              </div>

              <div class="mb-3">
                <label for="content" class="form-label">文章第七段內容</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="content"
                  placeholder="請輸入第七段文章內容"
                  rows="5"
                  v-model.trim="tempArticle.contentSeven"
                ></textarea>
              </div>

              <div class="mb-3">
                <label for="content" class="form-label">文章第八段內容</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="content"
                  placeholder="請輸入第八段文章內容"
                  rows="5"
                  v-model.trim="tempArticle.contentEight"
                ></textarea>
              </div>

              <div class="mb-3">
                <label for="content" class="form-label">文章第九段內容</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="content"
                  placeholder="請輸入第九段文章內容"
                  rows="5"
                  v-model.trim="tempArticle.contentNine"
                ></textarea>
              </div>

              <div class="mb-3">
                <label for="content" class="form-label">文章第十段內容</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="content"
                  placeholder="請輸入第十段文章內容"
                  rows="5"
                  v-model.trim="tempArticle.contentTen"
                ></textarea>
              </div>

              <div class="mb-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :true-value="true"
                    :false-value="false"
                    id="isPublic"
                    v-model="tempArticle.isPublic"
                  />
                  <label class="form-check-label" for="isPublic">
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
                  @click="emitNewArticke"
                  v-if="!tempArticle.description"
                >
                  確定
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="$emit('updatArticle', tempArticle)"
                  v-else
                >
                  更新文章
                </button>
              </div>
            </div>
            <!-- 右側上傳圖片 -->
            <div class="col-6">
              <div class="row">
                <div class="mb-3">
                  <label for="lookbookFile" class="form-label">上傳圖片 </label>
                  <input
                    type="file"
                    id="lookbookFile"
                    class="form-control"
                    @change="uploadLookbook"
                    ref="lookbookFile"
                    multiple
                  />
                </div>
                <div
                  class="col-6 g-3 mt-2"
                  v-for="item in tempArticle.images"
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
  <lbALLImgLimitModal ref="lbALLImgLimitModal" />
  <lookbookImgLimitModal ref="lookbookImgLimitModal" />
</template>

<script>
import modalMixin from '@/mixins/modalMixin'
import lbALLImgLimitModal from '@/components/lbALLImgLimitModal.vue'
import lookbookImgLimitModal from '@/components/lookbookImgLimitModal.vue'

export default {
  components: {
    lbALLImgLimitModal,
    lookbookImgLimitModal
  },
  data() {
    return {
      modal: {},
      tempArticle: {},
      create_at: ''
    }
  },
  props: {
    article: {
      type: Object,
      default() {
        return {}
      }
    },
    updateArticle: {}
  },
  emits: ['newArticle', 'updatArticle'],
  watch: {
    // 新增文章
    article() {
      this.tempArticle = { ...this.article }
      if (!this.tempArticle.images) {
        this.tempArticle.images = []
        this.tempArticle.firstImage = ''
      }

      const dateTime = new Date((this.tempArticle.create_at + 8 * 3600) * 1000)
        .toISOString()
        .split('T')
      ;[this.create_at] = dateTime
    },
    create_at() {
      this.tempArticle.create_at = Math.floor(new Date(this.create_at) / 1000)
    },
    // 更新文章
    updateArticle() {
      this.tempArticle = { ...this.updateArticle }
      const dateTime = new Date(this.tempArticle.create_at * 1000)
        .toISOString()
        .split('T')
      ;[this.create_at] = dateTime
    }
  },
  methods: {
    // 傳遞新增的文章時最少須先新增一張照片
    emitNewArticke() {
      if (this.tempArticle.firstImage === '') {
        this.$refs.lookbookImgLimitModal.showModel()
      } else {
        this.$emit('newArticle', this.tempArticle)
      }
    },
    // 上傳多圖
    uploadLookbook() {
      if (
        // 限制圖片張數
        Array.from(this.$refs.lookbookFile.files).length +
          this.tempArticle.images.length >
        8
      ) {
        // alert('照片多餘8張')
        this.$refs.lbALLImgLimitModal.showModel()
      } else {
        const imgId = this.$refs.lookbookFile.id
        Array.from(this.$refs.lookbookFile.files).forEach((item) => {
          const uploadLookbooks = item
          const formData = new FormData()
          formData.append('file-to-upload', uploadLookbooks)
          const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`
          this.$http
            .post(url, formData)
            .then((res) => {
              if (res.data.success) {
                this.tempArticle.images.push(res.data.imageUrl)
                this.tempArticle.firstImage = this.tempArticle.images[0]
                // console.log(this.tempArticle.firstImage)
              }
              document.getElementById(imgId).value = ''
            })
            .catch((err) => {
              console.log(err.response)
            })
        })
      }
    },
    // 移除照片
    removeImage(item) {
      const index = this.tempArticle.images.indexOf(item)
      this.tempArticle.images.splice(index, 1)
    }
  },
  mixins: [modalMixin]
}
</script>
