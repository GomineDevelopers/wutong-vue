<template>
  <div class="TimedExamination">
    <vue-headful title="限时考试"></vue-headful>
    <div class="PerRow">
      <div class="common_Stitle_font2 common_Stitle_font3 inlineBlock">XXX考试</div>
      <div class="Q_time">限时：30分钟</div>
      <div class="Q_time">总分：100分</div>
    </div>
    <div :style="{height: '0.64rem'}"></div>
    <div class="PerRow_Question">
      <template v-for="(item,index) in Qusetion_Write ">
        <div class="PR_Q" v-show="current_Qid == item.id" :key="index + 'qw' ">
          <div class="Q_info">
            <div class="QI_left">
              <div class="QI_index Q_info_font1">{{item.id}}</div>
              <div class="QI_QNums Q_info_font2">/{{QustionNum}}</div>
              <div class="QI_QType Q_info_font2">{{item.QType}}</div>
            </div>
            <div class="QI_right">
              <!-- <div class="QI_QTimeCount Q_info_font2 Q_info_font3">{{item.QTime}}</div> -->
              <div id="QTime_Text" class="QI_QTimeCount Q_info_font2 Q_info_font3">{{QTime_Text}}</div>
            </div>
          </div>
          <div class="per_Qu">
            <div class="Q_title">{{item.id}}.{{item.name}}</div>
            <div :style="{height: '0.2rem'}"></div>
            <van-radio-group class="verticalAlignTop" v-model="Qusetion_WriteQ_radio[index]">
              <template v-for="(itemC,indexC) in Qusetion_WriteQ_ChooseArr[index] ">
                <div :key=" index + '-' + indexC + 'qzX'">
                  <van-radio
                    class="radio1"
                    v-if="indexC%2 == 0"
                    :name="itemC"
                    icon-size="16px"
                    checked-color="#49D691"
                  >{{itemC}}</van-radio>
                  <van-radio
                    class="radio2"
                    v-if="indexC%2 != 0"
                    :name="itemC"
                    icon-size="16px"
                    checked-color="#49D691"
                  >{{itemC}}</van-radio>
                </div>
              </template>
            </van-radio-group>
          </div>
          <div :style="{height: '2.43rem'}"></div>
        </div>
      </template>
    </div>
    <div :style="{height: '1rem'}"></div>
    <div class="textAlignCenter_w100">
      <van-button
        round
        v-show="this.current_Qid != 1"
        class="common_middle_btn2 i_btn common_fontsize i_btn_space"
        @click="QManage('last')"
      >上&nbsp;&nbsp;一&nbsp;&nbsp;题</van-button>
      <van-button
        round
        v-show="this.current_Qid >= 1 && this.current_Qid < this.QustionNum"
        class="common_middle_btn i_btn common_fontsize last"
        @click="QManage('next')"
      >下&nbsp;&nbsp;一&nbsp;&nbsp;题</van-button>
      <van-button
        round
        v-show="this.current_Qid == this.QustionNum"
        class="common_middle_btn i_btn common_fontsize"
        @click="QManage('submit')"
      >提&nbsp;&nbsp;交</van-button>
      <div :style="{height: '0.32rem'}"></div>
    </div>
    <!-- 弹出框 -->
    <van-popup v-model="popupShow">
      <div class="textAlignCenter_w100p">
        <div class="popup_bg">
          <div class="textAlignCenter_w100p">
            <div class="popup_warning">警告</div>
          </div>
          <div :style="{height: '0.26rem'}"></div>
          <div class="popup_info">
            <div class="popup_info_c">当前考试已超时，请提交考试答案或重新开始考试！</div>
          </div>
          <div :style="{height: '0.33rem'}"></div>
          <div class="popup_btns">
            <div v-show="popupStatus =='Timeout'">
              <div class="popup_perBtn" @click="popupFunc('Reanswer')">
                <div class="p_btn">重新答题</div>
              </div>
              <div class="popup_perBtn popup_perBtn2" @click="popupFunc('Submit')">
                <div class="p_btn">提交</div>
              </div>
            </div>
            <div v-show="popupStatus =='BreakOff'">
              <div class="popup_perBtn" @click="popupFunc('Exit')">
                <div class="p_btn">继续退出</div>
              </div>
              <div class="popup_perBtn popup_perBtn2" @click="popupFunc('Answer')">
                <div class="p_btn">答题</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>
<script>
export default {
  name: "TimedExamination",
  components: {},
  data() {
    return {
      current_Qid: 1,
      QustionNum: 0,
      // QTime_init: 30 * 60, // 以秒计
      // QTime_init: 310, // 以秒计
      // QTime_init: 10,
      QTime_init: 30,
      QTime: 1, // 以秒计
      popupShow: false,
      // popupShow: true,
      popupStatus: "BreakOff", // 'Timeout' - 超时情况  'BreakOff ' - 中断/退出等情况
      QTime_Text: "30:00",
      Qusetion_Write: [
        {
          id: 1,
          QType: "单选题",
          QTime: 30,
          name: "下列关于诺氟沙星的描述，错误的是？",
          type: "single"
        },
        {
          id: 2,
          QType: "单选题",
          QTime: 29,
          name: "下列关于诺氟沙星的描述，错误的是？？",
          type: "single"
        },
        {
          id: 3,
          QType: "单选题",
          QTime: 4,
          name: "下列关于诺氟沙星的描述，错误的是？？？",
          type: "single"
        }
      ],
      Qusetion_WriteQ_ChooseArr: [
        [
          "A 别名氟哌酸",
          "B 用于敏感菌所致泌尿系统和肠道感染",
          "C 不良反应",
          "D 广泛用于儿童"
        ],
        [
          "A 别名氟哌酸2",
          "B 用于敏感菌所致泌尿系统和肠道感染",
          "C 不良反应",
          "D 广泛用于儿童"
        ],
        [
          "A 别名氟哌酸3",
          "B 用于敏感菌所致泌尿系统和肠道感染",
          "C 不良反应",
          "D 广泛用于儿童"
        ]
      ],

      Qusetion_WriteQ_radio: ["A 别名氟哌酸", "A 别名氟哌酸2", "A 别名氟哌酸3"]
    };
  },
  mounted() {
    let vm = this;
    this.QustionNum = this.Qusetion_Write.length;
    this.QTime = this.QTime_init;
    this.$nextTick(function() {
      setInterval(this.timer, 1000);
    });

    // 监听微信返回按键
    // 添加返回事件监听
    // window.addEventListener(
    //   "popstate",
    //   function(e) {
    //     console.log(e);
    //     this.showPopup(true);
    //   },
    //   false
    // );
  },

  watch: {
    popupStatus(newValue, oldValue) {
      console.log(newValue);
      console.log(oldValue);
    }
  },
  methods: {
    popupFunc() {
      // Reanswer
      // 重新答题
      // Submit
      // 提交
      // Exit
      // 继续退出
      // Answer
      // 答题
      this.popupShow = false;
      this.QTime = this.QTime_init;
    },
    showPopup(status) {
      this.popupShow = status;
    },
    timer() {
      try {
        if (this.QTime > 0) {
          this.QTime--;
        } else if (this.QTime == 0) {
          this.showPopup(true);
          this.popupStatus = "Timeout";
        }
        if (this.QTime < 300) {
          // 小于五分钟计时器变色
          document.getElementById("QTime_Text").style.color = "#FF4800";
        }
        let mintues = 0;
        let seconds = 0;
        mintues = Math.floor(this.QTime / 60);
        seconds = Math.floor(this.QTime % 60);
        if (mintues >= 10) {
          mintues = String(mintues);
        } else if (mintues < 10) {
          mintues = "0" + String(mintues);
        }
        if (seconds >= 10) {
          seconds = String(seconds);
        } else if (seconds < 10) {
          seconds = "0" + String(seconds);
        }
        this.QTime_Text = mintues + ":" + seconds;
      } catch (error) {
        console.log(error);
      }
    },
    QManage(manageType) {
      if (manageType == "last") {
        if (this.current_Qid > 1) {
          this.current_Qid--;
        }
      } else if (manageType == "next") {
        if (this.current_Qid < this.QustionNum) {
          this.current_Qid++;
        }
      } else if (manageType == "submit") {
      }
    }
  }
};
</script>

<style>
/* ****** radio 单选 */
.TimedExamination .van-radio {
  height: 0.32rem;
  border-radius: 0.12rem;
  padding: 0.24rem 0 0.24rem 0.36rem;
}
.TimedExamination .radio1.van-radio {
  /* background: rgba(250, 250, 250, 1); */
  background: #1d2439;
}
.TimedExamination .radio2.van-radio {
  /* background: rgba(255, 255, 255, 1); */
  background: rgba(0, 0, 0, 0);
}
.TimedExamination .van-radio__label {
  height: 0.4rem;
  font-size: 0.28rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(102, 111, 131, 1);
  line-height: 0.4rem;
  letter-spacing: 0.01rem;
}
.TimedExamination .van-button--default {
  border: 1px solid #49d691;
}
/* ******Radio 的border颜色 */
.TimedExamination .van-radio__icon .van-icon {
  border: 0.01rem solid #49d691;
}
</style>
<style scoped>
.TimedExamination {
}
.TimedExamination .fontTitle {
  height: 0.5rem;
  font-size: 0.36rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(17, 26, 52, 1);
  line-height: 0.5rem;
  letter-spacing: 0.01rem;
}
.TimedExamination .PerRow {
  height: 0.83rem;
  /* width: 100%; */
  border-top: 1px #f6f6f6 solid;
  padding: 0.46rem 0.32rem 0.21rem 0.32rem;
}
.TimedExamination .PerRow_Question {
  padding: 0rem 0.32rem 0rem 0.32rem;
}

.TimedExamination .Q_info {
  height: 0.78rem;
  padding-left: 0.4rem;
}
.TimedExamination .QI_left {
  display: inline-block;
  vertical-align: top;
  width: 5.04rem;
  height: 100%；;
}
.TimedExamination .Q_info_font1 {
  height: 0.78rem;
  font-size: 0.56rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  /* color: rgba(17, 26, 52, 1); */
  color: #ffffff;
  line-height: 0.78rem;
  letter-spacing: 0.01rem;
}
.TimedExamination .Q_info_font2 {
  height: 0.5rem;
  font-size: 0.36rem;
  font-family: PingFangSC-Medium, PingFang SC;
  /* color: rgba(17, 26, 52, 1); */
  color: #ffffff;
  font-weight: 500;
  line-height: 0.5rem;
}
.TimedExamination .Q_info_font3 {
  color: #49d691;
}
.TimedExamination .QI_right {
  display: inline-block;
  vertical-align: top;
  height: 100%；;
}
.TimedExamination .QI_index {
  display: inline-block;
  vertical-align: top;
}
.TimedExamination .QI_QNums {
  display: inline-block;
  vertical-align: top;
  margin-top: 0.2rem;
}
.TimedExamination .QI_QType {
  display: inline-block;
  vertical-align: top;
  margin-top: 0.2rem;
}
.TimedExamination .QI_QTimeCount {
  display: inline-block;
  vertical-align: top;
  margin-top: 0.2rem;
}

.TimedExamination .Q_time {
  height: 0.28rem;
  font-size: 0.2rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  /* color: rgba(197, 202, 213, 1); */
  color: #858b9c;
  letter-spacing: 0.01rem;
  vertical-align: top;
  width: 100%;
  margin-top: -0.55rem;
}
.TimedExamination .per_Qu {
  padding-left: 0.4rem;
  padding-right: 0.4rem;
}
.TimedExamination .Q_title {
  /* height: 0.45rem; */
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  /* color: rgba(17, 26, 52, 1); */
  color: #ffffff;
  line-height: 0.45rem;
}

.TimedExamination .i_input {
  height: 0.4rem;
  outline: none;
  border: 0;
  vertical-align: top;

  font-size: 0.28rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(197, 202, 213, 1);
  line-height: 0.4rem;
  padding: 0 0.36rem;
  margin-top: 0.2rem;
  width: 100%;
}
.TimedExamination .i_btn {
  width: 2.6rem;
  height: 0.9rem;
  cursor: pointer;
}
.TimedExamination .i_btn_reset {
  cursor: pointer;
  margin: 0;
  height: 0.4rem;
  font-size: 0.28rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(133, 139, 156, 1);
  line-height: 0.4rem;
  /* letter-spacing: 0.1rem; */
  text-decoration: underline;
}
.TimedExamination .i_btn_space {
  margin-right: 0.68rem;
}

.TimedExamination .popup_bg {
  /* width: 4.76rem;
  height: 2.56rem;
  padding: 0.33rem 0.32rem 0.26rem 0.32rem; */
  width: 5.4rem;
  height: auto;
  background: rgba(255, 255, 255, 1);
  border-radius: 0.04rem;
  text-align: center;
  overflow-y: hidden;
}
.TimedExamination .popup_warning {
  height: 0.5rem;
  font-size: 0.36rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(17, 26, 52, 1);
  line-height: 0.5rem;
  letter-spacing: 0.01rem;
  margin-top: 0.33rem;
}
.TimedExamination .popup_info {
  height: 0.76rem;
  font-size: 0.28rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(65, 72, 93, 1);
  line-height: 0.38rem;
  margin: 0 0.32rem;
}
.TimedExamination .popup_info_c {
  display: inline-block;
}
.TimedExamination .popup_btns {
  /* height: 0.45rem; */
  /* padding:  0.28rem 0 0.26rem 0; */
  border-top: 0.01rem solid rgba(221, 221, 221, 1);
  border-bottom: 0.01rem solid rgba(221, 221, 221, 1);
  height: 0.99rem;
}
.TimedExamination .popup_perBtn {
  display: inline-block;
  width: 49.5%;
  /* height: 0.45rem; */
  font-size: 0.32rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 0.45rem;
  letter-spacing: 0.1rem;
  vertical-align: top;
  cursor: pointer;
}
.TimedExamination .popup_perBtn2 {
  color: #49d691;
  border-left: 1px solid rgba(221, 221, 221, 1);
}
.TimedExamination .p_btn {
  margin-top: 0.28rem;
  margin-bottom: 0.26rem;
}
.TimedExamination .PR_Q {
  box-shadow: 0rem 0.04rem 0.2rem 0rem rgba(0, 0, 0, 0.04);
  border-radius: 0.2rem;
  /* border: 0.01rem solid rgba(233, 232, 232, 1); */
  border: 0.01rem solid rgba(0, 0, 0, 0);
  background-color: rgba(255, 255, 255, 0.1);
}
</style>

