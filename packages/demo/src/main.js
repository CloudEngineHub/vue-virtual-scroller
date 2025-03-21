import { createApp } from 'vue'

import VirtualScroller from 'vue-virtual-scroller'
import App from './App.vue'

import router from './router'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'

const app = createApp(App)
app.use(router)
app.use(VirtualScroller)
app.mount('#app')
