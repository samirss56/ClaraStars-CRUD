// https://vuetifyjs.com/en/customization/icons/
// npm install @mdi/font -D
// npm install material-design-icons-iconfont -D

// npm install @fortawesome/fontawesome-free -D

import 'material-design-icons-iconfont/dist/material-design-icons.css' //
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader

import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = [{
  // icons: {
  // iconfont: 'mdi' // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  // }
}]

export default new Vuetify(opts)
