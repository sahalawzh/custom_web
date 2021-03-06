<template>
  <transition :name="popupTransition" @after-enter="afterEnter" @afterLeave="afterLeave">
    <div class="lw-msgbox" :class="msgboxClass" v-show="value">
      <!-- <i class="lw-msgbox__close font-size--30 icon-icon_close" :class="[iconFontClass]" @click="handleAction('close')" v-show="showCloseButton"></i> -->
      <!-- <span class="lw-msgbox__icon" v-if="iconClasses !== ''">
        <i class=" font-size--90 color-golden lw-msgbox__icon-icon"  :class="iconClasses"></i>
      </span> -->
      <div class="lw-msgbox__header" v-if="title !== ''">
        <div class="lw-msgbox__title font-color-white">{{ title }}</div>
      </div>
      <div class="lw-msgbox__content font-size--28" v-if="message !== '' || type === 'prompt'">
        <div class="lw-msgbox__message" v-html="message" v-if="message !== ''"></div>
        <div class="lw-msgbox__input" v-if="showInput">
          <input v-model="inputValue" @change="validate" class="font-color-white" :placeholder="inputPlaceholder" ref="input">
          <!-- <div class="lw-msgbox__status is-error" v-show="editorErrorMessage" @click="handleHideError">
            <i class="lw-msgbox__status-icon icon-msg_icon_error_norma" :class="[iconFontClass]"></i>
            <span class="lw-msgbox__status-tip">
              <i class="lw-msgbox__status-cont">{{ editorErrorMessage }}，</i>
              <i class="lw-msgbox__status-trigger">重新输入</i>
            </span>
          </div> -->
        </div>
      </div>
      <div class="lw-msgbox__btns" :class="{'is-full': showCancelButton && showConfirmButton}">
        <button :class="[ cancelButtonClasses ]" v-if="showCancelButton" @click="handleAction('cancel')">{{ cancelButtonText }}</button>
        <button :class="[ confirmButtonClasses ]" v-if="showConfirmButton" @click="handleAction('confirm')">{{ confirmButtonText }}</button>
      </div>
    </div>
  </transition>
</template>
<script>
  let CONFIRM_TEXT = '确定';
  let CANCEL_TEXT = '取消';
  const BUTTON_TEXT_LENGTH = 2
  import Popup from '../popup/index'
  // import iconTypeMap from '../../../utils/iconTypeMap.js'
  export default {
    mixins: [ Popup ],

    props: {
      modal: {
        default: true
      },
      showClose: {
        type: Boolean,
        default: true
      },
      lockScroll: {
        type: Boolean,
        default: false
      },
      cancelButtonTrackIgnore: {
        type: Boolean,
        default: true
      },
      confirmButtonTrackIgnore: {
        type: Boolean,
        default: true
      },
      closeOnClickModal: {
        default: true
      },
      closeOnPressEscape: {
        default: true
      },
      inputType: {
        type: String,
        default: 'text'
      },
      iconClass: {
        type: String,
        default: ''
      },
      iconType: {
        type: String,
        default: ''
      },
      popupTransition: {
        type: String,
        default: 'lw-msgbox__bounce'
      }
    },
    computed: {
      msgboxClass () {
        return {
          // 'is-icon': this.iconClasses !== '',
          // 'no-icon': this.iconClasses === '',
          'is-title': this.title !== '',
          'no-title': this.title === '',
          'is-prompt': this.type === 'prompt'
        }
      },
      // iconClasses () {
      //   return (this.iconType && iconTypeMap[this.iconType] ? `${this.iconFontClass} icon-${ iconTypeMap[this.iconType] }` : '') + (this.iconClass !== '' ? ' ' + this.iconClass : '')
      // },
      // titleClass () {
      //   if (this.type === 'prompt' || this.iconClasses !== '') {
      //     return 'font-size--30'
      //   } else {
      //     return 'font-size--40'
      //   }
      // },
      // contentClass () {
      //   return this.title !== '' && this.iconClasses !== '' ? 'font-color-light-gray' : 'font-color-extra-light-gray'
      // },
      confirmButtonClasses() {
        let classes = 'lw-msgbox__btn lw-button--primary lw-button lw-msgbox__confirm ' + this.confirmButtonClass;
        if (this.confirmButtonHighlight) {
          classes += ' lw-msgbox__confirm--highlight';
        }
        classes += this.confirmButtonText.length > BUTTON_TEXT_LENGTH ? 'lw-button--length-more' : 'lw-button--length-2'
        return classes;
      },
      cancelButtonClasses() {
        let classes = 'lw-msgbox__btn font-size--34 lw-button lw-msgbox__cancel color-golden ' + this.cancelButtonClass;
        if (this.cancelButtonHighlight) {
          classes += ' lw-msgbox__cancel--highlight';
        }
        classes += this.cancelButtonText.length > BUTTON_TEXT_LENGTH ? 'lw-button--length-more' : 'lw-button--length-2'
        return classes;
      }
    },

    methods: {
      doClose() {
        this.value = false;
        this._closing = true;

        this.onClose && this.onClose();

        setTimeout(() => {
          if (this.modal && this.bodyOverflow !== 'hidden') {
            document.body.style.overflow = this.bodyOverflow;
            document.body.style.paddingRight = this.bodyPaddingRight;
          }
          this.bodyOverflow = null;
          this.bodyPaddingRight = null;
        }, 200);
        this.opened = false;

        if (!this.transition) {
          this.doAfterClose();
        }
      },

      handleAction(action) {
        if (this.type === 'prompt' && action === 'confirm' && !this.validate()) {
          return;
        }
        var callback = this.callback;
        this.value = false;
        callback(action);
      },
      handleHideError () {
        this.editorErrorMessage = ''
        if (this.$refs.input) {
          this.$refs.input.focus();
        }
      },
      validate() {
        if (this.type === 'prompt') {
          var inputPattern = this.inputPattern;
          if (inputPattern && !inputPattern.test(this.inputValue || '')) {
            this.editorErrorMessage = this.inputErrorMessage || '输入的数据不合法';
            this.$refs.input.classList.add('invalid');
            return false;
          }
          var inputValidator = this.inputValidator;
          if (typeof inputValidator === 'function') {
            var validateResult = inputValidator(this.inputValue);
            if (validateResult === false) {
              this.editorErrorMessage = this.inputErrorMessage || '输入的数据不合法';
              this.$refs.input.classList.add('invalid');
              return false;
            }
            if (typeof validateResult === 'string') {
              this.editorErrorMessage = validateResult;
              return false;
            }
          }
        }
        this.editorErrorMessage = '';
        this.$refs.input.classList.remove('invalid');
        return true;
      },

      handleInputType(val) {
        if (val === 'range' || !this.$refs.input) return;
        this.$refs.input.type = val;
      }
    },

    watch: {
      value(val) {
        this.handleInputType(this.inputType);
        if (val && this.type === 'prompt') {
          this.editorErrorMessage = ''
          setTimeout(() => {
            if (this.$refs.input) {
              this.$refs.input.focus();
            }
          }, 500);
        }
      },

      inputType(val) {
        this.handleInputType(val);
      }
    },

    data() {
      return {
        title: '',
        message: '',
        type: '',
        showInput: false,
        inputValue: null,
        inputPlaceholder: '',
        inputPattern: null,
        inputValidator: null,
        inputErrorMessage: '',
        showConfirmButton: true,
        showCancelButton: false,
        showCloseButton: false,
        confirmButtonText: CONFIRM_TEXT,
        cancelButtonText: CANCEL_TEXT,
        confirmButtonClass: '',
        confirmButtonDisabled: false,
        cancelButtonClass: '',
        editorErrorMessage: null,
        callback: null
        // iconFontClass: this.$JFKICONCLASS || window.$JFKICONCLASS || 'lw-font'
      };
    }
  };
</script>
