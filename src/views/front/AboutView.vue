<template>
  <div class="container mt-3">
    <div class="row justify-content-center my-4">
      <!-- 桌機 -->
      <div class="col-lg-9 about_img mb-4 d-none d-lg-block">
        <img src="../../assets/img/about.jpg" alt="" class="d-block w-100" />
      </div>
      <!-- 平板 -->
      <div class="col-md-11 mdabout_img mb-4 d-none d-md-block d-lg-none">
        <img src="../../assets/img/about.jpg" alt="" class="d-block w-100" />
      </div>
      <!-- 手機 -->
      <div class="col-11 smabout_img mb-4 d-block d-sm-none">
        <img src="../../assets/img/about.jpg" alt="" class="d-block w-100" />
      </div>
      <div
        class="col-11 col-md-11 col-lg-9 text-center d-flex flex-column justify-content-center about_text"
      >
        <span>“MAKE YOUR DAY”</span>
        <span>～</span>
        <span class="pb-3">美好的一天</span>
        <span class="pb-2">FUDGE</span>
        <span>想要了解和享受理所當然的生活</span>
        <span>以舒適和質感為重點</span>
        <span class="pb-4">推出豐富日常生活的商品</span>
        <span class="pb-2">“MAKE YOUR DAY”</span>
        <span>打造理想中的生活模樣</span>
        <span>讓美好的流行單品自然地走進日常裡</span>
      </div>

      <div class="col-11 col-md-9 col-lg-6 bg-light p-4 text-center mt-4 mb-2">
        <div class="d-flex flex-column">
          <span class="about_Newsletter pb-2 text-black">訂閱電子雜誌</span>
          <span class="about_Newsletter pb-3 text-secondary"
            >我們將提供最新信息，例如新產品和活動。</span
          >
        </div>
        <div>
          <form>
            <div>
              <input
                type="email"
                class="about_input border rounded px-3 py-1 me-2"
                placeholder="info@example.con"
                v-model.trim="userEmail"
              />
              <button
                class="about_button border rounded px-3 py-1 bg-dark text-light about_Newsletter"
                type="button"
                v-if="userEmail === ''"
                style="cursor: inherit"
              >
                請先填寫 E-mail
              </button>
              <button
                class="about_button border rounded px-3 py-1 bg-dark text-light about_Newsletter"
                @click.prevent="about_Newsletter"
                v-else
              >
                訂閱
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <Footer />
  <NewsletterModal ref="NewsletterModal" :tempEmail="tempEmail" />
</template>

<script>
import Footer from '@/components/user/UserFooter.vue'
import NewsletterModal from '@/components/user/about_NewsletterModal.vue'

export default {
  components: { Footer, NewsletterModal },
  data() {
    return {
      userEmail: '',
      tempEmail: ''
    }
  },
  methods: {
    about_Newsletter() {
      this.tempEmail = this.userEmail
      this.$refs.NewsletterModal.showModel()
      this.userEmail = ''
    }
  }
}
</script>
