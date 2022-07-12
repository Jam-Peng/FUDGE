<template>
  <div class="container-fluid mt-4 px-4">
    <div class="row">
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="../../assets/img/banner1.jpeg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../assets/img/banner2.jpeg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../assets/img/banner3.jpeg"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
      </div>

      <div>
        <img src="../../assets/img/indexGif.gif" alt="" class="d-block w-100" />
      </div>
    </div>

    <div class="row">
      <div class="col text-center">
        <p class="fs-3">登入後台管理系統</p>
        <button
          class="btn btn-primary btn-block"
          type="button"
          @click.prevent="loginPage"
        >
          登入
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    loginPage() {
      this.$router.push('/dashboard/products')
    }
  }
}
</script>
