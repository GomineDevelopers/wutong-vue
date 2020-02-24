<template>
  <div class="OnlineExamination">
    <vue-headful title="答题通-在线考试"></vue-headful>
    <!-- <van-search
      right-icon="search"
      v-model="searchContent"
      placeholder="请输入相关信息进行检索"
      shape="round"
      @search="onSearch"
      background="#ffffff"
    ></van-search>-->
    <!-- 筛选模块开始 -->
    <van-row class="metting_list_content">
      <van-row class="filtrate_nav flex">
        <span
          :class="filtrateActive == 1 ? 'active' : ''"
          class="flex flex_align_center"
          @click="(filtrateShow = true), (filtrateActive = 1)"
        >
          分类筛选&nbsp;
          <van-icon name="arrow-down" />
        </span>
      </van-row>
    </van-row>

    <van-row class="filtrate_body">
      <van-popup v-model="filtrateShow" position="top">
        <van-row class="filtrate_nav padding_mudule flex">
          <span
            :class="filtrateActive == 1 ? 'active' : ''"
            class="flex flex_align_center"
            @click="filtrateActive = 1"
          >
            分类筛选&nbsp;
            <van-icon name="arrow-down" />
          </span>
        </van-row>
        <van-row class="filtrate_content">
          <van-row class="padding_mudule sort" v-show="filtrateActive == 1">
            <van-row
              class="main_font2"
              :class="itemActive == 1 ? 'item_active' : ''"
              @click="itemActive = 1"
            >糖尿病</van-row>
            <van-row
              class="main_font2"
              :class="itemActive == 2 ? 'item_active' : ''"
              @click="itemActive = 2"
            >合规</van-row>
            <van-row
              class="main_font2"
              :class="itemActive == 3 ? 'item_active' : ''"
              @click="itemActive = 3"
            >抗生素</van-row>
          </van-row>
        
        </van-row>
      </van-popup>
    </van-row>
    <!-- 筛选模块结束 -->

    <div :style="{height: '0.24rem'}"></div>
    <template v-for="(item,index) in OnlineExaminationArr ">
      <div @click="OT_click(item.type,item.status)" class="PerRow" :key="index + 'oe' ">
        <div class="FontSize0">
          <div class="inlineBlock verticalAlignTop examination_score">
            考试分值：
            <span class="score_c">{{item.rate}}</span>
          </div>
          <div class="inlineBlock verticalAlignTop">
            <van-rate
              v-model="item.rate"
              allow-half
              void-icon="star"
              size="0.24rem"
              color="#55EBA2"
              void-color="#E2E4E8"
            />
          </div>
        </div>

        <div :style="{height: '0.16rem'}"></div>
        <div
          class="common_Stitle_font2 common_Stitle_font3 title_spaceRight inlineBlock"
        >{{item.name}}</div>
        <div class="text_info theme_color5 inlineBlock">
          <span
            v-if="item.type == '限时考试' && item.status == '点击参与'"
            class="participate participating"
          >{{item.status}}</span>
          <span
            v-if="item.type == '开放考试'  && item.status == '点击参与'"
            class="participate participating"
          >{{item.status}}</span>
          <span
            class="participate participated"
            v-if="item.status == '已参与' || item.status == '已过期'"
          >{{item.status}}</span>
          <van-icon size="0.28rem" name="arrow" />
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

      filtrateShow: false,
      filtrateActive: null, //筛选选中
      itemActive: null, //自选项选中
    

      activeName: "a",
      OnlineExaminationArr: [
        {
          name: "1型糖尿病基础知识考试",
          rate: 2.5,
          type: "开放考试",
          time: "2019-12-02 ~ 2020-10-01",
          status: "点击参与"
        },
        {
          name: "2型糖尿病基础知识考试",
          rate: 3.5,
          type: "限时考试",
          time: "2019-12-02 ~ 2020-10-01",
          status: "点击参与"
        },
        {
          name: "安达唐药物知识考试",
          rate: 2.5,
          type: "开放考试",
          time: "2019-12-02  ~ 2020-10-01 ",
          status: "点击参与"
        },
        {
          name: "安达唐病例分析考试",
          rate: 4.5,
          type: "限时考试",
          time: "2019-12-02  ~ 2020-10-01 ",
          status: "点击参与"
        },
        {
          name: "1型糖尿病基础知识考试",
          rate: 2.5,
          type: "开放考试",
          time: "2019-12-02  ~ 2020-10-01 ",
          status: "已参与"
        },
        {
          name: "安达唐药物知识考试",
          rate: 3.5,
          type: "限时考试",
          time: "2019-12-02  ~ 2020-10-01 ",
          status: "已参与"
        }
      ]
    };
  },
  mounted() {
    let vm = this;
  },
  methods: {

    OT_click(type, status) {
      if (type == "限时考试" && status == "点击参与") {
        this.router_toSpec("/timedexamination");
      }
      if (type == "开放考试" && status == "点击参与") {
        this.router_toSpec("/openexamination");
      }
      if (type == "开放考试" && status == "已参与") {
        this.router_to("/resultsquery");
      }
      if (type == "限时考试" && status == "已参与") {
        // this.$toast.fail("已参与");
        this.router_to("/resultsquery");
      }
      if (status == "已过期") {
        this.$toast.fail("已过期！");
      }
    },
    onSearch(event) {
      console.log(event);
    },
    router_to(str) {
      let vm = this;
      vm.$router.push({ path: str });
    },
    router_toSpec(str) {
      this.$Utils.setCookieCry("openType", "Answer", 1);
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
/* ****** 筛选 */
.OnlineExamination .van-popup--top {
  background-color: #1d2439;
}
/* ****** 输入框 */
.OnlineExamination .van-search {
  padding: 0.1rem 0.32rem 0rem 0.16rem;
  width: 7.16rem;
  background-color: rgba(0, 0, 0, 0) !important;
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
  color: #55eba2;
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
  border-radius: 0.44rem;
  /* background: rgba(255, 255, 255, 1); */
  /* border: 0.02rem solid #55EBA2; */
  background: #1d2439;
  border: 0.02rem solid rgba(0, 0, 0, 0);
}
.OnlineExamination .van-search__content {
  /* background: rgba(255, 255, 255, 1); */
  background: rgba(0, 0, 0, 0);
}

/* ******* icon */
.OnlineExamination .PerRow .van-icon {
  vertical-align: top;
  margin-top: 0.06rem;
}

/* ******* rate 评分 */
.OnlineExamination .van-rate {
  display: flex;
  margin-top: 0.03rem;
  margin-left: 0.1rem;
}
</style>
<style scoped>
.OnlineExamination {
}

/* ***** 筛选 新增 */
.OnlineExamination .filtrate_body .filtrate_nav {
  margin-bottom: 0.2rem;
}
.OnlineExamination span.active {
  color: #55eba2;
}
.OnlineExamination .filtrate_content .sort .main_font2 {
  margin: 0.4rem 0rem 0.56rem 0rem;
}
.OnlineExamination .filtrate_content .main_font2.item_active {
  color: #55eba2;
}

.OnlineExamination .active_tip {
  position: relative;
  overflow: hidden;
}
.OnlineExamination .filtrate_tips {
  height: 8.8rem;
  overflow-y: auto;
  padding-left: 0.32rem;
}

/* 列表开始 */
.OnlineExamination .metting_list_content {
  padding-left: 0.32rem;
}
.OnlineExamination .filtrate_nav {
  /* height: 0.8rem; */
  height: auto;
  margin-top: 0.2rem;
  font-size: 0.28rem;
  color: #41485d;
  font-weight: 500;
}
.OnlineExamination .filtrate_nav span {
  margin-right: 1.2rem;
}

/* ***** */

.OnlineExamination .examination_score {
  font-size: 0.28rem;
  color: #ffffff;
}
.OnlineExamination .score_c {
  font-size: 0.24rem;
  color: #55eba2;
}
.OnlineExamination .PerRow {
  height: 1.17rem;
  /* width: 100%; */
  width: 6.84rem;

  /* border-top: 0.01rem #f6f6f6 solid; */
  border-top: 1px #4a5677 solid;
  /* padding: 0.35rem 0.32rem 0.48rem 0.32rem;*/
  padding: 0.35rem 0 0.48rem 0.32rem;
}
.OnlineExamination .PerRow:last-child {
  /* border-bottom: 0.01rem #f6f6f6 solid; */
  border-bottom: 0.01rem #4a5677 solid;
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
  /* color: rgba(129, 216, 206, 1); */
  color: #55eba2;
}
.OnlineExamination .participated {
  color: rgba(197, 202, 213, 1);
}

.OnlineExamination .text_info {
  display: inline-block;
  text-align: right;
  height: 0.32rem;
  width: 2.5rem;
  vertical-align: top;
}
.OnlineExamination .PerRow_Bottom {
  margin-top: 0.1rem;
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

