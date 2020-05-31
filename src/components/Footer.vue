<template>
  <div class="footer-container lw-flex">
    <div class="footer-left">
      <div class="footer-title footer-left__title">蓝湾在线定制</div>
      <ul>
        <li>关于我们</li>
        <!-- <li>联系我们</li> -->
        <li @click="handleOpenSecrecy">保密政策</li>
      </ul>
    </div>
    <div class="footer-middle">
      <div class="footer-title footer-middle__title">联系&帮助</div>
      <div>
        <img :src="wechatImage" alt="">
      </div>
      <p>客服微信</p>
      <p>通关暗号:我要打印</p>
    </div>
    <div class="footer-right">
      <div class="footer-title footer-right__title">选择语言</div>
      <div class="language-box">简体中文</div>
    </div>
    <lw-popup
      :showCloseButton="true"
      :closeOnClickModal="true"
      v-model="agreeVisible"
      :modal-append-to-body="true"
      :append-to-body="true"
      :lockScroll="true">
      <div class="agree-box">
        <div class="agree-content" ref="agree">
          <div v-html="secrecyContent"></div>
        </div>
      </div>
    </lw-popup>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import BScroll from 'better-scroll'
import { getConfidentialityAgreement } from '@/services/api'
import Popup from '@/components/common/popup/main'
let scrollInstance = null
export default {
  components: {
    'lw-popup': Popup
  },
  data () {
    return {
      isExpand: false,
      secrecyContent: '',
      agreeVisible: false
    }
  },
  computed: {
    ...mapState({
      configData: 'configData'
    }),
    wechatImage () {
      if (this.configData && this.configData.print) {
        return this.configData.print.wechatImage.configValue
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initScroll()
    })
  },
  watch: {
    agreeVisible (val) {
      if (val) {
        this.$nextTick(() => {
          this.initScroll()
        })
      }
    }
  },
  methods: {
    initScroll () {
      try {
        if (scrollInstance) {
          scrollInstance.destroy()
        }
        scrollInstance = new BScroll(this.$refs.agree, {
          probeType: 1,
          click: true,
          bounce: false,
          scrollY: true,
          scrollbar: {
            fade: true,
            interactive: false
          }
        })
      } catch (e) {
      }
    },
    async handleOpenSecrecy () {
      if (this.secrecyContent) return
      try {
        const { data } = await getConfidentialityAgreement({}, {REJECTERRORCONFIG: {
          serveError: true,
          httpError: true
        }})
        this.secrecyContent = data
        this.agreeVisible = true
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
