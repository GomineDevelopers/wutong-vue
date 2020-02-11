<template>
  <van-row class="van_container">
    <vue-headful title="个人中心"></vue-headful>
    <van-row class="van_container_body height_auto">
      <!-- 顶部头像开始 -->
      <van-row class="top_info flex flex_align_center">
        <van-row class="flex flex_1 flex_align_center">
          <img src="../../assets/pic/head2.png" />
          <van-row class="doctor_info">
            <span class="font_white font_weight_500">Max Wallace</span>
            <span class="theme_color4 font_weight_500">132xxxx4323</span>
          </van-row>
        </van-row>
        <van-icon @click="router_to('/personaldata')" name="arrow" size="0.5rem" />
      </van-row>
      <!-- 列表开始 -->
      <van-row class="doctor_module_list">
        <van-row
          @click="router_to('/sweepandinvite')"
          class="doctor_module_list_item flex flex_justify_between flex_align_center"
        >
          <van-row class="flex flex_1 flex_align_center">
            <img src="../../assets/pic/doctor_icon1.png" />
            <span class="main_font font_white">扫码邀请</span>
          </van-row>
          <img src="../../assets/pic/arrow_icon.png" />
        </van-row>
        <van-row
          @click="router_to('/certification')"
          class="doctor_module_list_item flex flex_justify_between flex_align_center"
        >
          <van-row class="flex flex_1 flex_align_center">
            <img src="../../assets/pic/doctor_icon2.png" />
            <span class="main_font font_white">我的认证</span>
          </van-row>
          <span class="auth_span public_green_small">立即认证</span>
          <img src="../../assets/pic/arrow_icon.png" />
        </van-row>
        <van-row
          @click="router_to('/cardticketmanagement')"
          class="doctor_module_list_item flex flex_justify_between flex_align_center"
        >
          <van-row class="flex flex_1 flex_align_center">
            <img src="../../assets/pic/doctor_icon3.png" />
            <span class="main_font font_white">优惠券</span>
          </van-row>
          <span class="list_message">12</span>
          <img src="../../assets/pic/arrow_icon.png" />
        </van-row>
        <van-row
          @click="router_to('/pointmanagement')"
          class="doctor_module_list_item flex flex_justify_between flex_align_center"
        >
          <van-row class="flex flex_1 flex_align_center">
            <img src="../../assets/pic/doctor_icon4.png" />
            <span class="main_font font_white">积分管理</span>
          </van-row>
          <img src="../../assets/pic/arrow_icon.png" />
        </van-row>
        <van-row
          @click="router_to('/mypatient')"
          class="doctor_module_list_item flex flex_justify_between flex_align_center"
        >
          <van-row class="flex flex_1 flex_align_center">
            <img src="../../assets/pic/doctor_icon5.png" />
            <span class="main_font font_white">我的患者</span>
          </van-row>
          <span class="list_message">153</span>
          <img src="../../assets/pic/arrow_icon.png" />
        </van-row>
        <van-row class="doctor_module_list_item flex flex_justify_between flex_align_center">
          <van-row class="flex flex_1 flex_align_center">
            <img src="../../assets/pic/doctor_icon6.png" />
            <span class="main_font font_white">系统设置</span>
          </van-row>
          <img src="../../assets/pic/arrow_icon.png" />
        </van-row>
      </van-row>
    </van-row>
  </van-row>
</template>
<script>
export default {
  name: "DoctorPersonCenter",
  data() {
    return {};
  },
  mounted() {
    // this.ifRegistered = this.$route.query.D_registered;
    let ifRegistered = this.$Utils.getCookieCry("D_registered");
    if (ifRegistered != "true") {
      this.router_to("/doctorbaseInfo");
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
.top_info {
  height: 2.2rem;
  justify-content: space-between;
  padding-right: 0.41rem;
  box-shadow: 0px 2px 10px 0px rgba(203, 203, 203, 0.2);
}
.top_info img {
  width: 1.392rem;
  height: 1.392rem;
  margin: 0rem 0.32rem 0rem 0.5rem;
}
.doctor_info span:nth-child(1) {
  font-size: 0.4rem;
  display: block;
}
.doctor_info span:nth-child(2) {
  font-size: 0.28rem;
  display: block;
  margin-top: 0.1rem;
}

/* 列表开始 */
.doctor_module_list {
  padding: 0.4rem 0.32rem;
}
.doctor_module_list .doctor_module_list_item {
  height: 1.1rem;
}
.doctor_module_list .van-row img:nth-child(1) {
  margin-right: 0.2rem;
}
.doctor_module_list .van-row img {
  width: 0.6rem;
  height: 0.6rem;
}
.auth_span {
  width: 1.55rem;
  height: 0.4rem;
  border-radius: 0.2rem;
  text-align: center;
  border: 0.01rem solid rgba(129, 216, 206, 1);
}
.list_message {
  font-size: 0.28rem;
  color: #d1d1d6;
  font-weight: 500;
}
</style>
