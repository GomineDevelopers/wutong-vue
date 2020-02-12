<template>
  <div class="Identity">
    <vue-headful title="身份"></vue-headful>
    <div :style="{height: '1rem'}"></div>
    <img class="avatar" :src="avatar1" alt />
    <div>
      <van-button
        @click="router_to('/patientpersoncenter')"
        round
        class="common_middle_btn i_btn common_fontsize"
      >我是患者</van-button>
    </div>
    <div :style="{height: '1.8rem'}"></div>
    <div class="flex flex_align_center flex_justify_content">
      <div class="theme_backgroundcolor5 i_line"></div>
      <div class="theme_color5 i_or">&nbsp;或者&nbsp;</div>
      <div class="theme_backgroundcolor5 i_line"></div>
    </div>
    <div :style="{height: '1.8rem'}"></div>
    <img class="avatar" :src="avatar2" alt />
    <div>
      <van-button
        @click="router_to('/doctorpersoncenter')"
        round
        class="common_middle_btn i_btn"
      >我是医生</van-button>
    </div>
    <div :style="{height: '1.44rem'}"></div>
  </div>
</template>
<script>
export default {
  name: "Identity",
  components: {},
  data() {
    return {
      avatar1: require("@/assets/pic/head1.png"),
      avatar2: require("@/assets/pic/head2.png")
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
<style scoped>
.Identity {
  text-align: center;
  /* overflow: hidden; */
  height: 100%;
}
.Identity .avatar {
  height: 2rem;
  width: 2rem;
}
.Identity .i_btn {
  height: 0.9rem;
  width: 3.6rem;
  font-size: 0.32rem;
  letter-spacing: 0.1rem;
}
.Identity .i_or {
  font-size: 0.26rem;
}
.Identity .i_line {
  height: 0.01rem;
  width: 2rem;
  vertical-align: middle;
}
</style>

