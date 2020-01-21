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
        <!-- <van-row class="map_nav flex">
          <span :class="active == 1 ? 'active' : ''">地图</span>
          <span :class="active == 2 ? 'active' : ''" @click="goList">列表</span>
        </van-row> -->
        <van-row class="map_assign flex">
          <div class="assign_bg">
            <div class="a_title">广联医药</div>
            <div class="a_tabs">
              <div class="a_tab a_tab1">24h营业</div>
              <div class="a_tab a_tab2">医保定点</div>
              <div class="a_tab a_tab3">合作药店</div>
            </div>
            <div class="a_address">地址：上海市徐汇区汾阳路83号</div>
          </div>
        </van-row>
        <van-row class="map_content height_auto">
          <van-row>
            <com-mymap class="mapSm"></com-mymap>
          </van-row>
        </van-row>
      </van-row>
    </van-row>
  </van-row>
</template>
<script>
import mymap from "@/views/components/mymap";

export default {
  name: "Map",
  components: {
    "com-mymap": mymap
  },
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
  z-index: 999;
  text-align: center;
}
.map_assign {
  width: 100%;
  bottom: 0.48rem;
  left: 0.32rem;
  z-index: 999;
  position: absolute;
}
.assign_bg {
  height: 1.2rem;
  width: 6.14rem;
  padding: 0.24rem 0.36rem;
  background: rgba(255, 255, 255, 1);
  border-radius: 0.2px;
  position: relative;
}
.a_title {
  height: 0.36rem;
  font-size: 0.32rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: rgb(65, 70, 90);
  line-height: 0.36rem;
}
.a_tabs {
  height: 0.6rem;
}
.a_tab {
  height: 0.24rem;
  font-size: 0.18rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  line-height: 0.24rem;
  display: inline-block;
  vertical-align: top;
  padding: 0.03rem 0.11rem;
  border-radius: 100px;
  border: 1px solid;
  margin: 0.11rem 0.14rem 0 0
}
.a_tab1 {
  color: rgba(247, 175, 39, 1);
}
.a_tab2 {
  color: rgba(38, 194, 225, 1);
}
.a_tab3 {
  color: rgba(60, 215, 190, 1);
}

.a_address {
  height: 0.28rem;
  font-size: 0.24rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(168, 174, 193, 1);
  line-height: 0.28rem;
  letter-spacing: 0.01rem;
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
