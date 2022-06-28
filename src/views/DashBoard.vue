<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col col-lg-3 col-md-2">
        <!-- bg-light -->
        <NavBar />
      </div>
      <div class="col col-lg-9 col-md-10">
        <div class="d-flex flex-column p-3 mx-3 ms-auto">
          <ToastMessages />
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import emitter from '@/methods/emitter'
import ToastMessages from '@/components/ToastMessages.vue'

export default {
  components: { NavBar, ToastMessages },
  provide() {
    return {
      emitter
    }
  },
  created() {
    // 取得 token
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)pengToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    )
    // 將 token 加到 headers
    this.$http.defaults.headers.common.Authorization = token

    // 發送 API
    const api = `${process.env.VUE_APP_API}api/user/check`
    this.$http
      .post(api, this.user)
      .then((res) => {
        if (!res.data.success) {
          this.$router.push('/login')
        }
      })
      .catch((err) => {
        console.log(err.response)
      })
  }
}
</script>
