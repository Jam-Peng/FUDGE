export default {
  methods: {
    // 全部商品篩選功能
    filterProductAll(e) {
      this.filterProducts = []
      this.filterProducts.push(
        ...this.products.filter((item) => {
          return item
        })
      )
      this.$router.push('/productList')
      this.breadcrumb = e.target.innerText
    },
    // 類別商品篩選功能
    filterCategory(e) {
      this.filterProducts = []
      this.filterProducts.push(
        ...this.products.filter((item) => {
          return item.category === e.target.innerText
        })
      )
      this.$router.push('/productList')

      this.breadcrumb = e.target.innerText
    }
  }
}
