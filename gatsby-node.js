import ExtractTextPlugin from 'extract-text-webpack-plugin'
let FaviconsWebpackPlugin = require('favicons-webpack-plugin')

exports.modifyWebpackConfig = function(config, env) {
  switch (env) {
    case 'develop':
      config.removeLoader('sass')
      config.loader('sass', {
        test: /\.(sass|scss)/,
        exclude: /\.module\.(sass|scss)$/,
        loaders: ['style', 'css', 'postcss', 'sass']
      })

      config.plugin('favicongen', FaviconsWebpackPlugin, ['favicon.png'])

      config.merge({
        postcss: [
          require('postcss-import')(),
          require('postcss-cssnext')({ browsers: '> 1%' }),
          require('postcss-browser-reporter'),
          require('postcss-reporter'),
        ],
      })
      return config
    case 'build-css':
      config.plugin('favicongen', FaviconsWebpackPlugin, ['favicon.png'])
      config.loader('sass', {
        test: /\.(sass|scss)/,
        exclude: /\.module\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css?minimize', 'postcss', 'sass']),
      })
      config.merge({
        postcss: [
          require('postcss-import')(),
          require('postcss-cssnext')({
            browsers: '> 1%',
          }),
        ],
      })
      return config
  }
  return config
}
