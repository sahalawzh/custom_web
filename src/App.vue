<template>
  <div id="app" class="main">
		<lwzx-header></lwzx-header>
		<router-view></router-view>
  </div>
</template>

<script>

import { mapActions } from 'vuex'
import LwzxHeader from '@/components/Header'
export default {
  name: 'app',
  components: {
    LwzxHeader
  },
  methods: {
    ...mapActions({
      getConfigInfoData: 'getConfigInfoData'
    })
  },
  created () {
    this.getConfigInfoData()
  }
}
</script>

<style lang="scss">
</style>
