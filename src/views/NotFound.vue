<template>
  <NavBar />
  <!-- 桌機 -->
  <div class="container-fluid d-none d-lg-block">
    <div class="d-flex flex-column align-items-center text-dark">
      <div class="col-9 text-center not_found">
        <img
          src="@/assets/img/not_found.gif"
          alt="404 Not Found"
          style="max-width: 75%"
        />
      </div>

      <h2 class="fw-bold mb-4 fs-2">404 Page Not Found</h2>
      <p class="text-center fw-bold fs-5 fs-md-3 mb-3">此頁面不存在</p>
      <p class="text-center fw-bold fs-5 fs-md-3 mb-3">
        將在
        <span class="fs-4">{{ count }}</span> 秒後自動跳轉回首頁
      </p>
      <router-link
        to="/zh-tw"
        class="btn btn-sm btn-outline-secondary fs-6 mb-5"
        >點擊回首頁</router-link
      >
    </div>
  </div>
  <!-- 平板 -->
  <div class="container-fluid d-none d-md-block d-lg-none">
    <div class="d-flex flex-column align-items-center text-dark mdNot_foundBox">
      <div class="col-9 text-center pt-5 mdNot_found">
        <img
          src="@/assets/img/not_found.gif"
          alt="404 Not Found"
          style="max-width: 75%"
        />
      </div>

      <h2 class="fw-bold mb-4 fs-2">404 Page Not Found</h2>
      <p class="text-center fw-bold fs-5 fs-md-3 mb-3">此頁面不存在</p>
      <p class="text-center fw-bold fs-5 fs-md-3 mb-3">
        將在
        <span class="fs-4">{{ count }}</span> 秒後自動跳轉回首頁
      </p>
      <router-link
        to="/zh-tw"
        class="btn btn-sm btn-outline-secondary fs-6 mb-3"
        >點擊回首頁</router-link
      >
    </div>
  </div>
  <!-- 手機 -->
  <div class="container-fluid d-sm-block d-md-none">
    <div class="d-flex flex-column align-items-center text-dark smNot_foundBox">
      <div class="col-9 text-center smNot_found">
        <img
          src="@/assets/img/not_found.gif"
          alt="404 Not Found"
          style="max-width: 100%"
        />
      </div>

      <h2 class="fw-bold mb-3 fs-3">404 Page Not Found</h2>
      <p class="text-center fw-bold mb-2 smNot_foundText">此頁面不存在</p>
      <p class="text-center fw-bold mb-3 smNot_foundText">
        將在
        <span class="fs-4">{{ count }}</span> 秒後自動跳轉回首頁
      </p>
      <router-link to="/zh-tw" class="btn btn-sm btn-outline-secondary fs-6"
        >點擊回首頁</router-link
      >
    </div>
  </div>
  <Footer />
  <ButtonNavBar />
</template>

<script>
import NavBar from '@/components/user/UserNavBar.vue'
import ButtonNavBar from '@/components/user/UserButtonNavBar.vue'
import Footer from '@/components/user/UserFooter.vue'
import emitter from '@/methods/emitter'

export default {
  provide() {
    return {
      emitter
    }
  },
  components: { Footer, NavBar, ButtonNavBar },
  data() {
    return {
      count: 10
    }
  },
  methods: {
    redirectHome() {
      this.count--
      if (this.count === 0) {
        this.$router.push('/zh-tw')
      }
      setTimeout(() => {
        this.redirectHome()
      }, 1000)
    }
  },
  mounted() {
    this.redirectHome()
  }
}
</script>

<style lang="scss">
.not_found {
  height: 500px;
}
.mdNot_found {
  height: 400px;
}
.mdNot_foundBox {
  height: 69vh;
}
.smNot_found {
  height: 210px;
}
.smNot_foundBox {
  height: 62vh;
}
.smNot_foundText {
  font-size: 1rem;
}
</style>
