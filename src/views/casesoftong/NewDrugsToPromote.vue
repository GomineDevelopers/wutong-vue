<template>
  <div class="NewDrugsToPromote">
    <vue-headful title="新药推广"></vue-headful>
    <div class="content">
      <div class="all_title">
        <div class="bg_title"></div>
        <div class="title2">
          <div class="textAlignCenter_w100p">
            <img class="img_title2_font" src="../../assets/newpic2/title2_font.png" alt />
          </div>
          <div :style="{height: '0.13rem'}"></div>
          <div class="textAlignCenter_w100p two_intro">
            <div class="t2_lr t2_left">
              <div class="left_top">有效降低死亡风险</div>
              <div :style="{height: '0.2rem'}"></div>
              <div class="left_bottom">
                <span class="ti_font1">30</span>
                <span class="ti_font2">万</span>
                <span>患者CVD-REAL真实世界数据提示:使用安达唐的2型糖尿病患者的全因死亡风险降低</span>
                <span class="ti_font1">51</span>
                <span class="ti_font2">%</span>
                <span>，心衰住院风险降低</span>
                <span class="ti_font1">39</span>
                <span class="ti_font2">%</span>
                <span>。</span>
              </div>
            </div>
            <div class="t2_lr t2_right">
              <div class="right_top">权威指南共识推荐</div>
              <div :style="{height: '0.2rem'}"></div>
              <div class="right_bottom">
                <span>从</span>
                <span class="ti_font1">降糖、降压、减重</span>
                <span>三个因素进行管理，从而减少并发症的发生，符合糖尿病综合管理的热点概念，获得权威指南共识推荐。</span>
              </div>
            </div>
          </div>
        </div>
        <div class="bg_2"></div>

        <div class="intro">
          <div class="intro_child">
            <div :style="{height: '0.70rem'}"></div>
            <div class="intro_c1">
              <div class="intro_c1c">● 安达唐 - “甜蜜”的负担 ●</div>
            </div>
            <div :style="{height: '0.5rem'}"></div>
            <div class="intro_c2">
              <div class="intro_c2c">颠覆降糖，全新体验</div>
            </div>
            <div :style="{height: '0.5rem'}"></div>
            <div class="intro_c3">
              <div class="intro_c3c">阿斯利康重磅新品.上市，2型糖尿病患者的福音!</div>
            </div>
            <div :style="{height: '0.35rem'}"></div>
            <div class="textAlignCenter_w100p FontSize0 img_drug_p">
              <img class="img_drug" src="../../assets/newpic2/img_drug.png" alt />
            </div>
            <div class="intro_detail">
              <div class="id_title1">安达唐体验装：</div>
              <div class="id_content1">
                <span class="id_content1b">药师点评：</span>我国首个钠-葡萄糖共转运蛋白2(SGLT2) 抑制剂，通过尿中直接排出多余糖分，从而降低2型糖尿病患者体内的血糖浓度以治疗糖尿病。
              </div>
              <div class="id_title1 id_title2">三管齐下，全面获益</div>
              <div class="id_title1 id_title3">降糖</div>
              <div
                class="id_content1 id_content2"
              >安达唐借助非胰岛素依赖作用机制，通过高选择性地抑制SGLT2，减少肾脏葡萄糖重吸收，从而降低2型糖尿病患者体内的血糖浓度。</div>
              <div class="id_title1 id_title3">减重</div>
              <div
                class="id_content1 id_content2"
              >安达唐助力2型糖尿病患者的体重管理。通过一项随机、双盲、对照研究，患者在24周后可实现减重12kg,从实验结果看，安达唐单药治疗对体重的影响是可实现的。</div>
              <div class="id_title1 id_title3">减压</div>
              <div
                class="id_content1 id_content2"
              >临床1期研究，安达唐联合ACEI/ARB治疗12周后，患者收缩压降低10.4mmHg，研究表明安达唐对2型糖尿病患者的血压有积极影响。</div>
            </div>
            <div class="textAlignCenter_w100p FontSize0 img_connect_p">
              <img class="img_connect" src="../../assets/newpic2/img_connect.png" alt />
            </div>
          </div>
        </div>
        <div :style="{height: '0.4rem'}"></div>

        <div class="intro2">
          <div :style="{height: '0.68rem'}"></div>
          <div class="i2_title">规范使用</div>
          <div class="intro_detail2">
            <template v-for="(item,index) in intro_detail2Arr ">
              <div class="id2_perRow FontSize0" :key=" index + 'id2' ">
                <div class="perRow_index">{{item.id}}</div>
                <div class="perRow_text">{{item.content}}}</div>
              </div>
            </template>
          </div>
        </div>
        <div class="bottom_imgs FontSize0">
          <img class="bottom_img_left" src="../../assets/newpic2/bottom_img_left.png" alt />
          <img class="bottom_img_right" src="../../assets/newpic2/bottom_img_right.png" alt />
        </div>
        <!-- <div :style="{height: '1rem'}"></div> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "home",
  components: {},
  data() {
    return {
      intro_detail2Arr: [
        {
          id: 1,
          content: "推荐起始剂量是5mg每天1次，早晨服用，不受进食限制。"
        },
        {
          id: 2,
          content:
            "在耐受FARXIGA需要附加血糖控制的患者剂量可增加至10mg每天1次。"
        },
        {
          id: 3,
          content:
            "开始FARXIGA前评估肾功能。如eGFR低于min/1.73 m2不要开始FARXIGA。"
        },
        {
          id: 4,
          content: "终止FARXIGA如eGFR下降持续低于60mL /min/1.73 m2。"
        }
      ]
    };
  },
  mounted() {
    let vm = this;
  },
  methods: {}
};
</script>
<style scoped>
.NewDrugsToPromote {
  width: 7.5rem;
  background: #0f1527;
  height: 100%;
}
.NewDrugsToPromote .all_title {
  /* background-color: #008778; */
}
.NewDrugsToPromote .bg_title {
  background: #0f1527 url(../../assets/newpic2/bg_title.png) no-repeat;
  width: 100%;
  height: 7.17rem;
  background-size: 100% 100%;
  border-bottom: 0.01rem solid #008778;
}
.NewDrugsToPromote .title2 {
  height: 3.67rem;
  width: 100%;
  /* background-color: red; */
  font-size: 0;
  background-color: #008778;
}
.NewDrugsToPromote .img_title2_font {
  width: 4.85rem;
  height: 0.73rem;
}
.NewDrugsToPromote .t2_lr {
  font-family: Roboto;
  font-weight: 400;
  line-height: 0.32rem;
  color: rgba(255, 255, 255, 1);
  /* width: 2.8rem; */
  width: 2.82rem;
  font-size: 0.28rem;
  display: inline-block;
  vertical-align: top;
  text-align: left;
}
.NewDrugsToPromote .t2_left {
  margin-right: 0.4rem;
}
.NewDrugsToPromote .t2_right {
}
.NewDrugsToPromote .two_intro {
}
.NewDrugsToPromote .left_top,
.NewDrugsToPromote .right_top {
  height: 0.37rem;
  font-size: 0.28rem;
  font-family: Roboto;
  font-weight: bold;
  line-height: 0.34rem;
  color: rgba(255, 255, 255, 1);
}
.NewDrugsToPromote .left_bottom,
.NewDrugsToPromote .right_bottom {
  font-size: 0.26rem;
  font-family: Roboto;
  font-weight: 400;
  line-height: 0.32rem;
  color: rgba(255, 255, 255, 1);
  text-align: justify;
}
.NewDrugsToPromote .ti_font1 {
  font-size: 0.32rem;
}
.NewDrugsToPromote .ti_font1 {
  font-size: 0.32rem;
  color: #55eba2;
}
.NewDrugsToPromote .ti_font2 {
  color: #55eba2;
}
.NewDrugsToPromote .bg_2 {
  background: #0f1527 url(../../assets/newpic2/bg_2.png) no-repeat;
  width: 100%;
  height: 1.3rem;
  background-size: 100% 100%;
  border-bottom: 0.01rem solid #0f1527;
}
.NewDrugsToPromote .intro {
  padding: 0 0.4rem;
  width: 6.7rem;
  /* background: rgba(0,0,0,0); */
}
.NewDrugsToPromote .intro_child {
  width: 100%;
  /* background: #272d3e; */
  background: rgba(39, 45, 62, 0.8);
  margin-top: -0.3rem;
  text-align: center;
  border-radius: 0 0 0.3rem 0.3rem;
}
.NewDrugsToPromote .intro_c1 {
  width: 5.9rem;
  height: 0.53rem;
  padding-top: 0.18rem;
  padding-bottom: 0.17rem;
  background: rgba(85, 235, 162, 1);
  border-radius: 0.45rem;
  margin: 0 0.4rem;
}
.NewDrugsToPromote .intro_c1c {
  font-size: 0.4rem;
  font-family: Roboto;
  font-weight: bold;
  line-height: 0.48rem;
  color: rgba(34, 40, 57, 1);
}
.NewDrugsToPromote .intro_c2 {
  text-align: center;
}
.NewDrugsToPromote .intro_c2c {
  height: 0.53rem;
  font-size: 0.32rem;
  font-family: Roboto;
  font-weight: bold;
  line-height: 0.38rem;
  color: rgba(85, 235, 162, 1);
}
.NewDrugsToPromote .intro_c3 {
  text-align: center;
}
.NewDrugsToPromote .intro_c3c {
  height: 0.36px;
  font-size: 0.28rem;
  font-family: Roboto;
  font-weight: 400;
  line-height: 0.34rem;
  color: rgba(255, 255, 255, 1);
}
.NewDrugsToPromote .img_drug_p {
  height: 5.59rem;
  margin-bottom: 0.4rem;
}
.NewDrugsToPromote .img_drug {
  width: 6.7rem;
  height: 5.59rem;
}
.NewDrugsToPromote .intro_detail {
  padding: 0 0.3rem;
}
.NewDrugsToPromote .id_title1 {
  height: 0.43rem;
  font-size: 0.32rem;
  font-family: Roboto;
  font-weight: bold;
  line-height: 0.38rem;
  color: rgba(85, 235, 162, 1);
  text-align: left;
  margin-bottom: 0.1rem;
}
.NewDrugsToPromote .id_content1 {
  font-size: 0.28rem;
  font-family: Roboto;
  font-weight: 400;
  line-height: 0.34rem;
  color: rgba(255, 255, 255, 1);
  text-align: justify;
  margin-bottom: 0.5rem;
}
.NewDrugsToPromote .id_content1b {
  color: #55eba2;
}
.NewDrugsToPromote .id_title2 {
  text-align: center;
  margin-bottom: 0.4rem;
}
.NewDrugsToPromote .id_title3 {
  margin-bottom: 0.2rem;
}
.NewDrugsToPromote .id_content2 {
  margin-bottom: 0.4rem;
}
.NewDrugsToPromote .img_connect_p {
  /* height: 1.1rem; */
  height: 0.35rem;
}
.NewDrugsToPromote .img_connect {
  width: 3.42rem;
  height: 1.1rem;
}

.NewDrugsToPromote .intro2 {
  background: rgba(39, 45, 62, 0.8);
  padding: 0 0.4rem;
}
.NewDrugsToPromote .i2_title {
  height: 0.74rem;
  font-size: 0.56rem;
  font-family: Roboto;
  font-weight: bold;
  line-height: 0.67rem;
  color: rgba(85, 235, 162, 1);
  width: 100%;
  text-align: center;
  margin-bottom: 0.4rem;
}
.NewDrugsToPromote .id2_perRow {
  padding-bottom: 0.2rem;
}
.NewDrugsToPromote .perRow_index {
  width: 0.34rem;
  height: 0.34rem;
  background: rgba(85, 235, 162, 1);
  border-radius: 50%;
  text-align: center;

  font-size: 0.24rem;
  font-family: Roboto;
  font-weight: 400;
  line-height: 0.29rem;
  color: rgba(0, 0, 0, 1);

  display: inline-block;
  vertical-align: top;
  margin-right: 0.14rem;
  margin-top: 0.02rem;
}
.NewDrugsToPromote .perRow_text {
  display: inline-block;
  vertical-align: top;

  width: 6.22rem;
  font-size: 0.28rem;
  font-family: Roboto;
  font-weight: 400;
  line-height: 0.34rem;
  color: rgba(255, 255, 255, 1);
  letter-spacing: 0.01rem;
  text-align: justify;
}
.NewDrugsToPromote .bottom_imgs {
  background: rgba(39, 45, 62, 0.8);
}
.NewDrugsToPromote .bottom_img_left {
  width: 0.81rem;
  height: 1.16rem;
}
.NewDrugsToPromote .bottom_img_right {
  width: 1.2rem;
  height: 1.16rem;
  float: right;
}
</style>

