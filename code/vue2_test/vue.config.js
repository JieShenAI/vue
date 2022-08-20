const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/jango': {
        target: 'http://localhost:80',
        pathRewrite: { '^/jango': '' },
        // ws: true, //用于支持websocket
        // changeOrigin: true //用于控制请求头中的host值
      },
      // '/demo': {
      //   target: 'http://localhost:5001',
      //   pathRewrite: { '^/demo': '' },
      //   // ws: true, //用于支持websocket
      //   // changeOrigin: true //用于控制请求头中的host值
      // }
    }
  }
})
