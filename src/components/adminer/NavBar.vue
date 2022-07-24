<template>
  <nav class="navbar navbar-expand-lg align-items-start">
    <div class="container d-flex flex-lg-column my-4">
      <router-link
        to="/dashboard/products"
        class="navbar-brand fw-semibold mt-2"
      >
        FUDGE
      </router-link>
      <!-- <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button> -->
      <div
        class="collapse navbar-collapse d-flex flex-column"
        id="navbarNavAltMarkup"
      >
        <ul class="navbar-nav py-1 mb-lg-0 d-flex flex-column me-auto">
          <li class="nav-item">
            <router-link to="/dashboard/products" class="nav-link nav_product">
              <i class="bi bi-card-list me-1"></i>
              商品列表
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard/orders" class="nav-link nav_orders">
              <i class="bi bi-card-checklist me-1"></i>
              訂單管理
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard/coupons" class="nav-link nav_coupons">
              <i class="bi bi-ticket-detailed me-1"></i>
              優惠卷
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/dashboard/lookbooks"
              class="nav-link nav_lookbooks"
            >
              <i class="bi bi-card-image me-1"></i>
              LookBook管理
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/zh-tw" class="nav-link nav_front">
              <i class="bi bi-house-door me-1"></i>
              往前台
            </router-link>
          </li>
        </ul>

        <button
          class="btn btn-outline-success btn-sm mt-2"
          type="submit"
          @click.prevent="logout"
        >
          <i class="bi bi-box-arrow-right"></i>
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

//
<style lang="scss">
// .nav_product,
// .nav_orders,
// .nav_coupons,
// .nav_lookbooks,
// .nav_front {
//   &:hover {
//     transform: translateX(1rem);
//   }
// }
//
</style>
