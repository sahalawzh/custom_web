<template>
  <div class="header-container">
    <div class="header-main lw-flex is-justify-space-between is-align-middle" @click="isExpand = !isExpand">
      <img :src="logo" class="logo" alt="">
      <div class="expand-box">
        <div class="expand-box__item"></div>
        <div class="expand-box__item"></div>
        <div class="expand-box__item"></div>
      </div>
    </div>
    <transition name="expand">
      <div class="menu-main" v-show="isExpand">
        <div class="menu-item lw-flex is-justify-space-between is-align-middle" @click="handleToOnlinePrinter">
          <div class="arrow"></div>
          <div class="menu-name">3D打印功能性定制鞋垫</div>
        </div>
        <div class="menu-item lw-flex is-justify-space-between is-align-middle" @click="handleShowPrinter">
          <div class="arrow"></div>
          <div class="menu-name">在线打印</div>
        </div>
        <div class="menu-item lw-flex is-justify-space-between is-align-middle" @click="handleToWeb">
          <div class="arrow"></div>
          <div class="menu-name">创业同行</div>
        </div>
        <div class="menu-item lw-flex is-justify-space-between is-align-middle" @click="handleToNews">
          <div class="arrow"></div>
          <div class="menu-name">资讯中心</div>
        </div>
      </div>
    </transition>
    <online-printer></online-printer>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import OnlinePrinter from '@/components/onlinePrinter'
export default {
  components: {
    OnlinePrinter
  },
  data () {
    return {
      isExpand: false
    }
  },
  methods: {
    ...mapMutations({
      updateKey: 'updateKey'
    }),
    handleShowPrinter () {
      this.updateKey({
        key: 'printerVisible',
        value: true
      })
    },
    handleToOnlinePrinter () {
      this.$router.push({path: '/inform'})
    },
    handleToWeb () {
      window.location.href = 'http://3dprint.gdlwzn.com/Fall/Fall/index.html'
    },
    handleToNews () {
      this.$router.push({path: '/newsList'})
    }
  },
  computed: {
    ...mapState({
      configData: 'configData'
    }),
    logo () {
      if (this.configData && this.configData.top) {
        return this.configData.top.image.configValue
      }
    }
  }
}
</script>
