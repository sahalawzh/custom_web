<template>
  <div class="page-case">
    <lwzx-header></lwzx-header>

    <comcase></comcase>

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
export default {
  components: {
    'lwzx-header': LWZXHeader,
    'lwzx-concat': LWZXConcat,
    'lwzx-footer': LWZXFooter,
    advantage,
    comcase
  },
  beforeMount () {
    document.title = '案例列表'
  }
}
</script>
