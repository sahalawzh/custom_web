import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Loading from '@/components/common/loading'
import './styles/index.scss'

Vue.config.productionTip = false
Vue.use(Loading)
new Vue({
  render: h => h(App),
	router,
}).$mount('#app')
