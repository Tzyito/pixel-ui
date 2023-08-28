import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'

// import UnpluginCssGenerate from './hooks/unplugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), UnoCSS()],
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: '@pixel-ui/components',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})