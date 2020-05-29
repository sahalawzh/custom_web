<template>
  <div id="app" class="main">
		
		<router-view></router-view>
  </div>
</template>

<script>

import { mapActions } from 'vuex'
export default {
  name: 'app',
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
