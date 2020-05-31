import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Loading from '@/components/common/loading'
import MessageBox from '@/components/common/messageBox/main.vue'
import './styles/index.scss'
import axios from 'axios'
import store from './store'


Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(Loading)
Vue.use(MessageBox)

Vue.prototype.$messageBox = MessageBox

if (!window.Promise) {
  window.Promise = Promise
}

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
