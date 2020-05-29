<template>
  <div class="page-news">
    <lwzx-header></lwzx-header>

    <div class="new-container">
      <h2>资讯中心</h2>
      <div class="new-item" v-for="item in newsList" :key="item.id" @click="handleToDetail(item.id)">
        <div>
          <img :src="item.mainImg" class="new-img" alt="">
        </div>
        <h4>{{ item.title }}</h4>
        <div class="sub-title">{{ item.subtitle }}</div>
        <p>{{ item.synopsis }}</p>
        <div class="lw-flex is-align-middle is-justify-space-between new-item__ft">
          <div class="read-text">阅读全文>></div>
          <div class="issue-time">{{ item.source }} · {{ getFormatTime(item.createTime) }}</div>
        </div>
      </div>

      <pagination
        :currentPage="start"
        :limit="limits"
        :totalCount="total"
        @change="getCurrentPage"
        :small="true"
        ></pagination>
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
import { getNewsList } from '@/services/api'
import { timeHandle } from '@/utils/formatTime'
import pagination from '@/components/common/pagination/main'
export default {
  components: {
    'lwzx-header': LWZXHeader,
    'lwzx-concat': LWZXConcat,
    'lwzx-footer': LWZXFooter,
    'page-bottom': pageBottom,
    pagination
  },
  data () {
    return {
      start: 1,
      limits: 1,
      total: 0,
      newsList: []
    }
  },
  methods: {
    handleToDetail (id) {
      this.$router.push({path: '/newsDetail', query: { id }})
    },
    getCurrentPage (val) {
      this.start = val
      this.newsList = []
      this.getNewsList()
    },
    getFormatTime (time) {
      return timeHandle(time)
    },
    async getNewsList () {
      try {
        const { start, limits } = this
        const opts = {
          start,
          limits
        }
        this.$loading('加载中')
        const { rows, total } = await getNewsList(opts)
        this.$loading.close()
        this.total = total
        this.newsList = rows
      } catch (error) {
        console.log(error)
        this.$loading.close()
      }
    }
  },
  created () {
    this.getNewsList()
  }
}
</script>
