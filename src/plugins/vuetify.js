import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import colors from 'vuetify/es5/util/colors'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
  theme: {
    // primary: colors.deep-purple.base,
    // toolbar: colors.deep-purple.base,
    // secondary: colors.blue.base,
    // accent: colors.pink.base,
    // error: colors.red.base,
    // warning: colors.orange.base,
    // info: colors.blue-grey.base,
    // success: colors.green.base
  },
  iconfont: 'md'
})
