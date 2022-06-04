export default {
  methods: {
    // 側邊商品的篩選功能
    filterProductAll() {
      this.filterProducts = []
      this.filterProducts.push(
        ...this.products.filter((item) => {
          return item
        })
      )
      // console.log(this.filterProducts)
    },
    filterProductCloth() {
      this.filterProducts = []
      this.filterProducts.push(
        ...this.products.filter((item) => {
          return item.category === '上半身'
        })
      )
    },
    filterProductPants() {
      this.filterProducts = []
      this.filterProducts.push(
        ...this.products.filter((item) => {
          return item.category === '下半身'
        })
      )
    },
    filterProductHats() {
      this.filterProducts = []
      this.filterProducts.push(
        ...this.products.filter((item) => {
          return item.category === '配件'
        })
      )
    },
    filterProductPack() {
      this.filterProducts = []
      this.filterProducts.push(
        ...this.products.filter((item) => {
          return item.category === '包包'
        })
      )
    },
    filterProductShoes() {
      this.filterProducts = []
      this.filterProducts.push(
        ...this.products.filter((item) => {
          return item.category === '鞋子'
        })
      )
    }
  }
}
