import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.min.css'
import 'animate.css/animate.min.css'
import PrimeVue from 'primevue/config'

createApp(App).use(store).use(router).use(PrimeVue).mount('#app')
