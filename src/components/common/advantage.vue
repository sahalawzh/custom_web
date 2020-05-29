<template>
  <!-- <div class="advantage-list lw-flex is-align-middle is-justify-space-around">
    <div class="advantage-list__item">
      <div>
        <img src="../../assets/index/group_1.png" alt="">
      </div>
      <div>100%安全</div>
    </div>
    <div class="advantage-list__item">
      <div>
        <img src="../../assets/index/group_1.png" alt="">
      </div>
      <div>质量有保证</div>
    </div>
    <div class="advantage-list__item">
      <div>
        <img src="../../assets/index/group_1.png" alt="">
      </div>
      <div>速度最快</div>
    </div>
  </div> -->
  <div class="advactage-container">
    <img :src="advImg" alt="">
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      configData: 'configData'
    }),
    advImg () {
      if (this.configData && this.configData.homeButtom) {
        return this.configData.homeButtom.image.configValue
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.advactage-container {
  padding: px2rem(66) px2rem(66) px2rem(70);
  img {
    width: 100%;
    height: px2rem(103);
  }
}
.advantage-list {
  padding: px2rem(66) 0 px2rem(70);
  &__item {
    text-align: center;
    color: $--default-color;
    font-size: px2rem(22);
    > div {
      img {
        width: px2rem(42);
        height: px2rem(30);
        margin-bottom: px2rem(14);
      }
    }
  }
}
</style>
