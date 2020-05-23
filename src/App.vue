<template>
  <div id="app" class="main">
		
		<router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app'
}
</script>

<style lang="scss">
.main {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: px2rem(60);
	.pic {
		width: px2rem(100);
		height: px2rem(220);
	}
}
</style>
