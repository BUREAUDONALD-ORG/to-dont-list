import ExtractTextPlugin from 'extract-text-webpack-plugin'

exports.modifyWebpackConfig = function(config, env) {
  config.loader('woff', {
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'url-loader?limit=10000000&minetype=application/font-woff',
  })
  config.loader('eot', {
    test: /\.(eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'url-loader?limit=1000000&minetype=application/vnd.ms-fontobject',
  })
  switch (env) {
    case 'develop':
      config.removeLoader('sass')
      config.loader('sass', {
        test: /\.(sass|scss)/,
        exclude: /\.module\.(sass|scss)$/,
        loaders: ['style', 'css', 'postcss', 'sass']
      })
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
