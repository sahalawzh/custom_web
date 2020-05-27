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
            <img src="../assets/common/lwzx-img.png" class="table-icon" alt="">
            <span class="td-label">颜色</span>
            <span class="td-value">
              <span class="color-value"></span>
            </span>
          </div>
          <div class="td lw-flex is-align-middle">
            <img src="../assets/common/lwzx-img.png" class="table-icon" alt="">
            <span class="td-label">成形尺寸</span>
            <span class="td-value td-value-xs">200*300*400mm</span>
          </div>
        </div>
        <div class="parameter-table__tr lw-flex is-align-middle">
          <div class="td lw-flex is-align-middle">
            <img src="../assets/common/lwzx-img.png" class="table-icon" alt="">
            <span class="td-label">熔点</span>
            <span class="td-value">金属类</span>
          </div>
          <div class="td lw-flex is-align-middle">
            <img src="../assets/common/lwzx-img.png" class="table-icon" alt="">
            <span class="td-label">材料种类</span>
            <span class="td-value">{{ materialDetail.cateName }}</span>
          </div>
        </div>
        <div class="parameter-table__tr lw-flex is-align-middle">
          <div class="td lw-flex is-align-middle">
            <img src="../assets/common/lwzx-img.png" class="table-icon" alt="">
            <span class="td-label">精度</span>
            <span class="td-value">{{ materialDetail.precision }}mm</span>
          </div>
          <div class="td lw-flex is-align-middle">
            <img src="../assets/common/lwzx-img.png" class="table-icon" alt="">
            <span class="td-label">交付周期</span>
            <span class="td-value">5 个工作日</span>
          </div>
        </div>
        <div class="parameter-table__tr parameter-table__tr--row lw-flex">
          <img src="../assets/common/lwzx-img.png" class="table-icon" alt="">
          <div class="row-value">
            <div class="row-value__title">特点</div>
            <div class="row-value__value">{{ materialDetail.characteristic }}</div>
          </div>
        </div>
        <div class="parameter-table__tr parameter-table__tr--row lw-flex">
          <img src="../assets/common/lwzx-img.png" class="table-icon" alt="">
          <div class="row-value">
            <div class="row-value__title">适用做</div>
            <div class="row-value__value">{{ materialDetail.fit }}</div>
          </div>
        </div>
        <div class="parameter-table__tr parameter-table__tr--row lw-flex">
          <img src="../assets/common/lwzx-img.png" class="table-icon" alt="">
          <div class="row-value">
            <div class="row-value__title">不适合做</div>
            <div class="row-value__value">{{ materialDetail.inferior }}</div>
          </div>
        </div>
        <div class="parameter-table__tr parameter-table__tr--row lw-flex">
          <img src="../assets/common/lwzx-img.png" class="table-icon" alt="">
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

    <lwzx-footer></lwzx-footer>

    <lwzx-concat></lwzx-concat>
  </div>
</template>
<script>
import LWZXConcat from '@/components/Concat'
import LWZXFooter from '@/components/Footer'
import advantage from '@/components/common/advantage'
import consumable from '@/components/common/consumable'
import { getMaterialInfo } from '@/services/api'

export default {
  components: {
    'lwzx-concat': LWZXConcat,
    'lwzx-footer': LWZXFooter,
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
  },
  beforeMount () {
    document.title = '材料详情'
  }
}
</script>
