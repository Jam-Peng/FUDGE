// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   publicPath: '/'
// })

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/FUDGE/' : '/zh-tw'
  // chainWebpack: (config) => {
  //   config.plugin('html').tap((args) => {
  //     const [meta] = args
  //     meta.title = 'FUDGE 美好生活'
  //     meta.icon = 'favicon.ico'
  //     meta.meta = {
  //       description:
  //         '了解和享受理所當然的生活，以舒適和質感為重點，打造理想中的生活模樣。',
  //       og: {
  //         type: 'website',
  //         url: 'https://Jam-Peng.github.io/FUDGE/#/zh-tw',
  //         title: 'FUDGE',
  //         image: '@/public/favicon.ico',
  //         description: '美好的一天，MAKE YOUR DAY。'
  //       }
  //     }
  //     return args
  //   })
  // }
}
