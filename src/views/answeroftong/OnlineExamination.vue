<template>
  <div class="OnlineExamination">
    <vue-headful title="答题通-在线考试"></vue-headful>
    <van-search
      right-icon="search"
      v-model="searchContent"
      placeholder="请输入"
      shape="round"
      @search="onSearch"
      background="#ffffff"
    ></van-search>
    <div :style="{height: '0.24rem'}"></div>
    <template v-for="(item,index) in OnlineExaminationArr ">
      <div class="PerRow" :key="index + 'qi' ">
        <van-rate
          v-model="item.rate"
          allow-half
          void-icon="star"
          size="0.16rem"
          color="#81D8CE"
          void-color="#E2E4E8"
        />
        <div :style="{height: '0.16rem'}"></div>
        <div
          class="common_Stitle_font2 common_Stitle_font3 title_spaceRight inlineBlock"
        >{{item.name}}</div>
        <div class="text_info theme_color5 inlineBlock">
          <span class="participate participating" v-if="item.status == '点击参与'">{{item.status}}</span>
          <span
            class="participate participated"
            v-if="item.status == '已参与' || item.status == '已过期'"
          >{{item.status}}</span>
          <van-icon size="0.28rem" name="arrow" @click="router_to('/OnlineExamination_answer')" />
        </div>
        <div class="PerRow_Bottom">
          <div v-if="item.type == '限时考试' " class="PerRow_Bottom_t1 PB_Font">{{item.type}}</div>
          <div v-if="item.type == '开放考试' " class="PerRow_Bottom_t2 PB_Font">{{item.type}}</div>
          <div class="Q_time">{{item.time}}</div>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: "OnlineExamination",
  components: {},
  data() {
    return {
      searchContent: "",
      activeName: "a",
      OnlineExaminationArr: [
        {
          name: "XXX考试",
          rate: 2.5,
          type: "开放考试",
          time: "2019-12-02 ~ 2020-10-01",
          status: "点击参与"
        },
        {
          name: "XXX医药测试",
          rate: 3.5,
          type: "限时考试",
          time: "2019-12-02 ~ 2020-10-01",
          status: "点击参与"
        },
        {
          name: "XXX考试",
          rate: 2.5,
          type: "开放考试",
          time: "2019-12-02  ~ 2020-10-01 ",
          status: "点击参与"
        },
        {
          name: "XXX医药测试",
          rate: 4.5,
          type: "限时考试",
          time: "2019-12-02  ~ 2020-10-01 ",
          status: "点击参与"
        },
        {
          name: "XXX活动测试",
          rate: 2.5,
          type: "开放考试",
          time: "2019-12-02  ~ 2020-10-01 ",
          status: "已参与"
        },
        {
          name: "XXXXXX考试",
          rate: 3.5,
          type: "限时考试",
          time: "2019-12-02  ~ 2020-10-01 ",
          status: "已过期"
        }
      ]
    };
  },
  mounted() {
    let vm = this;
  },
  methods: {
    onSearch(event) {
      console.log(event);
    },
    router_to(str) {
      let vm = this;
      vm.$router.push({ path: str });
    },
    onClick(name, title) {
      console.log(name);
      console.log(title);
      if (name == "a") {
        document.getElementsByClassName("van-tabs__line")[0].style.marginLeft =
          "0.95rem";
      } else if (name == "b") {
        document.getElementsByClassName("van-tabs__line")[0].style.marginLeft =
          "-0.95rem";
      }
    }
  }
};
</script>
<style>
/* ****** 输入框 */
.OnlineExamination .van-search {
  padding: 0.1rem 0.32rem 0rem 0.16rem;
}
.OnlineExamination .van-cell .van-field__control {
  font-size: 0.28rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  height: 0.4rem;
}
.OnlineExamination .van-field__left-icon .van-icon,
.OnlineExamination .van-field__right-icon .van-icon {
  font-size: 0.5rem;
  color: #81d8ce;
  margin-top: 0.05rem;
}
.OnlineExamination .van-field__left-icon {
  display: none;
}
.OnlineExamination .van-cell__value--alone {
  padding-left: 0rem;
  height: 0.4rem;
}
.OnlineExamination .van-field__body {
  height: 0.4rem;
}
.OnlineExamination .van-search .van-cell {
  padding: 0.16rem 0.48rem;
  background: rgba(255, 255, 255, 1);
  border-radius: 0.44rem;
  border: 0.02rem solid #81d8ce;
}
.OnlineExamination .van-search__content {
  background: rgba(255, 255, 255, 1);
}

/* ******* icon */
.OnlineExamination .PerRow .van-icon {
  vertical-align: top;
  margin-top: 0.06rem;
}

/* ******* rate 评分 */
.OnlineExamination .van-rate {
  display: flex;
}
</style>
<style scoped>
.OnlineExamination {
}

.OnlineExamination .PerRow {
  height: 1.17rem;
  /* width: 100%; */
  border-top: 0.01rem #f6f6f6 solid;
  padding: 0.35rem 0.32rem 0.48rem 0.32rem;
}
.OnlineExamination .PerRow:last-child{
  border-bottom: 0.01rem #f6f6f6 solid;
}

.OnlineExamination .title_spaceRight {
  margin-right: 0rem;
}
.OnlineExamination .participate {
  width: 1.5rem;
  height: 0.4rem;
  font-size: 0.28rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  line-height: 0.4rem;
  letter-spacing: 0.01rem;
  vertical-align: top;
  margin-right: 0.24rem;
}
.OnlineExamination .participating {
  color: rgba(129, 216, 206, 1);
}
.OnlineExamination .participated {
  color: rgba(197, 202, 213, 1);
}

.OnlineExamination .text_info {
  display: inline-block;
  text-align: right;
  height: 0.32rem;
  width: 2.6rem;
  vertical-align: top;
}
.OnlineExamination .PerRow_Bottom {
}
.OnlineExamination .PerRow_Bottom_t1 {
  display: inline-block;
  vertical-align: top;
  background: rgba(92, 155, 240, 1);
}
.OnlineExamination .PerRow_Bottom_t2 {
  display: inline-block;
  vertical-align: top;
  background: rgba(255, 176, 58, 1);
}
.OnlineExamination .PB_Font {
  height: 0.28rem;
  font-size: 0.2rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 0.28rem;
  letter-spacing: 0.01rem;
  width: 1rem;
  height: 0.28rem;
  border-radius: 0.04rem;
  text-align: center;
  margin-top: -0.8rem;
}

.OnlineExamination .Q_time {
  display: inline-block;
  vertical-align: top;
  height: 0.28rem;
  font-size: 0.2rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(197, 202, 213, 1);
  line-height: 0.28rem;
  letter-spacing: 0.01rem;
  vertical-align: top;
  margin-top: -0.78rem;
  margin-left: 0.2rem;
}
</style>

