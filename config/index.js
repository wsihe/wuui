var path = require('path')

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../examples/main.js')
  },
  template: path.resolve(__dirname, '../examples/index.html'),
  build: {
    env: require('./prod.env'),
    assetsRoot: path.resolve(__dirname, '../docs'),
    assetsSubDirectory: '',
    assetsPublicPath: '',
    productionSourceMap: true,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
  },
  dev: {
    env: require('./dev.env'),
    port: 8088,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    cssSourceMap: false
  }
}
