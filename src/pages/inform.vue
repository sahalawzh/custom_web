<template>
  <div class="page-inform">
    <lwzx-header></lwzx-header>

    <img src="../assets/common/inform.png" class="inform-img" alt="">

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
  beforeMount () {
    document.title = '兰湾足行'
  }
}
</script>
