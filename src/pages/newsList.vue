<template>
  <div class="page-news">
    <lwzx-header></lwzx-header>

    <div class="new-container">
      <h2>咨询中心</h2>
      <div class="new-item">
        <div>
          <img src="../assets/news/new-img.png" class="new-img" alt="">
        </div>
        <h4>“大解除”时刻：受重创的初创企业进入生存模式最多两行</h4>
        <div class="sub-title">副标题</div>
        <p>一个月前，在新冠病毒尚未开始在美国大流行的时候，知名风投机构红杉资本曾前向初创企业发出“黑天鹅”警告，呼吁他们做好防范，转危为机。不幸的是，警告现在已经变成现实。很多初创企业纷纷停止招聘，并开始大批裁员，以求生存下去。最多4行。。。</p>
        <div class="lw-flex is-align-middle is-justify-space-between new-item__ft">
          <a href="#">阅读全文>></a>
          <div class="issue-time">兰湾在线 · 24分钟前</div>
        </div>
      </div>
      <div class="new-item">
        <div>
          <img src="../assets/news/new-img.png" class="new-img" alt="">
        </div>
        <h4>“大解除”时刻：受重创的初创企业进入生存模式最多两行</h4>
        <div class="sub-title">副标题</div>
        <p>一个月前，在新冠病毒尚未开始在美国大流行的时候，知名风投机构红杉资本曾前向初创企业发出“黑天鹅”警告，呼吁他们做好防范，转危为机。不幸的是，警告现在已经变成现实。很多初创企业纷纷停止招聘，并开始大批裁员，以求生存下去。最多4行。。。</p>
        <div class="lw-flex is-align-middle is-justify-space-between new-item__ft">
          <a href="#">阅读全文>></a>
          <div class="issue-time">兰湾在线 · 24分钟前</div>
        </div>
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
    document.title = '咨询中心'
  }
}
</script>
