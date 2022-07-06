<template>
  <div class="container-fluid mt-3">
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
