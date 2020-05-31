<template>
  <div class="page-consumable-detail">

    <div class="consumable-main">
      <div>
        <img :src="materialDetail.coverUrl" class="consumable-img-1" alt="">
      </div>
      <h4>{{ materialDetail.materialName }}</h4>

      <div class="parameter-table">
        <div class="parameter-table__tr lw-flex is-align-middle">
          <div class="td lw-flex is-align-middle">
            <img src="../assets/consumable/ico_1.png" class="table-icon" alt="">
            <span class="td-label">工艺</span>
            <span class="td-value">
              {{ materialDetail.technicsName }}
            </span>
          </div>
          <div class="td lw-flex is-align-middle">
            <img src="../assets/consumable/ico_2.png" class="table-icon" alt="">
            <span class="td-label">成形尺寸</span>
            <span class="td-value td-value-xs">{{ materialDetail.vsize }}</span>
          </div>
        </div>
        <div class="parameter-table__tr lw-flex is-align-middle">
          <div class="td lw-flex is-align-middle">
            <img src="../assets/consumable/ico_3.png" class="table-icon" alt="">
            <span class="td-label">熔点</span>
            <span class="td-value">{{ materialDetail.density }}</span>
          </div>
          <div class="td lw-flex is-align-middle">
            <img src="../assets/consumable/ico_4.png" class="table-icon" alt="">
            <span class="td-label">材料种类</span>
            <span class="td-value">{{ materialDetail.cateName }}</span>
          </div>
        </div>
        <div class="parameter-table__tr lw-flex is-align-middle">
          <div class="td lw-flex is-align-middle">
            <img src="../assets/consumable/ico_5.png" class="table-icon" alt="">
            <span class="td-label">精度</span>
            <span class="td-value">{{ materialDetail.precision }}mm</span>
          </div>
          <div class="td lw-flex is-align-middle">
            <img src="../assets/consumable/ico_6.png" class="table-icon" alt="">
            <span class="td-label">后处理</span>
            <span class="td-value">{{ materialDetail.afterprocessing }}</span>
          </div>
        </div>
        <div class="parameter-table__tr parameter-table__tr--row lw-flex">
          <img src="../assets/consumable/ico_7.png" class="table-icon" alt="">
          <div class="row-value">
            <div class="row-value__title">特点</div>
            <div class="row-value__value">{{ materialDetail.characteristic }}</div>
          </div>
        </div>
        <div class="parameter-table__tr parameter-table__tr--row lw-flex">
          <img src="../assets/consumable/ico_8.png" class="table-icon" alt="">
          <div class="row-value">
            <div class="row-value__title">适用做</div>
            <div class="row-value__value">{{ materialDetail.fit }}</div>
          </div>
        </div>
        <div class="parameter-table__tr parameter-table__tr--row lw-flex">
          <img src="../assets/consumable/ico_9.png" class="table-icon" alt="">
          <div class="row-value">
            <div class="row-value__title">不适合做</div>
            <div class="row-value__value">{{ materialDetail.inferior }}</div>
          </div>
        </div>
        <div class="parameter-table__tr parameter-table__tr--row lw-flex">
          <img src="../assets/consumable/ico_10.png" class="table-icon" alt="">
          <div class="row-value">
            <div class="row-value__title">介绍</div>
            <div class="row-value__value">{{ materialDetail.description }}</div>
          </div>
        </div>
      </div>

      <!-- <div>
        <img src="../assets/common/bottom_bg1.png" class="consumable-img-1" alt="">
      </div> -->
    </div>

    <consumable></consumable>

    <advantage></advantage>

    <page-bottom></page-bottom>
  
    <lwzx-footer></lwzx-footer>

    <lwzx-concat></lwzx-concat>
  </div>
</template>
<script>
import LWZXConcat from '@/components/Concat'
import LWZXFooter from '@/components/Footer'
import advantage from '@/components/common/advantage'
import consumable from '@/components/common/consumable'
import pageBottom from '@/components/common/pageBottom'
import { getMaterialInfo } from '@/services/api'

export default {
  components: {
    'lwzx-concat': LWZXConcat,
    'lwzx-footer': LWZXFooter,
    'page-bottom': pageBottom,
    advantage,
    consumable
  },
  data () {
    return {
      id: '',
      materialDetail: {}
    }
  },
  async created () {
    try {
      const { id } = this.$route.query
      this.id = id
      this.$loading('加载中')
      const opts = {
        materialId: id
      }
      const { data } = await getMaterialInfo(opts)
      this.$loading.close()
      this.materialDetail = data
    } catch (error) {
      console.log(error)
      this.$loading.close()
    }
  }
}
</script>
