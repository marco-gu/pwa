var CopyWebpackPlugin = require('copy-webpack-plugin')
var path = require('path')

module.exports = {
  pwa: {
    name: 'Maersk WDP',
    themeColor: '#64b2d4',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    iconPaths: {
      maskIcon: 'img/icons/Maersk.png',
    }
  },
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([{
        from: path.resolve(__dirname, './sw.js'),
        to: path.resolve(__dirname, './dist'),
        ignore: ['.*']
      }])
    ]
  }
}