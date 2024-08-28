import 'quasar/dist/quasar.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@/assets/css/variables.css'

import { createPinia } from 'pinia'
import { Quasar } from 'quasar'
import langUk from 'quasar/lang/uk.js'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(Quasar, {
  lang: langUk,
})

app.mount('#app')
