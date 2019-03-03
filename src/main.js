import Vue from 'vue'
import App from './App.vue'
import './plugins/vuetify'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.use(Vuetify, {
  theme: {
    "primary": "#6200ea",
    "secondary": "#2196f3",
    "accent": "#00b0ff",
    "error": "#ef5350",
    "info": "#29b6f6",
    "success": "#00e676",
    "warning": "#ffca28"
  }
})
