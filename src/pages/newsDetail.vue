<template>
  <div class="page-new-detail" v-if="newsDetail">
    <lwzx-header></lwzx-header>

    <div class="new-detail">
      <div class="title" v-html="newsDetail.title"></div>
      <div class="sub-title">{{ newsDetail.subtitle }}</div>
      <div class="issue-time">{{ newsDetail.source }} · {{ getFormatTime(newsDetail.createTime) }}</div>
      <div class="contents">
        <div v-html="newsDetail.content"></div>
      </div>
    </div>

    <div class="context-box">
      <div class="lw-flex is-align-middle context-item">
        <div class="context-item__tag">上一篇</div>
        <router-link @click.native="handleForceRefresh" :to="{path:'/newsDetail',query: {id: newsDetail.beforeOrNext[0].id}}">{{ newsDetail.beforeOrNext[0].title }}</router-link>
      </div>
      <div class="lw-flex is-align-middle context-item">
        <div class="context-item__tag">下一篇</div>
        <router-link @click.native="handleForceRefresh" :to="{path:'/newsDetail',query: {id: newsDetail.beforeOrNext[1].id}}">{{ newsDetail.beforeOrNext[1].title }}</router-link>
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
import { getNewsDetail } from '@/services/api'
import { timeHandle } from '@/utils/formatTime'
export default {
  components: {
    'lwzx-header': LWZXHeader,
    'lwzx-concat': LWZXConcat,
    'lwzx-footer': LWZXFooter,
    'page-bottom': pageBottom
  },
  data () {
    return {
      id: '',
      newsDetail: ''
    }
  },
  methods: {
    handleForceRefresh () {
      this.$router.go(0)
    },
    getFormatTime (time) {
      return timeHandle(time)
    },
    async getNewsDetail () {
      try {
        const { id } = this
        const opts = {
          id
        }
        this.$loading('加载中')
        const { data } = await getNewsDetail(opts)
        this.$loading.close()
        this.newsDetail = data
      } catch (error) {
        console.log(error)
        this.$loading.close()
      }
    }
  },
  created () {
    const { id } = this.$route.query
    this.id = id
    this.getNewsDetail()
  },
  beforeMount () {
    document.title = '新闻详情'
  }
}
</script>
