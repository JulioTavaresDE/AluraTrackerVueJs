import { store,key } from './store';
import { createApp } from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import roteador from './roteador'

createApp(App)
    .use(roteador)
    .use(store, key)
    .mount('#app')
