<template>
  <div class="QuestionnaireInquiry">
    <vue-headful title="问卷调研"></vue-headful>
    <van-search
      right-icon="search"
      v-model="searchContent"
      placeholder="请输入"
      shape="round"
      @search="onSearch"
      background="#ffffff"
    ></van-search>
    <div :style="{height: '0.24rem'}"></div>
    <template v-for="(item,index) in QuestionnaireInquiryArr ">
      <div class="PerRow" :key="index + 'qi' ">
        <div
          class="common_Stitle_font2 common_Stitle_font3 title_spaceRight inlineBlock"
        >{{item.name}}</div>
        <div class="text_info theme_color5 inlineBlock">
          <span class="participate participating" v-if="item.status == '点击参与'">{{item.status}}</span>
          <span class="participate participated" v-if="item.status == '已参与'">{{item.status}}</span>
          <van-icon size="0.28rem" name="arrow" @click="router_to('/questionnaireinquiry_answer')" />
        </div>
        <div class="Q_time">{{item.time}}</div>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: "QuestionnaireInquiry",
  components: {},
  data() {
    return {
      searchContent: "",
      QuestionnaireInquiryArr: [
        {
          name: "关于XXX的问卷调研",
          status: "点击参与",
          time: "2019-12-02"
        },
        {
          name: "关于XXX的问卷调研",
          status: "点击参与",
          time: "2019-12-02"
        },
        {
          name: "关于XXX的问卷调研",
          status: "点击参与",
          time: "2019-12-02"
        },
        {
          name: "关于XXX的问卷调研",
          status: "点击参与",
          time: "2019-12-02"
        },
        {
          name: "关于XXX的问卷调研",
          status: "点击参与",
          time: "2019-12-02"
        },
        {
          name: "关于XXX的问卷调研",
          status: "点击参与",
          time: "2019-12-02"
        },
        {
          name: "关于XXX的问卷调研",
          status: "已参与",
          time: "2019-12-02"
        },
        {
          name: "关于XXX的问卷调研",
          status: "已参与",
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
    }
  }
};
</script>
<style>
/* ****** 输入框 */
.QuestionnaireInquiry .van-search {
  padding: 0.1rem 0.32rem 0rem 0.16rem;
}
.QuestionnaireInquiry .van-cell .van-field__control {
  font-size: 0.28rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  height: 0.4rem;
}
.QuestionnaireInquiry .van-field__left-icon .van-icon,
.QuestionnaireInquiry .van-field__right-icon .van-icon {
  font-size: 0.5rem;
  color: #81d8ce;
  margin-top: 0.05rem;
}
.QuestionnaireInquiry .van-field__left-icon {
  display: none;
}
.QuestionnaireInquiry .van-cell__value--alone {
  padding-left: 0rem;
  height: 0.4rem;
}
.QuestionnaireInquiry .van-field__body {
  height: 0.4rem;
}
.QuestionnaireInquiry .van-search .van-cell {
  padding: 0.16rem 0.48rem;
  background: rgba(255, 255, 255, 1);
  border-radius: 0.44rem;
  border: 0.02rem solid #81d8ce;
}
.QuestionnaireInquiry .van-search__content {
  background: rgba(255, 255, 255, 1);
}

/* ******* icon */
.QuestionnaireInquiry .PerRow .van-icon {
  vertical-align: top;
  margin-top: 0.06rem;
}
</style>
<style scoped>
.QuestionnaireInquiry {
}

.QuestionnaireInquiry .PerRow {
  height: 0.83rem;
  /* width: 100%; */
  border-top: 1px #f6f6f6 solid;
  padding: 0.46rem 0.32rem 0.21rem 0.32rem;
}

.QuestionnaireInquiry .title_spaceRight {
  margin-right: 0rem;
}
.QuestionnaireInquiry .participate {
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
.QuestionnaireInquiry .participating {
  color: rgba(129, 216, 206, 1);
}
.QuestionnaireInquiry .participated {
  color: rgba(197, 202, 213, 1);
}

.QuestionnaireInquiry .text_info {
  display: inline-block;
  text-align: right;
  height: 0.32rem;
  width: 2.2rem;
  vertical-align: top;
}
.QuestionnaireInquiry .Q_time {
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

