<template>
  <div
    class="toast-container position-absolute pe-3 top-10 end-0"
    style="z-index: 1050"
  >
    <Toast v-for="(msg, index) in messages" :key="index" :msg="msg" />
  </div>
</template>

<script>
import Toast from '@/components/ToastView.vue'
import { storeToRefs } from 'pinia'
import statusStore from '@/stores/statusStores'

export default {
  components: { Toast },
  setup() {
    const status = statusStore()
    const { messages } = storeToRefs(status)

    return { messages }
  }

  // 原本使用 Option API emitter 傳送吐司訊息
  // data() {
  //   return {
  //     messages: []
  //   }
  // }
  // inject: ['emitter'],
  // mounted() {
  //   this.emitter.on('pushMessages', (messageData) => {
  //     const { style, title, content } = messageData
  //     this.messages.push({ style, title, content })
  //   })
  // }
}
</script>
