<template>
  <div class="page-case">
    <lwzx-header></lwzx-header>

    <comcase :caseList="caseList"></comcase>

    <advantage></advantage>

    <div>
      <img src="../assets/common/bottom_bg2.png" class="bottom_bg" alt="">
    </div>

    <lwzx-footer></lwzx-footer>

    <lwzx-concat></lwzx-concat>
  </div>
</template>
<script>
import LWZXHeader from '@/components/Header'
import LWZXConcat from '@/components/Concat'
import LWZXFooter from '@/components/Footer'
import advantage from '@/components/common/advantage'
import comcase from '@/components/common/case'
import { getCaseListCase } from '@/services/api'
export default {
  components: {
    'lwzx-header': LWZXHeader,
    'lwzx-concat': LWZXConcat,
    'lwzx-footer': LWZXFooter,
    advantage,
    comcase
  },
  data () {
    return {
      classId: '',
      caseList: []
    }
  },
  created () {
    const { classId } = this.$route.query
    this.classId = classId
    this.getCaseList()
  },
  methods: {
    async getCaseList () {
      try {
        const { classId } = this
        const opts = {
          classId
        }
        this.$loading('加载中')
        const { data } = await getCaseListCase(opts)
        this.$loading.close()
        this.caseList = data
      } catch (error) {
        console.log(error)
        this.$loading.close()
      }
    }
  },
  beforeMount () {
    document.title = '案例列表'
  }
}
</script>
