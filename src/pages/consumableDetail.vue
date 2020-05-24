<template>
  <div class="page-consumable-detail">

    <div class="consumable-main">
      <div>
        <img src="../assets/common/bottom_bg1.png" class="consumable-img-1" alt="">
      </div>
      <h4>铝合金AlSi10Mg</h4>

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
            <spann class="td-label">成形尺寸</spann>
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
            <spann class="td-label">材料种类</spann>
            <span class="td-value">金属类</span>
          </div>
        </div>
        <div class="parameter-table__tr lw-flex is-align-middle">
          <div class="td lw-flex is-align-middle">
            <img src="../assets/common/lwzx-img.png" class="table-icon" alt="">
            <span class="td-label">精度</span>
            <span class="td-value">0.00mm</span>
          </div>
          <div class="td lw-flex is-align-middle">
            <img src="../assets/common/lwzx-img.png" class="table-icon" alt="">
            <spann class="td-label">交付周期</spann>
            <span class="td-value">5 个工作日</span>
          </div>
        </div>
        <div class="parameter-table__tr parameter-table__tr--row lw-flex">
          <img src="../assets/common/lwzx-img.png" class="table-icon" alt="">
          <div class="row-value">
            <div class="row-value__title">特点</div>
            <div class="row-value__value">良好的工艺性，密度小，抗腐蚀性良好，热性能良好，低重量。</div>
          </div>
        </div>
        <div class="parameter-table__tr parameter-table__tr--row lw-flex">
          <img src="../assets/common/lwzx-img.png" class="table-icon" alt="">
          <div class="row-value">
            <div class="row-value__title">适用做</div>
            <div class="row-value__value">汽车发动机的缸盖、进气歧管、活塞、轮毂、转向助力器壳体等。可以被加工，火花侵蚀，焊接，微喷丸处理，抛光和电镀。</div>
          </div>
        </div>
        <div class="parameter-table__tr parameter-table__tr--row lw-flex">
          <img src="../assets/common/lwzx-img.png" class="table-icon" alt="">
          <div class="row-value">
            <div class="row-value__title">不适合做</div>
            <div class="row-value__value">汽车发动机的缸盖、进气歧管、活塞、轮毂、转向助力器壳体等。可以被加工，火花侵蚀，焊接，微喷丸处理，抛光和电镀。</div>
          </div>
        </div>
        <div class="parameter-table__tr parameter-table__tr--row lw-flex">
          <img src="../assets/common/lwzx-img.png" class="table-icon" alt="">
          <div class="row-value">
            <div class="row-value__title">介绍</div>
            <div class="row-value__value">汽车发动机的缸盖、进气歧管、活塞、轮毂、转向助力器壳体等。可以被加工，火花侵蚀，焊接，微喷丸处理，抛光和电镀。</div>
          </div>
        </div>
      </div>

      <div>
        <img src="../assets/common/bottom_bg1.png" class="consumable-img-1" alt="">
      </div>
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

export default {
  components: {
    'lwzx-concat': LWZXConcat,
    'lwzx-footer': LWZXFooter,
    advantage,
    consumable
  },
  beforeMount () {
    document.title = '材料详情'
  }
}
</script>
