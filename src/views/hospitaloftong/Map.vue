<template>
  <van-row class="van_container">
    <vue-headful title="地图"></vue-headful>
    <van-row class="van_container_body height_auto">
      <!-- 搜索 -->
      <van-row class="top_search search_content">
        <van-search
          right-icon="search"
          v-model="searchContent"
          placeholder="请输入"
          shape="round"
          @search="onSearch"
          background="#ffffff"
        ></van-search>
      </van-row>
      <van-row class="map_container">
        <van-row class="map_nav flex">
          <span :class="active == 1 ? 'active' : ''">地图</span>
          <span :class="active == 2 ? 'active' : ''" @click="goList">列表</span>
        </van-row>
        <van-row class="map_content height_auto">
          <van-row>地图</van-row>
        </van-row>
      </van-row>
    </van-row>
  </van-row>
</template>
<script>
export default {
  name: "Map",
  components: {},
  data() {
    return {
      searchContent: "",
      active: "1"
    };
  },
  mounted() {},
  methods: {
    onSearch(event) {
      console.log(event);
    },
    goList() {
      this.$router.replace("/pharmacylist");
    }
  }
};
</script>
<style scoped>
.van_container_body {
  position: relative;
  overflow: hidden;
}
.search_content {
  position: absolute;
  top: 0.05rem;
  left: 0.32rem;
  right: 0.32rem;
}
.map_container {
  height: calc(100% - 0.85rem);
  margin-top: 0.85rem;
  position: relative;
  background: #f0f0f0;
}
.map_nav {
  width: 3.2rem;
  height: 0.58rem;
  line-height: 0.58rem;
  background: #fff;
  border-radius: 0.3rem;
  border: 0.02rem solid rgba(129, 216, 206, 1);
  position: absolute;
  top: 0.43rem;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
}
.map_nav span {
  font-size: 0.28rem;
  width: 50%;
  text-align: center;
}
.map_nav span.active {
  color: #fff;
  background: #81d8ce;
}
</style>
