import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Flutterwave from  'flutterwave-vue-v3'

createApp(App)
.use(router)
.use(AOS)
.use(Flutterwave, { publicKey: 'FLWPUBK-73e9051112aa802dbf62f33100f25bfd-X' } )
.mount('#app')
