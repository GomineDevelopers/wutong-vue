<template>
  <div class="PatientInfo">
    <vue-headful title="患者信息"></vue-headful>
    <div class="PerRow flex flex_justify_between">
      <div class="common_Stitle_font2 title_spaceRight">姓名</div>
      <div class="main_font6">卫英纯</div>
    </div>
    <div class="PerRow flex flex_justify_between">
      <div class="common_Stitle_font2 title_spaceRight">手机号</div>
      <div class="main_font6">15678226236</div>
    </div>
    <div class="PerRow flex flex_justify_between">
      <div class="common_Stitle_font2 title_spaceRight">性别</div>
      <div class="main_font6">男</div>
    </div>
    <div class="PerRow flex flex_justify_between">
      <div class="common_Stitle_font2 title_spaceRight">年龄</div>
      <div class="main_font6">27</div>
    </div>
    <div class="PerRow flex flex_justify_between">
      <div class="common_Stitle_font2 title_spaceRight">注册时间</div>
      <div class="main_font6">2020-01-23</div>
    </div>
    <!-- <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">收货地址</div>
      <div class="text_info theme_color5">
        <div class="inlineBlock">
          <div class="address">贵州贵阳观山湖区</div>
          <div class="a_icon">
            <van-icon @click="router_to('/personaldatapatientedit')" name="edit" size="0.32rem" />
          </div>
        </div>
      </div>
    </div>-->
    <div class="PerRow">
      <div class="main_font2 title_spaceRight">诊断</div>
      <div class="diagnosis_content main_font6">
        高血压伴晕厥入院后予氨氯地平、缬沙坦、二甲双胍等
        常规降压、降糖治疗。患者于入院当天夜间再次出现晕
        厥，伴意识丧失，呼之不应，心电监护图示心率170次/
        分，室性心动过速。
      </div>
      <div class="m_pic_p">
        <template v-for="(item,index) in Imgs ">
          <div :key="index + 'PIImgs' " class="m_pic">
            <img class="m_img" :src="item" alt />
          </div>
        </template>
      </div>
    </div>
    <!-- <div class="PerRow">
      <div class="common_Stitle_font2 common_Stitle_font3 title_spaceRight title_spaceRight2">体重(kg)</div>
      <div class="text_info theme_color5">
        <div class="inlineBlock">81</div>
      </div>
    </div>
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">过敏史</div>
      <div class="text_info theme_color5">
        <div class="inlineBlock">无</div>
      </div>
    </div>
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">过往病史</div>
      <div class="text_info theme_color5">
        <div class="inlineBlock">心脏病，肝病，肾结石</div>
      </div>
    </div>
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">肝功能</div>
      <div class="text_info theme_color5">
        <div class="inlineBlock">无</div>
      </div>
    </div>
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">肝功能</div>
      <div class="text_info theme_color5">
        <div class="inlineBlock">无</div>
      </div>
    </div>-->
    <!-- <div :style="{height: '0.4rem'}"></div> -->
  </div>
</template>
<script>
export default {
  name: "PatientInfo",
  components: {},
  data() {
    return {
      Imgs: [
        require("@/assets/pic/sicknessdetail1.png"),
        require("@/assets/pic/sicknessdetail2.png")
      ]
    };
  },
  mounted() {
    let vm = this;
  },
  methods: {
    router_to(str) {
      let vm = this;
      vm.$router.push({ path: str });
    }
  }
};
</script>

<style >
</style>
<style scoped>
.PatientInfo .PerRow {
  height: 0.4rem;
  /* width: 100%; */
  border-top: 1px #4a5677 solid;
  padding: 0.38rem 0.4rem 0.37rem 0.4rem;
}
.PatientInfo .PerRow_borderBottom {
  border-bottom: 1px #4a5677 solid;
}
.PatientInfo .title_spaceRight {
  margin-right: 0;
}
.PatientInfo .title_spaceRight2 {
  margin-right: 0rem;
}
.PatientInfo .text_info {
  display: inline-block;
  text-align: right;
  font-size: 0.32rem;
  width: 4.8rem;
  vertical-align: top;
}

.PatientInfo .m_content {
  font-size: 0;
  /* height: 1.6rem; */
}
.PatientInfo .m_content_font {
  width: 6.74rem;
  font-size: 0.28rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(197, 202, 213, 1);
  line-height: 0.4rem;
  margin-top: -0.5rem;
}
.PatientInfo .m_pic_p {
  margin-top: 0.4rem;
}
.PatientInfo .m_pic {
  width: 2rem;
  height: 2rem;
  display: inline-block;
  margin-right: 0.35rem;
}
.PatientInfo .m_img {
  width: 100%;
  height: 100%;
}

.PatientInfo .address {
  display: inline-block;
  vertical-align: top;
}
.PatientInfo .a_icon {
  display: inline-block;
  vertical-align: top;
  margin-top: 0.06rem;
  margin-left: 0.2rem;
}
.diagnosis_content {
  margin-top: 0.3rem;
  line-height: 0.4rem;
}
</style>

