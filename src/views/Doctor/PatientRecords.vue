<template>
  <div class="PatientRecords">
    <vue-headful title="患者档案"></vue-headful>
    <div :style="{height: '0.48rem'}"></div>

    <van-row class="top_info flex flex_align_center">
      <van-row class="flex flex_1 flex_align_center flex_direction">
        <div class="FontSize0">
          <img src="../../assets/pic/head2.png" />
        </div>
        <div class="FontSize0 user_name_p">
          <span class="user_name">张三</span>
        </div>
        <div class="FontSize0">
          <span class="user_info">男|28岁|180cm|72kg|AB型</span>
        </div>
      </van-row>
    </van-row>
    <div class="PerRow PerRow2 perRow_title">
      <div class="common_Stitle_font2 title_spaceRight">患者信息</div>
    </div>
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">出生日期</div>
      <input class="i_input" type="text" placeholder="1992年10月21日" />
    </div>
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">电话号码</div>
      <input class="i_input" type="text" placeholder="18511241598" />
    </div>
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">籍贯</div>
      <input class="i_input" type="text" placeholder="山东省" />
    </div>
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">手术医院</div>
      <input class="i_input" type="text" placeholder="天津市第一人民医院" />
    </div>
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">入院时间</div>
      <input class="i_input" type="text" placeholder="2018年10月5日" />
    </div>
    <div class="textAlignCenter_w100p">
      <van-button
        @click="router_to('/healthportrait')"
        round
        class="common_middle_btn common_fontsize i_btn"
      >用户画像</van-button>
    </div>
    <div :style="{height: '0.48rem'}"></div>
  </div>
</template>
<script>
export default {
  name: "PatientRecords",
  components: {},
  data() {
    return {};
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
<style scoped>
.PatientRecords {
  padding: 0 0.32rem;
}

.PatientRecords .top_info {
  height: 2.2rem;
  justify-content: space-between;
  padding-top: 0.36rem;
  padding-bottom: 0.32rem;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 0.4rem;
}
.PatientRecords .top_info img {
  width: 1.392rem;
  height: 1.392rem;
  margin: 0rem 0.32rem 0rem 0.5rem;
}
.PatientRecords .user_name_p {
  margin: 0.15rem 0;
}
.PatientRecords .top_info .user_name {
  font-size: 0.32rem;
  color: #fff;
}
.PatientRecords .top_info .user_info {
  font-size: 0.24rem;
  margin-top: 0.2rem;
  color: #6d7485;
  letter-spacing: 0.02rem;
}

.PatientRecords .PerRow {
  height: 0.4rem;
  /* width: 100%; */
  border-bottom: 0.01rem #4a5677 solid;
  /* padding: 0.38rem 0.4rem 0.37rem 0.4rem; */
  padding: 0.38rem 0rem 0.37rem 0.4rem;

  background: transparent;
}

.PatientRecords .PerRow2 {
  border-top: 0.01rem rgba(0, 0, 0, 0) solid;
}

.PatientRecords .perRow_title {
  border-top: 0rem rgba(0, 0, 0, 0) solid;
  border-bottom: 0rem #4a5677 solid;
}
.PatientRecords .title_spaceRight {
  margin-right: 0rem;
}
.PatientRecords .i_input {
  font-size: 0.32rem;
  /* color: #fff; */
  color: #7b8192;
  height: 0.4rem;
  outline: none;
  border: 0;
  vertical-align: top;
  background: transparent;
}
</style>

