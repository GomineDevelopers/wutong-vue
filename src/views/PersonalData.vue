<template>
  <div class="PatientInfo">
    <!-- <vue-headful title="个人资料"></vue-headful> -->
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

    <div :style="{height: '0.48rem'}"></div>
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
  height: 0.4rem;
  /* width: 100%; */
  border-top: 1px #f6f6f6 solid;
  padding: 0.38rem 0.4rem 0.37rem 0.4rem;

}
.PatientInfo .PerRow_borderBottom {
  border-bottom: 1px #f6f6f6 solid;
}
.PatientInfo .title_spaceRight {
  margin-right: 0.096rem;
}
.PatientInfo .title_spaceRight2 {
  margin-right: 0rem;
}
.PatientInfo .text_info {
  display: inline-block;
  text-align: right;
  font-size: 0.32rem;
  width: 3.2rem;
}
</style>

