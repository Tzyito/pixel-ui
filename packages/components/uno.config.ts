import {
  defineConfig,
  presetAttributify,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { getCSSPreflights, presetPixel } from '@pixel-ui/preset'

export default defineConfig({
  presets: [presetUno({ preflight: false }), presetAttributify(), presetPixel()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  preflights: [
    {
      layer: 'base',
      getCSS: () => `
        :root {
          ${getCSSPreflights('light')}
        }
        :root.dark {
          ${getCSSPreflights('dark')}
        }
    `,
    },
  ],
  configDeps: ['./index.ts'],
})
