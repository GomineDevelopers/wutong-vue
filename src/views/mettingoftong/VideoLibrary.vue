<template>
  <van-row class="VideoLibrary height_auto">
    <vue-headful title="视频资料库"></vue-headful>
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
          <span class="active">视频资料库</span>
        </van-row>
        <van-row class="metting_content">
          <van-row class="swipe_body">
            <van-swipe class="swipe_content height_auto" :autoplay="3000" @change="onChange">
              <van-swipe-item v-for="(item, index) in swipeImgList" :key="index">
                <img @click="goVideo(0)" :src="item" />
              </van-swipe-item>
            </van-swipe>
          </van-row>
          <!-- 列表开始 -->
          <van-row class="metting_list_content padding_mudule">
            <van-row class="main_font2">中华医学会会议视频</van-row>
            <van-row
              class="online_metting_list flex"
              v-for="(videoItem, index) in videoList"
              :key="index + 'vi'"
              @click="goVideo(1,videoItem.url)"
            >
              <img class="video_left_img" :src="videoItem.img" />
              <van-row>
                <van-row class="main_font2 main_font3">{{ videoItem.title }}</van-row>
                <van-row class="video_info flex flex_align_center">
                  <img class="video_avatar" :src="videoItem.avatar" />
                  <van-row>
                    <van-row class="main_font5 hospital_font">{{ videoItem.hospital }}</van-row>
                    <van-row class="flex">
                      <span class="main_font4 marRight name_font">{{ videoItem.name }}</span>
                      <span class="main_font6 duty_font">{{ videoItem.duty }}</span>
                    </van-row>
                  </van-row>
                </van-row>
                <van-row
                  v-show="videoItem.section != ''"
                  class="section_name"
                >{{ videoItem.section }}</van-row>
              </van-row>
            </van-row>
          </van-row>
          <div :style="{height: '0.8rem'}"></div>
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
        require("../../assets/pic/video0.png")
        // require("../../assets/pic/metting.jpg"),
        // require("../../assets/pic/metting2.jpg"),
        // require("../../assets/pic/metting3.jpg"),
        // require("../../assets/pic/metting4.png")
      ],
      videoUrls: ["https://www.cma.org.cn/media/0/jiaweiping.mp4"],
      pic_length: 1,

      videoList: [
        {
          img: require("../../assets/videopic/v2.jpg"),
          title: "中华医学会第二十四次全国风湿病学学术会议",
          avatar: require("../../assets//videopic/a2.jpg"),
          hospital: "中华医学会",
          name: "李梦涛",
          duty: "分会常委兼秘书长",
          section: "风湿病",
          url: "https://v.qq.com/x/page/a0878q7z2kz.html"
        },
        {
          img: require("../../assets/videopic/v3.jpg"),
          title: "中华医学会第十二次全国生殖医学学术会议",
          avatar: require("../../assets/videopic/a3.jpg"),
          hospital: "中华医学会",
          name: "路易斯·布朗",
          duty: "第一例“试管婴儿”",
          section: "生殖",
          url: "https://v.qq.com/x/page/j0794ur5ihw.html"
        },
        {
          img: require("../../assets/videopic/v1.jpg"),
          title: "中华医学会-我的消化梦",
          avatar: require("../../assets/videopic/a1.png"),
          hospital: "中华医学会",
          name: "消化梦",
          duty: "",
          section: "消化",
          url: "https://www.bilibili.com/video/av58390315"
        }
        // {
        //   img: require("../../assets/pic/video_img.jpeg"),
        //   title: "强直性脊柱炎（I级）的诊断",
        //   avatar: require("../../assets/pic/avatar2.png"),
        //   hospital: "北京人民医院",
        //   name: "张豆豆",
        //   duty: "副主任医生",
        //   section: "骨科"
        // }
      ]
    };
  },
  mounted() {},
  methods: {
    onSearch(event) {
      console.log(event);
    },
    onChange(index) {
      console.log(index);
      this.current = index;
    },
    goMetting() {
      this.$router.replace("/onlinemetting");
    },
    goVideo(type, url) {
      if (type == 0) {
        window.location.href = this.videoUrls[0];
      } else if (type == 1) {
        window.location.href = url;
      }
    }
  }
};
</script>
<style>
.VideoLibrary .swipe_body .van-swipe__track {
  height: 3rem;
  overflow: hidden;
}
.VideoLibrary .swipe_body .van-swipe__indicators {
  bottom: 0;
}
.VideoLibrary .swipe_body .van-swipe__indicator {
  width: 0.12rem;
  height: 0.11rem;
  background: rgba(0, 0, 0, 1);
  border-radius: 0.08rem;
  opacity: 0.2;
}
.VideoLibrary .swipe_body .van-swipe__indicator--active {
  width: 0.38rem;
  background: #81d8d0;
  opacity: 1;
}
.VideoLibrary .swipe_body img {
  /* width: 7.5rem !important; */
}
.VideoLibrary .van-swipe__track {
  /* width: 100vw !important; */
  width: 7.5rem !important;
}
.VideoLibrary .van-swipe-item {
  width: 7.5rem !important;
}
</style>
<style scoped>
.VideoLibrary {
  width: 100vw;
}
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
  border-radius: 1rem;
}
.marRight {
  margin-right: 0.24rem;
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
.VideoLibrary .main_font3 {
  max-width: 4rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.VideoLibrary .hospital_font {
  margin-top: 0.1rem;
}
.VideoLibrary .name_font {
  max-width: 1rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.VideoLibrary .duty_font {
  max-width: 2rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
