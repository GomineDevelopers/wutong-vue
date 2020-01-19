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
          <div class="connect_title">
            <span></span>思杰大讲堂
          </div>
          <div class="main_content"></div>
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

.AnswerOfTong .top_content{
    width:100%;
    height: 100%;
}

.AnswerOfTong .connect_title {
  font-size: 16px;
  color: #333333;
  border-bottom: 1px solid #f0f0f0;
  line-height: 40px;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  font-weight: bold;
}
.AnswerOfTong .connect_title span {
  width: 10px;
  height: 10px;
  background: #1e9fff;
  margin: 0px 9px 0px 16px;
}
.AnswerOfTong .connect_body {
  /* padding: 0px 16px; */
  padding: 0px 4vw;
  margin-top: 80px;
  z-index: 999;
}
.AnswerOfTong .main_content {
  /* padding: 0px 16px; */
}

.AnswerOfTong .connect_box_shadow {
  background: #ffffff;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  padding: 10px 0px 5px 0px;
  margin-bottom: 10px;
}
.AnswerOfTong .answer_icon {
}
</style>

