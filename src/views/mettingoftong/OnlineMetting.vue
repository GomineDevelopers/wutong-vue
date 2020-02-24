<template>
  <van-row class="OnlineMetting van_container">
    <vue-headful title="在线会议"></vue-headful>
    <van-row class="van_container_body height_auto">
      <!-- 筛选模块开始 -->
      <van-row class="filtrate_body">
        <van-popup v-model="filtrateShow" position="top">
          <van-row class="filtrate_nav padding_mudule flex">
            <span
              :class="filtrateActive == 1 ? 'active' : ''"
              class="flex flex_align_center"
              @click="filtrateActive = 1"
            >
              综合排序&nbsp;
              <van-icon name="arrow-down" />
            </span>
            <!-- <span
              :class="filtrateActive == 2 ? 'active' : ''"
              class="flex flex_align_center"
              @click="filtrateActive = 2"
            >
              全部筛选&nbsp;
              <van-icon name="arrow-down" />
            </span>-->
          </van-row>
          <van-row class="filtrate_content">
            <van-row class="padding_mudule sort" v-show="filtrateActive == 1">
              <van-row
                class="main_font2"
                :class="itemActive == 1 ? 'item_active' : ''"
                @click="itemActive = 1"
              >时间最近</van-row>
              <!-- <van-row
                class="main_font2"
                :class="itemActive == 2 ? 'item_active' : ''"
                @click="itemActive = 2"
              >地点最近</van-row>-->
            </van-row>
            <van-row v-show="filtrateActive == 2">
              <van-row class="filtrate_tips">
                <van-row
                  class="filtrate_list"
                  v-for="(tipList, index3) in filtrateList"
                  :key="index3 + 'li'"
                >
                  <van-row class="main_font2">{{ tipList.title }}</van-row>
                  <van-row class="main_font4 flex flex_align_center">
                    <span
                      v-for="(tipItem, index4) in tipList.tips"
                      :key="index4 + 'it'"
                      :class="tipItem.id == tipList.checked ? 'active_tip' : ''"
                      @click="tipList.checked = tipItem.id"
                    >
                      {{ tipItem.value }}
                      <van-row class="check"></van-row>
                    </span>
                  </van-row>
                </van-row>
              </van-row>
              <van-row class="filtrate_bottom">
                <van-col span="12" @click="clearCheck">清空筛选</van-col>
                <van-col span="12" @click="submitCheck">确定</van-col>
              </van-row>
            </van-row>
          </van-row>
        </van-popup>
      </van-row>
      <!-- 筛选模块结束 -->
      <!-- 搜索模块开始 -->
      <van-row class="top_search">
        <van-search
          right-icon="search"
          v-model="searchContent"
          placeholder="请输入相关信息进行检索"
          shape="round"
          @search="onSearch"
          background="#ffffff"
        ></van-search>
      </van-row>
      <!-- 搜索模块结束 -->

      <!-- 主体内容开始 -->
      <van-row class="metting_body">
        <van-row class="header_nav flex">
          <span class="active">在线会议</span>
          <span @click="goVideo">视频资料库</span>
        </van-row>
        <van-row class="metting_content">
          <van-row class="swipe_body">
            <van-swipe class="swipe_content height_auto" :autoplay="3000" @change="onChange">
              <van-swipe-item v-for="(item, index) in swipeImgList" :key="index">
                <img @click="goUrl(item.url)" :src="item.img" />
              </van-swipe-item>
              <div class="custom-indicator" slot="indicator">{{ current + 1 }}/{{pic_length}}</div>
            </van-swipe>
          </van-row>
          <!-- 列表开始 -->
          <van-row class="metting_list_content">
            <van-row class="filtrate_nav flex">
              <span
                :class="filtrateActive == 1 ? 'active' : ''"
                class="flex flex_align_center"
                @click="(filtrateShow = true), (filtrateActive = 1)"
              >
                综合排序&nbsp;
                <van-icon name="arrow-down" />
              </span>
              <!-- <span
                :class="filtrateActive == 2 ? 'active' : ''"
                class="flex flex_align_center"
                @click="(filtrateShow = true), (filtrateActive = 2)"
              >
                全部筛选&nbsp;
                <van-icon name="arrow-down" />
              </span>-->
            </van-row>
            <van-row class="online_metting_list">
              <van-row
                class="online_metting_item flex flex_align_center"
                v-for="(mettingItem, index2) in mettingList"
                :key="index2 + 'me'"
                @click="goUrl(mettingItem.url)"
              >
                <!-- <van-row class="flex_1 flex flex_align_center">
                  <span class="main_font2">{{ mettingItem.name }}</span>
                  <span class="main_font4">{{ mettingItem.content }}</span>
                  <span class="main_font4">{{ mettingItem.status }}</span>
                  <span class="main_font4">{{ mettingItem.date }}</span>
                </van-row>
                <img class="arrow_icon" src="../../assets/pic/arrow_icon.png" />-->
                <van-row class="flex_1 flex flex_align_center">
                  <span class="main_font2">{{ mettingItem.name }}</span>
                  <span class="main_font4">{{ mettingItem.content }}</span>
                  <span class="main_font4">{{ mettingItem.status }}</span>
                  <span class="main_font4">{{ mettingItem.date }}</span>
                </van-row>
                <img class="arrow_icon" src="../../assets/pic/arrow_icon.png" />
              </van-row>
            </van-row>
          </van-row>
        </van-row>
      </van-row>
    </van-row>
  </van-row>
</template>
<script>
export default {
  name: "OnlineMetting",
  data() {
    return {
      filtrateShow: false,
      filtrateActive: null, //筛选选中
      itemActive: null, //自选项选中
      searchContent: "",
      current: 0,
      filtrateList: [
        {
          title: "主题",
          checked: null,
          tips: [
            { id: 1, value: "产品发布" },
            { id: 2, value: "新品分享" },
            { id: 3, value: "推广活动" },
            { id: 4, value: "新药测试" }
          ]
        },
        // {
        //   title: "地点",
        //   checked: null,
        //   tips: [
        //     { id: 1, value: "北京" },
        //     { id: 2, value: "上海" },
        //     { id: 3, value: "深圳" },
        //     { id: 4, value: "重庆" },
        //     { id: 5, value: "成都" }
        //   ]
        // },
        {
          title: "分类",
          checked: null,
          tips: [
            { id: 1, value: "肿瘤" },
            { id: 2, value: "风湿" }
          ]
        }
      ],
      swipeImgList: [
        {
          url: "http://medhuman.meetingchina.org/msite/main/cn",
          img: require("../../assets/pic/metting.jpg")
        },
        {
          url: "https://www.medmeeting.org/8699?lang=cn",
          img: require("../../assets/pic/metting2.jpg")
        },
        {
          url: "http://csp.cma.org.cn/NewsDetail.aspx?id=3783&Hidden=0",
          img: require("../../assets/pic/metting3.jpg")
        }
        // require("../../assets/pic/metting4.png")
      ],
      pic_length: 1,
      mettingList: [
        {
          id: 1,
          url: "https://attd.kenes.com/2019",
          name: "ATTD 2019",
          content: "第12届国际糖尿病现金技术与治疗会议",
          status: "已结束",
          date: "2019.02.20~23"
        },
        {
          id: 2,
          url: "https://www.endocrine.org",
          name: "ENDO 2019",
          content: "第101届美国内分泌学会年会",
          status: "已结束",
          date: "2019.03.23~26"
        },
        {
          id: 3,
          url: "https://am.aace.com/2019/AACE",
          name: "AACE",
          content: "第28届美国临床内分泌学家协会年会",
          status: "已结束",
          date: "2019.04.24~28"
        },
        {
          id: 4,
          url: "https://eco2019.org/",
          name: "ECO",
          content: "2019年第26届欧洲肥胖大会",
          status: "已结束",
          date: "2019.04.28~05.01"
        },
        {
          id: 5,
          url: "https://www.codhy.com/ap/2018/Default.aspx",
          name: "CODHy AP 2019",
          content: "第7届亚太地区糖尿病、肥胖与高血压争议与共识会议",
          status: "已结束",
          date: "2019.05.10~11"
        },
        {
          id: 6,
          url:
            "https://www.esmo.org/Conferences/ELCC-2019-European-Lung-Cancer-Congress",
          name: "ECE",
          content: "第21届欧洲内分泌学大会",
          status: "已结束",
          date: "2019.05.18~21"
        },
        {
          id: 7,
          url: "https://professional.diabetes.org/scientific-sessions",
          name: "ADA 2019",
          content: "第79届美国糖尿病协会科学年会",
          status: "已结束",
          date: "2019.06.07~11"
        },
        {
          id: 8,
          url: "https://www.easd.org/annual-meeting/easd-2019.html",
          name: "EASD",
          content: "第55届欧洲糖尿病研究协会年会",
          status: "已结束",
          date: "2019.09.16~20"
        },
        {
          id: 9,
          url: "https://www.idf.org/our-activities/congress.html",
          name: "IDF 2019",
          content: "2019年国际糖尿病联盟大会",
          status: "已结束",
          date: "2019.12.02~06"
        }
      ]
    };
  },
  mounted() {
    this.pic_length = this.swipeImgList.length;
  },
  methods: {
    goUrl(url) {
      // window.location.href = url;
      // 客户要求： 临时处理 - 跳一张图片！
      window.location.href = "https://baike.baidu.com/pic/%E4%B8%AD%E5%8D%8E%E5%8C%BB%E5%AD%A6%E4%BC%9A/2834115/0/63d0f703918fa0ec2bc45875259759ee3d6ddb42?fr=lemma&ct=single#aid=0&pic=63d0f703918fa0ec2bc45875259759ee3d6ddb42";
    },
    // 清空筛选
    clearCheck() {
      this.filtrateList = [
        {
          title: "主题",
          checked: null,
          tips: [
            { id: 1, value: "产品发布" },
            { id: 2, value: "新品分享" },
            { id: 3, value: "推广活动" },
            { id: 4, value: "新药测试" }
          ]
        },
        // {
        //   title: "地点",
        //   checked: null,
        //   tips: [
        //     { id: 1, value: "北京" },
        //     { id: 2, value: "上海" },
        //     { id: 3, value: "深圳" },
        //     { id: 4, value: "重庆" },
        //     { id: 5, value: "成都" }
        //   ]
        // },
        {
          title: "分类",
          checked: null,
          tips: [
            { id: 1, value: "肿瘤" },
            { id: 2, value: "风湿" }
          ]
        }
      ];
    },
    // 确定
    submitCheck() {
      this.filtrateShow = false;
    },
    onSearch(event) {
      console.log(event);
    },
    onChange(index) {
      this.current = index;
    },
    goVideo() {
      this.$router.replace("/videolibrary");
    }
  }
};
</script>
<style >
.OnlineMetting .van-popup--top {
  background-color: #1d2439;
}
</style>
<style scoped>
.top_search {
  padding: 0.44rem 0.32rem 0.24rem 0.32rem;
}
.van_container_body {
  overflow-y: auto;
  margin-bottom: 0.3rem;
  position: relative;
}
.metting_body {
  height: calc(100% - 1.48rem);
  position: relative;
}
.filtrate_body .filtrate_nav {
  margin-bottom: 0.2rem;
}
span.active {
  color: #55eba2;
}
.filtrate_content .sort .main_font2 {
  margin: 0.4rem 0rem 0.56rem 0rem;
}
.filtrate_content .main_font2.item_active {
  color: #55eba2;
}
.filtrate_list .main_font2 {
  margin-bottom: 0.4rem;
}
.filtrate_list .main_font4 {
  margin-bottom: 0.32rem;
  flex-wrap: wrap;
}
.filtrate_list .main_font4 span {
  width: 1.52rem;
  height: 0.6rem;
  line-height: 0.64rem;
  text-align: center;
  border-radius: 0.1rem;
  border: 0.02rem solid #c5cad5;
  margin-bottom: 0.24rem;
  margin-right: 0.2rem;
}
.filtrate_list .main_font4 span.active_tip {
  color: #55eba2;
  border: 0.02rem solid #55eba2;
}
.active_tip {
  position: relative;
  overflow: hidden;
}
.filtrate_tips {
  height: 8.8rem;
  overflow-y: auto;
  padding-left: 0.32rem;
}
/* 使用伪类写右上角的勾 */
.filtrate_list .main_font4 span.active_tip .check {
  position: relative;
  display: inline-block;
  width: 0.4rem;
  height: 0.4rem;
  background: #55eba2;
  border-radius: 50%;
  position: absolute;
  top: -0.19rem;
  right: -0.19rem;
}
.filtrate_list .main_font4 span.active_tip .check::after {
  content: "";
  position: absolute;
  left: 0.06rem;
  top: 0.2rem;
  width: 42%;
  height: 22%;
  border: 0.01rem solid #fff;
  border-radius: 0.01rem;
  border-top: none;
  border-right: none;
  background: transparent;
  transform: rotate(-45deg);
}
.filtrate_bottom {
  font-size: 0.32rem;
  color: #858b9c;
  height: 0.98rem;
  line-height: 0.98rem;
  border-top: 0.01rem solid #dddddd;
}
.filtrate_bottom .van-col {
  text-align: center;
  letter-spacing: 0.1rem;
}
.filtrate_bottom .van-col:nth-child(1) {
  border-right: 0.01rem solid #dddddd;
}
.filtrate_bottom .van-col:nth-child(2) {
  color: #55eba2;
  font-weight: 500;
}

/* 头部切换导航 */
.header_nav {
  height: 0.88rem;
  line-height: 0.88rem;
  justify-content: center;
  border-bottom: 0.01rem solid #e3e3e3;
}
.header_nav span {
  font-size: 0.28rem;
  /* color: #111a34; */
  color: #858b9c;

  position: relative;
  display: block;
}
.header_nav span:nth-child(1) {
  margin-right: 1.62rem;
}
.header_nav span.active {
  color: #55eba2;
  font-weight: 500;
}
.header_nav span::after {
  content: "";
  position: absolute;
  bottom: 0rem;
  left: 0rem;
  right: 0rem;
  height: 0.04rem;
  background: transparent;
}
.header_nav span.active::after {
  background: #55eba2;
}
.metting_content {
  height: calc(100% - 0.88rem);
}

/* 轮播开始 */
.swipe_body {
  height: 3rem;
}
.swipe_content {
  position: relative;
}
.custom-indicator {
  font-size: 0.24rem;
  color: #fff;
  position: absolute;
  right: 0.4rem;
  bottom: 0.2rem;
  width: 0.77rem;
  height: 0.41rem;
  line-height: 0.41rem;
  text-align: center;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 0.28rem;
}
.swipe_body img {
  width: 100%;
}

/* 列表开始 */
.metting_list_content {
  padding-left: 0.32rem;
}
.filtrate_nav {
  height: 0.8rem;
  margin-top: 0.2rem;
  font-size: 0.28rem;
  color: #41485d;
  font-weight: 500;
}
.filtrate_nav span {
  margin-right: 1.2rem;
}
.online_metting_item {
  height: 1.2rem;
  padding-right: 0.2rem;
  border-bottom: 0.01rem solid #eee;
}
.online_metting_item span:nth-child(1) {
  width: 2.05rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.online_metting_item span:nth-child(2) {
  width: 1.16rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-left: 0.16rem;
  margin-right: 0.16rem;
}
.online_metting_item span:nth-child(4) {
  width: 1.73rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-left: 0.16rem;
}
</style>
