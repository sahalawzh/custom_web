import Vue from 'vue'
import Router from 'vue-router'

import Index from 'pages/index'
import Inform from 'pages/inform'
import Online from 'pages/online'
import ConsumableDetail from 'pages/consumableDetail'
import CaseDetail from 'pages/caseDetail'
import CaseList from 'pages/caseList'
import NewsDetail from 'pages/newsDetail'
import NewsList from 'pages/newsList'

Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default new Router({
  routes: [
    { path: "/", redirect: "/index" },
    { path: "/index", component: Index },
    { path: "/inform", component: Inform },
    { path: "/online", component: Online },
    { path: "/consumableDetail", component: ConsumableDetail },
    { path: "/caseDetail", component: CaseDetail },
    { path: "/caseList", component: CaseList },
    { path: "/newsDetail", component: NewsDetail },
    { path: "/newsList", component: NewsList }
  ]
})
