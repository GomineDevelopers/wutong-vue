<template>
  <div class="Identity">
    <!-- <vue-headful title="身份"></vue-headful> -->
    <div :style="{height: '1.44rem'}"></div>
    <div class="textAlignCenter_w100">
      <img class="avatar" :src="avatar1" alt />
    </div>
    <div :style="{height: '0.56rem'}"></div>
    <div class="textAlignCenter_w100">
      <van-button round class="common_middle_btn i_btn common_fontsize">我是患者</van-button>
    </div>
    <div :style="{height: '1.8rem'}"></div>
    <div class="textAlignCenter_w100 inlineBlock">
      <div class="inlineBlock theme_backgroundcolor5 i_line"></div>
      <div class="inlineBlock theme_color5 i_or">&nbsp;或者&nbsp;</div>
      <div class="inlineBlock theme_backgroundcolor5 i_line"></div>
    </div>
    <div :style="{height: '1.8rem'}"></div>
    <div class="textAlignCenter_w100">
      <img class="avatar" :src="avatar2" alt />
    </div>
    <div :style="{height: '0.56rem'}"></div>
    <div class="textAlignCenter_w100">
      <van-button round class="common_middle_btn i_btn common_fontsize">我是医生</van-button>
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
  methods: {}
};
</script>
<style scoped>
.Identity {
  text-align: center;
}
.Identity .avatar {
  height: 2rem;
  width: 2rem;
}
.Identity .i_btn {
  height: 0.9rem;
  width: 3.6rem;
}
.Identity .i_or {
  font-size: 0.26rem;
}
.Identity .i_line {
  height: 1px;
  width: 1rem;
  vertical-align: middle;
}
</style>

