<template>
  <div class="DetailsOfDisease">
    <!-- <vue-headful title="病例通-疾病助手-病例详情"></vue-headful> -->
    <div class="disease_intro">
      <div :style="{height: '0.40rem'}"></div>
      <div class="d_title">{{d_title}}</div>
      <div :style="{height: '0.40rem'}"></div>
      <div class="d_intro">
        <div v-for="(item,index) in d_intro" :key="index + 'd1' ">
          <div>{{item}}</div>
        </div>
      </div>
    </div>
    <div :style="{height: '0.40rem'}"></div>
    <div class="disease_tabs">
      <van-tabs v-model="activeName">
        <van-tab title="指南" name="a">
          <div :style="{height: '0.52rem'}"></div>
          <div v-for="(item,index) in Card1" :key="index + 'c1' ">
            <div class="card1">{{item.id}}</div>
          </div>
        </van-tab>
        <van-tab title="药品库" name="b">
          <div v-for="(item,index) in Card2" :key="index + 'c2' ">
            <div class="card2">
              <div class="c2_content_a">
                <img class="c2_img" :src="item.img" alt />
              </div>
              <div class="c2_content_b">
                <div class="c2b_btop">
                  <div class="t_font">{{item.name}}&nbsp;&nbsp;({{item.intro}})</div>
                </div>
                <div class="c2b_bottom">
                  <div class="b_font">适用证：{{item.intro2}}</div>
                </div>
              </div>
              <div class="c2_content_c">
                <van-icon
                  size="0.4rem"
                  name="arrow"
                  @click="router_to('/drugsfordetails',item.id)"
                />
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="典型病例" name="c">
          <div :style="{height: '0.52rem'}"></div>
          <div v-for="(item,index) in Card3" :key="index + 'c3' ">
            <div class="card3">{{item.id}}</div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailsOfDisease",
  components: {},
  data() {
    return {
      d_title: "糖尿病",
      d_intro: [
        "‧ 各种原因导致的体内糖调节和利用障碍。 ",
        "‧ 很常见。 ",
        "‧ 引发并发症可能危及生命。"
      ],
      activeName: "a",
      Card1: [
        {
          id: "1"
        },
        {
          id: "2"
        },
        {
          id: "3"
        },
        {
          id: "4"
        }
      ],
      Card2: [
        {
          id: "1",
          img: require("@/assets/pic/drug.jpg"),
          name: "金纳多",
          intro: "银杏叶提取物",
          intro2: "脑部、周围血液循环障碍"
        },
        {
          id: "2",
          img: require("@/assets/pic/drug.jpg"),
          name: "金纳多",
          intro: "银杏叶提取物",
          intro2: "脑部、周围血液循环障碍"
        },
        {
          id: "3",
          img: require("@/assets/pic/drug.jpg"),
          name: "金纳多",
          intro: "银杏叶提取物",
          intro2: "脑部、周围血液循环障碍"
        },
        {
          id: "4",
          img: require("@/assets/pic/drug.jpg"),
          name: "金纳多",
          intro: "银杏叶提取物",
          intro2: "脑部、周围血液循环障碍"
        },
        {
          id: "5",
          img: require("@/assets/pic/drug.jpg"),
          name: "金纳多",
          intro: "银杏叶提取物",
          intro2: "脑部、周围血液循环障碍"
        }
      ],
      Card3: [
        {
          id: "1"
        },
        {
          id: "2"
        }
      ]
    };
  },
  mounted() {
    let vm = this;
  },
  methods: {
    router_to(str, p_id) {
      let vm = this;
      // 待添加query 对应 pid
      vm.$router.push({ path: str });
    }
  }
};
</script>
<style>
/* ******** 标签 */
.DetailsOfDisease .van-tabs--line .van-tabs__wrap {
  height: 0.88rem;
}
.DetailsOfDisease .van-tab {
  color: #111a34;
}
.DetailsOfDisease .van-tab__text {
  font-size: 0.28rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
}
.DetailsOfDisease .van-tab--active {
  color: rgba(129, 216, 206, 1);
}
.DetailsOfDisease .van-tabs__line {
  background-color: rgba(129, 216, 206, 1);
  width: 14% !important;
}

/* ******** 弹出层 */
.DetailsOfDisease .van-popup {
  background-color: rgba(0, 0, 0, 0);
}

/* ******** 图标 */
.DetailsOfDisease .c2_content_c .van-icon {
  font-size: 0.5rem;
  margin-top: 0.34rem;
  margin-left: 0.52rem;
  vertical-align: top;
  color: #efeff4;
}
</style>
<style scoped>
.DetailsOfDisease {
  padding: 0 0.4rem;
}

.DetailsOfDisease .d_title {
  height: 0.56rem;
  height: 0.56rem;
  font-size: 0.4rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: rgba(58, 64, 85, 1);
  line-height: 0.56rem;
  letter-spacing: 2px;
}
.DetailsOfDisease .d_intro {
  height: 1.2rem;
  height: 1.2rem;
  font-size: 0.26rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(102, 111, 131, 1);
  line-height: 0.4rem;
  letter-spacing: 1px;
}
.DetailsOfDisease .card2 {
  height: 1.01rem;
  width: 6.86rem;
  padding: 0.4rem 0.32rem;
  background: rgba(255, 255, 255, 1);
  border-bottom: 1px #f7f7f7 solid;
}
.DetailsOfDisease .c2_content_a {
  width: 1.26rem;
  display: inline-block;
  height: 100%;
  vertical-align: top;
}
.DetailsOfDisease .c2_content_b {
  width: 4.22rem;
  display: inline-block;
  height: 100%;
  vertical-align: top;
}
.DetailsOfDisease .c2_content_c {
  display: inline-block;
  height: 100%;
  vertical-align: top;
}
.DetailsOfDisease .c2_img {
  width: 1.02rem;
  height: 1.02rem;
}
.DetailsOfDisease .c2b_btop {
  height: 50%;
  vertical-align: top;
  margin-top: 0.15rem;
}
.DetailsOfDisease .c2b_bottom {
  height: 50%;
  vertical-align: top;
  margin-top: 0.05rem;
}
.DetailsOfDisease .t_font {
  height: 0.32rem;
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(17, 26, 52, 1);
  line-height: 0.32rem;
}
.DetailsOfDisease .b_font {
  height: 0.28rem;
  font-size: 0.28rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(133, 139, 156, 1);
  line-height: 0.28rem;
}
</style>

