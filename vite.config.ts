import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
// @ts-ignore
export default defineConfig({
  base: '/trading-platform-vue/',
  plugins: [
    vue(),
    svgLoader({
      svgo: false,
      svgoConfig: {
        multipass: false,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@ui': path.resolve(__dirname, './src/components/ui'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/_mixins.scss";`,
      },
    },
  },
})
