<template>
  <div class="QuestionnaireInquiry_Answer">
    <vue-headful title="问卷调研-答题"></vue-headful>
    <div class="PerRow">
      <div class="common_Stitle_font2 common_Stitle_font3 inlineBlock">XXX问卷调查</div>
      <div class="Q_time">发布时间：2019-12-02 18:35</div>
    </div>
    <div class="PerRow_Question">
      <template v-for="(item,index) in Qusetion_Write ">
        <div :key="index + 'qw' ">
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
                <input v-if="itemC == '其他'" class="i_input" type="text" placeholder="请输入" />
              </div>
            </template>
          </van-radio-group>
        </div>
      </template>
    </div>
    <div :style="{height: '0.2rem'}"></div>
    <div class="textAlignCenter_w100 bottomSpace">
      <van-button round class="common_middle_btn i_btn common_fontsize">提&nbsp;&nbsp;交</van-button>
      <div :style="{height: '0.32rem'}"></div>
      <p class="i_btn_reset">重&nbsp;&nbsp;置</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "QuestionnaireInquiry_Answer",
  components: {},
  data() {
    return {
      Qusetion_Write: [
        {
          id: "1",
          name: "XXX的药效？",
          type: "single"
        },
        {
          id: "2",
          name: "XXXxxxx的药效？",
          type: "single"
        }
      ],
      Qusetion_WriteQ_ChooseArr: [
        ["好", "一般", "差"],
        ["好", "一般", "差", "其他"]
      ],

      Qusetion_WriteQ_radio: ["好", "好"]
    };
  },
  mounted() {
    let vm = this;
  },
  methods: {}
};
</script>

<style>
/* ****** radio 单选 */
.QuestionnaireInquiry_Answer .van-radio {
  height: 0.32rem;
  border-radius: 0.12rem;
  padding: 0.24rem 0.36rem;
}
.QuestionnaireInquiry_Answer .radio1.van-radio {
  /* background: rgba(250, 250, 250, 1); */
  background: #1d2439;
}
.QuestionnaireInquiry_Answer .radio2.van-radio {
  /* background: rgba(255, 255, 255, 1); */
  background: rgba(0, 0, 0, 0);
}
.QuestionnaireInquiry_Answer .van-radio__label {
  height: 0.4rem;
  font-size: 0.28rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(102, 111, 131, 1);
  line-height: 0.4rem;
  letter-spacing: 0.01rem;
}

/* ******按钮 */
.QuestionnaireInquiry_Answer .van-button--default{
  border: 0.01rem solid rgba(0, 0, 0, 0);
}
/* ******Radio 的border颜色 */
.QuestionnaireInquiry_Answer .van-radio__icon .van-icon{
  border: 0.01rem solid #49D691;
}
</style>
<style scoped>
.QuestionnaireInquiry_Answer {
}
.QuestionnaireInquiry_Answer .fontTitle {
  height: 0.5rem;
  font-size: 0.36rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(17, 26, 52, 1);
  line-height: 0.5rem;
  letter-spacing: 0.01rem;
}
.QuestionnaireInquiry_Answer .PerRow {
  height: 0.83rem;
  /* width: 100%; */
  border-top: 1px #f6f6f6 solid;
  padding: 0.46rem 0.32rem 0.21rem 0.32rem;
}
.QuestionnaireInquiry_Answer .PerRow_Question {
  padding: 0rem 0.32rem 0rem 0.32rem;
}
.QuestionnaireInquiry_Answer .Q_time {
  height: 0.28rem;
  font-size: 0.2rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  /* color: rgba(197, 202, 213, 1); */
  color: #858b9c;
  line-height: 0.28rem;
  letter-spacing: 0.01rem;
  vertical-align: top;
  display: inline-block;
  width: 100%;
  margin-top: -0.8rem;
}
.QuestionnaireInquiry_Answer .Q_title {
  height: 0.45rem;
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  /* color: rgba(17, 26, 52, 1); */
  color: #ffffff;

  line-height: 0.45rem;
}

.QuestionnaireInquiry_Answer .i_input {
  height: 0.8rem;
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
  width: 6.05rem;
  background-color: #1d2439;
  border-radius: 0.12rem;
}
.QuestionnaireInquiry_Answer .i_btn {
  width: 3.6rem;
  height: 0.9rem;
  cursor: pointer;
}
.QuestionnaireInquiry_Answer .i_btn_reset {
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
.QuestionnaireInquiry_Answer .bottomSpace {
  font-size: 0;
}
</style>

