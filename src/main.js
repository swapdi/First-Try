import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createPinia } from 'pinia'

loadFonts()
const pinia = createPinia()
const app = createApp(App)
app.use(pinia)

createApp(App)
  .use(vuetify)
  .mount('#app')
