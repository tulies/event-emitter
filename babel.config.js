module.exports = function (api) {
  api.cache(true)
  return {
    presets: [
      [
        '@babel/preset-env', {
          // modules: false
          // targets: {
          //   ie: '10'
          // }
        }
      ]
    ]
    // 我们这边不做处理，交由外部处理
    // plugins: [
    //   // profill
    //   ['@babel/plugin-transform-runtime', {
    //     corejs: 3
    //   }]
    // ]
  }
}
