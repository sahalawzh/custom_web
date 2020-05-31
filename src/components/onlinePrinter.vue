<template>
  <lw-popup
    :onClose="onClose"
    :value="printerVisible"
    v-if="printerInfo"
    :modal-append-to-body="true"
    :append-to-body="true"
    :lockScroll="true">
    <div class="printer-container">
      <div>
        <img src="../assets/online/printer_hd.png" class="printer-hd" alt="">
      </div>
      <p class="unopen-tip">移动端暂未开放在线下单功能</p>
      <div class="content-box">
        <div class="title">您可以</div>
        <div class="lw-flex content-box__li">
          <img class="ico_num" src="../assets/online/1.png" alt="">
          <div>前往PC端在线下单</div>
        </div>
        <div class="lw-flex content-box__li">
          <img class="ico_num" src="../assets/online/2.png" alt="">
          <div>打印文件及个人/公司信息发送至<span class="light-text">{{printerInfo.email.configValue}}</span>专业专业团队为您服务</div>
        </div>
        <div class="lw-flex content-box__li">
          <img class="ico_num" src="../assets/online/3.png" alt="">
          <div class="qrcode-box">
            <div>
              <img :src="printerInfo.wechatImage.configValue" alt="">
            </div>
            <p>客服微信</p>
            <p>通关暗号：我要打印</p>
          </div>
        </div>
      </div>
    </div>
  </lw-popup>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import Popup from '@/components/common/popup/main'
export default {
  components: {
    'lw-popup': Popup
  },
  computed: {
    ...mapState({
      configData: 'configData',
      printerVisible: 'printerVisible'
    }),
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
    }
  }
}
</script>

