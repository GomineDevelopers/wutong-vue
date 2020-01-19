<template>
  <van-row class="van_container">
    <vue-headful title="疾病助手"></vue-headful>
    <van-row class="van_container_body height_auto">
      <!-- 搜索 -->
      <van-row class="top_search">
        <van-search
          right-icon="search"
          v-model="searchContent"
          placeholder="请输入"
          shape="round"
          @search="onSearch"
          background="#ffffff"
        ></van-search>
      </van-row>
      <!-- 主体内容 -->
      <van-row class="sickness_content flex">
        <van-row class="left_sidebar">
          <van-sidebar v-model="activeKey" @change="onChange">
            <van-sidebar-item title="儿科" />
            <van-sidebar-item title="妇产科" />
            <van-sidebar-item title="内分泌科" />
            <van-sidebar-item title="消化内科" />
            <van-sidebar-item title="神经内科" />
          </van-sidebar>
        </van-row>
        <van-row class="right_content flex_1">
          <van-row
            class="sickness_list flex flex_align_center flex_justify_between"
            v-for="(item, index) in sicknessList"
            :key="index"
          >
            <van-row class="flex flex_direction">
              <span class="main_font2">{{ item.name }}</span>
              <span class="main_font3">{{ item.content }}</span>
            </van-row>
            <img class="arrow_icon" src="../../assets/pic/arrow_icon.png" />
          </van-row>
        </van-row>
      </van-row>
    </van-row>
  </van-row>
</template>
<script>
export default {
  name: "SicknessHelper",
  data() {
    return {
      searchContent: "",
      activeKey: "2",
      sicknessList: [
        {
          name: "糖尿病",
          content:
            "大多数病人都有典型的「三多一少大多数病人都有典型的「三多一少"
        },
        { name: "糖尿病", content: "大多数病人都有典型的「三多一少" },
        { name: "糖尿病", content: "大多数病人都有典型的「三多一少" },
        { name: "糖尿病", content: "大多数病人都有典型的「三多一少" },
        { name: "糖尿病", content: "大多数病人都有典型的「三多一少" },
        { name: "糖尿病", content: "大多数病人都有典型的「三多一少" },
        { name: "糖尿病", content: "大多数病人都有典型的「三多一少" },
        { name: "糖尿病", content: "大多数病人都有典型的「三多一少" },
        { name: "糖尿病", content: "大多数病人都有典型的「三多一少" },
        { name: "糖尿病", content: "大多数病人都有典型的「三多一少" },
        { name: "糖尿病", content: "大多数病人都有典型的「三多一少" }
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
    onChange() {}
  }
};
</script>
<style>
/* ****** 内容左侧导航 */
.left_sidebar .van-sidebar {
  height: 100%;
  width: 1.8rem;
  background: #f3f4f8;
}
.left_sidebar .van-sidebar-item {
  position: relative;
  font-size: 0.28rem;
  color: #3a4055;
  font-weight: 600;
}
.left_sidebar .van-sidebar-item__text {
  margin-left: 0.19rem;
}
.left_sidebar .van-sidebar-item::after {
  content: "";
  position: absolute;
  left: -0.01rem;
  top: 50%;
  transform: translateY(-50%);
  height: 0.34rem;
  border-left: 0.06rem solid transparent;
}
.left_sidebar .van-sidebar-item--select {
  color: #81d8ce;
  border-color: transparent;
}
.left_sidebar .van-sidebar-item--select::after {
  border-color: #81d8ce;
}
</style>
<style scoped>
.van_container_body {
  overflow: hidden;
}
.top_search {
  padding: 0.44rem 0.32rem;
  position: absolute;
  top: 0rem;
  left: 0rem;
  right: 0rem;
  z-index: 99;
}
.sickness_content {
  margin-top: 1.68rem;
  height: calc(100% - 1.68rem);
  overflow: hidden;
}
.left_sidebar {
  height: 100%;
}
.right_content {
  overflow-y: auto;
  padding: 0.31rem 0.32rem 0rem 0.32rem;
}
.sickness_list {
  margin-bottom: 0.62rem;
}
.sickness_list .flex {
  width: 4rem;
  overflow: hidden;
}
.right_content span:nth-child(1) {
  white-space: nowrap;
  margin-bottom: 0.2rem;
}
.right_content span:nth-child(2) {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
