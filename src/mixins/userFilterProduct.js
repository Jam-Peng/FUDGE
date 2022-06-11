export default {
  methods: {
    // 側邊商品的篩選功能
    filterProductAll(e) {
      this.filterProducts = []
      this.filterProducts.push(
        ...this.products.filter((item) => {
          return item
        })
      )
      // console.log(this.filterProducts)

      this.breadcrumb = e.target.innerText
    },
    filterProductCloth(e) {
      this.filterProducts = []
      this.filterProducts.push(
        ...this.products.filter((item) => {
          return item.category === '上身類'
        })
      )
      this.breadcrumb = e.target.innerText
      this.category = this.breadcrumb

      this.$router.push('categoryProducts?category=上身類')
    },
    filterProductPants(e) {
      this.filterProducts = []
      this.filterProducts.push(
        ...this.products.filter((item) => {
          return item.category === '下身類'
        })
      )
      this.breadcrumb = e.target.innerText
      this.category = this.breadcrumb

      this.$router.push('categoryProducts?category=下身類')
    },
    filterProductHats(e) {
      this.filterProducts = []
      this.filterProducts.push(
        ...this.products.filter((item) => {
          return item.category === '帽子'
        })
      )
      this.breadcrumb = e.target.innerText
      this.category = this.breadcrumb

      this.$router.push('categoryProducts?category=帽子')
    },
    filterProductPack(e) {
      this.filterProducts = []
      this.filterProducts.push(
        ...this.products.filter((item) => {
          return item.category === '包包'
        })
      )
      this.breadcrumb = e.target.innerText
      this.category = this.breadcrumb

      this.$router.push('categoryProducts?category=包包')
    },
    filterProductShoes(e) {
      this.filterProducts = []
      this.filterProducts.push(
        ...this.products.filter((item) => {
          return item.category === '鞋子'
        })
      )
      this.breadcrumb = e.target.innerText
      this.category = this.breadcrumb

      this.$router.push('categoryProducts?category=鞋子')
    }
  }
}
