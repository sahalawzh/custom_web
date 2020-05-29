<template>
  <transition :name="currentTransition" @after-enter="afterEnter" @afterLeave="afterLeave">
    <div v-show="currentValue" class="lw-popup" :class="[position ? 'lw-popup__' + position : '', full ? 'is-full' : 'not-full', popupClass]">
      <!-- <i class="lw-popup__close font-size--30  icon-icon_close" :class="[iconFontClass]"></i> -->
      <img class="lw-popup__close" src="../../../assets/common/ico_close.png" v-show="showCloseButton" @click="handleClose">
      <slot></slot>
    </div>
  </transition>
</template>
<script>
  import Popup from './index'
  export default {
    name: 'lw-popup',
    mixins: [Popup],
    props: {
      modal: {
        default: true
      },
      modalFade: {
        default: true
      },
      modalClass: String,
      popupClass: String,
      lockScroll: {
        default: false
      },
      closeOnClickModal: {
        default: true
      },
      popupTransition: {
        type: String,
        default: 'popup-slide'
      },
      position: {
        type: String,
        default: 'default'
      },
      showCloseButton: {
        type: Boolean,
        default: false
      },
      willClose: Function,
      onClose: Function,
      full: {
        type: Boolean,
        default: true
      },
      appendToBody: {
        type: Boolean,
        default: false
      },
      modalAppendToBody: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        currentValue: false,
        currentTransition: this.popupTransition,
        iconFontClass: 'lw-font'
      };
    },
    watch: {
      currentValue(val) {
        this.$emit('input', val);
      },
      value(val) {
        this.currentValue = val;
      }
    },
    beforeMount() {
      if (this.popupTransition !== 'popup-fade') {
        this.currentTransition = `popup-slide-${ this.position }`;
      }
    },
    mounted() {
      if (this.value) {
        this.rendered = true;
        this.currentValue = true;
        this.open();
        if (this.appendToBody) {
          document.body.appendChild(this.$el)
        }
      }
    },
    destroyed () {
      if (this.appendToBody && this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el)
      }
    },
    methods: {
      handleClose () {
        this.__closeType = 'cancel'
        this.currentValue = false
        if (typeof(this.onClose) === 'function') {
          this.onClose()
        }
      }
    }
  };
</script>
