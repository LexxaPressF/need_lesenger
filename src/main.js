import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'
import store from "@/store"
import router from './router'
const emitter = mitt();

const app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.use(router)
app.use(store)
app.mount('body')