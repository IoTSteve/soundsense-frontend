import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);
axios.defaults.baseURL = 'http://192.168.178.20:3000/';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
