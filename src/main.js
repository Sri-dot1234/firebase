import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vPage from 'v-page';
// import 'expose?$!expose?jQuery!jquery'



createApp(App).use(router).use(vPage).mount('#app')
