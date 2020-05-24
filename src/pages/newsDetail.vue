<template>
  <div class="page-new-detail">
    <lwzx-header></lwzx-header>

    <div class="new-detail">
      <div class="title">“大解除”时刻：受重创的初创企业进入生存模式
      最多两行</div>
      <div class="sub-title">副标题</div>
      <div class="issue-time">兰湾在线 · 24分钟前</div>
      <div class="contents">
        一个月前，在新冠病毒尚未开始在美国大流行的时候，知名风投机构红杉资本曾前向初创企业发出“黑天鹅”警告，呼吁他们做好防范，转危为机。不幸的是，警告现在已经变成现实。很多初创企业纷纷停止招聘，并开始大批裁员，以求生存下去。最多4行。。。
      </div>
    </div>

    <div class="context-box">
      <div class="lw-flex is-align-middle context-item">
        <div class="context-item__tag">上一篇</div>
        <a href="#">3D打印原型验证，Al创意桌面收纳</a>
      </div>
      <div class="lw-flex is-align-middle context-item">
        <div class="context-item__tag">下一篇</div>
        <a href="#">3D打印原型验证，Al创意桌面收纳</a>
      </div>
    </div>

    <page-bottom></page-bottom>

    <lwzx-footer></lwzx-footer>

    <lwzx-concat></lwzx-concat>
  </div>
</template>
<script>
import LWZXHeader from '@/components/Header'
import LWZXConcat from '@/components/Concat'
import LWZXFooter from '@/components/Footer'
import pageBottom from '@/components/common/pageBottom'
export default {
  components: {
    'lwzx-header': LWZXHeader,
    'lwzx-concat': LWZXConcat,
    'lwzx-footer': LWZXFooter,
    'page-bottom': pageBottom
  },
  beforeMount () {
    document.title = '新闻详情'
  }
}
</script>
