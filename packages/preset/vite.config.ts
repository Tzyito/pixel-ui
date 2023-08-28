import { resolve } from 'node:path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: '@pixel-ui/preset',
    },
    rollupOptions: {
      output: {
        exports: 'named',
      },
    },
  },
})
