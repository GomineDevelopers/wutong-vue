<template>
  <div class="PatientInfo">
    <vue-headful title="患者信息"></vue-headful>
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">姓名</div>
      <div class="text_info theme_color5">
        <div class="inlineBlock">卫英纯</div>
      </div>
    </div>
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">手机号</div>
      <div class="text_info theme_color5">
        <div class="inlineBlock">15678226236</div>
      </div>
    </div>
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">性别</div>
      <div class="text_info theme_color5">
        <div class="inlineBlock">男</div>
      </div>
    </div>
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">年龄</div>
      <div class="text_info theme_color5">
        <div class="inlineBlock">27</div>
      </div>
    </div>
    <div class="PerRow">
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
    </div>
    <div :style="{height: '1.5rem'}"></div>
  </div>
</template>
<script>
export default {
  name: "PatientInfo",
  components: {},
  data() {
    return {};
  },
  mounted() {
    let vm = this;
  },
  methods: {}
};
</script>

<style >
</style>
<style scoped>
.PatientInfo {
}

.PatientInfo .PerRow {
  height: 1.25rem;
  /* width: 100%; */
  border-top: 1px #f6f6f6 solid;
  padding: 1.1875rem 1.25rem 1.15625rem 1.25rem;
}
.PatientInfo .PerRow_borderBottom {
  border-bottom: 1px #f6f6f6 solid;
}
.PatientInfo .title_spaceRight {
  margin-right: 0.3rem;
}
.PatientInfo .title_spaceRight2 {
  margin-right: 0rem;
}
.PatientInfo .text_info {
  display: inline-block;
  text-align: right;
  font-size: 0.75rem;
  width: 10rem;
}
</style>

