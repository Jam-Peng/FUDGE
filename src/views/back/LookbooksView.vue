<template>
  <OverLoading :active="isLoading"></OverLoading>
  <div class="shadow-sm p-3 mt-2 bg-body rounded">
    <div>
      <div class="d-flex justify-content-between px-3">
        <p class="fs-3">文章列表</p>
        <span
          ><button
            class="btn btn-primary mt-1"
            type="button"
            @click="openModal"
          >
            新增文章
          </button></span
        >
      </div>

      <div class="row justify-content-between px-3 mt-2">
        <div class="col-6 mt-2" v-for="item in articles" :key="item">
          <div>
            <img class="card-img-top" :src="item.firstImage" alt="..." />
          </div>
          <div class="card-body py-2 mb-4">
            <div class="d-flex flex-column">
              <p class="card-title mb-1 ps-0">
                {{ $filters.endate(item.create_at) }}
              </p>

              <p class="card-title mb-2">
                {{ item.title }}
              </p>
              <div class="d-flex align-items-center ms-auto me-3">
                <span class="text-success me-4" v-if="item.isPublic">啟用</span>
                <span class="text-danger me-4" v-else>不啟用</span>
                <div class="btn-group">
                  <button
                    class="btn btn-outline-primary btn-sm"
                    @click="checkLookbook(item.id)"
                  >
                    檢視
                  </button>
                  <button
                    class="btn btn-outline-danger btn-sm"
                    @click="openDeleteModal(item)"
                  >
                    刪除
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <LookbookModal
    ref="lookbookModal"
    :article="tempArticle"
    @new-Article="newLookbook"
  />
  <DeletebookModal
    ref="deletebookModal"
    :delArticle="tempArticle"
    @emit-delete="deleteLookbook"
  />
  <PagiNation
    :pages="pagination"
    @emit-Page="getlookbook"
    @emit-Pre="getlookbook"
    @emit-Next="getlookbook"
  />
  <!-- <lookbookImgLimitModal ref="lookbookImgLimitModal" /> -->
</template>

<script>
import LookbookModal from '@/components/LookbookModal.vue'
import DeletebookModal from '@/components/DeleteLookbookModal.vue'
import PagiNation from '@/components/PagiNation.vue'
// import lookbookImgLimitModal from '@/components/lookbookImgLimitModal.vue'
import statusStore from '@/stores/statusStores'
import { mapActions } from 'pinia'

export default {
  components: {
    LookbookModal,
    DeletebookModal,
    PagiNation
    // lookbookImgLimitModal
  },
  data() {
    return {
      articles: [],
      pagination: {},
      tempArticle: {},
      isLoading: false
      // isNew: false
    }
  },
  methods: {
    ...mapActions(statusStore, ['pushMessage']),
    // 取得文章列表
    getlookbook(page = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/articles?page=${page}`
      this.isLoading = true
      this.$http
        .get(url)
        .then((res) => {
          setTimeout(() => {
            this.isLoading = false
          }, 500)
          // console.log(res)
          // this.articles = res.data.articles.reverse()
          this.articles = res.data.articles
          this.pagination = res.data.pagination

          // console.log(this.articles)
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    // 打開新增文章 Modal
    openModal() {
      this.tempArticle = { create_at: new Date().getTime() / 1000 }
      // this.tempArticle = { create_at: Math.floor(Date.now() / 1000) } 另一個寫法
      this.$refs.lookbookModal.showModel()
    },
    // 新增文章
    newLookbook(data) {
      this.tempArticle = data
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/article`
      // 限制新增時一定要先傳入一張照片
      // if (this.tempArticle.firstImage === '') {
      //   this.$refs.lookbookImgLimitModal.showModel()
      // }
      this.$http
        .post(url, { data: this.tempArticle })
        .then((res) => {
          // console.log(res)
          this.$refs.lookbookModal.hideModal()
          this.getlookbook()
          this.pushMessage(res.data.success, '新增文章', res.data.message)
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    // 打開刪除文章 Modal
    openDeleteModal(item) {
      this.tempArticle = item
      this.$refs.deletebookModal.showModel()
    },
    // 刪除文章
    deleteLookbook() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/article/${this.tempArticle.id}`
      this.$http
        .delete(url)
        .then((res) => {
          this.$refs.deletebookModal.hideModal()
          this.getlookbook()
          this.pushMessage(res.data.success, '刪除文章', res.data.message)
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    checkLookbook(id) {
      this.$router.push(`lookbooks/${id}`)
    }
  },
  created() {
    this.getlookbook()
  }
}
</script>
