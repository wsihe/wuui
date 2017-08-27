// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../examples/main.js')
  },
  template: path.resolve(__dirname, '../examples/index.html'),
  build: {
    env: require('./prod.env'),
    // index: path.resolve(__dirname, '../dist/index.html'),
    // assetsRoot: path.resolve(__dirname, '../dist'),
    assetsRoot: path.resolve(__dirname, '../docs'),
    assetsSubDirectory: '',
    assetsPublicPath: '',
    productionSourceMap: true,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // bundleAnalyzerReport: process.env.npm_config_report
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
