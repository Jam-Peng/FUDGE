import { defineStore } from 'pinia'

export default defineStore('statusStore', {
  state: () => ({
    messages: []
  }),
  actions: {
    // 基本寫法
    // pushMessage(data) {
    //   const { title, content, style = 'success' } = data
    //   this.messages.push({ title, content, style })
    // },

    // 改寫參數
    pushMessage(res = true, title = '更新', content) {
      if (res) {
        this.messages.push({
          style: 'success',
          title: `${title}成功`,
          content: `${content}`
        })
      } else {
        this.messages.push({
          style: 'danger',
          title: `${title}失敗`,
          content: `${content}`
        })
      }
      setTimeout(() => {
        this.messages.shift()
      }, 2000)
    }
  }
})
