<template>
  <div class="container-fluid position-sticky top-0 start-0">
    <div class="row">
      <NavBar />
    </div>
  </div>
  <div class="container">
    <div>
      <div class="row justify-content-between px-3 mt-3">
        <div
          class="col-md-6 mt-2 new_lookbook"
          @click="intoLookbookId(newArticle.id)"
        >
          <div>
            <img class="card-img-top" :src="newArticle.firstImage" alt="..." />
          </div>
          <div class="card-body py-2">
            <div class="d-flex flex-column">
              <p class="lookbook_date mb-1 ps-3 text-secondary">
                {{ $filters.endate(newArticle.create_at) }}
              </p>

              <p class="lookbook_title mb-2">
                {{ newArticle.title }}
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-6 mt-2">
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
                <div class="col-md-4">
                  <img
                    class="card-img-top"
                    :src="item.firstImage"
                    alt="..."
                    style="width: 161px"
                  />
                </div>

                <div class="col-md-8">
                  <div class="d-flex flex-column">
                    <p class="lookbook_date mb-1 ps-3 text-secondary">
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
                <p class="card-title ps-3 articles_date text-secondary">
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
  </div>
</template>

<script>
import NavBar from '@/components/user/UserNavBar.vue'
import PagiNation from '@/components/user/UserPagiNation.vue'

export default {
  components: { NavBar, PagiNation },
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
        .catch((err) => {
          console.log(err.response)
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

<style lang="scss">
ul {
  li {
    list-style-type: none;
  }
}

.lookbook_title {
  font-size: 1.2rem;
}
.lookbook_date {
  font-size: 0.92rem;
}
.other_lookbook,
.articlesAll {
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
}
.new_lookbook {
  cursor: pointer;
}
.articles_title {
  font-size: 0.95rem;
}
.articles_date {
  font-size: 0.9rem;
}
.lookbookItem_title {
  font-size: 1.2rem;
}
.lookbook_bg {
  height: 500px;
  background-image: url('../../assets/img/lookbook_bg.png');
  background-size: cover;
  background-attachment: fixed;
  margin: 3rem 0 4rem;
}
</style>
