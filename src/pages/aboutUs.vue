<template>
  <div class="about-container">
    <!-- <div v-html="aboutUsContent"></div> -->
    <div class="about-main">
      <div class="about-title">无限三维 | 兰湾智能集团</div>
      <p>无限三维|兰湾智能集团是一家立足于3D打印、机器人、人工智能、健康产业为主的高科技企业集团，旗下广东兰湾智能科技有限公司、无限三维（青岛）科技产业集团、苏州无限三维科技产业有限公司等三家国家高新企业，一家国家中小企业公共服务示范平台。</p>

      <video class="video-box" :src="videoVal" controls>
        您的浏览器不支持 HTML5 video 标签。
      </video>

      <p>广东兰湾智能科技有限公司是一家以3D打印数字制造，3D打印智慧教育，3D打印数字化医疗，3D打印康复鞋垫共享平台，人工智能，机器人，工业互联网为主的高科技企业集团。</p>

      <p class="about-m">无限三维（青岛）科技产业集团是国家高新技术企业、国家中小企业公共服务示范平台、青岛市中小企业公共服务示范平台、青岛市服务型制造示范平台、青岛市科普教育基地，是国内最早从事3D打印教育、3D打印数字化应用服务、3D打印在线定制平台为主的科技服务企业。公司位于青岛国家高新区。</p>
      <p>
苏州无限三维科技产业有限公司是一家以3D打印创客教育、3D打印数字化应用服务、3D打印数字化齿科、智能3D打印机研发生产、人工智能和机器人教育、综合方案提供商为主的高科技企业。公司位于苏州吴中经济技术开发区智慧谷。
      </p>

      <div class="img-one">
        <img src="../assets/about/img_1.png" alt="">
      </div>

      <div class="img-two">
        <img src="../assets/about/img_2.png" alt="">
      </div>

      <p class="about-t">公司拥有兰湾在线定制平台（www.gdlwzn.com），Makesome物联网3D打印机完全自主知识产权研发、生产和教育平台，提供免费创客教育培训的无限三维小程序和无限三维APP，以及在成都、烟台等地布局的国际康养小镇、数字化康复矫正鞋垫，数字化齿科，在广东佛山（大沥）创办有国内最大的惠普3D打印数字化制造中心和广东（大沥）3D打印公共服务平台。</p>
      <p>
      作为惠普中国的合作伙伴，为国内外企业提供3D打印服务。加工服务团队超50人，致力于服务国内外企业超3万家，主要领域有消费类电子、家电、无人机、航空航天、医疗、机械设备，电动工具等。并为企业前期研发，产品生产提供3D打印服务。 
      </p>
      <div>
        <p>无限三维|兰湾智能可提供如下服务：</p>
        <ul>
          <li>1.多种材料，包括PA12/PA12GB/PA11等多种尼龙材料打印服务；</li>
          <li>2.拥有14台尼龙3D打印设备，保证足够产能；</li>
          <li>3.承诺常规零件24-48h快速交期，价格明显优势；</li>
          <li>4.提供的黑色尼龙3D打印产品，保证为惠普尼龙；</li>
          <li>5.拥有十多人尼龙工艺团队，均通过惠普公司培训认证，保证产品质量； </li>
          <li>6.惠普中国区首台设备使用厂家，拥有丰富打印经验和综合解决方案。</li>
          <li>7.设备齐全，EOS （SLS激光烧结）尼龙打印机3台，多台金属、树脂、桌面机、高精度stratasys等机器，同时也为客户提供CNC、复模、综合性手板加工等服务。 </li>
          <li>8.已通过ISO9001质量认证</li>
          <li>9.有自主研发能力，多款专利认证 。</li>
        </ul>
      </div>

      <div class="img-three">
        <img src="../assets/about/img_3.png" alt="">
      </div>

      <div class="compay-team">
        <p class="compay-team__title">公司高管团队：</p>
        <div class="compay-team__1">
          <p>集团公司董事长兼总经理：罗军</p>
          <p>广东兰湾智能科技有限公司</p>
          <p><span>执行总经理：李静</span><span>总经理助理：徐依珊</span></p>
          <p><span>教育部总监：杨皓明</span><span>互联网总监：高睿</span></p>
          <p><span>加工市场部总监：林志强</span><span>生产部总监：周润威</span></p>
          <p>联系电话：0757——85500380、85500382</p>
        </div>
        <div class="compay-team__2">       
          <p>无限三维（青岛）公司</p>
          <p><span>执行总经理：李强</span><span>总经理助理：生彩霞</span></p>
          <p>联系电话：0532——88690000</p>
        </div>
        <div class="compay-team__3">
          <p>苏州无限三维科技产业有限公司</p>
          <p><span>执行总经理：李千里</span><span>总经理助理：罗斌</span></p>
          <p>联系电话：0512——68796096</p>
        </div>
      </div>

      <div class="img-four">
        <img src="../assets/about/img_4.png" alt="">
      </div>
    </div>

    <page-bottom></page-bottom>

    <lwzx-footer></lwzx-footer>
  </div>
</template>
<script>
import { getAboutUs } from '@/services/api'
import LWZXFooter from '@/components/Footer'
import pageBottom from '@/components/common/pageBottom'
import { mapState } from 'vuex'
export default {
  components: {
    'lwzx-footer': LWZXFooter,
    'page-bottom': pageBottom
  },
  computed: {
    ...mapState({
      configData: 'configData'
    }),
    videoVal () {
      if (this.configData && this.configData.about){
        return this.configData.about.video.configValue
      }
    }
  },
  data () {
    return {
      // aboutUsContent: ''
    }
  },
  async created () {
    // try {
    //   this.$loading('加载中')
    //   const { data } = await getAboutUs()
    //   this.aboutUsContent = data
    //   this.$loading.close()
    // } catch (error) {
    //   console.log(err)
    //   this.$loading.close()
    // }
  }
}
</script>
