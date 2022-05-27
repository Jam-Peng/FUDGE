<template>
  <!-- <div class="home"> -->
  <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <div class="container-fluid">
    <div class="row vh-100 d-flex align-items-center">
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
  <!-- </div> -->
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  // components: {
  //   HelloWorld
  // }
  methods: {
    loginPage() {
      this.$router.push('/login')
    }
  }
}
</script>
