const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // https: true,
    port: 80,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        // target: 'http://43.138.108.69:8080',
        pathRewrite: { '^/api': '' },
        // ws: true, //用于支持websocket
        // changeOrigin: true //用于控制请求头中的host值
      },
      // 支持向多个服务器发送请求
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite: { '^/demo': '' },
        // ws: true, //用于支持websocket
        // changeOrigin: true //用于控制请求头中的host值
      }
    }
  }
})
