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
    <ToastMessages />
    <router-view />
  </div>

  <div
    class="container-fluid position-sticky bottom-0 start-0"
    style="z-index: 1000"
  >
    <div class="row">
      <ButtonNavBar />
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/user/UserNavBar.vue'
import ButtonNavBar from '@/components/user/UserButtonNavBar.vue'
import ToastMessages from '@/components/ToastMessages.vue'
import emitter from '@/methods/emitter'

export default {
  components: { NavBar, ButtonNavBar, ToastMessages },
  provide() {
    return {
      emitter
    }
  }
}
</script>
