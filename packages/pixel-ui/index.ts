import type { App, Plugin } from 'vue'
import Components from './components'

import '@pixel-ui/components/dist/style.css'

function Install(components: Plugin[]) {
  const install = (app: App) => {
    components.forEach(component => app.use(component))
  }
  return {
    install,
  }
}
export default Install(Components)

export * from './components'
