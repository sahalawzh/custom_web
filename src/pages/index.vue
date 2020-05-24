<template>
  <div class="page-index">
    <lwzx-header></lwzx-header>

    <section>
      <div class="part-item">
        <img src="../assets/index/group_1.png" alt="">
      </div>
      <div class="part-item">
        <img src="../assets/index/group_2.png" alt="">
      </div>
      <div class="part-item">
        <img src="../assets/index/group_3.png" alt="">
      </div>
    </section>
    
    <lwzx-concat></lwzx-concat>
  </div>
</template>
<script>
import LWZXHeader from '@/components/Header'
import LWZXConcat from '@/components/Concat'
export default {
  components: {
    'lwzx-header': LWZXHeader,
    'lwzx-concat': LWZXConcat
  },
  data () {
    return {
    }
  },
  beforeMount () {
    document.title = '在线打印'
  }
}
</script>
<style lang="scss">
.main {
  font-size: $--base-font-size;
}
</style>


