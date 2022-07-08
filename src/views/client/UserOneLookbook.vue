<template>
  <div class="container-fluid position-sticky top-0 start-0">
    <div class="row">
      <NavBar />
    </div>
  </div>

  <div class="container">
    <div class="row justify-content-evenly px-3 mt-4">
      <div class="col-md-4 mt-2 position-relative">
        <div class="sticky_position">
          <div class="px-3 pt-2">
            <span>News / 最新文章</span>
          </div>
          <ul class="ps-0">
            <li class="px-3" v-for="item in otherArticles" :key="item.id">
              <hr />
              <div
                class="row align-items-center news_lookbook"
                @click="getOneLookbook(true, item.id)"
              >
                <div class="col-md-4">
                  <img
                    class="card-img-top"
                    :src="item.firstImage"
                    alt="..."
                    style="width: 121px"
                  />
                </div>

                <div class="col-md-8">
                  <div class="d-flex flex-column">
                    <p class="onelookbook_date mb-1 ps-3 text-secondary">
                      {{ $filters.endate(item.create_at) }}
                    </p>

                    <p class="onelookbook_title mb-2">
                      {{ item.title }}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="col-md-6 col-sm-12 mt-2">
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
            class="card-img-top mb-4 article_img img-fluid"
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
            class="card-img-top mb-4 article_img img-fluid"
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
            class="card-img-top mb-4 article_img img-fluid"
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
            class="card-img-top mb-4 article_img img-fluid"
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
            class="card-img-top mb-5 article_img img-fluid"
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
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/user/UserNavBar.vue'

export default {
  components: { NavBar },
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
      articles: [], // 文章列表
      otherArticles: [], // 最新文章前三篇
      isChange: 'false'
    }
  },
  watch: {
    articles() {
      this.otherArticles = this.articles.slice(0, 3)
    }
  },
  methods: {
    // 取得單一筆文章
    getOneLookbook(isChange, itemid) {
      if (isChange) {
        this.id = itemid
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/article/${this.id}`
        this.$http
          .get(url)
          .then((res) => {
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
          })
          .catch((err) => {
            console.log(err.response)
          })
      } else {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/article/${this.id}`
        this.$http
          .get(url)
          .then((res) => {
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
          })
          .catch((err) => {
            console.log(err.response)
          })
      }
    },

    // 取得文章列表
    getLookbookItem(page = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/articles?page=${page}`
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.articles = res.data.articles
            // console.log(this.articles)
          }
        })
        .catch((err) => {
          console.log(err.response)
        })
    }
  },
  created() {
    this.id = this.$route.params.lookbookId
    this.getOneLookbook()
    this.getLookbookItem()
  }
}
</script>

<style lang="scss">
ul li {
  list-style-type: none;
}
.sticky_position {
  position: sticky;
  top: 8rem;
}

.article_date {
  font-size: 0.9rem;
}
.article_content {
  font-size: 0.9rem;
}
.article_img {
  width: 500px;
}
.onelookbook_title {
  font-size: 0.8rem;
}
.onelookbook_date {
  font-size: 0.9rem;
}
.news_lookbook {
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
}
</style>
