<template>
  <div>DashBoard</div>
</template>

<script>
export default {
  created() {
    // 取得 token
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)pengToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    )
    // console.log(token)
    // 將 token 加到 headers
    this.$http.defaults.headers.common.Authorization = token

    // 發送 API
    const api = `${process.env.VUE_APP_API}/api/user/check`
    this.$http
      .post(api, this.user)
      .then((res) => {
        // console.log(res)
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
