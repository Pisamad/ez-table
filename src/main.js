/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import ezTable from './components/ezTable'

console.log(ezTable)
Vue.use(ezTable)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')