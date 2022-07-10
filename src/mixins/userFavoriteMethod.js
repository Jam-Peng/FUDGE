import emitter from '@/methods/emitter'

export default {
  methods: {
    // 透過Icon將"商品的ID"加入或刪除相同ID到“我的最愛”陣列中，並同時執行更新localstorage
    // UserProducts.vue元件 使用
    addFavorite(productId) {
      if (this.favoriteItems.includes(productId)) {
        const num = this.favoriteItems.indexOf(productId)
        this.favoriteItems.splice(num, 1)
      } else {
        this.favoriteItems.push(productId)
      }
      // 將資料設定到localStorage
      localStorage.setItem('favorites', JSON.stringify(this.favoriteItems))
      // 傳遞emitter觸發navBar元件“我的最愛”badge數量
      emitter.emit('update_favorite')
    },
    // 取得回傳從localStorage裡取出來的ID
    // UserProducts.vue元件 和 UserFavorite.vue元件 使用
    getLocalStorage() {
      return JSON.parse(localStorage.getItem('favorites'))
    },
    // 刪除後更新localStorage裡資料
    // UserFavorite.vue元件使用
    deleteLocalStorage(itemsId) {
      const favoritesId = JSON.stringify(itemsId)
      localStorage.setItem('favorites', favoritesId)
      emitter.emit('delete_favorite')
    }
  }
}
