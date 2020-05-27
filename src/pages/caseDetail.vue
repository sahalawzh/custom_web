<template>
  <div class="page-case-detail">
    <div class="case-main">
      <h3 class="title">{{ caseDetail.title }}</h3>
      <div>
        <div v-html="caseDetail.description"></div>
      </div>
    </div>
    <div class="case-recommend">
      <h4>为你推荐</h4>
      <comcase :caseList="recommendCaseList"></comcase>
    </div>
  </div>
</template>
<script>
import comcase from '@/components/common/case'
import { getCaseDetail, getCaseRandomCase } from '@/services/api'
import axios from 'axios'
export default {
  components: {
    comcase
  },
  data () {
    return {
      id: '',
      caseDetail: {},
      recommendCaseList: []
    }
  },
  methods: {
  },
  created () {
    const { id } = this.$route.query
    this.id = id
    this.$loading('加载中')
    const opts = {
      id
    }
    axios.all([getCaseRandomCase(), getCaseDetail(opts)]).then(res => {
      this.$loading.close()
      const [ caseList, caseDetail ] = res
      this.caseDetail = caseDetail.data
      console.log(this.caseDetail)
      this.recommendCaseList = caseList.data
    }).catch(err => {
      console.log(err)
      this.$loading.close()
    })
  },
  beforeMount () {
    document.title = '案例详情'
  }
}
</script>
