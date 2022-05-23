<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">FUDGE-SHOP</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/dashboard/products" class="nav-link"
              >產品
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">訂單</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">優惠卷</a>
          </li>
        </ul>
        <!-- <span class="navbar-text"> Navbar text with an inline element </span> -->
        <button
          class="btn btn-outline-success"
          type="submit"
          @click.prevent="logout"
        >
          登出
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      const api = `${process.env.VUE_APP_API}logout`

      this.$http
        .post(api, this.user)
        .then((res) => {
          if (res) {
            this.$router.push('/login')
          }
        })
        .catch((err) => {
          console.log(err.response)
        })
    }
  }
}
</script>
