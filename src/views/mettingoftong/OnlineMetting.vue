<template>
  <van-row class="van_container">
    <vue-headful title="知会通"></vue-headful>
    <van-row class="van_container_body height_auto">
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

      <!-- 主体内容开始 -->
      <van-row class="metting_body">
        <van-row class="header_nav flex">
          <span
            :class="activeIndex ? 'active' : ''"
            @click="activeIndex = true"
          >
            在线会议
          </span>
          <span
            :class="activeIndex ? '' : 'active'"
            @click="activeIndex = false"
          >
            视频库
          </span>
        </van-row>
      </van-row>
    </van-row>
  </van-row>
</template>
<script>
export default {
  name: "OnlineMetting",
  components: {},
  data() {
    return {
      searchContent: "",
      activeIndex: true
    };
  },
  mounted() {},
  methods: {
    onSearch(event) {
      console.log(event);
    }
  }
};
</script>
<style scoped>
.top_search {
  padding: 0.44rem 0.32rem 0.24rem 0.32rem;
}
.van_container_body {
  overflow: hidden;
}
.metting_body {
  height: calc(100% - 1.48rem);
  position: relative;
}

/* 头部切换导航 */
.header_nav {
  height: 0.88rem;
  line-height: 0.88rem;
  justify-content: center;
  border-bottom: 0.01rem solid #e3e3e3;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
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
  bottom: -0.01rem;
  left: 0rem;
  right: 0rem;
  height: 0.04rem;
  background: transparent;
}
.header_nav span.active::after {
  background: #81d8ce;
}
</style>
