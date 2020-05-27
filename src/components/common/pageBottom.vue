<template>
  <div class="part-bottom">
    <img :src="image || '../../assets/common/bottom_bg1.png'" class="bottom-bg" alt="">
    <!-- <div class="lw-flex is-align-middle is-justify-center part-bottom__content">
      <div class="part-bottom__content-title">想做就做，由此开始</div>
      <div class="part-bottom__content-tip">已为全球客户提供<span>2000</span>次服务</div>
    </div> -->
  </div>
</template>
<script>
export default {
  props: {
    image: String
  }
}
</script>

<style lang="scss" scoped>
.part-bottom {
  position: relative;
  width: 100%;
  height: px2rem(300);
  .bottom-bg {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &__content {
    position: relative;
    height: 100%;
    flex-direction: column;
    color: $--white-color;
    &-title {
      font-size: px2rem(48);
      margin-bottom: px2rem(14);
    }
    &-tip {
      font-size: px2rem(22);
      > span {
        color: #FF0000;
      }
    }
  }
}
</style>

