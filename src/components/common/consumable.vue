<template>
  <div>
    <div class="consumable-type lw-flex is-align-middle is-justify-center">
      <div class="consumable-type__item"
        v-for="(item, index) in list" :key="item.id"
        :class="{'active': item.isDefault === 0}"
        @click="handleFilterData(index)"
        >{{ item.cateName }}</div>
    </div>
    <div class="consumable-list lw-flex">
      <div class="consumable-list__item"
        @click="handleToDetail(item.id)"
        v-for="item in materialSimpleList" :key="item.id">
        <img :src="item.coverUrl" class="consumable-list__item--bg">
        <div class="consumable-list__item--name">{{ item.materialName }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array
    }
  },
  data () {
    return {
    }
  },
  computed: {
    materialSimpleList () {
      let result = []
      this.list && this.list.length && this.list.forEach(item => {
        if (item.isDefault === 0) {
          result = item.materialSimpleList
        }
      })
      return result
    }
  },
  methods: {
    handleToDetail (id) {
      this.$router.push({path: '/consumableDetail', query: { id }})
    },
    handleFilterData (index) {
      this.list.forEach(item => {
        item.isDefault = 1
      })
      this.list[index].isDefault = 0
    }
  }
}
</script>

