import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'
import store from "@/store"

//fontawesome adding
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


const emitter = mitt();
const app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.use(store)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('body')

