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
          return item.category === '上半身'
        })
      )
      this.breadcrumb = e.target.innerText
    },
    filterProductPants(e) {
      this.filterProducts = []
      this.filterProducts.push(
        ...this.products.filter((item) => {
          return item.category === '下半身'
        })
      )
      this.breadcrumb = e.target.innerText
    },
    filterProductHats(e) {
      this.filterProducts = []
      this.filterProducts.push(
        ...this.products.filter((item) => {
          return item.category === '配件'
        })
      )
      this.breadcrumb = e.target.innerText
    },
    filterProductPack(e) {
      this.filterProducts = []
      this.filterProducts.push(
        ...this.products.filter((item) => {
          return item.category === '包包'
        })
      )
      this.breadcrumb = e.target.innerText
    },
    filterProductShoes(e) {
      this.filterProducts = []
      this.filterProducts.push(
        ...this.products.filter((item) => {
          return item.category === '鞋子'
        })
      )
      this.breadcrumb = e.target.innerText
    }
  }
}
