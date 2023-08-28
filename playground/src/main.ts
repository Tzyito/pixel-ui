import { createApp } from 'vue'
import Pixel from 'pixel-ui'
import App from './App.vue'
import 'uno.css'
import 'pixel-ui/dist/style.css'

import './style.css'

const app = createApp(App)
app.use(Pixel)
app.mount('#app')
