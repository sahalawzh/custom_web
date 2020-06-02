<template>
  <div class="about-container">
    <div v-html="aboutUsContent"></div>
  </div>
</template>
<script>
import { getAboutUs } from '@/services/api'
export default {
  data () {
    return {
      aboutUsContent: ''
    }
  },
  async created () {
    try {
      this.$loading('加载中')
      const { data } = await getAboutUs()
      this.aboutUsContent = data
      this.$loading.close()
    } catch (error) {
      console.log(err)
      this.$loading.close()
    }
  }
}
</script>
