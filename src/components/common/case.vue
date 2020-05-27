<template>
  <div class="case-list lw-flex">
    <div class="case-list__item" v-for="item in caseList" :key="item.id" @click="handleToCaseDetail(item.id)">
      <div>
        <img :src="item.image" class="case-img">
      </div>
      <div class="item-info">
        <div class="title">{{ item.title }}</div>
        <ul>
          <li>         
            <span>最小精度</span>{{ item.precision }}mm
          </li>
          <li><span>使用材料</span>{{ item.material }}</li>
          <li><span>尺寸大小</span>{{ item.size }}</li>
          <li><span>按需定制</span>{{ item.technics }}</li>
          <li><span>交付周期</span>{{ item.cycle }}工作日</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    caseList: Array
  },
  methods: {
    handleToCaseDetail (id) {
      this.$router.push({path: '/caseDetail', query: { id }})
      this.$router.go(0)
    }
  }
}
</script>
