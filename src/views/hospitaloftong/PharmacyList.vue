<template>
  <van-row class="van_container">
    <vue-headful title="地图"></vue-headful>
    <van-row class="van_container_body height_auto">
      <!-- 搜索 -->
      <van-row class="search_content">
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
          <span :class="active == 1 ? 'active' : ''" @click="goMap">地图</span>
          <span :class="active == 2 ? 'active' : ''">列表</span>
        </van-row>
        <van-row class="map_content">
          <van-row>列表</van-row>
        </van-row>
      </van-row>
    </van-row>
  </van-row>
</template>
<script>
export default {
  name: "PharmacyList",
  components: {},
  data() {
    return {
      searchContent: "",
      active: "2"
    };
  },
  mounted() {},
  methods: {
    onSearch(event) {
      console.log(event);
    },
    goMap() {
      this.$router.replace("/map");
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
  padding-top: 0.4rem;
}
.map_nav {
  width: 3.2rem;
  height: 0.58rem;
  line-height: 0.58rem;
  background: #fff;
  border-radius: 0.3rem;
  border: 0.02rem solid rgba(129, 216, 206, 1);
  margin: 0rem auto;
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
.map_content {
  height: calc(100% - 0.6rem);
}
</style>
