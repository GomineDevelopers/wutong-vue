<template>
  <div class="SweepAndInvite">
    <!-- <vue-headful title="扫码邀请"></vue-headful> -->
    <div :style="StyleBg">
      <p class="page_title" v-if="pageType == 1">
        <span>邀请同行入组</span>
      </p>
      <p class="page_title" v-if="pageType == 2">
        <span>邀请患者入组</span>
      </p>
      <div class="textAlignCenter">
        <img v-if="pageType == 1" class="QrCode" :src="QrCode_doctor" alt />
        <img v-if="pageType == 2" class="QrCode" :src="QrCode_patient" alt />
      </div>
    </div>
    <div :style="{height: '0.88rem'}"></div>
    <div class="textAlignCenter i_btn_p">
      <van-button
        v-if="pageType == 1"
        @click="changePageType(2)"
        round
        class="common_middle_btn i_btn common_fontsize"
      >
        <van-icon name="exchange" />
        <span>&nbsp;&nbsp;&nbsp;</span>邀请同行
      </van-button>
    </div>
    <div class="textAlignCenter i_btn_p">
      <van-button
        v-if="pageType == 2"
        @click="changePageType(1)"
        round
        class="common_middle_btn i_btn common_fontsize"
      >
        <van-icon name="exchange" />
        <span>&nbsp;&nbsp;&nbsp;</span>邀请患者
      </van-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "SweepAndInvite",
  components: {},
  data() {
    return {
      pageType: 1, // 1 - doctor  2 - patient
      StyleBg: {
        backgroundImage: "url(" + require("@/assets/pic/CardBg2.png") + ")",
        backgroundRepeat: "no-repeat",
        // backgroundPosition: "center center",
        backgroundSize: "100% 100%",
        // height: "8.2rem",
        // width: "6.7rem",
        // width: "90%",
        height: "110vw",
        width: "90vw",

        textAlign: "center"
        // "{backgroundImage:'url(' + item.videopic + ')', backgroundRepeat:'no-repeat', backgroundPosition:'center center', backgroundSize: 'contain'}"
      },
      QrCode_doctor: require("@/assets/pic/QrCode.png"),
      QrCode_patient: require("@/assets/pic/QrCode.png")
    };
  },
  mounted() {
    let vm = this;
  },
  methods: {
    changePageType(type) {
      this.pageType = type;
    }
  }
};
</script>
<style>
.SweepAndInvite .van-icon {
  vertical-align: middle;
}
</style>
<style scoped>
.SweepAndInvite {
  width: 90vw;
  padding: 0 5vw;
  text-align: center;
}
.SweepAndInvite .page_title {
  width: 2.22rem;
  height: 0.5rem;
  font-size: 0.36rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(65, 72, 93, 1);
  line-height: 0.5rem;
  letter-spacing: 1px;
  width: 100%;
  padding-top: 0.64rem;
  margin: 0;
  margin-bottom: 0.56rem;
}
.SweepAndInvite .QrCode {
  height: 3.48rem;
  width: 3.48rem;
}
.SweepAndInvite .i_btn_p {
  height: 0.9rem;
}
.SweepAndInvite .i_btn {
  width: 3.64rem;
  height: 100%;
  /* height: 0.9rem; */
  /* width: 168px; */
  /* height: 45px; */
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  letter-spacing: 2px;
  vertical-align: top;
}
</style>

