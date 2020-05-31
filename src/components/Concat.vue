<template>
  <div class="concat-main lw-flex is-align-middle">
    <div class="lw-flex is-justify-center is-align-middle concat-main__item">
      <img src="../assets/common/ico_service.png" alt="">
      <div>在线客服</div>
    </div>
    <div class="lw-flex is-justify-center is-align-middle concat-main__item" @click="handlePhone">
      <img src="../assets/common/ico_phone.png" alt="">
      <div>技术咨询</div>
    </div>
  </div>
</template>
<script>
import MessageBox from '@/components/common/messageBox/main.js'
export default {
  methods: {
    handlePhone () {
      const tel = 17708639903
      MessageBox({
        message: `确定拨打电话 ${tel}?`,
        showConfirmButton: true,
        showCancelButton: true
      }).then((res) => {
        if (action === 'confirm') {
          window.location.href = 'tel:' + tel
        }
      }).catch(() => {
      })
    }
  }
}
</script>
