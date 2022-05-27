<template>
  <nav class="navbar navbar-expand-lg bg-light vh-100 align-items-start">
    <div class="container d-flex flex-lg-column my-3">
      <router-link to="/dashboard/products" class="navbar-brand fw-semibold">
        FUDGE
      </router-link>
      <!-- <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button> -->
      <div class="collapse navbar-collapse d-flex flex-column" id="navbarText">
        <ul class="navbar-nav py-1 mb-lg-0 d-flex flex-column me-auto">
          <li class="nav-item">
            <router-link to="/dashboard/products" class="nav-link"
              >商品管理
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">訂單管理</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">優惠卷管理</a>
          </li>
        </ul>
        <button
          class="btn btn-outline-success mt-3"
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
