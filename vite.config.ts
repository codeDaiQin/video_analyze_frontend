import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy:{
      //测试代理配置，成功
      '/api':{
        target:'http://gmall-h5-api.atguigu.cn',   
        ws: true,     
        changeOrigin: true,
      }
    }
  }
})


