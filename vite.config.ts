import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy:{
      //测试代理配置，成功
      '/api':{
        target:'http://localhost:3000',   
        ws: true,     
        changeOrigin: true,
      },
      '/static': {
        target:'http://localhost:8080',   
        ws: true,     
        changeOrigin: true,
      }
    }
  }
})


