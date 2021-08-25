import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 8888,
    proxy: {
      '/api': {
        target: 'http://apps.k77.co',
        ws: false,
        changeOrigin: true,
        pathRewrite: { // 路径重写
          '^/api': ''
        }
     }
   }
  }
})
