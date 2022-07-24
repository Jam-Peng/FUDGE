<template>
  <div class="container d-none d-md-none d-lg-block">
    <div class="row justify-content-between px-3 mt-3">
      <div
        class="col-lg-6 mt-2 new_lookbook"
        @click="intoLookbookId(newArticle.id)"
      >
        <div>
          <img class="card-img-top" :src="newArticle.firstImage" alt="..." />
        </div>
        <div class="card-body py-2">
          <div class="d-flex flex-column">
            <p class="lookbook_date mb-1 ps-0 text-secondary">
              {{ $filters.endate(newArticle.create_at) }}
            </p>

            <p class="lookbook_title mb-2">
              {{ newArticle.title }}
            </p>
          </div>
        </div>
      </div>

      <div class="col-lg-6 mt-2">
        <div class="px-3 pt-2">
          <span>News / 最新文章</span>
        </div>
        <ul class="ps-0">
          <li class="px-3" v-for="item in otherArticles" :key="item.id">
            <hr />
            <div
              class="row align-items-center other_lookbook"
              @click="intoLookbookId(item.id)"
            >
              <div class="col-lg-4">
                <img
                  class="card-img-top"
                  :src="item.firstImage"
                  alt="..."
                  style="width: 161px"
                />
              </div>

              <div class="col-lg-8">
                <div class="d-flex flex-column">
                  <p class="lookbook_date mb-1 ps-0 text-secondary">
                    {{ $filters.endate(item.create_at) }}
                  </p>

                  <p class="lookbook_title mb-2">
                    {{ item.title }}
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="pt-5 pb-2 text-secondary lookbookItem_title">
        <span>LookBook / 全系列</span>
      </div>
      <div class="row">
        <div
          class="col-6 col-md-3 mt-2"
          v-for="item in articleAll"
          :key="item.id"
        >
          <div>
            <img
              class="card-img-top articlesAll"
              :src="item.firstImage"
              alt="..."
              @click="intoLookbookId(item.id)"
            />
          </div>
          <div class="card-body py-2 mb-2">
            <div class="d-flex flex-column">
              <p class="card-title ps-0 articles_date text-secondary">
                {{ $filters.endate(item.create_at) }}
              </p>

              <p class="card-title mb-1 articles_title">
                {{ item.title }}
              </p>
            </div>
          </div>
        </div>
        <PagiNation
          :pages="pagination"
          @emit-Page="getLookbookItem"
          @emit-Pre="getLookbookItem"
          @emit-Next="getLookbookItem"
        />
      </div>

      <div class="row lookbook_bg"></div>
    </div>
  </div>

  <!-- 平板 -->
  <div class="container-fluid d-none d-md-block d-lg-none">
    <div class="row justify-content-center px-1 mt-3">
      <div
        class="col-md-6 mt-2 new_lookbook"
        @click="intoLookbookId(newArticle.id)"
      >
        <div>
          <img class="card-img-top" :src="newArticle.firstImage" alt="..." />
        </div>
        <div class="card-body py-2">
          <div class="d-flex flex-column">
            <p class="mdLookbook_date mb-1 text-secondary">
              {{ $filters.endate(newArticle.create_at) }}
            </p>

            <p class="mdLookbook_title mb-2">
              {{ newArticle.title }}
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-6 mt-2">
        <div class="px-3">
          <span>News / 最新文章</span>
        </div>
        <ul class="ps-0">
          <li class="px-1" v-for="item in otherArticles" :key="item.id">
            <hr />
            <div
              class="row align-items-center justify-content-between other_lookbook"
              @click="intoLookbookId(item.id)"
            >
              <div class="col col-md-3">
                <img
                  class="card-img-top"
                  :src="item.firstImage"
                  alt="..."
                  style="width: 111px"
                />
              </div>

              <div class="col col-md-8">
                <div class="d-flex flex-column">
                  <p class="mdLookbook_date text-secondary mb-0">
                    {{ $filters.endate(item.create_at) }}
                  </p>

                  <p class="mdLookbook_title mb-0">
                    {{ item.title }}
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="col-md-12 ps-4 py-2 text-secondary mdLookbookItem_title">
        <span>LookBook / 全系列</span>
      </div>
      <div class="row">
        <div class="col-md-3 mt-2" v-for="item in articleAll" :key="item.id">
          <div>
            <img
              class="card-img-top articlesAll"
              :src="item.firstImage"
              alt="..."
              @click="intoLookbookId(item.id)"
            />
          </div>
          <div class="card-body py-2 mb-2">
            <div class="d-flex flex-column">
              <p class="card-title articles_date text-secondary">
                {{ $filters.endate(item.create_at) }}
              </p>

              <p class="card-title mb-1 mdArticles_title">
                {{ item.title }}
              </p>
            </div>
          </div>
        </div>
        <PagiNation
          :pages="pagination"
          @emit-Page="getLookbookItem"
          @emit-Pre="getLookbookItem"
          @emit-Next="getLookbookItem"
        />
      </div>

      <div class="row mdLookbook_bg"></div>
    </div>
  </div>

  <!-- 手機顯示 -->
  <div class="container-fluid d-block d-sm-none">
    <div class="row justify-content-center px-1 mt-3">
      <div class="col-sm-12 mt-2" @click="intoLookbookId(newArticle.id)">
        <div>
          <img class="card-img-top" :src="newArticle.firstImage" alt="..." />
        </div>
        <div class="card-body py-2">
          <div class="d-flex flex-column">
            <span class="mdLookbook_date text-secondary">
              {{ $filters.endate(newArticle.create_at) }}
            </span>

            <span class="mdLookbook_title mb-2">
              {{ newArticle.title }}
            </span>
          </div>
        </div>
      </div>

      <div class="col-sm-12 mt-2">
        <div class="col-sm-12 px-1">
          <span>News / 最新文章</span>
        </div>
        <ul class="ps-0">
          <li class="px-1" v-for="item in otherArticles" :key="item.id">
            <hr />
            <div
              class="col-sm-12 d-flex align-items-center justify-content-center"
              @click="intoLookbookId(item.id)"
            >
              <div class="col-4">
                <img
                  class="card-img-top"
                  :src="item.firstImage"
                  alt="..."
                  style="width: 111px"
                />
              </div>

              <div class="col-8">
                <div class="d-flex flex-column ps-2">
                  <p class="mdLookbook_date text-secondary mb-0">
                    {{ $filters.endate(item.create_at) }}
                  </p>

                  <p class="mdLookbook_title mb-0">
                    {{ item.title }}
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="col-sm-12 ps-4 py-2 text-secondary mdLookbookItem_title">
        <span>LookBook / 全系列</span>
      </div>
      <div class="row">
        <div class="col-6 mt-1" v-for="item in articleAll" :key="item.id">
          <div>
            <img
              class="card-img-top articlesAll"
              :src="item.firstImage"
              alt="..."
              @click="intoLookbookId(item.id)"
            />
          </div>
          <div class="card-body py-2 mb-0">
            <div class="d-flex flex-column">
              <span class="card-title smArticles_date text-secondary">
                {{ $filters.endate(item.create_at) }}
              </span>

              <span class="card-title mb-1 smArticles_title">
                {{ item.title }}
              </span>
            </div>
          </div>
        </div>
        <PagiNation
          :pages="pagination"
          @emit-Page="getLookbookItem"
          @emit-Pre="getLookbookItem"
          @emit-Next="getLookbookItem"
        />
      </div>

      <div class="row smLookbook_bg"></div>
    </div>
  </div>
  <Footer />
</template>

<script>
import PagiNation from '@/components/user/UserPagiNation.vue'
import Footer from '@/components/user/UserFooter.vue'
import statusStore from '@/stores/statusStores'
import { mapActions } from 'pinia'

export default {
  components: { PagiNation, Footer },
  data() {
    return {
      articles: [],
      articleAll: [],
      pagination: {},
      newArticle: {}, // 取出的第一筆文章
      otherArticles: [] // 刪除第一筆文章後的其他文章
    }
  },
  watch: {
    articles() {
      this.otherArticles = this.articles.slice(1, 4)
      this.articleAll = this.articles.reverse()
    }
  },
  methods: {
    ...mapActions(statusStore, ['pushMessage']),
    // 取得文章列表
    getLookbookItem(page = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/articles?page=${page}`
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.articles = res.data.articles
            this.newArticle = res.data.articles[0]
            this.pagination = res.data.pagination
            // console.log(this.articles)
          }
        })
        .catch(() => {
          this.pushMessage(false, '讀取', '發生錯誤，請重新整理頁面再試一次')
        })
    },
    intoLookbookId(itemId) {
      this.$router.push(`/lookbook/${itemId}`)
    }
  },
  created() {
    this.getLookbookItem()
  }
}
</script>
