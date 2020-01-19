<template>
  <div class="AnswerOfTong">
    <vue-headful title="答题通"></vue-headful>
    <div class="AnswerOfTong">
      <div class="top_img" :style="StyleBg">
        <!-- <img src="@/assets/pic/AnswerP0.png" /> -->
        <div class="top_content">
          <div class="top_content_c">
            <div class="tcc_top">32</div>
            <div class="tcc_bottom">
              <div class="tb1">问卷调研</div>
              <div class="tb2">
                <img class="answer_icon" :src="AnswerIcon[0]" alt />
              </div>
            </div>
          </div>
          <div class="top_content_c">
            <div class="tcc_top">4</div>
            <div class="tcc_bottom">
              <div class="tb1">学业碑里程</div>
              <div class="tb2">
                <img class="answer_icon" :src="AnswerIcon[1]" alt />
              </div>
            </div>
          </div>
          <div class="top_content_c">
            <div class="tcc_top">452</div>
            <div class="tcc_bottom">
              <div class="tb1">考试排名</div>
              <div class="tb2">
                <img class="answer_icon" :src="AnswerIcon[2]" alt />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="connect_body">
        <div class="connect_box_shadow">
          <div class="main_content">
            <div class="answer_imgs">
              <div class="answer_img_p">
                <img class="answer_img" :src="AnswerImg[0]" alt @click="router_to('/questionnaireinquiry')" />
              </div>
              <div class="answer_img_p">
                <img class="answer_img" :src="AnswerImg[1]" alt />
              </div>
              <div class="answer_img_p">
                <img class="answer_img" :src="AnswerImg[2]" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AnswerOfTong",
  components: {},
  data() {
    return {
      StyleBg: {
        backgroundImage: "url(" + require("@/assets/pic/AnswerP0.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        textAlign: "center"
      },
      AnswerIcon: [
        require("@/assets/pic/AnswerIcon1.png"),
        require("@/assets/pic/AnswerIcon2.png"),
        require("@/assets/pic/AnswerIcon3.png")
      ],
      AnswerImg: [
        require("@/assets/pic/AnswerP1.png"),
        require("@/assets/pic/AnswerP2.png"),
        require("@/assets/pic/AnswerP3.png")
      ]
    };
  },
  mounted() {
    let vm = this;
  },
  methods: {
    goVideo(url) {
      console.log(url);
      window.location.href = url;
    },
    router_to(str) {
      let vm = this;
      vm.$router.push({ path: str });
    }
  }
};
</script>

<style>
</style>
<style scoped>
.AnswerOfTong {
  /* background-color: #fafafa; */
  width: 100%;
}

.AnswerOfTong .top_img {
  /* width: 100%; */
  /* height: 31.2vw; */
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;

  width: 7.5rem;
  height: 2.78rem;
  background: linear-gradient(
    45deg,
    rgba(0, 202, 171, 1) 0%,
    rgba(0, 216, 160, 1) 100%
  );
}

.AnswerOfTong .top_content {
  /* width: 100%;
  height: 100%; */
}
.AnswerOfTong .top_content_c {
  width: 33%;
  display: inline-block;
  padding-top: 0.55rem;
}
.AnswerOfTong .tcc_top {
  height: 0.56rem;
  font-size: 0.4rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: rgba(255, 255, 255, 1);
  line-height: 0.56rem;
  letter-spacing: 0.01rem;
}
.AnswerOfTong .tcc_bottom {
  height: 0.28rem;
  margin-top: 0.24rem;
}
.AnswerOfTong .tb1 {
  height: 0.28rem;
  font-size: 0.2rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 0.28rem;
  display: inline-block;
  vertical-align: top;
}
.AnswerOfTong .tb2 {
  display: inline-block;
  vertical-align: top;
  height: 0.28rem;
}

.AnswerOfTong .answer_icon {
  height: 0.23rem;
  width: 0.23rem;
  vertical-align: top;
  margin-top: 0.05rem;
  margin-left: 0.12rem;
}

.AnswerOfTong .connect_body {
  /* padding: 0px 16px; */
  padding: 0px 0.5rem;
  margin-top: 1.96rem;
  z-index: 999;
}
.AnswerOfTong .main_content {
  /* padding: 0px 16px; */
}
.AnswerOfTong .answer_img_p {
  width: 6.5rem;
  height: 2.6rem;
  margin-bottom: 0.4rem;
}

.AnswerOfTong .answer_img {
  width: 6.5rem;
  height: 2.6rem;
}

.AnswerOfTong .connect_box_shadow {
  /* background: #ffffff; */
  /* box-shadow: 0 0.01rem 0.06rem 0 rgba(0, 0, 0, 0.1); */
  border-radius: 0.06rem;
  padding: 0.1rem 0 0.05rem 0;
  margin-bottom: 0.1rem;
}
</style>

