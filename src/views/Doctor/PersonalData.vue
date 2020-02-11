<template>
  <div class="PersonalData">
    <vue-headful title="个人资料"></vue-headful>
    <div class="PerRow flex flex_justify_between">
      <div class="common_Stitle_font2 title_spaceRight">手机号</div>
      <div class="text_info">
        <div class="inlineBlock">
          156****6236
          <span>&nbsp;&nbsp;</span>
          <van-icon name="arrow" />
        </div>
      </div>
    </div>
    <div class="PerRow flex flex_justify_between">
      <div class="common_Stitle_font2 title_spaceRight">邮箱</div>
      <div class="text_info">
        <div class="inlineBlock">
          43243233@qq.com
          <span>&nbsp;&nbsp;</span>
          <van-icon name="arrow" @click="router_to('/PersonalDataEdit')" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PersonalData",
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

<style >
.PersonalData .van-icon {
  vertical-align: bottom;
}
</style>
<style scoped>
.PersonalData {
  padding-left: 0.32rem;
}
.PersonalData .PerRow {
  height: 0.4rem;
  /* width: 100%; */
  border-bottom: 1px #4a5677 solid;
  padding: 0.38rem 0.32rem 0.37rem 0rem;
}

.PersonalData .title_spaceRight {
  margin-right: 0rem;
}

.PersonalData .text_info {
  display: inline-block;
  text-align: right;
  font-size: 0.28rem;
  width: 4.8rem;
  color: #858b9c;
  vertical-align: top;
}
.PersonalData .van-icon-arrow {
  color: #fff;
  font-size: 0.32rem;
}
</style>

