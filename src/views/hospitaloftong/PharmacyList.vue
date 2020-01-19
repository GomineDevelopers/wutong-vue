<template>
  <van-row class="van_container">
    <vue-headful title="地图"></vue-headful>
    <van-row class="van_container_body height_auto">
      <!-- 搜索 -->
      <van-row class="search_content flex flex_align_center">
        <van-icon name="location" />
        <van-field
          class="list_input flex flex_align_center"
          v-model="value"
          placeholder="请输入用户名"
        />
        <van-icon name="search" />
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
      active: "2",
      value: "东城区万花街722号"
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
<style>
.van_container_body .list_input {
  height: 100%;
}
.van_container_body .list_input .van-field__body {
  height: 100%;
}
.van_container_body .list_input .van-cell__value--alone {
  height: 100%;
}
.van_container_body .van-cell .van-field__control {
  color: #111a34;
  height: 100%;
}
.van_container_body .list_input.van-cell:not(:last-child)::after {
  border-bottom: 1px solid #fff;
}
</style>
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
  height: 0.88rem;
  padding: 0rem 0.15rem;
}
.search_content .van-icon-location {
  font-size: 0.4rem;
  color: #000000;
  margin-right: 0.05rem;
}
.search_content .van-icon-search {
  font-size: 0.4rem;
  color: #666f83;
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
