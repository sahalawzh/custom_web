import Vue from 'vue'
import Router from 'vue-router'

import Index from 'pages/index'
import Home from 'component/Home'
import About from 'component/About'

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", redirect: "/index" },
    { path: "/index", component: Index },
    { path: "/home", component: Home },
    { path: "/about", component: About }
  ]
})
