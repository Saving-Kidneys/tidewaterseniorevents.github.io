import './assets/main.css'

import { createApp } from 'vue'
import { createUnhead, VueHeadMixin } from '@unhead/vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const head = createUnhead()

app.mixin(VueHeadMixin)
app.use(router)

app.mount('#app')
