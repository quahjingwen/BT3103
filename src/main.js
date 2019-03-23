import Vue from 'vue'
import App from './App'
import VueFire from 'vuefire'

Vue.config.productionTip = false

Vue.use(VueFire)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
