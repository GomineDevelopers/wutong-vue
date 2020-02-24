<template>
  <div class="QuestionnaireInquiry">
    <vue-headful title="问卷调研"></vue-headful>
    <!-- <van-search
      right-icon="search"
      v-model="searchContent"
      placeholder="搜索"
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
    <template v-for="(item,index) in QuestionnaireInquiryArr ">
      <div @click="QuestionnaireClick(item.time,item.status)" class="PerRow" :key="index + 'qi' ">
        <div class="FontSize0 score_p">
          <div class="inlineBlock verticalAlignTop examination_score">
            问卷分值：
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
        <div
          class="common_Stitle_font2 common_Stitle_font3 title_spaceRight inlineBlock"
        >{{item.name}}</div>
        <div class="text_info theme_color5 inlineBlock">
          <span class="participate participating" v-if="item.status == '点击参与'">{{item.status}}</span>
          <span class="participate participated" v-if="item.status == '已参与'">{{item.status}}</span>
          <span class="participate participated" v-if="item.status == '已结束'">{{item.status}}</span>
          <span class="participate participated" v-if="item.status == '未参与'">{{item.status}}</span>

          <van-icon size="0.28rem" name="arrow" />
        </div>
        <div class="Q_time">{{item.time}}</div>
      </div>
    </template>
    <!-- 弹出框 -->
    <van-popup v-model="popupShow">
      <div class="textAlignCenter_w100p">
        <div class="popup_bg">
          <div class="textAlignCenter_w100p">
            <div class="popup_warning">温馨提示</div>
          </div>
          <div :style="{height: '0.26rem'}"></div>
          <div class="popup_info">
            <div class="popup_info_c">当前问卷{{Q_Status}}！</div>
          </div>
          <div :style="{height: '0.33rem'}"></div>
          <div class="popup_btns">
            <div>
              <div class="popup_perBtn popup_perBtn2" @click="popupFunc('Look')">
                <div class="p_btn">查看</div>
              </div>
              <div
                v-show="pageType ==  'Quest'"
                class="popup_perBtn popup_perBtn2"
                @click="popupFunc('GoBack')"
              >
                <div class="p_btn">返回</div>
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
  name: "QuestionnaireInquiry",
  components: {},
  data() {
    return {
      searchContent: "",

      filtrateShow: false,
      filtrateActive: null, //筛选选中
      itemActive: null, //自选项选中

      pageType: "Quest",
      Q_Status: "已结束",
      popupShow: false,
      QuestionnaireInquiryArr: [
        {
          name: "2型糖尿病人服药依从性问卷",
          status: "点击参与",
          rate: 4.5,
          time: "距离结束还有12小时30分钟"
        },
        {
          name: "糖尿病人饮食管理问卷",
          status: "点击参与",
          rate: 3.5,
          time: "距离结束还有3天12小时30分钟"
        },
        {
          name: "安达唐知晓率问卷",
          status: "已参与",
          rate: 2.5,
          time: "已结束"
        },
        {
          name: "胰岛素使用问卷",
          status: "已参与",
          rate: 3.5,
          time: "已结束"
        },
        {
          name: "血糖监测问卷",
          status: "未参与",
          rate: 3.5,
          time: "已结束"
        }
      ]
    };
  },
  mounted() {
    let vm = this;
  },
  methods: {
    popupFunc(status) {
      this.popupShow = false;
      if (status == "Look") {
        this.router_to("/questionnaireinquiry_answer");
      }
    },
    QuestionnaireClick(time, status) {
      if (status == "点击参与" && time != "已结束") {
        console.log("跳转");
        this.router_to("/questionnaireinquiry_answer");
      } else if (status == "已参与") {
        this.Q_Status = "已参与";
        // this.popupShow = true;
        // this.router_to("/resultsquery");
        this.$toast.fail("已参与!");
      } else if (status == "未参与" && time == "已结束") {
        // this.Q_Status = "已结束";
        // this.popupShow = true;
        this.$toast.fail("已结束！");
      }
    },
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
/* ****** 筛选 */
.QuestionnaireInquiry .van-popup--top {
  background-color: #1d2439;
}
/* ****** 输入框 */
.QuestionnaireInquiry .van-search {
  padding: 0.1rem 0.32rem 0rem 0.16rem;
  background-color: rgba(0, 0, 0, 0) !important;
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
  color: #55eba2;
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
  border-radius: 0.44rem;
  /* background: rgba(255, 255, 255, 1); */
  /* border: 0.02rem solid #81d8ce; */
  background: #1d2439;
  border: 0.02rem solid rgba(0, 0, 0, 0);
}
.QuestionnaireInquiry .van-search__content {
  /* background: rgba(255, 255, 255, 1); */
  background: rgba(0, 0, 0, 0);
}

/* ******* icon */
.QuestionnaireInquiry .PerRow .van-icon {
  vertical-align: top;
  margin-top: 0.06rem;
}
/* ******* rate 评分 */
.QuestionnaireInquiry .van-rate {
  display: flex;
  margin-top: 0.03rem;
  margin-left: 0.1rem;
}
</style>
<style scoped>
.QuestionnaireInquiry {
}


/* ***** 筛选 新增 */
.QuestionnaireInquiry .filtrate_body .filtrate_nav {
  margin-bottom: 0.2rem;
}
.QuestionnaireInquiry span.active {
  color: #55eba2;
}
.QuestionnaireInquiry .filtrate_content .sort .main_font2 {
  margin: 0.4rem 0rem 0.56rem 0rem;
}
.QuestionnaireInquiry .filtrate_content .main_font2.item_active {
  color: #55eba2;
}

.QuestionnaireInquiry .active_tip {
  position: relative;
  overflow: hidden;
}
.QuestionnaireInquiry .filtrate_tips {
  height: 8.8rem;
  overflow-y: auto;
  padding-left: 0.32rem;
}

/* 列表开始 */
.QuestionnaireInquiry .metting_list_content {
  padding-left: 0.32rem;
}
.QuestionnaireInquiry .filtrate_nav {
  /* height: 0.8rem; */
  height: auto;
  margin-top: 0.2rem;
  font-size: 0.28rem;
  color: #41485d;
  font-weight: 500;
}
.QuestionnaireInquiry .filtrate_nav span {
  margin-right: 1.2rem;
}

/* ***** */


.QuestionnaireInquiry .score_p {
  margin-bottom: 0.08rem;
}
.QuestionnaireInquiry .examination_score {
  font-size: 0.28rem;
  color: #ffffff;
}
.QuestionnaireInquiry .score_c {
  font-size: 0.24rem;
  color: #55eba2;
}
.QuestionnaireInquiry .PerRow {
  height: 1.32rem;
  /* width: 100%; */
  /* border-top: 1px #f6f6f6 solid; */
  border-top: 1px #4a5677 solid;
  /* padding: 0.46rem 0.32rem 0.21rem 0.32rem; */
  padding: 0.46rem 0rem 0.21rem 0.32rem;
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
  /* color: rgba(129, 216, 206, 1); */
  color: #55eba2;
}
.QuestionnaireInquiry .participated {
  color: rgba(197, 202, 213, 1);
}

.QuestionnaireInquiry .text_info {
  display: inline-block;
  text-align: right;
  height: 0.32rem;
  width: 2.6rem;
  vertical-align: top;
}
.QuestionnaireInquiry .Q_time {
  height: 0.28rem;
  font-size: 0.2rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  /* color: rgba(197, 202, 213, 1); */
  color: #c5cad5;
  line-height: 0.28rem;
  letter-spacing: 0.01rem;
  vertical-align: top;
  display: inline-block;
  width: 100%;
  margin-top: -0.7rem;
}

.QuestionnaireInquiry .popup_bg {
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
.QuestionnaireInquiry .popup_warning {
  height: 0.5rem;
  font-size: 0.36rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(17, 26, 52, 1);
  line-height: 0.5rem;
  letter-spacing: 0.01rem;
  margin-top: 0.33rem;
}
.QuestionnaireInquiry .popup_info {
  height: 0.76rem;
  font-size: 0.28rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(65, 72, 93, 1);
  line-height: 0.38rem;
  margin: 0 0.32rem;
}
.QuestionnaireInquiry .popup_info_c {
  display: inline-block;
}
.QuestionnaireInquiry .popup_btns {
  /* height: 0.45rem; */
  /* padding:  0.28rem 0 0.26rem 0; */
  border-top: 0.01rem solid rgba(221, 221, 221, 1);
  border-bottom: 0.01rem solid rgba(221, 221, 221, 1);
  height: 0.99rem;
}
.QuestionnaireInquiry .popup_perBtn {
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
.QuestionnaireInquiry .popup_perBtn2 {
  color: #81d8ce;
  border-left: 1px solid rgba(221, 221, 221, 1);
}
.QuestionnaireInquiry .p_btn {
  margin-top: 0.28rem;
  margin-bottom: 0.26rem;
}
</style>

