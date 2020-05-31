<template>
  <div class="page-online">
    <lwzx-header></lwzx-header>

    <div class="lw-flex is-align-middle tip-box" v-if="homeTop && isShowTip">
      <img src="../assets/common/icon_tip.png" class="tip-icon">
      <span>{{ homeTop.tips.configValue }}</span>
      <div class="fork" @click="isShowTip = false"></div>
    </div>

    <div class="online-header" v-if="homeTop">
      <img v-if="homeTop.image" :src="homeTop.image.configValue" class="online-header__img" alt="">
    </div>

    <div class="part-consumable">
      <div class="consumable-title">3D打印耗材</div>
      
      <consumable :list="materialList"></consumable>
    </div>

    <div class="part-craft" v-if="technologyDetail">
      <div class="craft-title">3D打印工艺</div>
      <div class="craft-img-lg">
        <img :src="technologyDetail.coverUrl">
      </div>
      <div class="craft-article">
        <h4 class="craft-article__title">{{ technologyDetail.title }}</h4>
        <p>{{ technologyDetail.description }}</p>
        <div class="craft-list lw-flex">
          <div class="craft-list__item"
            @click="handleToCradfDetail(item.id, index)"
            :class="item.isDefault === 0 ? 'active' : ''"
            v-for="(item, index) in technologyList"
            :key="item.id">
            <img :src="item.coverUrl" alt="">
            <div class="craft-list__item--name">{{ item.title }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="part-business" v-if="homeCase">
      <div class="business-title">{{ homeCase.title.configValue }}</div>
      <p>{{ homeCase.content.configValue }}</p>
      <div class="business-tel">{{ homeCase.phone.configValue }}</div>
      <div class="business-list lw-flex">
        <div class="business-list__item" v-for="item in caseList" @click="handleToCase(item.classId)" :key="item.classId">
          <img v-if="item.image" :src="item.image" class="business-list__item--bg">
        </div>
      </div>
      
      <advantage></advantage>
    </div>

    <div class="printer-box" @click="handleShowPrinter">
      <img src="../assets/online/ico_print.png">
    </div>

    <page-bottom></page-bottom>

    <lwzx-footer></lwzx-footer>

    <lwzx-concat></lwzx-concat>

    <online-printer></online-printer>
  </div>
</template>
<script>
import LWZXHeader from '@/components/Header'
import LWZXConcat from '@/components/Concat'
import LWZXFooter from '@/components/Footer'
import pageBottom from '@/components/common/pageBottom'
import advantage from '@/components/common/advantage'
import consumable from '@/components/common/consumable'
import { getCaseListColumn, getMaterialIndexList, getTechnologyList, getTechnologyInfo } from '@/services/api'
import axios from 'axios'
import { mapState, mapMutations } from 'vuex'
import OnlinePrinter from '@/components/onlinePrinter'
export default {
  components: {
    'lwzx-header': LWZXHeader,
    'lwzx-concat': LWZXConcat,
    'lwzx-footer': LWZXFooter,
    'page-bottom': pageBottom,
    advantage,
    consumable,
    OnlinePrinter
  },
  data () {
    return {
      caseList: [],
      materialList: [],
      technologyList: [],
      technologyDetail: {},
      isShowTip: true
    }
  },
  computed: {
    ...mapState({
      configData: 'configData',
      printerVisible: 'printerVisible'
    }),
    homeTop () {
      return this.configData.homeTop
    },
    homeCase () {
      return this.configData.homeCase
    },
    printerInfo () {
      if (this.configData && this.configData.print) {
        return this.configData.print
      }
    }
  },
  methods: {
    ...mapMutations({
      updateKey: 'updateKey'
    }),
    onClose () {
      this.updateKey({
        key: 'printerVisible',
        value: false
      })
    },
    handleShowPrinter () {
      this.updateKey({
        key: 'printerVisible',
        value: true
      })
    },
    async getTechnologyDetail (technologyId) {
      try {
        const opts = {
          technologyId
        }
        const { data } = await getTechnologyInfo(opts)
        this.technologyDetail = data
      } catch (error) {
        console.log(error)
      }
    },
    handleToCradfDetail (id, index) {
      this.technologyList.forEach(item => {
        item.isDefault = 1
      })
      this.technologyList[index].isDefault = 0
      this.getTechnologyDetail(id)
    },
    handleToCase (classId) {
      this.$router.push({path: '/caseList', query: { classId }})
    }
  },
  created () {
    this.$loading('加载中')
    axios.all([getCaseListColumn(), getMaterialIndexList(), getTechnologyList()]).then(res => {
      this.$loading.close()
      const [caseData, materialData, technologyData ] = res
      this.caseList = caseData.data
      this.materialList = materialData.data
      technologyData.data.filter(item => {
        if (item.isDefault === 0) {
          this.getTechnologyDetail(item.id)
        }
      })
      this.technologyList = technologyData.data
    }).catch(err => {
      console.log(err)
      this.$loading.close()
    })
  }
}
</script>
