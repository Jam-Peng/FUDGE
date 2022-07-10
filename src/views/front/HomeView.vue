<template>
  <div
    class="container-fluid position-sticky top-0 start-0"
    style="z-index: 1000"
  >
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
import emitter from '@/methods/emitter'

export default {
  components: { NavBar },
  provide() {
    return {
      emitter
    }
  }
}
</script>
