<template>
  <div
    class="toast"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    ref="toast"
  >
    <div class="toast-header">
      <span
        class="p-2 rounded me-2 d-inline-block"
        :class="`bg-${msg.style}`"
      ></span>
      <strong class="me-auto">{{ msg.title }}</strong>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="toast"
        aria-label="Close"
      ></button>
    </div>
    <div class="toast-body" v-if="msg.content">{{ msg.content }}</div>
  </div>
</template>

<script>
import Toast from 'bootstrap/js/dist/toast'
export default {
  props: {
    msg: {
      type: Object
    }
  },
  mounted() {
    const toastEL = this.$refs.toast
    const toast = new Toast(toastEL)
    // 使用pinia整理狀態後，setTimeout寫在store裡控制
    // const toast = new Toast(toastEL, { delay: 4000 })
    toast.show()
  }
}
</script>
