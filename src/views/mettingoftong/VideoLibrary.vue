<template>
  <van-row class="height_auto">
    <vue-headful title="视频库"></vue-headful>
    <van-row class="van_container_body height_auto">
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
          <span @click="goMetting">在线会议</span>
          <span class="active">视频库</span>
        </van-row>
        <van-row class="metting_content">
          <van-row class="swipe_body">
            <van-swipe
              class="swipe_content height_auto"
              :autoplay="3000"
              indicator-color="#81D8D0"
              @change="onChange"
            >
              <van-swipe-item
                v-for="(item, index) in swipeImgList"
                :key="index"
              >
                <img :src="item" />
              </van-swipe-item>
            </van-swipe>
          </van-row>
          <!-- 列表开始 -->
          <van-row class="metting_list_content padding_mudule">
            <van-row class="main_font2">精品视频</van-row>
            <van-row
              class="online_metting_list flex"
              v-for="(videoItem, index) in videoList"
              :key="index + 'vi'"
            >
              <img class="video_left_img" :src="videoItem.img" />
              <van-row>
                <van-row class="main_font2">{{ videoItem.title }}</van-row>
                <van-row class="video_info flex flex_align_center">
                  <img class="video_avatar" :src="videoItem.avatar" />
                  <van-row>
                    <van-row class="main_font5">
                      {{ videoItem.hospital }}
                    </van-row>
                    <van-row class="flex">
                      <span class="main_font4">{{ videoItem.name }}</span>
                      <span class="main_font6">{{ videoItem.duty }}</span>
                    </van-row>
                  </van-row>
                </van-row>
                <van-row class="section_name">{{ videoItem.section }}</van-row>
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
  name: "VideoLibrary",
  components: {},
  data() {
    return {
      searchContent: "",
      current: 0,
      swipeImgList: [
        require("../../assets/pic/metting2.jpg"),
        require("../../assets/pic/metting3.jpeg"),
        require("../../assets/pic/metting.jpg"),
        require("../../assets/pic/metting4.jpeg")
      ],
      videoList: [
        {
          img: require("../../assets/pic/video_img.jpeg"),
          title: "强直性脊柱炎（I级）的诊断",
          avatar: require("../../assets/pic/avatar1.png"),
          hospital: "北京人民医院",
          name: "张豆豆",
          duty: "副主任医生",
          section: "骨科"
        },
        {
          img: require("../../assets/pic/video_img.jpeg"),
          title: "强直性脊柱炎（I级）的诊断",
          avatar: require("../../assets/pic/avatar3.png"),
          hospital: "北京人民医院",
          name: "张豆豆",
          duty: "副主任医生",
          section: "骨科"
        },
        {
          img: require("../../assets/pic/video_img.jpeg"),
          title: "强直性脊柱炎（I级）的诊断",
          avatar: require("../../assets/pic/avatar2.png"),
          hospital: "北京人民医院",
          name: "张豆豆",
          duty: "副主任医生",
          section: "骨科"
        },
        {
          img: require("../../assets/pic/video_img.jpeg"),
          title: "强直性脊柱炎（I级）的诊断",
          avatar: require("../../assets/pic/avatar2.png"),
          hospital: "北京人民医院",
          name: "张豆豆",
          duty: "副主任医生",
          section: "骨科"
        }
      ]
    };
  },
  mounted() {},
  methods: {
    onSearch(event) {
      console.log(event);
    },
    onChange(index) {
      this.current = index;
    },
    goMetting() {
      this.$router.replace("/onlinemetting");
    }
  }
};
</script>
<style>
.swipe_body .van-swipe__track {
  height: 3rem;
  overflow: hidden;
}
.swipe_body .van-swipe__indicators {
  bottom: 0;
}
.swipe_body .van-swipe__indicator {
  width: 0.12rem;
  height: 0.11rem;
  background: rgba(0, 0, 0, 1);
  border-radius: 0.08rem;
  opacity: 0.2;
}
.swipe_body .van-swipe__indicator--active {
  width: 0.38rem;
  background: #81d8d0;
  opacity: 1;
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
/* 头部切换导航 */
.header_nav {
  height: 0.88rem;
  line-height: 0.88rem;
  justify-content: center;
  border-bottom: 0.01rem solid #e3e3e3;
}
.header_nav span {
  font-size: 0.28rem;
  color: #111a34;
  position: relative;
  display: block;
}
.header_nav span:nth-child(1) {
  margin-right: 1.62rem;
}
.header_nav span.active {
  color: #81d8ce;
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
  background: #81d8ce;
}
.metting_content {
  height: calc(100% - 0.88rem);
}
/* 轮播开始 */
.swipe_body {
  height: 3.3rem;
}
.swipe_body .van-swipe__track {
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
  margin-top: 0.51rem;
}
.online_metting_list {
  margin-top: 0.4rem;
}
.video_left_img {
  width: 2.5rem;
  height: 1.92rem;
  border-radius: 0.1rem;
  margin-right: 0.24rem;
}
.video_avatar {
  width: 0.68rem;
  height: 0.68rem;
}
.video_info {
  margin-top: 0.2rem;
  margin-bottom: 0.24rem;
  height: 0.68rem;
}
.video_info img {
  margin-right: 0.2rem;
}
.section_name {
  width: 0.72rem;
  height: 0.34rem;
  line-height: 0.34rem;
  text-align: center;
  font-size: 0.2rem;
  background: rgba(197, 202, 213, 1);
  border-radius: 0.06rem;
  color: #fff;
}
</style>
