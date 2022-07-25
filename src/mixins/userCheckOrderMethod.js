export default {
  data() {
    return {
      orderId: '',
      order: {
        user: {} // 一定要加這個結構，不然會跳錯
      },
      originalTotal: 0,
      shippingFee: 80,
      locationName: '',
      locationAddress: '',
      completeOrderId: ''
    }
  },
  methods: {
    // 取得目前指定單一訂單
    getOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.order = res.data.order
            this.locationName = this.order.user.clientLocation.name
            this.locationAddress = this.order.user.clientLocation.dress

            this.originalTotal = this.order.user.originalTotal // 商品原價總額
            this.completeOrderId = this.order.id // 為了將id帶進Modal中顯示
          }
        })
        .catch(() => {
          this.pushMessage(false, '讀取', '發生錯誤，請重新整理頁面再試一次')
        })
    },
    // 完成訂單付款
    OrderPayment() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`
      this.$http
        .post(url)
        .then((res) => {
          // console.log(res)
          if (res.data.success) {
            this.$refs.completePayModal.showModel()
            this.getOrder()
          }
        })
        .catch(() => {
          this.pushMessage(false, '載入', '發生錯誤，請重新整理頁面')
        })
    },
    goShopping() {
      this.$router.push('/')
    }
  }
}
