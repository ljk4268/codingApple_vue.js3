import { createApp } from 'vue'
import mitt from 'mitt'
import store from './store'
import App from './App.vue'
import './registerServiceWorker'

let emitter = mitt();
let app = createApp(App);
app.config.globalProperties.emitter = emitter;


app.use(store).mount('#app')
