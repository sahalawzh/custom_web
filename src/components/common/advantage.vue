<template>
  <div class="advantage-list lw-flex is-align-middle is-justify-space-around">
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
  </div>
</template>
<style lang="scss" scoped>
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
