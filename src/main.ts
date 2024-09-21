import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from "@/App.vue"
import router from '@/router'
import "@/styles/index.scss"
import type {App as _App} from "vue"

const app: _App<Element> = createApp(App)
app.use(router).use(createPinia())
app.mount('#app')
