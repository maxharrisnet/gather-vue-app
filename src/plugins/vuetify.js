import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import colors from 'vuetify/es5/util/colors'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
  theme: {
    "primary": "#7b1fa2",
    "secondary": "#26c6da",
    "accent": "#ffd740",
    "error": "#ef5350",
    "info": "#29b6f6",
    "success": "#00e676",
    "warning": "#ffca28"
  }
})
