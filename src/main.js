import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// import LocalStoragePlugin from './shared/local-storage-plugin'

const pinia = createPinia()
// pinia.use(LocalStoragePlugin)

createApp(App)
  .use(router)
  .use(pinia)
  .mount('#app') 
