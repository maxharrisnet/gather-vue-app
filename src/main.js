import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


Vue.use(Vuetify, {
  theme: {
    primary: colors.deep-purple.base,
    toolbar: colors.deep-purple.base,
    secondary: colors.blue.base,
    accent: colors.pink.base,
    error: colors.red.base,
    warning: colors.orange.base,
    info: colors.blue-grey.base,
    success: colors.green.base
  }
})
