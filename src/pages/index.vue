<template>
  <div class="page-index">

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
import LWZXConcat from '@/components/Concat'
export default {
  components: {
    'lwzx-concat': LWZXConcat
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="scss">
.main {
  font-size: $--base-font-size;
}
</style>


