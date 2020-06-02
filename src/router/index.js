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
import AboutUs from 'pages/aboutUs'

Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new Router({
  routes: [
    { path: "/", redirect: "/online" },
    { path: "/index", component: Index, meta: { title: '在线打印' } },
    { path: "/inform", component: Inform, meta: { title: '兰湾足行' } },
    { path: "/online", component: Online, meta: { title: '在线打印' } },
    { path: "/consumableDetail", component: ConsumableDetail, meta: { title: '材料详情' } },
    { path: "/caseDetail", component: CaseDetail, meta: { title: '案例详情' } },
    { path: "/caseList", component: CaseList, meta: { title: '案例列表' } },
    { path: "/newsDetail", component: NewsDetail, meta: { title: '新闻详情' } },
    { path: "/newsList", component: NewsList, meta: { title: '资讯中心' } },
    { path: "/aboutUs", component: AboutUs, meta: { title: '联系我们' } }
  ]
})

router.beforeEach((to, from, next) => {//beforeEach是router的钩子函数，在进入路由前执行

  if (to.meta.title) {//判断是否有标题

    document.title = to.meta.title

  }

  next()//执行进入路由，如果不写就不会进入目标页

})
export default router
