//要引入 ElementPlus 组件，vite的配置文件一定要只有写，要不ElementPlus组件的样式不会呈现。
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    
    AutoImport({
      resolvers:[ElementPlusResolver()],
    }),
    Components({
      resolvers:[ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      //实际的文件路径转换功能，  @  -》src
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
