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
    <van-tabs v-model="activeName" @click="onClick">
      <van-tab class="tab_left" title="限时考试" name="a">
        <template v-for="(item,index) in OnlineExaminationArr ">
          <div class="PerRow" :key="index + 'qi' ">
            <div
              class="common_Stitle_font2 common_Stitle_font3 title_spaceRight inlineBlock"
            >{{item.name}}</div>
            <div class="text_info theme_color5 inlineBlock">
              <span class="participate participating" v-if="item.status == '立即参加'">{{item.status}}</span>
              <span
                class="participate participated"
                v-if="item.status == '已参加' || item.status == '已过期'"
              >{{item.status}}</span>
              <van-icon
                size="0.28rem"
                name="arrow"
                @click="router_to('/OnlineExamination_answer')"
              />
            </div>
            <div class="Q_time">{{item.time}}</div>
          </div>
        </template>
      </van-tab>
      <van-tab class="tab_right" title="开放考试" name="b">
        <template v-for="(item,index) in OnlineExaminationArr2 ">
          <div class="PerRow" :key="index + 'qi' ">
            <div
              class="common_Stitle_font2 common_Stitle_font3 title_spaceRight inlineBlock"
            >{{item.name}}</div>
            <div class="text_info theme_color5 inlineBlock">
              <span class="participate participating" v-if="item.status == '立即参加'">{{item.status}}</span>
              <span
                class="participate participated"
                v-if="item.status == '已参加' || item.status == '已过期'"
              >{{item.status}}</span>
              <van-icon
                size="0.28rem"
                name="arrow"
                @click="router_to('/OnlineExamination_answer')"
              />
            </div>
            <div class="Q_time">{{item.time}}</div>
          </div>
        </template>
      </van-tab>
    </van-tabs>
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
          status: "立即参加",
          time: "2019-12-02 00:00 ~ 2020-10-01 00:00"
        },
        {
          name: "XXX医药测试",
          status: "立即参加",
          time: "2019-12-02 00:00 ~ 2020-10-01 00:00"
        },

        {
          name: "XXX活动测试",
          status: "已参加",
          time: "2019-12-02 00:00 ~ 2020-10-01 00:00"
        },
        {
          name: "XXXXXX考试",
          status: "已过期",
          time: "2019-12-02 00:00 ~ 2020-10-01 00:00"
        }
      ],
      OnlineExaminationArr2: [
        {
          name: "XXX考试",
          status: "立即参加",
          time: "2019-12-02"
        },
        {
          name: "XXX医药测试",
          status: "立即参加",
          time: "2019-12-02"
        },

        {
          name: "XXX活动测试",
          status: "已参加",
          time: "2019-12-02"
        },
        {
          name: "XXXXXX考试",
          status: "已过期",
          time: "2019-12-02"
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

/* ******** 标签 */
.OnlineExamination .van-tabs--line .van-tabs__wrap {
  height: 0.88rem;
}
.OnlineExamination .van-tab {
  color: #111a34;
}
.OnlineExamination .van-tab__text {
  font-size: 0.28rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
}
.OnlineExamination .van-tab--active {
  color: rgba(129, 216, 206, 1);
}
.OnlineExamination .van-tabs__line {
  background-color: rgba(129, 216, 206, 1);
  width: 14% !important;
}

/* ***** 标签样式居中 */
.OnlineExamination .van-tab:nth-child(1) {
  padding-left: 2rem;
}
.OnlineExamination .van-tab:nth-child(2) {
  padding-right: 2rem;
}
.OnlineExamination .van-tabs__line {
  margin-left: 0.95rem;
}
</style>
<style scoped>
.OnlineExamination {
}

.OnlineExamination .PerRow {
  height: 0.83rem;
  /* width: 100%; */
  border-top: 1px #f6f6f6 solid;
  padding: 0.46rem 0.32rem 0.21rem 0.32rem;
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
.OnlineExamination .Q_time {
  height: 0.28rem;
  font-size: 0.2rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(197, 202, 213, 1);
  line-height: 0.28rem;
  letter-spacing: 0.01rem;
  vertical-align: top;
  display: inline-block;
  width: 100%;
  margin-top: -0.8rem;
}
</style>

