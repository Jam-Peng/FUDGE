<template>
  <div class="container-fluid">
    <div class="row">
      <NavBar />
    </div>
  </div>

  <div>
    <router-view />
  </div>
</template>

<script>
import NavBar from '@/components/user/UserNavBar.vue'
export default {
  components: { NavBar }
}
</script>
