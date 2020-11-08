const StyleLintPlugin = require('stylelint-webpack-plugin')
const path = require('path')
const IS_DEV = process.env.NODE_ENV === 'development'
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  indexPath: 'index.html',
  assetsDir: 'static',
  productionSourceMap: IS_DEV,
  devServer: {
    port: 8000,
    open: true,
    // proxy: {},
  },
  css: {
    sourceMap: IS_DEV,
    extract: !IS_DEV,
  },
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap((options) => {
        return options
      })
      .end()
  },
  configureWebpack: {
    resolve: {
      extensions: ['.vue', '.js', '.json'],
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    plugins: [
      new StyleLintPlugin({
        files: ['**/*.{html,vue,css,less}'],
        fix: false,
        cache: false,
        emitErrors: true,
        failOnError: false,
      }),
    ],
  },
}
