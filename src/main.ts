import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'
const messages = {
  en: {
    'my-message': {
      the_world: 'the world',
      dio: 'DIO:',
      linked: '@:my-message.dio @:my-message.the_world !!!!'
    }
  }
}

const app = createApp(App)

app.use(createPinia())
app.use(
  createI18n({
    legacy: false,
    locale: 'en',
    messages
  })
)
app.use(router)

app.mount('#app')
