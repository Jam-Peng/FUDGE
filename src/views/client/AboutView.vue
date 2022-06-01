<template>
  <div class="container-fluid">
    <div class="row">
      <NavBar />
    </div>
  </div>

  <div class="container-fluid mt-3">
    <div class="row">
      <div class="col text-center">
        <p class="fs-3">關於我頁面</p>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/user/UserNavBar.vue'
export default {
  components: { NavBar }
}
</script>
