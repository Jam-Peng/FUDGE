<template>
  <OverLoading :active="isLoading"></OverLoading>
  <div class="row justify-content-between px-3 mt-4">
    <div class="col-8 mt-2">
      <div class="card-body">
        <div class="d-flex flex-column text-center">
          <p class="card-title article_date text-secondary mb-0">
            {{ $filters.endate(article.create_at) }}
          </p>

          <p class="card-title mb-3 fs-4">{{ article.title }}</p>
        </div>
      </div>

      <div>
        <img class="card-img-top mb-4" :src="article.firstImage" alt="..." />
      </div>

      <div class="mb-4">
        <div
          class="text-center article_content pb-1"
          v-for="item in content"
          :key="item"
        >
          <span>{{ item }}</span>
        </div>
      </div>

      <div class="mb-4">
        <div
          class="text-center article_content pb-1"
          v-for="item in contentTwo"
          :key="item"
        >
          <span>{{ item }}</span>
        </div>
      </div>

      <div class="mb-4">
        <div
          class="text-center article_content pb-1"
          v-for="item in contentThree"
          :key="item"
        >
          <span>{{ item }}</span>
        </div>
      </div>

      <div class="d-flex justify-content-center" v-if="article.images[1]">
        <img
          class="card-img-top mb-4 article_img"
          :src="article.images[1]"
          alt="..."
        />
      </div>

      <div class="mb-4">
        <div
          class="text-center article_content pb-1"
          v-for="item in contentFour"
          :key="item"
        >
          <span>{{ item }}</span>
        </div>
      </div>

      <div class="d-flex justify-content-center" v-if="article.images[2]">
        <img
          class="card-img-top mb-4 article_img"
          :src="article.images[2]"
          alt="..."
        />
      </div>

      <div class="mb-4">
        <div
          class="text-center article_content pb-1"
          v-for="item in contentFive"
          :key="item"
        >
          <span>{{ item }}</span>
        </div>
      </div>

      <div class="mb-4">
        <div
          class="text-center article_content pb-1"
          v-for="item in contentSix"
          :key="item"
        >
          <span>{{ item }}</span>
        </div>
      </div>

      <div class="d-flex justify-content-center" v-if="article.images[3]">
        <img
          class="card-img-top mb-4 article_img"
          :src="article.images[3]"
          alt="..."
        />
      </div>

      <div class="mb-4">
        <div
          class="text-center article_content pb-1"
          v-for="item in contentSeven"
          :key="item"
        >
          <span>{{ item }}</span>
        </div>
      </div>

      <div class="d-flex justify-content-center" v-if="article.images[4]">
        <img
          class="card-img-top mb-4 article_img"
          :src="article.images[4]"
          alt="..."
        />
      </div>

      <div class="mb-4">
        <div
          class="text-center article_content pb-1"
          v-for="item in contentEight"
          :key="item"
        >
          <span>{{ item }}</span>
        </div>
      </div>

      <div class="d-flex justify-content-center" v-if="article.images[5]">
        <img
          class="card-img-top mb-5 article_img"
          :src="article.images[5]"
          alt="..."
        />
      </div>

      <div class="mb-4">
        <div
          class="text-center article_content pb-1"
          v-for="item in contentNine"
          :key="item"
        >
          <span>{{ item }}</span>
        </div>
      </div>

      <div class="mb-4">
        <div
          class="text-center article_content pb-1"
          v-for="item in contentTen"
          :key="item"
        >
          <span>{{ item }}</span>
        </div>
      </div>
    </div>

    <div class="col-4 mt-2">
      <div class="d-flex align-items-center ms-auto me-4 pt-4">
        <span class="text-success me-4" v-if="article.isPublic">啟用</span>
        <span class="text-danger me-4" v-else>不啟用</span>
        <div class="btn-group">
          <button
            class="btn btn-outline-primary btn-sm"
            @click="openModal(article)"
          >
            編輯
          </button>
        </div>
      </div>
    </div>
  </div>
  <LookbookModal
    ref="articleModal"
    :update-Article="tempArticle"
    @updat-Article="updateLookbook"
  />
</template>

<script>
import LookbookModal from '@/components/adminer/LookbookModal.vue'
import statusStore from '@/stores/statusStores'
import { mapActions } from 'pinia'

export default {
  components: { LookbookModal },
  data() {
    return {
      id: '',
      article: {
        images: []
      },
      content: [],
      contentTwo: [],
      contentThree: [],
      contentFour: [],
      contentFive: [],
      contentSix: [],
      contentSeven: [],
      contentEight: [],
      contentNine: [],
      contentTen: [],
      tempArticle: {},
      isLoading: false
    }
  },
  methods: {
    ...mapActions(statusStore, ['pushMessage']),
    getOneLookbook() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/article/${this.id}`
      this.isLoading = true
      this.$http
        .get(url)
        .then((res) => {
          setTimeout(() => {
            this.isLoading = false
          }, 500)
          // console.log(res)
          if (res.data.success) {
            this.article = res.data.article
            this.content = res.data.article.content.split(',')
            this.contentTwo = res.data.article.contentTwo.split(',')
            this.contentThree = res.data.article.contentThree.split(',')
            this.contentFour = res.data.article.contentFour.split(',')
            this.contentFive = res.data.article.contentFive.split(',')
            this.contentSix = res.data.article.contentSix.split(',')
            this.contentSeven = res.data.article.contentSeven.split(',')
            this.contentEight = res.data.article.contentEight.split(',')
            this.contentNine = res.data.article.contentNine.split(',')
            this.contentTen = res.data.article.contentTen.split(',')
          }
          // console.log(this.article)
        })
        .catch((err) => {
          console.log(err.res)
        })
    },
    // 打開更新文章 Modal
    openModal(article) {
      this.tempArticle = { ...article }
      this.$refs.articleModal.showModel()
    },
    // 更新文章
    updateLookbook(data) {
      this.tempArticle = data
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/article/${data.id}`
      this.$http
        .put(url, { data: this.tempArticle })
        .then((res) => {
          // console.log(res)
          if (res.data.success) {
            this.$refs.articleModal.hideModal()
            this.getOneLookbook()
            this.pushMessage(res.data.success, '更新文章', res.data.message)
          }
        })
        .catch((err) => {
          console.log(err.response)
        })
    }
  },
  created() {
    this.id = this.$route.params.lookbooksId
    this.getOneLookbook()
  }
}
</script>
