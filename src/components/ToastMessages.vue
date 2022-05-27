<template>
  <div class="toast-container position-absolute pe-3 top-10 end-0">
    <Toast v-for="(msg, index) in messages" :key="index" :msg="msg" />
  </div>
</template>

<script>
import Toast from '@/components/ToastView.vue'

export default {
  data() {
    return {
      messages: []
    }
  },
  components: { Toast },
  inject: ['emitter'],
  mounted() {
    this.emitter.on('pushMessages', (messageData) => {
      const { style, title, content } = messageData
      this.messages.push({ style, title, content })
    })
  }
}
</script>
