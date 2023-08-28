# @pixel-ui/preset
pixel-ui preseet based on unocss

## Useage
`pnpm add -D unocss @pixel-ui/preset`

Add preset into `uno.config.ts`

```javascript
// uno.config.ts
import { defineConfig, presetAttributify, presetUno } from 'unocss'
import { presetPixel } from 'pixel-ui'

export default defineConfig({
  presets: [
    // ...
    presetUno(),
    presetAttributify(),
    presetPixel(),
  ],
})
```