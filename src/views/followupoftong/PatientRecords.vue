<template>
  <div class="PatientRecords">
    <vue-headful title="患者档案"></vue-headful>
    <div :style="{height: '0.48rem'}"></div>

    <van-row class="top_info flex flex_align_center">
      <van-row class="flex flex_1 flex_align_center flex_direction">
        <div class="FontSize0">
          <img :src="pr_avatar" />
        </div>
        <div class="FontSize0 user_name_p">
          <span class="user_name">{{pr_name}}</span>
        </div>
        <div class="FontSize0">
          <!-- <span class="user_info">{{pr_sex}}|{{pr_age}}岁|180cm|72kg|AB型</span> -->
          <span class="user_info">{{pr_sex}}|{{pr_age}}岁|170cm|58kg</span>
        </div>
      </van-row>
    </van-row>
    <div class="PerRow PerRow2 perRow_title">
      <div class="common_Stitle_font2 title_spaceRight">患者信息</div>
    </div>
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">就诊日期</div>
      <input class="i_input" type="text" placeholder="2020年01月24日" />
    </div>
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">电话号码</div>
      <input class="i_input" type="text" placeholder="18511241598" />
    </div>
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">常驻城市</div>
      <input class="i_input" type="text" placeholder="山东省" />
    </div>
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">医院</div>
      <input class="i_input" type="text" placeholder="天津市第一人民医院" />
    </div>
    <div class="PerRow">
      <div class="common_Stitle_font2 title_spaceRight">入院时间</div>
      <input class="i_input" type="text" placeholder="2020年01月28日" />
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
    return {
      pr_name: "张三",
      pr_avatar: require("@/assets/pic/head2.png"),
      pr_sex: "男",
      pr_age: "32"
    };
  },
  mounted() {
    let vm = this;
    console.log;
    if (this.$route.query.id != undefined) {
      this.pr_name = this.$route.query.name;
      this.pr_avatar = this.$route.query.avatar;
      this.pr_sex = this.$route.query.sex;
      this.pr_age = this.$route.query.age;
    }
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

