<template>
  <div class="header-container">
    <div class="header-main lw-flex is-justify-space-between is-align-middle" @click="isExpand = !isExpand">
      <img src="../assets/common/logo.png" class="logo" alt="">
      <div class="expand-box">
        <div class="expand-box__item"></div>
        <div class="expand-box__item"></div>
        <div class="expand-box__item"></div>
      </div>
    </div>
    <transition name="expand">
      <div class="menu-main" v-show="isExpand">
        <div class="menu-item lw-flex is-justify-space-between is-align-middle">
          <div class="arrow"></div>
          <div class="menu-name">3D打印功能性定制鞋垫</div>
        </div>
        <div class="menu-item lw-flex is-justify-space-between is-align-middle">
          <div class="arrow"></div>
          <div class="menu-name">在线打印</div>
        </div>
        <div class="menu-item lw-flex is-justify-space-between is-align-middle">
          <div class="arrow"></div>
          <div class="menu-name">创业同行</div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isExpand: false
    }
  },
  methods: {
  }
}
</script>
