exports.modifyWebpackConfig = function(config, env) {
  console.log("running loader");
  config.loader('woff', {
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'url-loader?limit=10000000&minetype=application/font-woff',
  })
  config.loader('eot', {
    test: /\.(eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'url-loader?limit=1000000&minetype=application/vnd.ms-fontobject',
  })
  return config
}
