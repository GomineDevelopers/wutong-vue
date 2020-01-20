<template>
  <div class="ResultsQuery">
    <vue-headful title="考后查询"></vue-headful>
    <div :style="{height: '0.4rem'}"></div>
    <p class="RQ_title">XXX考试</p>
    <div :style="{height: '0.4rem'}"></div>
    <p class="RQ_title">本次得分</p>
    <div :style="{height: '0.36rem'}"></div>
    <div class="textAlignCenter_w100p">
      <div>
        <div class="grade1">88</div>
        <div class="grade2">分/100</div>
      </div>
    </div>
    <div :style="{height: '0.4rem'}"></div>
    <div class="content_bg">
      <div class="row1">
        <div class="row1_c">
          <div class="row1_title">
            <div>试题量</div>
          </div>
          <div class="row1_value">
            <div class="value_color1">56</div>
          </div>
        </div>
        <div class="row1_c">
          <div class="row1_title">
            <div>正确数</div>
          </div>
          <div class="row1_value">
            <div class="value_color2">48</div>
          </div>
        </div>
        <div class="row1_c">
          <div class="row1_title">
            <div>正确率</div>
          </div>
          <div class="row1_value">
            <div class="value_color3">85%</div>
          </div>
        </div>
        <div class="row1_c">
          <div class="row1_title">
            <div>我的排名</div>
          </div>
          <div class="row1_value">
            <div>
              <div class="value_4 value_color4">12</div>
              <div class="value_5 value_color5">/2156</div>
            </div>
          </div>
        </div>
      </div>
      <div class="row2">
        <div :style="{height: '0.4rem'}"></div>
        <div class="row2_title">
          <div class="row2_tl">本次测试情况</div>
          <div class="row2_tr">
            <div class="row2_tr_1">●&nbsp;正确</div>
            <span>&nbsp;&nbsp;</span>
            <div class="row2_tr_2">●&nbsp;错误</div>
          </div>
        </div>
        <template v-for="(item,index) in QusetionArr ">
          <div class="perQ_p" :key="index + 'QA' ">
            <div v-if="item.ifRight == true" class="perQ">
              <div class="pQ_value">{{item.Qid}}</div>
            </div>
            <div v-if="item.ifRight != true" class="perQ perQ2">
              <div class="pQ_value">{{item.Qid}}</div>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div :style="{height: '1.4rem'}"></div>

    <div class="textAlignCenter_w100p">
      <van-button @click="router_to('/openexamination')" round class="common_middle_btn i_btn common_fontsize">查看详情</van-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "ResultsQuery",
  components: {},
  data() {
    return {
      QusetionArr: [
        {
          Qid: 1,
          ifRight: true
        },
        {
          Qid: 2,
          ifRight: true
        },
        {
          Qid: 3,
          ifRight: true
        },
        {
          Qid: 4,
          ifRight: true
        },
        {
          Qid: 5,
          ifRight: false
        },
        {
          Qid: 6,
          ifRight: true
        },
        {
          Qid: 7,
          ifRight: true
        },
        {
          Qid: 8,
          ifRight: true
        },
        {
          Qid: 9,
          ifRight: true
        },
        {
          Qid: 10,
          ifRight: false
        },
        {
          Qid: 11,
          ifRight: true
        },
        {
          Qid: 12,
          ifRight: true
        },
        {
          Qid: 13,
          ifRight: true
        },
        {
          Qid: 14,
          ifRight: false
        },
        {
          Qid: 15,
          ifRight: true
        },
        {
          Qid: 16,
          ifRight: true
        },
        {
          Qid: 17,
          ifRight: true
        },
        {
          Qid: 18,
          ifRight: true
        },
        {
          Qid: 19,
          ifRight: true
        },
        {
          Qid: 20,
          ifRight: true
        }
      ]
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
.ResultsQuery {
  padding: 0 0.32rem;
}
.ResultsQuery .RQ_title {
  margin: 0;
  height: 0.5rem;
  font-size: 0.36rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(17, 26, 52, 1);
  line-height: 0.5rem;
  letter-spacing: 0.01px;
}
.ResultsQuery .grade1 {
  height: 1.2rem;
  font-size: 1.2rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(129, 216, 206, 1);
  line-height: 1.2rem;
  display: inline-block;
  vertical-align: top;
}
.ResultsQuery .grade2 {
  height: 1.2rem;
  font-size: 0.24rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(129, 216, 206, 1);
  line-height: 0.24rem;
  display: inline-block;
  vertical-align: baseline;
}
.ResultsQuery .content_bg {
  width: 6.86rem;
  height: 4.6rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 0.04rem 0.2rem 0 rgba(0, 0, 0, 0.04);
  border-radius: 0.2rem;
  border: 0.01rem solid rgba(233, 232, 232, 1);
}
.ResultsQuery .row1 {
  height: 1.58rem;
  font-size: 0.28rem;
}
.ResultsQuery .row1_c {
  width: 25%;
  display: inline-block;
  vertical-align: top;
  text-align: center;
}
.ResultsQuery .row1_title {
  height: 0.8rem;
  font-size: 0.28rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(17, 26, 52, 1);
  line-height: 0.4rem;
}
.ResultsQuery .row1_title > div {
  padding-top: 0.4rem;
}
.ResultsQuery .row1_value {
  height: 0.78rem;
  font-size: 0.4rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(129, 216, 206, 1);
  letter-spacing: 0.01rem;
}
.ResultsQuery .row1_value > div {
  padding-top: 0.22rem;
}
.ResultsQuery .value_color1 {
  color: rgba(129, 216, 206, 1);
}
.ResultsQuery .value_color2 {
  color: rgba(126, 191, 244, 1);
}
.ResultsQuery .value_color3 {
  color: rgba(80, 149, 242, 1);
}
.ResultsQuery .value_color4 {
  color: #ff8300;
}
.ResultsQuery .value_color5 {
  color: rgba(17, 26, 52, 1);
}
.ResultsQuery .value_4 {
  display: inline-block;
}
.ResultsQuery .value_5 {
  display: inline-block;
  font-size: 0.28rem;
}
.ResultsQuery .row2 {
  /* height: 2.57rem; */
  padding: 0 0.2rem;
}
.ResultsQuery .row2_title {
  height: 0.45rem;
}
.ResultsQuery .row2_tl {
  height: 0.45rem;
  width: 4.58rem;
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(17, 26, 52, 1);
  line-height: 0.45rem;
  display: inline-block;
  vertical-align: top;
}
.ResultsQuery .row2_tr {
  height: 0.37rem;

  font-size: 0.26rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(129, 216, 206, 1);
  line-height: 0.37rem;
  letter-spacing: 0.01rem;
  display: inline-block;
  vertical-align: top;
  margin-top: 0.06rem;
}
.ResultsQuery .row2_tr_1 {
  color: rgba(129, 216, 206, 1);
  display: inline-block;
}
.ResultsQuery .row2_tr_2 {
  color: rgba(255, 72, 0, 1);
  display: inline-block;
}
.ResultsQuery .perQ_p {
  display: inline-block;
  width: 10%;
  height: 0.88rem;
  display: block;
  float: left;
}
.ResultsQuery .perQ {
  width: 0.44rem;
  height: 0.44rem;
  border: 0.02rem solid rgba(129, 216, 206, 1);
  color: rgba(129, 216, 206, 1);
  font-size: 0.26rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  line-height: 0.26rem;
  letter-spacing: 0.01rem;
  display: inline-block;
  vertical-align: top;
  margin-top: 0.4rem;

  -webkit-border-radius: 0.5rem;
  -ms-border-radius: 0.5rem;
  -o-border-radius: 0.5rem;
  -moz-border-radius: 0.5rem;
  border-radius: 0.5rem;
  text-align: center;
}
.ResultsQuery .perQ2 {
  border: 0.02rem solid rgba(255, 72, 0, 1);
  color: rgba(255, 72, 0, 1);
}
.ResultsQuery .pQ_value {
  display: inline-block;
  vertical-align: sub;
}
.ResultsQuery .i_btn {
  height: 0.9rem;
  width: 3.6rem;
}
</style>

