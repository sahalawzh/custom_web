<template>
  <div class="page-online">
    <lwzx-header></lwzx-header>

    <div class="lw-flex is-align-middle tip-box">
      <img src="../assets/common/lwzx-img.png" class="tip-icon">
      <span>兰湾小智提醒您：在线打印请用电脑浏览器</span>
      <div class="fork"></div>
    </div>

    <div class="online-header">
      <img src="../assets/index/group_1.png" class="online-header__img" alt="">
    </div>

    <div class="part-consumable">
      <div class="consumable-title">3D打印耗材</div>
      
      <consumable></consumable>
    </div>

    <div class="part-craft">
      <div class="craft-title">3D打印工艺</div>
      <div class="craft-img-lg">
        <img src="../assets/index/group_1.png">
      </div>
      <div class="craft-article">
        <h4 class="craft-article__title">SLM成型技术的工艺过程</h4>
        <p>SLM技术的成型原理，在基板上用刮刀铺一层金属粉末，然后用激光束在扫描振镜的控制下按照一定的路径快速照射粉末，使其发生熔化，凝固，形成冶金熔覆层，然后将基板下降与单层沉积厚度相同的高度，在铺一层粉末进行激光扫描加工，重复这样的过程直至整个零件成型结束。
</p>
        <div class="craft-list lw-flex">
          <div class="craft-list__item"></div>
          <div class="craft-list__item"></div>
          <div class="craft-list__item"></div>
          <div class="craft-list__item"></div>
          <div class="craft-list__item"></div>
          <div class="craft-list__item"></div>
        </div>
      </div>
    </div>

    <div class="part-business">
      <div class="business-title">行业案例</div>
      <p>主营新能源汽车零配件、汽车改装、个性化定制、消费类电子、
      家电产品、电器开发、医疗器具、康复护具、功能性鞋垫、
      定制眼镜、夹具、礼品、工艺品等</p>
      <div class="business-tel">咨询电话：0757-85500509、0512-68796096</div>
      <div class="business-list lw-flex">
        <div class="business-list__item">
          <img src="../assets/index/group_1.png" class="business-list__item--bg">
        </div>
        <div class="business-list__item">
          <img src="../assets/index/group_1.png" class="business-list__item--bg">
        </div>
        <div class="business-list__item">
          <img src="../assets/index/group_1.png" class="business-list__item--bg">
        </div>
      </div>
      
      <advantage></advantage>
    </div>

    <page-bottom></page-bottom>

    <lwzx-footer></lwzx-footer>

    <lwzx-concat></lwzx-concat>
  </div>
</template>
<script>
import LWZXHeader from '@/components/Header'
import LWZXConcat from '@/components/Concat'
import LWZXFooter from '@/components/Footer'
import pageBottom from '@/components/common/pageBottom'
import advantage from '@/components/common/advantage'
import consumable from '@/components/common/consumable'
export default {
  components: {
    'lwzx-header': LWZXHeader,
    'lwzx-concat': LWZXConcat,
    'lwzx-footer': LWZXFooter,
    'page-bottom': pageBottom,
    advantage,
    consumable
  },
  beforeMount () {
    document.title = '在线打印'
  }
}
</script>
